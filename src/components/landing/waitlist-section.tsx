import { WaitlistForm } from './waitlist-form';

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Get Early Access to Invesho</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Join the waitlist to get the access to the product.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
