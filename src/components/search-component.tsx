
'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { CommandMenu } from './command-menu';
import { cn } from '@/lib/utils';

export function SearchComponent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex items-center gap-2 text-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <Search className="h-5 w-5" />
        <span className="hidden md:inline">Search</span>
      </Button>
      <CommandMenu open={open} onOpenChange={setOpen} />
    </>
  );
}
