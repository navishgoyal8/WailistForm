
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    title: "Investor Discovery is Broken",
    description: "You're buried in lists of VCs who will never invest in your stage or industry. Your CRM is a graveyard of bad leads.",
  },
  {
    title: "Outreach Feels Impersonal",
    description: "Crafting hundreds of \"personalized\" emails is draining. Generic templates get ignored, and your open rates are abysmal.",
  },
  {
    title: "Feedback Comes Too Late",
    description: "You only discover the flaws in your pitch after you've been rejected. There's no room for practice runs with real stakes.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Fundraising is a full-time job...</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-400 text-lg">
            ...that keeps you from your actual job: building your company. The endless research, the cold emails, the constant rejection—it's a brutal grind. What if you could make every action count?
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 rounded-xl p-6 shadow-none">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-white font-headline">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-400 mt-2">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
