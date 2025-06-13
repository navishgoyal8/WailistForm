
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageAiHint?: string;
}

export function FeatureCard({ icon, title, description, imageSrc, imageAlt, imageAiHint }: FeatureCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 rounded-xl p-6 shadow-none flex flex-col">
      {imageSrc && (
        <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={400}
            height={250}
            className="w-full h-auto object-cover scale-[1.3]"
            data-ai-hint={imageAiHint}
          />
        </div>
      )}
      <CardHeader className="p-0">
        <div className="text-primary mb-4 h-8 w-8">
          {icon}
        </div>
        <CardTitle className="font-bold text-white text-xl font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-slate-400 mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}

