
import { FeatureCard } from './feature-card';
import { Search, Mail, FileText, Layers } from 'lucide-react';

const features = [
  {
    icon: <Search size={32} />,
    title: "Find Your Perfect Investor Match",
    description: "Our AI scours the investment landscape to find VCs and Angels who *actually* invest in companies like yours. Filter by stage, industry, and thesis to stop wasting time on bad fits.",
    imageSrc: "/images/investor-matching.png",
    imageAlt: "Screenshot of Invesho's investor matching interface",
    imageAiHint: "investor search",
  },
  {
    icon: <Mail size={32} />,
    title: "Craft Perfect Outreach in Seconds",
    description: "Generate personalized, compelling emails that get opened. Our AI assistant studies your startup profile and the investor's portfolio to create outreach that resonates.",
    imageSrc: "/images/email-outreach.png",
    imageAlt: "Illustration of personalized email outreach",
    imageAiHint: "email outreach",
  },
  {
    icon: <FileText size={32} />,
    title: "Generate an Institutional-Grade Memo",
    description: "Instantly create a structured, data-driven investment memo from your profile. Impress investors by showing you've done your homework and are ready for due diligence.",
    imageSrc: "/images/investment-memo.png",
    imageAlt: "Representation of an investment memo",
    imageAiHint: "document memo",
  },
  {
    icon: <Layers size={32} />,
    title: "All Your Fundraising in One Place",
    description: "From discovery and outreach to pitch prep and diligence, Invesho provides a unified platform to manage and accelerate your entire fundraising process.",
    imageSrc: "/images/unified-platform.png",
    imageAlt: "Dashboard showing unified fundraising platform",
    imageAiHint: "dashboard platform",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Your Intelligent Toolkit for Startup Investment</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-400 text-lg">
            Invesho uses AI to give you an unfair advantage in fundraising.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imageAiHint={feature.imageAiHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
