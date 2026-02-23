import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui-neobrutalism/card";
import { Button } from "@/components/ui-neobrutalism/button";
import { Badge } from "@/components/ui-neobrutalism/badge";
import { Check, Zap, Shield, Crown, Globe, MessageSquare, Terminal, Server } from "lucide-react";

export const SimplePricing = () => (
  <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto p-4">
    {[
      {
        name: "CORE_STARTER",
        price: "0",
        icon: Zap,
        color: "bg-white",
        features: ["UP_TO_5_NODES", "BASE_TELEMETRY", "GRID_RELAY_SYNC"],
      },
      {
        name: "CORE_PHALANX",
        price: "29",
        icon: Shield,
        featured: true,
        color: "bg-[#ffe135]",
        features: ["UNLIMITED_NODES", "ADV_SPECTRAL_STATS", "PRIORITY_RELAY", "CUSTOM_IDENTITY"],
      },
      {
        name: "CORE_DOMINION",
        price: "99",
        icon: Crown,
        color: "bg-indigo-400",
        features: ["UP_TO_20_UNITS", "ACL_POLICIES", "24/7_UPTIME_SYNC", "SLA_ENFORCED"],
      },
    ].map((plan) => (
      <Card
        key={plan.name}
        className={`relative border-4 border-black shadow-[12px_12px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none rounded-3xl overflow-hidden ${plan.color}`}
      >
        {plan.featured && (
          <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 text-[10px] font-black uppercase italic tracking-widest rounded-bl-3xl border-l-4 border-b-4 border-black animate-pulse">
            MAX_EFFICIENCY
          </div>
        )}
        <CardHeader className="text-center pb-6 pt-12 border-b-4 border-black/10">
          <div
            className={`w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#000] transition-transform hover:rotate-12 bg-white`}
          >
            <plan.icon size={32} className="text-black" />
          </div>
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
            {plan.name}
          </CardTitle>
          <div className="mt-6 flex items-baseline justify-center gap-2 bg-black/5 py-4 border-y-2 border-black/5">
            <span className="text-6xl font-black italic tracking-tighter leading-none">
              ${plan.price}
            </span>
            <span className="text-black/60 text-xs font-black uppercase italic tracking-widest">
              /CYCLE
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-10 px-8">
          <ul className="space-y-4">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-4 text-xs font-black uppercase italic tracking-tighter text-black/70"
              >
                <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center shadow-[2px_2px_0_0_#ffe135] shrink-0">
                  <Check size={14} strokeWidth={4} />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-8 pt-4">
          <Button className="w-full h-14 bg-black text-white border-2 border-black font-black uppercase italic text-lg shadow-[4px_4px_0_0_#fff] hover:shadow-none transition-all">
            INIT_INTAKE
          </Button>
        </CardFooter>
      </Card>
    ))}
  </div>
);

export const PricingWithToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-16 w-full max-w-6xl mx-auto p-10 bg-white border-4 border-black rounded-[40px] shadow-[15px_15px_0_0_#000]">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-3xl font-black italic uppercase tracking-tighter border-b-4 border-black pb-2">
          PLAN_SELECTION_PROTOCOL
        </h3>
        <div className="flex items-center gap-6 bg-zinc-100 p-2 border-4 border-black rounded-2xl shadow-[4px_4px_0_0_#000]">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-8 py-3 rounded-xl font-black uppercase italic text-xs transition-all ${!isYearly ? "bg-black text-white shadow-[4px_4px_0_0_#ffe135]" : "bg-transparent text-black/40"}`}
          >
            CYCLE_MONTHLY
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-8 py-3 rounded-xl font-black uppercase italic text-xs transition-all relative ${isYearly ? "bg-black text-white shadow-[4px_4px_0_0_#pink-400] shadow-[#F472B6]" : "bg-transparent text-black/40"}`}
          >
            ANNUAL_COMMIT
            {isYearly && (
              <Badge className="absolute -top-4 -right-4 bg-pink-400 text-black border-2 border-black font-black italic uppercase text-[9px] animate-bounce">
                SAVE_20%
              </Badge>
            )}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[
          {
            name: "CORE_UNIT",
            monthly: 15,
            yearly: 120,
            icon: Shield,
            color: "bg-white",
            border: "border-black",
          },
          {
            name: "APEX_COMMAND",
            monthly: 45,
            yearly: 380,
            icon: Crown,
            featured: true,
            color: "bg-[#ffe135]",
            border: "border-black",
          },
        ].map((plan) => (
          <Card
            key={plan.name}
            className={`border-4 ${plan.border} shadow-[12px_12px_0_0_#000] p-10 rounded-[32px] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${plan.color}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-1 leading-none underline decoration-4 underline-offset-4">
                  {plan.name}
                </h3>
                <p className="text-[10px] font-black uppercase italic text-black/40 tracking-widest mt-2 px-3 py-1 bg-black/5 border border-black/10 inline-block rounded-lg">
                  {plan.name === "CORE_UNIT" ? "INDIVIDUAL_DEPLOYMENT" : "SCALING_FORCE_OPS"}
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-black border-2 border-white flex items-center justify-center text-white shadow-[4px_4px_0_0_#000]">
                <plan.icon size={28} />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-10 bg-white/50 p-6 border-4 border-black/5 rounded-3xl">
              <span className="text-7xl font-black italic tracking-tighter leading-none">
                ${isYearly ? plan.yearly : plan.monthly}
              </span>
              <span className="text-black/60 text-sm font-black uppercase italic tracking-widest">
                / {isYearly ? "ANNUAL" : "CYCLE"}
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                "CUSTOM_IDENTITY_SYNC",
                "PRIORITY_PULSE_SUPPORT",
                "ADV_TELEMETRY_GRID",
                "ZERO_LATENCY_OPS",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-4 text-xs font-black uppercase italic tracking-tighter"
                >
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shadow-[2px_2px_0_0_#fff] shrink-0">
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full h-16 bg-black text-white border-2 border-black font-black uppercase italic text-xl shadow-[6px_6px_0_0_#fff] hover:shadow-none transition-all">
              INITIALIZE_LINK
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ComparisonPricing = () => (
  <div className="w-full max-w-5xl mx-auto space-y-8 p-6">
    <div className="text-center space-y-4 mb-10">
      <div className="inline-block px-4 py-1 bg-black text-white font-black italic uppercase text-xs rounded border-2 border-black">
        GRID_MATRIX_VAL
      </div>
      <h2 className="text-5xl font-black italic uppercase tracking-tighter">CAPABILITY_MATRIX</h2>
    </div>

    <div className="min-w-[700px] border-4 border-black shadow-[15px_15px_0_0_#000] bg-white rounded-[40px] overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-zinc-50 border-b-4 border-black">
            <th className="p-8 text-left text-[11px] font-black uppercase italic tracking-[0.2em] text-black">
              UNIT_CAPABILITIES
            </th>
            <th className="p-8 text-center text-[11px] font-black uppercase italic tracking-[0.2em] text-black border-l-4 border-black">
              ENTRY_NODE
            </th>
            <th className="p-8 text-center text-[11px] font-black uppercase italic tracking-[0.2em] text-black border-l-4 border-black bg-[#ffe135]">
              APEX_CORE
            </th>
            <th className="p-8 text-center text-[11px] font-black uppercase italic tracking-[0.2em] text-black border-l-4 border-black bg-indigo-400">
              DOMINION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-black/10 font-bold uppercase italic text-black/60">
          {[
            { name: "CORE_API_ACCESS", icon: Terminal, free: true, pro: true, ent: true },
            { name: "IDENTITY_DOMAINS", icon: Globe, free: false, pro: true, ent: true },
            {
              name: "UNIT_CAPACITY",
              icon: Server,
              free: "1_NODE",
              pro: "10_NODES",
              ent: "UNLIMITED",
            },
            {
              name: "PULSE_SUPPORT",
              icon: MessageSquare,
              free: "ASYNC_RELAY",
              pro: "PRIORITY_L1",
              ent: "SYNC_24/7",
            },
          ].map((row) => (
            <tr key={row.name} className="hover:bg-zinc-50 transition-colors group">
              <td className="p-8 text-sm font-black flex items-center gap-4 text-black group-hover:pl-10 transition-all border-r-4 border-black/5">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-[2px_2px_0_0_#ffe135]">
                  <row.icon size={16} />
                </div>
                {row.name}
              </td>
              <td className="p-8 text-center text-xs border-l-4 border-black/5">
                {typeof row.free === "boolean" ? (
                  row.free ? (
                    <div className="w-8 h-8 rounded-lg bg-green-400 border-2 border-black flex items-center justify-center mx-auto shadow-[2px_2px_0_0_#000]">
                      <Check size={18} strokeWidth={4} className="text-black" />
                    </div>
                  ) : (
                    <div className="opacity-20">—</div>
                  )
                ) : (
                  <span className="bg-black/5 px-4 py-1 border border-black/10 rounded-lg">
                    {row.free}
                  </span>
                )}
              </td>
              <td className="p-8 text-center text-xs border-l-4 border-black/5 bg-[#ffe135]/10 font-black text-black">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <div className="w-8 h-8 rounded-lg bg-green-400 border-2 border-black flex items-center justify-center mx-auto shadow-[2px_2px_0_0_#000]">
                      <Check size={18} strokeWidth={4} className="text-black" />
                    </div>
                  ) : (
                    "—"
                  )
                ) : (
                  <span className="bg-white px-4 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000]">
                    {row.pro}
                  </span>
                )}
              </td>
              <td className="p-8 text-center text-xs border-l-4 border-black/5 bg-indigo-50">
                {typeof row.ent === "boolean" ? (
                  row.ent ? (
                    <div className="w-8 h-8 rounded-lg bg-green-400 border-2 border-black flex items-center justify-center mx-auto shadow-[2px_2px_0_0_#000]">
                      <Check size={18} strokeWidth={4} className="text-black" />
                    </div>
                  ) : (
                    "—"
                  )
                ) : (
                  <span className="bg-indigo-400 text-white px-4 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000] tracking-widest">
                    {row.ent}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
