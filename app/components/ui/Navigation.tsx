import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Flexfolio
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </Link>
          <Link href="/builder" className="text-muted-foreground hover:text-foreground transition-colors">
            Builder
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
} 