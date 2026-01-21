
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Database, AlertCircle, CheckCircle } from 'lucide-react';
import { seedDatabase } from './actions';
import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import { storiesData } from '@/app/news/stories-data';
import type { Story } from '@/app/news/stories-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

function ArticlesPreviewTable({ stories }: { stories: Story[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Articles Preview</CardTitle>
                <CardDescription>
                    The following {stories.length} articles are currently in your local data file and will be added or updated in the database.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto max-h-[400px]">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stories.map(story => (
                                <TableRow key={story.id}>
                                    <TableCell className="font-medium">{story.title}</TableCell>
                                    <TableCell>{story.category}</TableCell>
                                    <TableCell>{story.date ? format(new Date(story.date), 'MM/dd/yyyy') : 'N/A'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}

export default function SeedDbPage() {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const router = useRouter();
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.push('/login?redirect=/seed-db');
    }
  }, [isAdmin, authLoading, router]);

  const handleSeed = async () => {
    setIsSeeding(true);
    setSeedResult(null);
    const result = await seedDatabase();
    setSeedResult(result);
    setIsSeeding(false);
  };
  
  const allStories = storiesData.map(story => ({
      ...story,
      id: story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      slug: story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  }));

  const sortedStories = [...allStories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  if (authLoading || !isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center bg-muted/50">
        <div className="flex items-center gap-3 text-lg">
          <Loader2 className="h-6 w-6 animate-spin" />
          <p>Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 min-h-screen py-16 md:py-24">
      <main className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                      <Database className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl">Database Seeder</CardTitle>
                  <CardDescription>Safely sync your local articles with the live Firestore database.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="font-bold">Safe Update</p>
                                <p className="text-sm">This action will only add or update articles from <strong>src/app/news/stories-data.ts</strong>. It will not delete any existing data from your database.</p>
                            </div>
                        </div>
                    </div>
                    
                    <Button onClick={handleSeed} disabled={isSeeding} className="w-full" size="lg">
                        {isSeeding ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Seeding...
                            </>
                        ) : "Seed Database"}
                    </Button>

                    {seedResult && (
                        <div className={`p-4 rounded-lg border ${seedResult.success ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                           <div className="flex items-start gap-3">
                                {seedResult.success ? <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5"/> : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5"/>}
                                <div>
                                    <p className="font-bold">{seedResult.success ? 'Success!' : 'Error'}</p>
                                    <p className="text-sm">{seedResult.message}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              </CardContent>
            </Card>
            
            <ArticlesPreviewTable stories={sortedStories as unknown as Story[]} />

            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/services/admin">Back to Admin Dashboard</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
