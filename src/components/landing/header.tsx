import Link from 'next/link';
import { LogoIcon } from '@/components/icons/logo-icon';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" aria-label="Invesho Home">
          <LogoIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-white tracking-tight font-headline">Invesho</h1>
        </Link>
        <Button asChild variant="default" className="bg-slate-700 hover:bg-slate-600 text-white">
          <Link href="#waitlist">
            Join Waitlist
          </Link>
        </Button>
      </div>
    </header>
  );
}
