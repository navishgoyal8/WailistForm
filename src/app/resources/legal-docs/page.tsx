// "use client";

// import React from 'react';
// import { resourcesData } from '@/lib/resourcesData';
// import Icon from '@/components/resources/Icon';

// export default function LegalDocsPage() {
//     const categorizedDocs = resourcesData.legalDocs.reduce((acc: any, doc) => {
//         (acc[doc.category] = acc[doc.category] || []).push(doc);
//         return acc;
//     }, {});

//     return (
//         <div>
//             {/* The BackButton component is removed from here */}
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Legal Document Templates</h1>
//             <div className="space-y-12">
//                 {Object.entries(categorizedDocs).map(([category, docs]) => (
//                     <div key={category}>
//                         <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">{category}</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {(docs as any[]).map((item: any) => (
//                                 <div key={item.id} className="resource-card h-full flex flex-col">
//                                     <div className="flex-grow">
//                                         <div className="flex items-center gap-4 mb-4">
//                                             <div className="icon-wrapper w-12 h-12">
//                                                 <Icon name="file-text" size={28}/>
//                                             </div>
//                                             <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                                         </div>
//                                         <p className="text-slate-400 mb-2 text-sm">{item.description}</p>
//                                         <p className="text-xs text-slate-500 italic">{item.whenToUse}</p>
//                                     </div>
//                                     <div className="text-center mt-6 pt-6 border-t border-slate-800">
//                                         <a href={item.link} download className="action-button">
//                                             Download
//                                         </a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


"use client";

import React from 'react';
import { resourcesData } from '@/lib/resourcesData';
import Icon from '@/components/resources/Icon';

export default function LegalDocsPage() {
    const categorizedDocs = resourcesData.legalDocs.reduce((acc: any, doc) => {
        (acc[doc.category] = acc[doc.category] || []).push(doc);
        return acc;
    }, {});

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">Legal Document Templates</h1>
            <div className="space-y-12">
                {Object.entries(categorizedDocs).map(([category, docs]) => (
                    <div key={category}>
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(docs as any[]).map((item: any) => (
                                <div key={item.id} className="resource-card h-full flex flex-col">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="icon-wrapper w-12 h-12">
                                                <Icon name="file-text" size={28}/>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                        </div>
                                        <p className="text-slate-400 mb-2 text-sm">{item.description}</p>
                                        <p className="text-xs text-slate-500 italic">{item.whenToUse}</p>
                                    </div>
                                    <div className="text-center mt-6 pt-6 border-t border-slate-800">
                                        <a href={item.link} download className="action-button">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};