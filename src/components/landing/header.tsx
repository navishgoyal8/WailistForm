// import Link from 'next/link';
// import { LogoIcon } from '@/components/icons/logo-icon';
// import { Button } from '@/components/ui/button';

// export function Header() {
//   return (
//     <header className="absolute top-0 left-0 w-full z-50 py-5">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2" aria-label="Invesho Home">
//           <LogoIcon className="w-8 h-8 text-primary" />
//           <h1 className="text-2xl font-bold text-white tracking-tight font-headline">Invesho</h1>
//         </Link>
//         <Button asChild variant="default" className="bg-slate-700 hover:bg-slate-600 text-white">
//           <Link href="#waitlist">
//             Join Waitlist
//           </Link>
//         </Button>
//       </div>
//     </header>
//   );
// }



// import Link from 'next/link';
// import { LogoIcon } from '@/components/icons/logo-icon';
// import { Button } from '@/components/ui/button';

// export function Header() {
//   return (
//     // UPDATED: Removed background, blur, and border classes for a transparent look
//     <header className="fixed top-0 left-0 w-full z-50 py-5">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2" aria-label="Invesho Home">
//           <LogoIcon className="w-8 h-8 text-primary" />
//           <h1 className="text-2xl font-bold text-white tracking-tight font-headline">Invesho</h1>
//         </Link>
        
//         <nav className="flex items-center gap-6">
//           <Link href="/resources" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
//               Resources
//           </Link>
//           <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-500 text-white">
//             <Link href="#waitlist">
//               Join Waitlist
//             </Link>
//           </Button>
//         </nav>

//       </div>
//     </header>
//   );
// }

"use client"; // This component now uses state, so it must be a Client Component

import Link from 'next/link';
import { useState } from 'react';
import { LogoIcon } from '@/components/icons/logo-icon';
import { Button } from '@/components/ui/button';
import Icon from '@/components/resources/Icon'; // Assuming Icon.tsx is in src/components/resources

export function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Added a conditional background for when the mobile menu is open
    <header className={`fixed top-0 left-0 w-full z-50 py-5 transition-colors duration-300 ${isMenuOpen ? 'bg-slate-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" aria-label="Invesho Home">
          <LogoIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-white tracking-tight font-headline">Invesho</h1>
        </Link>
        
        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/resources" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
            Resources
          </Link>
          <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-500 text-white">
            <Link href="#waitlist">
              Join Waitlist
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon - visible only on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <Icon name="x" className="w-6 h-6 text-white" />
            ) : (
              <Icon name="menu" className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-6">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Resources
            </Link>
            <Button asChild variant="default" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
              <Link href="#waitlist" onClick={() => setIsMenuOpen(false)}>
                Join Waitlist
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}