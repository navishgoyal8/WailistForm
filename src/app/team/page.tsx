// import React from 'react';
// import Image from 'next/image';

// export default function TeamPage() {
//   // Array of objects for the logos, pointing to your files in the /public/logos/ folder
//   const logos = [
//     { name: 'Google', src: '/logos/google.png' },
//     { name: 'UC Berkeley', src: '/logos/UC.png' },
//     { name: 'Amazon', src: '/logos/amazon.png' },
//     { name: 'Cornell', src: '/logos/cornell.png' },
//   ];

//   return (
//     <div>
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//           Backed by a World-Class Team
//         </h1>
//         <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
//           Our team's experience comes from industry-leading companies and institutions.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//         {logos.map((logo) => (
//           // This container div creates the uniform background, border, and hover effect
//           <div 
//             key={logo.name} 
//             className="flex items-center justify-center h-32 p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-slate-800"
//           >
//             <Image
//               src={logo.src}
//               alt={`${logo.name} logo`}
//               width={100} // Set a consistent base width
//               height={100} // Set a consistent base height
//               className="object-contain max-h-16" // Ensures logo fits without being stretched
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Image from 'next/image';

// export default function TeamPage() {
//   // Array of objects for the logos, pointing to your files in the /public/logos/ folder
//   const logos = [
//     { name: 'Google', src: '/logos/google.png' },
//     { name: 'UC Berkeley', src: '/logos/UC.png' },
//     { name: 'Amazon', src: '/logos/amazon.png' },
//     { name: 'Cornell', src: '/logos/cornell.png' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center mt-[9rem] py-9">
//       <div className="text-center mb-11">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//           Backed by a World-Class Team
//         </h1>
//         <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
//           Our team's experience comes from industry-leading companies and institutions.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//         {logos.map((logo) => (
//           <div 
//             key={logo.name} 
//             className="flex items-center justify-center h-32 w-32 p-6 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-white/20 hover:scale-105 shadow-lg"
//           >
//             <Image
//               src={logo.src}
//               alt={`${logo.name} logo`}
//               width={80}
//               height={80}
//               className="object-contain max-w-full max-h-full filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
//               style={{
//                 filter: 'brightness(0) invert(1)', // Makes all logos white/transparent
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import Image from 'next/image';

// export default function TeamPage() {
//   // Array of objects for the logos, pointing to your files in the /public/logos/ folder
//   const logos = [
//     { name: 'Google', src: '/logos/google.png' },
//     { name: 'UC Berkeley', src: '/logos/UC.png' },
//     { name: 'Amazon', src: '/logos/amazon.png' },
//     { name: 'Cornell', src: '/logos/cornell1.png' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center mt-[-9rem] py-9">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//           Backed by a World-Class Team
//         </h1>
//         <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
//           Our team's experience comes from industry-leading companies and institutions.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//         {logos.map((logo) => (
//           <div 
//             key={logo.name}   
//             className="flex items-center justify-center h-32 w-32 p-6 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-white/20 hover:scale-105 shadow-lg"
//           >
//             <Image
//               src={logo.src}
//               alt={`${logo.name} logo`}
//               width={80}
//               height={80}
//               className="object-contain max-w-full max-h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import Image from 'next/image';

// export default function TeamPage() {
//   // Array of objects with individual styling for each logo
//   const logos = [
//     { 
//       name: 'Google', 
//       src: '/logos/google.png',
//       width: 80,
//       height: 80,
//       className: "object-contain"
//     },
//     { 
//       name: 'UC Berkeley', 
//       src: '/logos/UC1.png',
//       width: 270,
//       height: 270,
//       className: "object-contain object-cover"
//     },
//     { 
//       name: 'Amazon', 
//       src: '/logos/amazon.png',
//       width: 90,
//       height: 60,
//       className: "object-contain"
//     },
//     { 
//       name: 'Cornell', 
//       src: '/logos/cornell2.png',
//       width: 370,
//       height: 270,
//       className: "object-contain"
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center mt-[-9rem] py-9">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//           Backed by a World-Class Team
//         </h1>
//         <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
//           Our team's experience comes from industry-leading companies and institutions.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//         {logos.map((logo) => (
//           <div 
//             key={logo.name}   
//             className="flex items-center justify-center h-32 w-32 p-6 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-white/20 hover:scale-105 shadow-lg"
//           >
//             <Image
//               src={logo.src}
//               alt={`${logo.name} logo`}
//               width={logo.width}
//               height={logo.height}
//               className={`${logo.className} opacity-90 hover:opacity-100 transition-opacity duration-300`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React from 'react';
import Image from 'next/image';

export default function TeamPage() {
  // Array of objects with individual styling for each logo
  const logos = [
    { 
      name: 'Google', 
      src: '/logos/google.png',
      width: 80,
      height: 80,
      className: "object-contain"
    },
    { 
      name: 'UC Berkeley', 
      src: '/logos/UCV.png',
      width: 120,
      height: 200,
      className: "object-contain color-white",
      filter: 'brightness(0) invert(1) brightness(1.2) sepia(0.2) hue-rotate(200deg)'
    },
    { 
      name: 'Amazon', 
      src: '/logos/amazon.png',
      width: 120,
      height: 120,
      className: "object-contain"
    },
    { 
      name: 'Cornell', 
      src: '/logos/cornellw.png',
      width: 120,
      height: 113,
      className: "object-contain"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[-9rem] py-9">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
         Team comes from
        </h1>
        {/* <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          Our team's experience comes from industry-leading companies and institutions.
        </p> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {logos.map((logo) => (
          <div 
            key={logo.name}   
            className="flex items-center justify-center h-32 w-32 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-600 hover:bg-white/20 hover:scale-105 shadow-lg"
          >
            <div style={{ width: `${logo.width}px`, height: `${logo.height}px` }} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className={`${logo.className} w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300`}
                style={{
                  filter: logo.filter,
                  imageRendering: 'crisp-edges',
                }}
                quality={100}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}