// import { resourcesData } from '@/lib/resourcesData';
// import { TestimonialCard } from '@/components/landing/TestimonialCard';

// export function TestimonialsSection() {
//   return (
//     <section className="py-16 sm:py-20 ">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">What People Are Saying</h2>
//           <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">We're proud to have earned the trust of founders and investors alike.</p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {resourcesData.testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial as any} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client"; 

import React from 'react';
import { resourcesData } from '@/lib/resourcesData';
import { TestimonialCard } from '@/components/landing/TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">What People Are Saying</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">We're proud to have earned the trust of founders and investors alike.</p>
        </div>
        
        <Carousel
          // UPDATED: Added new options to the Autoplay plugin
          plugins={[
            Autoplay({
              delay: 4000, // The time to wait (in ms) before cycling to the next slide
              stopOnInteraction: false, // The carousel will NOT stop when you click next/prev
              stopOnMouseEnter: true, // The carousel WILL pause when you hover over it
            }),
          ]}
          // UPDATED: Added new options to control animation speed
          opts={{
            align: "start",
            loop: true,
            duration: 30, // A higher number means a slower, smoother animation. Default is 10.
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {resourcesData.testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <TestimonialCard {...testimonial as any} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

      </div>
    </section>
  );
}