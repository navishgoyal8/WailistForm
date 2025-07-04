import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/resources/Icon'; 

const XLogo = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.8 20.34h2.83l-11.45-13.01H5.43l11.67 13.01z"/>
    </svg>
);
const LinkedInLogo = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
);

interface TestimonialCardProps {
    authorName: string;
    authorHandle: string;
    authorAvatarUrl: string;
    testimonialText: string;
    sourceUrl: string;
    sourceType: 'X' | 'LinkedIn';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    authorName,
    authorHandle,
    authorAvatarUrl,
    testimonialText,
    sourceUrl,
    sourceType,
}) => {
    return (
        // UPDATED: Added h-full and flex flex-col to make cards equal height
        <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg flex flex-col h-full transition-all duration-300 hover:border-slate-600 hover:bg-slate-800">
            <div className="flex items-center mb-4">
                <Image
                    src={authorAvatarUrl}
                    alt={authorName}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div className="ml-4">
                    <p className="font-bold text-white">{authorName}</p>
                    <p className="text-sm text-slate-400">{authorHandle}</p>
                </div>
                <div className="ml-auto text-slate-500">
                    {sourceType === 'X' && <XLogo />}
                    {sourceType === 'LinkedIn' && <LinkedInLogo />}
                </div>
            </div>
            {/* UPDATED: Added flex-grow to push the footer down */}
            <p className="text-slate-300 text-lg flex-grow leading-relaxed">
                “{testimonialText}”
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-right">
                <Link href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                    Read original
                </Link>
            </div>
        </div>
    );
};