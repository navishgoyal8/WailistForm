"use client";

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/resources/Icon';
import { Button } from '@/components/ui/button';

export default function ResourcesHubPage() {
    const hubItems = [
        { target: '/resources/accelerators', icon: 'zap', title: 'Accelerators & Grants', description: "Find top-tier accelerator programs and grant opportunities to fuel your startup's journey." },
        { target: '/resources/pitch-decks', icon: 'layout', title: 'Pitch Deck Templates', description: 'Craft the perfect pitch with our collection of proven templates from successful startups.' },
        { target: '/resources/legal-docs', icon: 'shield', title: 'Legal Document Templates', description: 'Essential legal templates for founders, from incorporation documents to advisor agreements.' },
        { target: '/resources/investor-db', icon: 'database', title: 'Investor Database', description: 'Access a curated list of active angel investors and VCs tailored to your industry and stage.' }
    ];

    return (
        <div>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Founder Resource Hub</h1>
                <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">An actionable collection of guides, tools, and platforms to help you build, fund, and scale your startup.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {hubItems.map(item => (
                    // This uses the .hub-card class from your globals.css which has rounded corners
                    <Link href={item.target} key={item.target} className="hub-card p-6 flex flex-col">
                        <div className="icon-wrapper w-12 h-12 rounded-lg mb-4">
                            <Icon name={item.icon} size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm flex-grow">{item.description}</p>
                    </Link>
                ))}
            </div>
            <div className="mt-16 text-center">
                {/* --- NEW TEXT ADDED HERE --- */}
                <p className="text-lg text-slate-300 mb-6 max-w-xl mx-auto">
                    Automate Your Fundraising Entirely With Us.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-lg text-lg transition-transform hover:scale-105">
                    <Link href="/#waitlist">
                        Join the Waitlist
                    </Link>
                </Button>
            </div>
        </div>
    );
};