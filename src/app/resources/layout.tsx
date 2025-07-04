"use client"; 

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/components/resources/Icon';

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHubPage = pathname === '/resources';

  return (
    // UPDATED: Padding is adjusted for better alignment
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-11 pb-16">
      {/* This navigation now sits neatly at the top of the content area */}
      <div className="mb-12">
        {isHubPage ? (
          <Link href="/" className="text-slate-300 hover:text-white transition-colors font-semibold text-sm">
            Home
          </Link>
        ) : (
          <Link href="/resources" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold text-sm">
            <Icon name="arrow-left" className="w-5 h-5" />
            <span>Back to All Resources</span>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}