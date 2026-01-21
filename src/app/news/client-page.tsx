
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, AlertTriangle, ArrowRight } from 'lucide-react';
import type { Story } from '@/app/news/stories-data';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { formatInTimeZone } from 'date-fns-tz';
import { motion } from "framer-motion";
import { CategoryFilter } from '@/components/category-filter';
import { LoadMoreButton } from '@/components/load-more-button';
import { cn } from '@/lib/utils';


function FormattedDate({ dateValue }: { dateValue: string | Date | Timestamp | null | undefined }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (!dateValue) {
      setFormattedDate('');
      return;
    }
    try {
      const date = dateValue instanceof Timestamp ? dateValue.toDate() : new Date(dateValue);
      setFormattedDate(formatInTimeZone(date, 'UTC', 'MMMM d, yyyy'));
    } catch (e) {
      console.error("Invalid date value for formatting:", dateValue);
      setFormattedDate('Invalid Date');
    }
  }, [dateValue]);

  return <>{formattedDate}</>;
}


const PAGE_SIZE = 9;

export default function NewsClientPage({ initialStories }: { initialStories: Story[] }) {
    const [stories, setStories] = useState<Story[]>(initialStories);
    const [activeCategory, setActiveCategory] = useState('All');
    const [displayedCount, setDisplayedCount] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(initialStories.length === 0);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const categories = useMemo(() => {
        const uniqueCategories = new Set(stories.map(p => p.category));
        return ["All", "Company News", "Real Estate", "Agriculture", "Healthcare", "AI & Technology", "Reports", "In The Media"].filter(cat => cat === "All" || uniqueCategories.has(cat));
    }, [stories]);

    useEffect(() => {
        if (initialStories.length > 0) {
            setLoading(false);
            return;
        };

        const fetchStories = async () => {
            setLoading(true);
            setError(null);
            try {
                const storiesCollection = collection(db, "stories");
                const q = query(storiesCollection, orderBy("date", "desc"));
                const querySnapshot = await getDocs(q);
                const storiesData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const date = data.date instanceof Timestamp ? data.date.toDate().toISOString() : data.date;
                    return {
                        id: doc.id,
                        slug: doc.id,
                        ...data,
                        date,
                    } as Story;
                });
                setStories(storiesData);
            } catch (err: any) {
                console.error("Client-side fetch error:", err);
                setError("An error occurred while loading news.");
            } finally {
                setLoading(false);
            }
        };
        
        fetchStories();
    }, [initialStories]);

    const filteredStories = useMemo(() => {
        const published = stories.filter(story => story.status !== 'Coming Soon');
        if (activeCategory === 'All') {
            return published;
        }
        return published.filter(story => story.category === activeCategory);
    }, [stories, activeCategory]);

    const isAllCategory = activeCategory === 'All';

    const featuredArticle = useMemo(() => {
        if (isAllCategory) {
            // Show a featured article only on the "All" tab
            return stories.find(a => a.isFeatured && a.status !== 'Coming Soon') || stories.find(s => s.status !== 'Coming Soon');
        }
        return undefined; // No featured article for specific categories
    }, [stories, isAllCategory]);

    const listArticles = useMemo(() => {
        // If a category is selected, show all articles for that category.
        // If "All" is selected, show all articles EXCEPT the featured one.
        const articlesToList = featuredArticle
            ? filteredStories.filter(a => a.id !== featuredArticle.id)
            : filteredStories;
        
        return articlesToList.slice(0, displayedCount);
    }, [filteredStories, displayedCount, featuredArticle]);

    const hasMore = useMemo(() => {
        const totalInList = filteredStories.length;
        const numberToList = featuredArticle ? totalInList - 1 : totalInList;
        return displayedCount < numberToList;
    }, [displayedCount, filteredStories.length, featuredArticle]);


    const handleLoadMore = () => {
        startTransition(() => {
            setDisplayedCount(prev => prev + PAGE_SIZE);
        });
    };

    useEffect(() => {
        setDisplayedCount(PAGE_SIZE);
    }, [activeCategory]);
    
    if (loading) {
        return <div className="flex h-screen items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>;
    }
    
    if (error) {
        return <div className="flex h-screen items-center justify-center text-destructive text-center p-4"><AlertTriangle className="w-8 h-8 mx-auto mb-2" />{error}</div>;
    }

    if (stories.length === 0) {
        return (
             <div className="flex h-screen items-center justify-center text-center p-4">
                 <div>
                    <h1 className="text-2xl font-bold">No Articles Found</h1>
                    <p className="text-muted-foreground mt-2">There are no news articles available at the moment.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {featuredArticle && (
                 <section className="w-full relative bg-neutral-50 border-b border-neutral-100">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 bg-black text-white text-[9px] tracking-[0.2em] uppercase font-bold">Featured</span>
                                <span className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase font-medium">
                                    {featuredArticle.category} — <FormattedDate dateValue={featuredArticle.date} />
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-neutral-900">
                                {featuredArticle.title}
                            </h1>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-xl">
                                {featuredArticle.description}
                            </p>
                            <Link href={`/news/${featuredArticle.slug}`} className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold border-b border-black pb-1 hover:opacity-60 transition-opacity">
                                Read Story
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                                style={{ objectPosition: featuredArticle.imagePosition || 'center' }}
                            />
                        </div>
                    </div>
                </section>
            )}

            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16">
                {listArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                        {listArticles.map((article) => (
                        <Link 
                            key={article.id} 
                            href={`/news/${article.slug}`} 
                            className="group block"
                        >
                            <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100 mb-6">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                data-ai-hint={article.aiHint}
                            />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                            <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-neutral-900">
                                {article.category}
                            </span>
                            <span className="h-[1px] w-3 bg-neutral-300" />
                            <span className="text-[9px] tracking-[0.1em] uppercase text-neutral-400">
                                <FormattedDate dateValue={article.date} />
                            </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-light leading-snug text-neutral-900 mb-3 group-hover:underline underline-offset-4 decoration-[1px] transition-all">
                            {article.title}
                            </h3>
                            <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-2">
                            {article.description}
                            </p>
                        </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
                            No articles found in {activeCategory}.
                        </p>
                    </div>
                )}
                
                {hasMore && (
                    <LoadMoreButton onClick={handleLoadMore} isLoading={isPending} />
                )}
            </div>
        </div>
    );
}
