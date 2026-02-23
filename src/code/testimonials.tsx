import { Card, CardContent } from "@/components/ui-neobrutalism/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-neobrutalism/avatar";
import { Star, Quote, Zap, Activity, Users } from "lucide-react";

export const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "UNIT_J01",
      role: "CEO_TECH_FLOW",
      text: "CORE_INFRASTRUCTURE_TRANSFORMED. COMPONENT_DEPLOYMENT_LATENCY_REDUCED_BY_60%. HIGHLY_CUSTOMIZABLE_GRID.",
      avatar: "https://i.pravatar.cc/150?u=1",
      color: "bg-white",
    },
    {
      name: "UNIT_S02",
      role: "PRODUCT_ARCHITECT",
      text: "VIBRANT_DYNAMICS. UX_FOCUS_REMAINS_UNMATCHED. CLEAN_VISUAL_DOMINANCE_ACHIEVED.",
      avatar: "https://i.pravatar.cc/150?u=2",
      color: "bg-[#ffe135]",
    },
    {
      name: "UNIT_M03",
      role: "LEAD_GRID_ENGINEER",
      text: "TOP_TIER_CODE_INTEGRITY. DOCUMENTATION_LOGS_ARE_IMPECABLE. FLAWLESS_CORE_SYNC.",
      avatar: "https://i.pravatar.cc/150?u=3",
      color: "bg-indigo-400 text-white",
    },
    {
      name: "UNIT_E04",
      role: "FRONT_OP_COMMANDER",
      text: "COMPLEX_LAYOUT_DEPLOYMENT_SPEED_MAXIMIZED. DESIGN_TIME_REDUCTION_ESTABLISHED.",
      avatar: "https://i.pravatar.cc/150?u=4",
      color: "bg-pink-400 text-white",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto p-4">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className={`border-4 border-black shadow-[10px_10px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none rounded-3xl overflow-hidden ${t.color}`}
        >
          <CardContent className="p-8 space-y-6">
            <div className="flex gap-2">
              {[...Array(5)].map((_, j) => (
                <div
                  key={j}
                  className="w-6 h-6 bg-black text-[#ffe135] flex items-center justify-center rounded-lg shadow-[2px_2px_0_0_#000] border border-black/20"
                >
                  <Star size={14} fill="currentColor" strokeWidth={0} />
                </div>
              ))}
            </div>
            <p className="text-sm font-black italic uppercase tracking-tighter leading-relaxed">
              "{t.text}"
            </p>
            <div className={`flex items-center gap-4 pt-6 border-t-4 border-black/10`}>
              <Avatar className="h-14 w-14 border-4 border-black shadow-[4px_4px_0_0_#000]">
                <AvatarImage src={t.avatar} />
                <AvatarFallback className="font-black text-black">{t.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-black italic uppercase tracking-tighter text-base">{t.name}</h4>
                <p
                  className={`text-[10px] font-black uppercase italic tracking-widest ${t.color.includes("text-white") ? "opacity-60" : "text-black/40"}`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const SingleFeaturedTestimonial = () => (
  <div className="w-full max-w-4xl mx-auto bg-[#ffe135] border-8 border-black p-10 md:p-16 rounded-[48px] relative overflow-hidden shadow-[20px_20px_0_0_#000] group select-none">
    <div className="absolute top-0 right-0 p-10">
      <Quote
        size={180}
        className="text-black/5 rotate-12 group-hover:rotate-0 transition-transform duration-700"
      />
    </div>

    <div className="relative z-10 flex flex-col items-center text-center space-y-10">
      <div className="flex gap-3">
        {[...Array(5)].map((_, j) => (
          <div
            key={j}
            className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-2xl border-4 border-white shadow-[4px_4px_0_0_#000] animate-bounce"
            style={{ animationDelay: `${j * 100}ms` }}
          >
            <Star size={20} fill="currentColor" strokeWidth={0} />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="inline-block px-4 py-1 bg-black text-white font-black italic uppercase text-xs rounded border-2 border-black mb-2">
          CONVERSION_BOOST_+40%
        </div>
        <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-none max-w-3xl text-black">
          "CORE_UI_INTEGRATION_SUCCESSFUL. TRUST_QUOTIENT_MAXIMIZED.
          PROFESSIONAL_DESIGN_LANGUAGE_DEPLOYED."
        </h3>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <Avatar className="h-24 w-24 border-8 border-black shadow-[8px_8px_0_0_#000] rotate-3 group-hover:rotate-0 transition-transform">
            <AvatarImage src="https://i.pravatar.cc/150?u=9" />
            <AvatarFallback className="font-black text-2xl">JW</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black text-white rounded-full border-4 border-white flex items-center justify-center shadow-[4px_4px_0_0_#000]">
            <Zap size={18} fill="white" />
          </div>
        </div>
        <h4 className="font-black italic uppercase tracking-tighter text-2xl">JAMES_WILSON_CORE</h4>
        <p className="text-xs font-black uppercase italic tracking-[0.2em] text-black/50 mt-2">
          GROWTH_DIR @ METASCALE_GRID
        </p>
      </div>
    </div>
  </div>
);

export const MasonryTestimonials = () => {
  const testimonials = [
    {
      name: "ARCH_R01",
      role: "UX_STRATEGIST",
      text: "LAYOUT_PROBABILITY_STABLE. ARCHITECTURAL_INTEGRITY_VERIFIED.",
      color: "bg-white",
      icon: Activity,
    },
    {
      name: "CORE_P02",
      role: "DEV_REL_COMMS",
      text: "CORE_PERSONALITY_SYNCED. PROFESSIONAL_AESTHETICS_ESTABLISHED. GENERIC_DESIGN_ELIMINATED.",
      color: "bg-indigo-400 text-white",
      icon: Zap,
    },
    {
      name: "UNITS_B03",
      role: "GRID_FOUNDER",
      text: "CODE_INTEGRITY_MAXIMIZED. STARTUP_LANDING_PROTOCOL_ONLINE.",
      color: "bg-white",
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto p-4">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className={`border-4 border-black shadow-[10px_10px_0_0_#000] ${t.color} hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default rounded-3xl overflow-hidden group`}
        >
          <CardContent className="p-8 relative">
            <div
              className={`w-12 h-12 rounded-2xl border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000] rotate-2 group-hover:rotate-0 transition-transform ${t.color.includes("indigo") ? "bg-white text-black" : "bg-black text-white"}`}
            >
              <t.icon size={24} />
            </div>

            <p className="text-lg font-black italic uppercase tracking-tighter mb-8 leading-none border-l-4 border-black pl-4">
              "{t.text}"
            </p>

            <div
              className={`flex items-center gap-4 pt-6 border-t-2 ${t.color.includes("indigo") ? "border-white/20" : "border-black/5"}`}
            >
              <Avatar className="h-10 w-10 border-2 border-black shadow-[3px_3px_0_0_#000]">
                <AvatarFallback
                  className={`font-black text-xs ${t.color.includes("indigo") ? "text-black" : "text-black"}`}
                >
                  {t.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h5 className="font-black italic uppercase tracking-widest text-xs">{t.name}</h5>
                <p
                  className={`text-[9px] font-black uppercase italic tracking-tighter ${t.color.includes("indigo") ? "opacity-60" : "text-black/40"}`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
