// import React from 'react';
// import Image from 'next/image';

// export function TeamSection() {
//   // Array of objects with individual styling for each logo
//   const logos = [
//     { 
//       name: 'Google', 
//       src: '/logos/google.png',
//       width: 70,
//       height: 80,
//       className: "object-contain"
//     },
//     { 
//       name: 'UC Berkeley', 
//       src: '/logos/UCn.png',
//       width: 150,
//       height: 150,
//       className: "object-contain",
//       filter: 'brightness(0) invert(1) brightness(1.2) sepia(0.2) hue-rotate(200deg)'
//     },
//     { 
//       name: 'Amazon', 
//       src: '/logos/amazon.png',
//       width: 100,
//       height: 100,
//       className: "object-contain"
//     },
//     { 
//       name: 'Cornell', 
//       src: '/logos/cornellw.png',
//       width: 100,
//       height: 100,
//       className: "object-contain"
//     },
//   ];

//   return (
//     <div className="mt-12">
//       <h2 className="text-center text-sm font-semibold text-slate-400">
//         Our team comes from
//       </h2>
//       <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
//         {logos.map((logo) => (
//           <div 
//             key={logo.name}   
//             className="flex items-center justify-center h-32 w-32 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-white/20 hover:scale-105 shadow-lg"
//           >
//             <div style={{ width: `${logo.width}px`, height: `${logo.height}px` }} className="flex items-center justify-center">
//               <Image
//                 src={logo.src}
//                 alt={`${logo.name} logo`}
//                 width={logo.width}
//                 height={logo.height}
//                 className={`${logo.className} w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300`}
//                 style={{
//                   filter: logo.filter,
//                   imageRendering: 'crisp-edges',
//                 }}
//                 quality={100}
//                 priority
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import Image from 'next/image';

// export function TeamSection() {
//   const logos = [
//     { 
//       name: 'Google', 
//       src: '/logos/google.png',
//       width: 60,
//       height: 60,
//       className: "object-contain"
//     },
//     { 
//       name: 'UC Berkeley', 
//       src: '/logos/UCn.png',
//       width: 120,
//       height: 80,
//       className: "object-contain",
//       filter: 'brightness(0) invert(1) brightness(1.2) sepia(0.2) hue-rotate(200deg)'
//     },
//     { 
//       name: 'Amazon', 
//       src: '/logos/amazon.png',
//       width: 80,
//       height: 80,
//       className: "object-contain"
//     },
//     { 
//       name: 'Cornell', 
//       src: '/logos/cornellw.png',
//       width: 85,
//       height: 80,
//       className: "object-contain"
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-xs font-medium text-slate-500 mb-6 tracking-wide uppercase">
//         Our team comes from
//       </p>
      
//       <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-8 flex-wrap max-w-3xl">
//         {logos.map((logo) => (
//           <div 
//             key={logo.name}   
//             className="flex items-center justify-center min-w-[100px] h-20 px-6 py-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl transition-all duration-300 ease-in-out hover:border-slate-600/50 hover:bg-slate-800/60 hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             <Image
//               src={logo.src}
//               alt={`${logo.name} logo`}
//               width={logo.width}
//               height={logo.height}
//               className={`${logo.className} opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-110`}
//               style={{
//                 maxWidth: '80%',
//                 height: 'auto',
//                 filter:logo.filter,
//               }}
//               quality={100}
//               priority
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Image from 'next/image';

export function TeamSection() {
  const logos = [
    { 
      name: 'Google', 
      src: '/logos/google.png',
      width: { mobile: 28, tablet: 35, desktop: 44 },
      height: { mobile: 28, tablet: 35, desktop: 40 },
      className: "object-contain"
    },
    { 
      name: 'UC Berkeley', 
      src: '/logos/UCn.png',
      width: { mobile: 70, tablet: 100, desktop: 140 },
      height: { mobile: 26, tablet: 40, desktop: 40 },
      className: "object-contain",
      filter: 'brightness(0) invert(1) brightness(1.2) sepia(0.2) hue-rotate(200deg)'
    },
    { 
      name: 'Amazon', 
      src: '/logos/amazon.png',
      width: { mobile: 55, tablet: 65, desktop: 80 },
      height: { mobile: 27, tablet: 33, desktop: 45 },
      className: "object-contain"
    },
    { 
      name: 'Cornell', 
      src: '/logos/cornellw.png',
      width: { mobile: 45, tablet: 55, desktop: 80 },
      height: { mobile: 33, tablet: 35, desktop: 40 },
      className: "object-contain",
      filter: 'brightness(0) invert(1) brightness(1.2) sepia(0.2) hue-rotate(200deg)'
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4 sm:mb-6 tracking-wide uppercase text-center">
        Our team comes from
      </p>
      
      {/* Mobile: 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3 sm:hidden max-w-xs mx-auto">
        {logos.map((logo) => (
          <div 
            key={logo.name}   
            className="flex items-center justify-center w-full h-14 px-3 py-2 bg-slate-800/20 backdrop-blur-sm border border-slate-700/20 rounded-lg transition-all duration-300 ease-in-out hover:border-slate-600/40 hover:bg-slate-800/30 active:scale-95 shadow-md hover:shadow-lg"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width.mobile}
              height={logo.height.mobile}
              className={`${logo.className} opacity-70 hover:opacity-90 transition-opacity duration-300 filter brightness-125 contrast-110`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                filter: logo.filter,
              }}
              quality={100}
              priority
            />
          </div>
        ))}
      </div>

      {/* Tablet: Horizontal row */}
      <div className="hidden sm:flex md:hidden items-center justify-center gap-4 flex-wrap max-w-2xl mx-auto">
        {logos.map((logo) => (
          <div 
            key={logo.name}   
            className="flex items-center justify-center w-20 h-16 px-3 py-2 bg-slate-800/20 backdrop-blur-sm border border-slate-700/20 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600/40 hover:bg-slate-800/30 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width.tablet}
              height={logo.height.tablet}
              className={`${logo.className} opacity-70 hover:opacity-90 transition-opacity duration-300 filter brightness-125 contrast-110`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                filter: logo.filter,
              }}
              quality={100}
              priority
            />
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal row with larger spacing */}
      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 xl:gap-11 flex-wrap max-w-5xl mx-auto">
        {logos.map((logo) => (
          <div 
            key={logo.name}   
            className="flex items-center justify-center w-28 h-20 lg:w-32 lg:h-24 xl:w-36 xl:h-26 px-5 py-4 bg-slate-800/30 backdrop-blur-md border border-slate-600/30 rounded-2xl transition-all duration-300 ease-in-out hover:border-slate-500/50 hover:bg-slate-700/40 hover:scale-110 shadow-lg hover:shadow-2xl"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width.desktop}
              height={logo.height.desktop}
              className={`${logo.className} opacity-85 hover:opacity-100 transition-all duration-300 filter brightness-130 contrast-115 saturate-110`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                filter: logo.filter,
              }}
              quality={100}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}