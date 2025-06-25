// "use client";

// import React, { useState, useMemo } from 'react';
// import { resourcesData } from '@/lib/resourcesData';
// import Icon from '@/components/resources/Icon';

// export default function AcceleratorsPage() {
//     const ITEMS_PER_PAGE = 9;
//     const [filters, setFilters] = useState({ search: '', type: 'all', status: 'all' });
//     const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

//     const filteredData = useMemo(() => {
//         const searchLower = filters.search.toLowerCase();
//         return resourcesData.accelerators.filter(item => {
//             const searchMatch = filters.search === '' ||
//                 item.name.toLowerCase().includes(searchLower) ||
//                 (item.targetNotes && item.targetNotes.toLowerCase().includes(searchLower));
//             const typeMatch = filters.type === 'all' || item.type === filters.type;
//             const statusMatch = filters.status === 'all' || !item.status || item.status === filters.status;
//             return searchMatch && typeMatch && statusMatch;
//         });
//     }, [filters]);

//     const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFilters(prev => ({ ...prev, [name]: value }));
//         setDisplayedCount(ITEMS_PER_PAGE);
//     };

//     const clearSearch = () => {
//         setFilters(prev => ({ ...prev, search: '' }));
//     };

//     const itemsToShow = filteredData.slice(0, displayedCount);

//     return (
//         <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Accelerators & Grants</h1>
//             <div className="mb-10 p-4 rounded-lg bg-slate-800 border border-slate-700 flex flex-col md:flex-row gap-4 items-center">
//                 <div className="relative w-full flex-grow">
//                     <input type="text" name="search" placeholder="Search by name or keyword..." value={filters.search} onChange={handleFilterChange} className="w-full search-input pr-10" />
//                     {filters.search && (
//                         <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
//                             <Icon name="x" className="w-5 h-5 text-slate-400 hover:text-white" />
//                         </button>
//                     )}
//                 </div>
//                 <div className="flex gap-4 w-full md:w-auto">
//                     <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full filter-select">
//                         <option value="all">All Types</option>
//                         <option value="accelerator">Accelerators</option>
//                         <option value="grant">Grants</option>
//                         <option value="residency">Residencies</option>
//                     </select>
//                     <select name="status" value={filters.status} onChange={handleFilterChange} className="w-full filter-select">
//                         <option value="all">All Statuses</option>
//                         <option value="open">Open</option>
//                         <option value="closed">Closed</option>
//                         <option value="rolling">Rolling</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {itemsToShow.map((item: any) => (
//                     <div key={item.id} className="resource-card h-full">
//                         <div className="flex flex-col flex-grow">
//                             <div className="flex items-start justify-between mb-2">
//                                 <h3 className="text-xl font-bold text-white pr-2">{item.name}</h3>
//                                 <span className={`status-tag status-${item.status || 'na'}`}>{item.status || 'N/A'}</span>
//                             </div>
//                             <div className="mb-4">
//                                 <span className={`type-tag type-${item.type}`}>{item.type}</span>
//                             </div>
//                             <div className="space-y-3 mb-6 text-sm border-t border-slate-700 pt-4">
//                                 <div className="flex justify-between"><span className="text-slate-400">Funding/Grant:</span> <span className="font-semibold text-white">{item.grantAmount}</span></div>
//                                 <div className="flex justify-between"><span className="text-slate-400">Monies To:</span> <span className="font-semibold text-white">{item.appliesTo}</span></div>
//                                 <div className="flex justify-between"><span className="text-slate-400">Institution:</span> <span className="font-semibold text-white">{item.institution}</span></div>
//                             </div>
//                             <div className="text-sm flex-grow">
//                                 <p className="text-slate-400 mb-1">Target Notes:</p>
//                                 <p className="font-semibold text-white">{item.targetNotes}</p>
//                             </div>
//                         </div>
//                         <div className="text-center mt-6 pt-6 border-t border-slate-800">
//                             <a href={item.link} target="_blank" rel="noopener noreferrer" className="action-button">Visit Site</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
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

export default function AcceleratorsPage() {
    const ITEMS_PER_PAGE = 9;
    const [filters, setFilters] = useState({ search: '', type: 'all', status: 'all' });
    const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

    const filteredData = useMemo(() => {
        const searchLower = filters.search.toLowerCase();
        return resourcesData.accelerators.filter(item => {
            const searchMatch = filters.search === '' ||
                item.name.toLowerCase().includes(searchLower) ||
                (item.targetNotes && item.targetNotes.toLowerCase().includes(searchLower));
            const typeMatch = filters.type === 'all' || item.type === filters.type;
            const statusMatch = filters.status === 'all' || !item.status || item.status === filters.status;
            return searchMatch && typeMatch && statusMatch;
        });
    }, [filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        setDisplayedCount(ITEMS_PER_PAGE);
    };

    const clearSearch = () => {
        setFilters(prev => ({ ...prev, search: '' }));
    };

    const itemsToShow = filteredData.slice(0, displayedCount);

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Accelerators & Grants</h1>
            <div className="mb-10 p-4 rounded-lg bg-slate-800 border border-slate-700 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full flex-grow">
                    <input type="text" name="search" placeholder="Search by name or keyword..." value={filters.search} onChange={handleFilterChange} className="w-full search-input pr-10" />
                    {filters.search && (
                        <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                            <Icon name="x" className="w-5 h-5 text-slate-400 hover:text-white" />
                        </button>
                    )}
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full filter-select">
                        <option value="all">All Types</option>
                        <option value="accelerator">Accelerators</option>
                        <option value="grant">Grants</option>
                        <option value="residency">Residencies</option>
                    </select>
                    <select name="status" value={filters.status} onChange={handleFilterChange} className="w-full filter-select">
                        <option value="all">All Statuses</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                        <option value="rolling">Rolling</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itemsToShow.map((item: any) => (
                    <div key={item.id} className="resource-card h-full flex flex-col">
                        <div className="flex-grow flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-bold text-white pr-2">{item.name}</h3>
                                <span className={`status-tag status-${item.status || 'na'}`}>{item.status || 'N/A'}</span>
                            </div>
                            <div className="mb-4">
                                <span className={`type-tag type-${item.type}`}>{item.type}</span>
                            </div>
                            <div className="space-y-3 mb-6 text-sm border-t border-slate-700 pt-4">
                                <div className="flex justify-between"><span className="text-slate-400">Funding/Grant:</span> <span className="font-semibold text-white">{item.grantAmount}</span></div>
                                <div className="flex justify-between"><span className="text-slate-400">Monies To:</span> <span className="font-semibold text-white">{item.appliesTo}</span></div>
                                <div className="flex justify-between"><span className="text-slate-400">Institution:</span> <span className="font-semibold text-white">{item.institution}</span></div>
                            </div>
                            <div className="text-sm flex-grow">
                                <p className="text-slate-400 mb-1">Target Notes:</p>
                                <p className="font-semibold text-white">{item.targetNotes}</p>
                            </div>
                        </div>
                        <div className="text-center mt-6 pt-6 border-t border-slate-800">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="action-button">Visit Site</a>
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