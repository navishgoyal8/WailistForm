import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { FeaturesSection } from '@/components/landing/features-section';
// import { TeamSection } from '@/components/landing/TeamSection'; // <-- 1. Import the new component
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'; // <-- 1. Import it
import { WaitlistSection } from '@/components/landing/waitlist-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative overflow-hidden flex-grow">
        <HeroSection />
         {/* <-- 2. Add the new component here */}
        <ProblemSection />
        <FeaturesSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
