// "use client";

// import React, { useState, useMemo } from 'react';
// import { resourcesData } from '@/lib/resourcesData';
// import Icon from '@/components/resources/Icon';

// export default function InvestorDbPage() {
//     const ITEMS_PER_PAGE = 9;
//     const [searchTerm, setSearchTerm] = useState('');
//     const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

//     const filteredData = useMemo(() => {
//         const lowercasedFilter = searchTerm.toLowerCase();
//         return resourcesData.investorDb.filter((item: any) =>
//             item.name.toLowerCase().includes(lowercasedFilter) ||
//             (item.description && item.description.toLowerCase().includes(lowercasedFilter)) ||
//             (item.location && item.location.toLowerCase().includes(lowercasedFilter)) ||
//             (item.industries && item.industries.some((ind: string) => ind.toLowerCase().includes(lowercasedFilter)))
//         );
//     }, [searchTerm]);

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(e.target.value);
//         setDisplayedCount(ITEMS_PER_PAGE);
//     };

//     const clearSearch = () => {
//         setSearchTerm('');
//     };

//     const itemsToShow = filteredData.slice(0, displayedCount);

//     return (
//         <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Investor Database</h1>
//             <div className="mb-10 p-4 rounded-lg bg-slate-800 border border-slate-700">
//                 <div className="relative w-full">
//                     <input type="text" placeholder="Search by name, industry, location..." value={searchTerm} onChange={handleSearchChange} className="w-full search-input pr-10" />
//                     {searchTerm && (
//                         <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
//                             <Icon name="x" className="w-5 h-5 text-slate-400 hover:text-white" />
//                         </button>
//                     )}
//                 </div>
//             </div>
//             {itemsToShow.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {itemsToShow.map((item: any) => (
//                         <div key={item.name} className="resource-card h-full flex flex-col">
//                             <div className="flex-grow">
//                                 <div className="mb-4">
//                                     <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                                     <p className="text-sm text-slate-400">{item.location}</p>
//                                 </div>
//                                 <p className="text-slate-300 mb-4 text-sm">{item.description}</p>
                                
//                                 <div className="space-y-3 text-xs border-t border-slate-700 pt-4">
//                                     <div>
//                                         <h4 className="font-bold text-slate-400 mb-1">Industries</h4>
//                                         <p className="text-slate-200">{item.industries?.join(', ') || 'N/A'}</p>
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-slate-400 mb-1">Investment Types</h4>
//                                         <p className="text-slate-200">{item.investment_types?.join(', ') || 'N/A'}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="text-center mt-6 pt-6 border-t border-slate-800">
//                                 <a href={item.website} target="_blank" rel="noopener noreferrer" className="action-button">Visit Site</a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="text-center py-16">
//                     <h3 className="mt-2 text-xl font-medium text-white">No investors found</h3>
//                 </div>
//             )}
//             {displayedCount < filteredData.length && (
//                 <div className="text-center mt-12">
//                     <button onClick={() => setDisplayedCount(prev => prev + ITEMS_PER_PAGE)} className="action-button">Load More</button>
//                 </div>
//             )}
//         </div>
//     );
// };


"use client";

import React, { useState, useMemo } from 'react';
import { resourcesData } from '@/lib/resourcesData';
import Icon from '@/components/resources/Icon';

export default function InvestorDbPage() {
    const ITEMS_PER_PAGE = 9;
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

    const filteredData = useMemo(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        return resourcesData.investorDb.filter((item: any) =>
            item.name.toLowerCase().includes(lowercasedFilter) ||
            (item.description && item.description.toLowerCase().includes(lowercasedFilter)) ||
            (item.location && item.location.toLowerCase().includes(lowercasedFilter)) ||
            (item.industries && item.industries.some((ind: string) => ind.toLowerCase().includes(lowercasedFilter)))
        );
    }, [searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setDisplayedCount(ITEMS_PER_PAGE);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const itemsToShow = filteredData.slice(0, displayedCount);

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Investor Database</h1>
            <div className="mb-10 p-4 rounded-lg bg-slate-800 border border-slate-700">
                <div className="relative w-full">
                    <input type="text" placeholder="Search by name, industry, location..." value={searchTerm} onChange={handleSearchChange} className="w-full search-input pr-10" />
                    {searchTerm && (
                        <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                            <Icon name="x" className="w-5 h-5 text-slate-400 hover:text-white" />
                        </button>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itemsToShow.map((item: any) => (
                    <div key={item.name} className="resource-card h-full flex flex-col">
                        <div className="flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                <p className="text-sm text-slate-400">{item.location}</p>
                            </div>
                            <p className="text-slate-300 mb-4 text-sm">{item.description}</p>
                            <div className="space-y-3 text-xs border-t border-slate-700 pt-4">
                                <div>
                                    <h4 className="font-bold text-slate-400 mb-1">Industries</h4>
                                    <p className="text-slate-200">{item.industries?.join(', ') || 'N/A'}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-400 mb-1">Investment Types</h4>
                                    <p className="text-slate-200">{item.investment_types?.join(', ') || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-6 pt-6 border-t border-slate-800">
                            <a href={item.website} target="_blank" rel="noopener noreferrer" className="action-button">Visit Site</a>
                        </div>
                    </div>
                ))}
            </div>
            {displayedCount < filteredData.length && (
                <div className="text-center mt-12">
                    <button onClick={() => setDisplayedCount(prev => prev + ITEMS_PER_PAGE)} className="action-button">Load More</button>
                </div>
            )}
        </div>
    );
};