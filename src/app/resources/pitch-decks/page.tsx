// "use client";

// import React from 'react';
// import { resourcesData } from '@/lib/resourcesData';

// export default function PitchDecksPage() {
//     return (
//         <div>
//             {/* The BackButton component is removed from here */}
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Pitch Deck Templates</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {resourcesData.pitchDecks.map(item => {
//                     const isLocalFile = item.link.startsWith('/');
                    
//                     return (
//                         <div key={item.id} className="resource-card h-full flex flex-col">
//                             <div className="flex-grow">
//                                 <div className="mb-4">
//                                     <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                                     <p className="text-sm text-slate-400">{item.source}</p>
//                                 </div>
//                                 <p className="text-slate-400 text-sm">{item.description}</p>
//                             </div>
//                             <div className="text-center mt-6 pt-6 border-t border-slate-800">
//                                 <a 
//                                     href={item.link} 
//                                     download={isLocalFile} 
//                                     target={isLocalFile ? '_self' : '_blank'} 
//                                     rel="noopener noreferrer" 
//                                     className="action-button"
//                                 >
//                                     {isLocalFile ? 'Download PDF' : 'View Online'}
//                                 </a>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };



"use client";

import React from 'react';
import { resourcesData } from '@/lib/resourcesData';

export default function PitchDecksPage() {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Pitch Deck Templates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourcesData.pitchDecks.map(item => {
                    const isLocalFile = item.link.startsWith('/');
                    
                    return (
                        <div key={item.id} className="resource-card h-full flex flex-col">
                            <div className="flex-grow">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    <p className="text-sm text-slate-400">{item.source}</p>
                                </div>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </div>
                            <div className="text-center mt-6 pt-6 border-t border-slate-800">
                                <a 
                                    href={item.link} 
                                    download={isLocalFile} 
                                    target={isLocalFile ? '_self' : '_blank'} 
                                    rel="noopener noreferrer" 
                                    className="action-button"
                                >
                                    {isLocalFile ? 'Download PDF' : 'View Online'}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};