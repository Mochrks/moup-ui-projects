import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui-shadcn/card";
import { Button } from "@/components/ui-shadcn/button";
import { Check, Zap, Shield, Crown } from "lucide-react";

export const SimplePricing = () => (
  <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
    {[
      {
        name: "Starter",
        price: "0",
        icon: Zap,
        features: ["Up to 5 projects", "Basic analytics", "Community support"],
      },
      {
        name: "Pro",
        price: "29",
        icon: Shield,
        featured: true,
        features: ["Unlimited projects", "Advanced stats", "Priority email", "Custom domains"],
      },
      {
        name: "Team",
        price: "99",
        icon: Crown,
        features: ["Up to 20 users", "Roles & permissions", "24/7 Support", "SLA guarantee"],
      },
    ].map((plan) => (
      <Card
        key={plan.name}
        className={`relative border-2 border-black shadow-[4px_4px_0_0_#000] overflow-hidden ${plan.featured ? "bg-[#ffe135]" : "bg-white"}`}
      >
        {plan.featured && (
          <div className="absolute top-4 right-[-35px] rotate-45 bg-black text-white px-10 py-1 text-[10px] font-black uppercase tracking-widest">
            Popular
          </div>
        )}
        <CardHeader className="text-center pb-2">
          <div
            className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0_0_#000] ${plan.featured ? "bg-white" : "bg-[#ffe135]"}`}
          >
            <plan.icon size={20} className="text-black" />
          </div>
          <CardTitle className="text-2xl font-black">{plan.name}</CardTitle>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black">${plan.price}</span>
            <span className="text-muted-foreground font-bold">/mo</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm font-bold">
                <div className="shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-8">
          <Button
            className={`w-full h-11 border-2 border-black font-black uppercase tracking-wider transition-all transform hover:-translate-y-1 hover:shadow-none shadow-[2px_2px_0_0_#000] ${plan.featured ? "bg-black text-white" : "bg-[#ffe135] text-black hover:bg-black hover:text-[#ffe135]"}`}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
    ))}
  </div>
);

export const PricingWithToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-12 w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <span
          className={`text-sm font-black uppercase ${!isYearly ? "text-black" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="w-14 h-8 bg-black rounded-full p-1 relative transition-colors"
        >
          <div
            className={`w-6 h-6 bg-[#ffe135] rounded-full border-2 border-black absolute top-1 transition-all ${isYearly ? "left-7" : "left-1"}`}
          />
        </button>
        <span
          className={`text-sm font-black uppercase ${isYearly ? "text-black" : "text-muted-foreground"}`}
        >
          Yearly (Save 20%)
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: "Personal", monthly: 15, yearly: 120, icon: Shield },
          { name: "Business", monthly: 45, yearly: 380, icon: Crown, featured: true },
        ].map((plan) => (
          <Card
            key={plan.name}
            className={`border-2 border-black shadow-[6px_6px_0_0_#000] p-8 ${plan.featured ? "bg-white" : "bg-white"}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
                  Best for {plan.name === "Personal" ? "Creators" : "Teams"}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg border-2 border-black bg-[#ffe135] flex items-center justify-center">
                <plan.icon size={20} />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">${isYearly ? plan.yearly : plan.monthly}</span>
              <span className="text-muted-foreground font-black uppercase text-xs">
                / {isYearly ? "year" : "month"}
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Custom Branding", "Email Support", "Advanced Security"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-bold">
                  <Check size={16} className="text-green-500" strokeWidth={3} /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full h-12 bg-black text-white border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase tracking-widest hover:bg-[#ffe135] hover:text-black transition-all">
              Select {plan.name}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ComparisonPricing = () => (
  <div className="w-full max-w-4xl mx-auto space-y-4 overflow-x-auto">
    <div className="min-w-[600px] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] bg-white overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-zinc-50 border-b-2 border-black">
            <th className="p-4 text-left font-black uppercase text-xs">Features</th>
            <th className="p-4 text-center font-black uppercase text-xs">Free</th>
            <th className="p-4 text-center font-black uppercase text-xs bg-[#ffe135]/20">Pro</th>
            <th className="p-4 text-center font-black uppercase text-xs">Enterprise</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-zinc-100">
          {[
            { name: "API Access", free: true, pro: true, ent: true },
            { name: "Custom Domains", free: false, pro: true, ent: true },
            { name: "Custom Code", free: false, pro: "Advanced", ent: "Full" },
            { name: "Team Members", free: "1", pro: "10", ent: "Unlimited" },
            { name: "Support", free: "Email", pro: "Priority", ent: "24/7 Dedicated" },
          ].map((row) => (
            <tr key={row.name}>
              <td className="p-4 text-sm font-bold">{row.name}</td>
              <td className="p-4 text-center text-sm">
                {typeof row.free === "boolean" ? (
                  row.free ? (
                    <Check className="mx-auto" size={16} />
                  ) : (
                    "—"
                  )
                ) : (
                  row.free
                )}
              </td>
              <td className="p-4 text-center text-sm bg-[#ffe135]/10 font-black">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <Check className="mx-auto" size={16} />
                  ) : (
                    "—"
                  )
                ) : (
                  row.pro
                )}
              </td>
              <td className="p-4 text-center text-sm">
                {typeof row.ent === "boolean" ? (
                  row.ent ? (
                    <Check className="mx-auto" size={16} />
                  ) : (
                    "—"
                  )
                ) : (
                  row.ent
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
