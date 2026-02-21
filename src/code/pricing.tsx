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
        className={`relative border shadow-sm transition-all hover:shadow-md ${plan.featured ? "border-primary ring-1 ring-primary" : "bg-white"}`}
      >
        {plan.featured && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-[10px] font-semibold uppercase rounded-bl-lg">
            Popular
          </div>
        )}
        <CardHeader className="text-center pb-2 pt-8">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${plan.featured ? "bg-primary text-primary-foreground" : "bg-zinc-100 text-zinc-600"}`}
          >
            <plan.icon size={18} />
          </div>
          <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-muted-foreground text-sm font-medium">/mo</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check size={14} className="text-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-8">
          <Button variant={plan.featured ? "default" : "outline"} className="w-full">
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
          className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="w-11 h-6 bg-zinc-200 rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-sm absolute top-1 transition-all ${isYearly ? "left-6" : "left-1"}`}
          />
        </button>
        <span
          className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Yearly <span className="text-green-600 text-[10px] font-bold">(-20%)</span>
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: "Personal", monthly: 15, yearly: 120, icon: Shield },
          { name: "Business", monthly: 45, yearly: 380, icon: Crown, featured: true },
        ].map((plan) => (
          <Card
            key={plan.name}
            className={`border shadow-sm p-6 bg-white ${plan.featured ? "border-primary" : ""}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-xs text-muted-foreground">
                  Perfect for {plan.name === "Personal" ? "individuals" : "scaling teams"}
                </p>
              </div>
              <div className="w-9 h-9 rounded-md bg-zinc-50 border flex items-center justify-center text-primary">
                <plan.icon size={18} />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">${isYearly ? plan.yearly : plan.monthly}</span>
              <span className="text-muted-foreground text-sm font-medium">
                / {isYearly ? "yr" : "mo"}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {["Custom Branding", "Priority Support", "Advanced Analytics"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-green-600" /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
              Subscribe
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ComparisonPricing = () => (
  <div className="w-full max-w-4xl mx-auto space-y-4 overflow-x-auto">
    <div className="min-w-[600px] border rounded-lg shadow-sm bg-white overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-zinc-50/50 border-b">
            <th className="p-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Features
            </th>
            <th className="p-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Free
            </th>
            <th className="p-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-primary/5">
              Pro
            </th>
            <th className="p-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody className="divide-y text-zinc-600">
          {[
            { name: "API Access", free: true, pro: true, ent: true },
            { name: "Custom Domains", free: false, pro: true, ent: true },
            { name: "Team Members", free: "1", pro: "10", ent: "Unlimited" },
            { name: "Support", free: "Email", pro: "Priority", ent: "24/7" },
          ].map((row) => (
            <tr key={row.name}>
              <td className="p-4 text-sm font-medium text-foreground">{row.name}</td>
              <td className="p-4 text-center text-sm">
                {typeof row.free === "boolean" ? (
                  row.free ? (
                    <Check className="mx-auto text-primary" size={16} />
                  ) : (
                    "—"
                  )
                ) : (
                  row.free
                )}
              </td>
              <td className="p-4 text-center text-sm bg-primary/5 font-semibold text-foreground">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <Check className="mx-auto text-primary" size={16} />
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
                    <Check className="mx-auto text-primary" size={16} />
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
