import { Badge } from "@/components/ui-shadcn/badge";
import { Check, X, Zap, Clock, ArrowRight, Sparkles, Hash } from "lucide-react";

// Enhancing Badges for maximum visual pop and premium utility

// 1. Industrial Primary
export const BadgeDefault = () => (
  <div className="flex gap-3">
    <Badge className="bg-black text-white hover:bg-zinc-800 border-2 border-black font-black uppercase tracking-widest text-[9px] px-3 py-1 rounded-none translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0_0_#88aaee]">
      Primary Alpha
    </Badge>
    <Badge className="bg-main text-white hover:bg-mainAccent border-2 border-black font-black uppercase tracking-widest text-[9px] px-3 py-1 rounded-none shadow-[2px_2px_0_0_#000]">
      Core v.1
    </Badge>
  </div>
);

// 2. Secondary Outlined Duo
export const BadgeSecondary = () => (
  <div className="flex gap-2">
    <Badge
      variant="secondary"
      className="border-2 border-black font-bold h-7 px-3 bg-white text-black hover:bg-zinc-50"
    >
      Internal
    </Badge>
    <Badge
      variant="secondary"
      className="border-2 border-black font-bold h-7 px-3 bg-zinc-950 text-white"
    >
      External
    </Badge>
  </div>
);

// 3. Destructive Warning State
export const BadgeDestructive = () => (
  <Badge
    variant="destructive"
    className="border-2 border-black bg-red-500 text-white font-black italic uppercase tracking-tighter px-4 py-1 rounded-full shadow-[4px_4px_0_0_#000] animate-bounce"
  >
    Critical Error 505
  </Badge>
);

// 4. Clean Neobrutalist Outline
export const BadgeOutline = () => (
  <div className="flex gap-2">
    <Badge
      variant="outline"
      className="border-2 border-black font-black uppercase text-[10px] tracking-tight hover:bg-black hover:text-white transition-all cursor-pointer"
    >
      UI DESIGN
    </Badge>
    <Badge
      variant="outline"
      className="border-2 border-black font-black uppercase text-[10px] tracking-tight bg-black text-white px-2"
    >
      DEV OPS
    </Badge>
  </div>
);

// 5. Success with Action
export const BadgeSuccess = () => (
  <div className="flex gap-2">
    <Badge className="bg-green-100 text-green-700 border-2 border-green-700 font-black flex gap-2 items-center hover:bg-green-200 cursor-help pr-0.5">
      <Check size={12} strokeWidth={3} /> Verified User
      <div className="bg-green-700 text-white px-1.5 py-0.5 rounded-sm text-[8px] uppercase">
        KYC
      </div>
    </Badge>
  </div>
);

// 6. Alert Warning Glow
export const BadgeWarning = () => (
  <div className="flex gap-3 items-center">
    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping absolute"></div>
    <Badge className="bg-amber-100 text-amber-700 border-2 border-amber-600 font-bold relative ml-1">
      Storage Warning
    </Badge>
  </div>
);

// 7. Iconic Power Stats
export const BadgeIcon = () => (
  <div className="flex gap-2">
    <Badge className="gap-2 bg-indigo-600 text-white border-2 border-black font-bold shadow-[2px_2px_0_0_#000] h-8">
      <Zap size={12} fill="currentColor" /> Performance Mode
    </Badge>
    <Badge className="gap-2 bg-pink-500 text-white border-2 border-black font-bold shadow-[2px_2px_0_0_#000] h-8">
      <Sparkles size={12} fill="white" /> Featured Story
    </Badge>
  </div>
);

// 8. Interactive Tag Cloud
export const BadgeRemovable = () => (
  <div className="flex gap-2">
    {["React", "Vite", "Zod"].map((tag) => (
      <Badge
        key={tag}
        className="gap-2 bg-white border-2 border-black text-black font-bold h-9 px-4 rounded-xl group hover:border-main transition-colors hover:shadow-[2px_2px_0_0_#000]"
      >
        <Hash size={12} className="text-zinc-300 group-hover:text-main" />
        {tag}
        <button className="ml-1 hover:bg-red-100 p-1 rounded-full text-zinc-400 hover:text-red-500 transition-colors">
          <X size={12} />
        </button>
      </Badge>
    ))}
  </div>
);

// 9. Premium Status Indicators
export const BadgeDot = () => (
  <div className="flex gap-6 p-4 border-2 border-black bg-zinc-50 rounded-2xl w-full">
    <div className="flex flex-col gap-2 flex-1">
      <span className="text-[10px] font-black text-muted-foreground uppercase pl-1">
        Engine Node 01
      </span>
      <Badge
        variant="outline"
        className="gap-3 bg-white border-2 border-black py-2 rounded-xl justify-start"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
        <span className="font-bold flex-1">System Operational</span>
        <Clock size={12} className="text-zinc-300" />
      </Badge>
    </div>
    <div className="flex flex-col gap-2 flex-1 opacity-50">
      <span className="text-[10px] font-black text-muted-foreground uppercase pl-1">
        Engine Node 02
      </span>
      <Badge
        variant="outline"
        className="gap-3 bg-white border-2 border-black py-2 rounded-xl justify-start grayscale"
      >
        <span className="w-2 h-2 rounded-full bg-zinc-300" />
        <span className="font-bold flex-1">Deployment Offline</span>
        <Clock size={12} className="text-zinc-300" />
      </Badge>
    </div>
  </div>
);

// 10. Ultimate Branding Label
export const BadgeSoft = () => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-main via-pink-500 to-mainAccent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative flex items-center gap-1 bg-black border-2 border-black p-0.5 rounded-lg">
      <Badge className="bg-main text-black font-black uppercase tracking-tighter text-[10px] h-8 px-3 border-r-2 border-black rounded-sm rounded-r-none">
        MOUP UI
      </Badge>
      <div className="bg-transparent text-white px-3 text-xs font-bold flex items-center gap-2">
        EARLY ACCESS <ArrowRight size={14} className="text-main" />
      </div>
    </div>
  </div>
);
