
'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
} from '@/components/ui/command';
import { ArrowRight } from 'lucide-react'; // Only kept the arrow for interaction
import { DialogDescription } from '@/components/ui/dialog';
import { allSearchableLinks } from '@/lib/constants';

// Define valid types
type SearchItemType = 'Page' | 'Service' | 'Article' | 'Project' | 'Other';

interface SearchResult {
  title: string;
  url: string;
  type: SearchItemType;
  description: string;
}

export function CommandMenu({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  
  // Initialize Fuse.js
  const fuse = useMemo(() => new Fuse(allSearchableLinks, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'description', weight: 0.3 },
      { name: 'type', weight: 0.1 }
    ],
    threshold: 0.4,
    includeScore: true,
  }), []);

  // Compute results
  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map((result) => result.item as SearchResult);
  }, [query, fuse]);

  // Helper to handle navigation
  const runCommand = useCallback((url: string) => {
    onOpenChange(false);
    router.push(url);
  }, [onOpenChange, router]);

  // Group results
  const groupedResults = useMemo(() => {
    if (!query) return { "Quick Links": allSearchableLinks.slice(0, 5) };
    
    return results.reduce((groups, item) => {
      const group = item.type || 'Other';
      if (!groups[group]) groups[group] = [];
      groups[group].push(item);
      return groups;
    }, {} as Record<string, SearchResult[]>);
  }, [results, query]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <DialogDescription className="sr-only">
        Search the site.
      </DialogDescription>
      
      <CommandInput
        placeholder="Search..."
        value={query}
        onValueChange={setQuery}
        className="text-base"
      />
      
      <CommandList className="py-2">
        <CommandEmpty>No results found.</CommandEmpty>
        
        {Object.entries(groupedResults).map(([type, items], index) => (
          <div key={type}>
            {index > 0 && <CommandSeparator className="my-2" />}
            <CommandGroup heading={type} className="text-neutral-500">
              {items.map((item) => (
                <CommandItem
                  key={item.url}
                  value={item.title}
                  onSelect={() => runCommand(item.url)}
                  className="cursor-pointer aria-selected:bg-neutral-50 pl-4 py-3"
                >
                  <Link 
                      href={item.url} 
                      className="flex items-center w-full gap-4 group"
                      onClick={(e) => {
                          e.preventDefault();
                          runCommand(item.url);
                      }}
                  >
                      {/* Clean Text Layout without Icons */}
                      <div className="flex flex-col gap-0.5">
                          <span className="font-serif text-lg text-black group-hover:underline decoration-neutral-300 underline-offset-4 decoration-1 transition-all">
                              {item.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-light line-clamp-1">
                              {item.description}
                          </span>
                      </div>
                      
                      {/* Subtle Arrow appears on selection/hover */}
                      <ArrowRight className="ml-auto w-4 h-4 text-neutral-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
