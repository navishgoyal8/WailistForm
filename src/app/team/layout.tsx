"use client";

import Link from 'next/link';
import React from 'react';

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-7 pb-16">
      {/* Navigation for the Team page */}
      <div className="mb-5">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors font-semibold text-sm">
            Home
          </Link>
      </div>
      {children}
    </div>
  );
}