import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TeamSection } from './TeamSection'; // <-- 1. Import the new component


export function HeroSection() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-headline mb-12">
          Automate<br className="hidden md:block" /> Your <span className="text-primary">Fundraising</span> Entirely.
        </h1>
        <p className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
          Invesho is your AI co-pilot for the entire fundraising journey. Find the right investors, craft the perfect pitch, and close your round faster.
        </p>
        <div className="mt-10 flex justify-center mb-10">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105">
            <Link href="#waitlist">
              Get Early Access
            </Link>
          </Button>
        </div>
        <TeamSection />
      </div>
    </section>
  );
}
