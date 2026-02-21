import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import { Settings, Shield, Scan, Zap, Crown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// 1. Simple but Bold
export const AvatarSimple = () => (
  <div className="p-1 border-2 border-black rounded-full transition-transform hover:scale-110 active:scale-95 cursor-pointer">
    <Avatar className="border-2 border-black">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="font-black italic text-main">CN</AvatarFallback>
    </Avatar>
  </div>
);

// 2. Industrial Square
export const AvatarSquare = () => (
  <div className="p-2 border-2 border-black rounded-[1.2rem] bg-zinc-50 shadow-[4px_4px_0_0_#000]">
    <Avatar className="rounded-xl w-12 h-12 border-2 border-black">
      <AvatarImage src="https://avatar.vercel.sh/shadcn" />
      <AvatarFallback className="bg-white">
        <Scan size={20} />
      </AvatarFallback>
    </Avatar>
  </div>
);

// 3. Scaleable Grid
export const AvatarSizes = () => (
  <div className="flex items-end gap-6 p-4 border-2 border-black border-dashed rounded-3xl bg-zinc-50">
    <Avatar className="w-8 h-8 border-2 border-black shadow-[2px_2px_0_0_#000] transition-all hover:-translate-y-1">
      <AvatarFallback className="text-xs font-black">S</AvatarFallback>
    </Avatar>
    <Avatar className="w-12 h-12 border-2 border-black shadow-[3px_3px_0_0_#000] rotate-3 hover:rotate-0 transition-all">
      <AvatarFallback className="font-black">M</AvatarFallback>
    </Avatar>
    <Avatar className="w-20 h-20 border-3 border-black shadow-[6px_6px_0_0_#000] -rotate-3 hover:rotate-0 transition-all">
      <AvatarFallback className="text-2xl font-black">L</AvatarFallback>
    </Avatar>
  </div>
);

// 4. Identity Initials (Duo-tone)
export const AvatarInitials = () => (
  <div className="flex gap-4">
    <Avatar className="border-2 border-black">
      <AvatarFallback className="bg-main text-white font-black italic shadow-inner">
        JD
      </AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-black">
      <AvatarFallback className="bg-pink-500 text-white font-black italic shadow-inner">
        AS
      </AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-black">
      <AvatarFallback className="bg-zinc-900 text-white font-black italic shadow-inner">
        MK
      </AvatarFallback>
    </Avatar>
  </div>
);

// 5. Functional Icons
export const AvatarIcons = () => (
  <div className="flex gap-4 p-4 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0_0_#88aaee]">
    <Avatar className="bg-white border-2 border-black hover:bg-main/20 transition-colors">
      <AvatarFallback>
        <Settings size={20} className="text-black" />
      </AvatarFallback>
    </Avatar>
    <Avatar className="bg-white border-2 border-black hover:bg-pink-100 transition-colors">
      <AvatarFallback>
        <Shield size={20} className="text-black" />
      </AvatarFallback>
    </Avatar>
    <Avatar className="bg-white border-2 border-black hover:bg-yellow-100 transition-colors">
      <AvatarFallback>
        <Zap size={20} className="text-black" />
      </AvatarFallback>
    </Avatar>
  </div>
);

// 6. Premium Highlighted
export const AvatarBordered = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-tr from-main to-pink-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <Avatar className="relative border-4 border-black ring-4 ring-white w-20 h-20 shadow-2xl">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className="font-black text-2xl">B</AvatarFallback>
    </Avatar>
    <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full border-2 border-white shadow-lg">
      <CheckCircle2 size={16} className="text-main" />
    </div>
  </div>
);

// 7. Dynamic Team Stack
export const AvatarGroup = () => (
  <div className="flex items-center -space-x-5 px-4">
    {[1, 2, 3, 4].map((i) => (
      <Avatar
        key={i}
        className="border-4 border-black hover:-translate-y-3 hover:rotate-6 transition-all cursor-pointer"
      >
        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    ))}
    <div className="w-12 h-12 bg-black border-4 border-black rounded-full flex items-center justify-center text-white text-xs font-black italic cursor-help hover:scale-110 transition-transform z-10">
      +18
    </div>
  </div>
);

// 8. Presence Visualization
export const AvatarStatus = () => (
  <div className="flex gap-8">
    <div className="relative group/av">
      <Avatar className="w-14 h-14 border-2 border-black group-hover/av:scale-105 transition-transform">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky" />
      </Avatar>
      <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full animate-pulse shadow-[2px_2px_0_0_#000]"></span>
    </div>
    <div className="relative group/av">
      <Avatar className="w-14 h-14 border-2 border-black group-hover/av:scale-105 transition-transform">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight" />
      </Avatar>
      <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 border-2 border-black rounded-full shadow-[2px_2px_0_0_#000]"></span>
    </div>
  </div>
);

// 9. Rare Artifact Style
export const AvatarGradient = () => (
  <div className="p-1 rounded-full bg-[conic-gradient(from_0deg,#88aaee,#ef4444,#88aaee)] animate-[spin_4s_linear_infinite] w-24 h-24 relative overflow-hidden flex items-center justify-center group">
    <div className="absolute inset-0.5 bg-white rounded-full z-0"></div>
    <Avatar className="w-20 h-20 border-2 border-black z-10 group-hover:scale-110 transition-transform">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className="font-black text-3xl">G</AvatarFallback>
    </Avatar>
    <div className="absolute top-1 right-3 z-20">
      <Crown className="text-yellow-500 drop-shadow-md" size={18} fill="currentColor" />
    </div>
  </div>
);

// 10. Integrated Data Capsule
export const AvatarRichLink = () => (
  <div className="flex items-center gap-4 p-4 border-2 border-black rounded-full bg-white pr-8 hover:bg-main/5 cursor-pointer transition-all shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">
    <div className="relative">
      <Avatar className="w-12 h-12 border-2 border-black">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="font-black italic">JD</AvatarFallback>
      </Avatar>
      <div className="absolute -top-1 -right-1 bg-black rounded-full p-1 border border-white">
        <Zap size={10} className="text-yellow-400" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-black uppercase tracking-tight italic leading-none">
        Jordan V. Rivers
      </span>
      <div className="flex items-center gap-2 mt-1">
        <Badge className="h-4 text-[8px] bg-black text-white hover:bg-black font-black uppercase tracking-widest border-0">
          SYSTEMS
        </Badge>
        <span className="text-[10px] font-bold text-muted-foreground">LVL 42</span>
      </div>
    </div>
  </div>
);
