'use client';

import { useState, useMemo } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ShoppingBag, SlidersHorizontal, 
  ArrowRight, Info, X 
} from "lucide-react";
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ProductDetailDialog } from '@/components/product-detail-dialog';

// --- MOCK DATA ---
const products = [
    {
        id: 1,
        name: "Organic Honey",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1719871766551-b9ecf87eee51?q=80&w=1080",
        category: "Pantry",
        description: "Pure, unfiltered organic honey sourced from local wildflowers.",
        farm: "Khalui Farm"
    },
    {
        id: 2,
        name: "Artisanal Ghee",
        price: 22.50,
        image: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1080",
        category: "Pantry",
        description: "Rich and nutty artisanal ghee, slow-cooked to perfection.",
    },
    {
        id: 3,
        name: "Free-Range Eggs",
        price: 8.00,
        image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=1080",
        category: "Fresh",
        description: "A dozen fresh eggs from our free-range chickens.",
        farm: "Khalui Farm"
    },
    {
        id: 4,
        name: "Neem Oil Extract",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1649560189304-341f81e4b1b2?q=80&w=1080",
        category: "Supplies",
        description: "Pure, cold-pressed Neem oil extract.",
        farm: "Khalui Farm"
    },
    {
        id: 5,
        name: "Heirloom Seeds",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1587486938113-d6d38d424efa?q=80&w=1080",
        category: "Supplies",
        description: "A packet of our favorite heirloom tomato seeds.",
        farm: "Khalui Farm"
    },
    {
        id: 6,
        name: "Fresh Basil",
        price: 3.00,
        image: "https://images.unsplash.com/photo-1737910288487-315951c35ef7?q=80&w=1080",
        category: "Fresh",
        description: "A fragrant bunch of freshly-picked basil.",
        farm: "Khalui Farm"
    },
    {
        id: 7,
        name: "Goat Cheese",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1523529738216-242467d60007?q=80&w=1080",
        category: "Pantry",
        description: "Creamy, tangy goat cheese made in small batches.",
    },
    {
        id: 9,
        name: "Goat Meat (1lb)",
        price: 14.00,
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1080",
        category: "Meats",
        description: "One pound of high-quality, pasture-raised goat meat.",
    }
];

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

export default function ShopClientPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
        const matchesCategory = category === 'All' || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart(product, 'Shop');
    toast({
        title: "Added to Cart",
        description: `${product.name}`,
    });
  };

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* --- 1. HERO --- */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-neutral-100">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080"
          alt="Market"
          fill
          sizes="100vw"
          className="z-0 object-cover opacity-80 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-white text-[11px] tracking-[0.4em] uppercase font-bold mb-4">
                  The Collection
                </p>
                <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  Farmstead Market
                </h1>
            </motion.div>
        </div>
      </section>
      
      {/* --- 2. CONTROLS --- */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Categories */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={cn(
                            "text-[10px] tracking-[0.2em] uppercase font-bold transition-colors whitespace-nowrap",
                            category === cat ? "text-black border-b border-black pb-1" : "text-neutral-400 hover:text-black"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input 
                    type="text" 
                    placeholder="SEARCH GOODS" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-b border-neutral-200 pl-8 py-2 text-[11px] tracking-[0.1em] focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                />
            </div>
        </div>
      </div>

      <main className="w-full py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Dev Alert */}
            <div className="mb-12 flex items-center gap-3 p-4 bg-neutral-50 border border-neutral-100 max-w-xl mx-auto text-center justify-center">
                <Info className="h-4 w-4 text-neutral-400" />
                <p className="text-[10px] tracking-[0.1em] uppercase text-neutral-500">
                    Shop currently in demonstration mode.
                </p>
            </div>

             {/* --- 3. PRODUCT GRID (Editorial) --- */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                <AnimatePresence>
                    {filteredProducts.map((product) => (
                        <motion.div 
                            key={product.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layout
                            className="group cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {product.farm && (
                                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 text-[8px] tracking-[0.2em] uppercase font-bold">
                                        {product.farm}
                                    </span>
                                )}
                                {/* Quick Add Button (appears on hover) */}
                                <button 
                                    onClick={(e) => handleAddToCart(e, product)}
                                    className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                                >
                                    <ShoppingBag className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="text-center space-y-2">
                                <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-400">
                                    {product.category}
                                </p>
                                <h3 className="text-lg font-serif group-hover:italic transition-all">
                                    {product.name}
                                </h3>
                                <p className="text-sm font-light text-black">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-32">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">No items found.</p>
                </div>
            )}
        </div>
      </main>

      {/* --- 4. DETAIL DIALOG WRAPPER --- */}
      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          open={!!selectedProduct}
          onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
