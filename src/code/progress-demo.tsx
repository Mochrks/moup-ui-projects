import { Progress } from "@/components/ui-shadcn/progress";
import { useState, useEffect } from "react";
import {
  Zap,
  Cpu,
  ShieldCheck,
  Layers,
  ArrowRight,
  Activity,
  Terminal,
  Database,
  HardDrive,
  BarChart3,
  Wifi,
  ZapOff,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Progress Demos with high-fidelity styling and interesting use-cases

// 1. Industrial Primary
export const ProgressSimple = () => (
  <div className="space-y-3 w-full p-6 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000]">
    <div className="flex justify-between items-end">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-main animate-pulse"></div>
        <span className="font-heading uppercase text-xs italic tracking-tighter">
          Extraction Protocol
        </span>
      </div>
      <span className="font-black italic text-main">33%</span>
    </div>
    <Progress
      value={33}
      className="h-4 border-2 border-black bg-zinc-100 rounded-none [&>div]:bg-main shadow-inner"
    />
  </div>
);

// 2. Success (Synchronized)
export const ProgressSuccess = () => (
  <div className="space-y-4 w-full p-6 border-2 border-black rounded-[2rem] bg-zinc-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500 text-green-600">
        <ShieldCheck size={20} />
      </div>
      <div>
        <span className="block text-[10px] font-black uppercase text-zinc-400 leading-none mb-1">
          Security Handshake
        </span>
        <Badge className="bg-green-500 text-white border-0 font-black italic text-[9px]">
          VERIFIED
        </Badge>
      </div>
      <span className="ml-auto font-black text-2xl italic tracking-tighter">100%</span>
    </div>
    <Progress
      value={100}
      className="h-3 border-2 border-black rounded-full bg-white [&>div]:bg-green-500"
    />
  </div>
);

// 3. Warning (High Load)
export const ProgressWarning = () => (
  <div className="space-y-4 w-full p-6 border-2 border-black rounded-2xl bg-amber-50 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-700">
      <Cpu size={120} />
    </div>
    <div className="flex justify-between items-center px-1">
      <div className="flex items-center gap-2 font-black text-[10px] uppercase text-amber-700">
        <Activity size={14} className="animate-bounce" /> Thermal Limit
      </div>
      <span className="text-xs font-black text-amber-900 italic underline">65% ALERT</span>
    </div>
    <div className="relative">
      <Progress
        value={65}
        className="h-10 border-2 border-black rounded-2xl bg-white [&>div]:bg-amber-400 [&>div]:border-r-4 [&>div]:border-black"
      />
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="w-[1px] h-4 bg-black/10"></div>
        ))}
      </div>
    </div>
  </div>
);

// 4. Critical Error Overflow
export const ProgressError = () => (
  <div className="w-full space-y-3 p-6 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#ef4444]">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <ZapOff className="text-red-500" size={16} />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">
          Memory Pressure
        </span>
      </div>
      <Badge variant="destructive" className="border-2 border-black font-black">
        UNSTABLE
      </Badge>
    </div>
    <div className="relative overflow-hidden rounded-xl border-2 border-black bg-zinc-100 h-6">
      <Progress value={85} className="h-full border-0 bg-transparent [&>div]:bg-red-600" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:30px_30px] animate-[stripe_0.5s_linear_infinite]"></div>
    </div>
    <div className="text-[9px] font-black text-red-600 italic">
      GATEWAY OVERFLOW DETECTED :: PURGE REQUIRED
    </div>
  </div>
);

// 5. Rich Data Capsule
export const ProgressLabeled = () => (
  <div className="w-full p-1 bg-black rounded-[2.5rem] shadow-2xl transition-transform hover:-translate-y-1 duration-500">
    <div className="bg-white rounded-[2.3rem] p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-3 border-2 border-black rounded-2xl bg-mainAccent text-white -rotate-6">
            <Database size={20} />
          </div>
          <div>
            <span className="block text-xs font-black uppercase opacity-40">Sync Protocol</span>
            <span className="font-heading text-xl uppercase italic">Database Sync</span>
          </div>
        </div>
        <div className="font-black italic text-4xl italic tracking-tighter text-mainAccent underline underline-offset-4 decoration-8 decoration-main/20">
          75%
        </div>
      </div>
      <Progress
        value={75}
        className="h-4 border-2 border-black bg-zinc-50 rounded-full [&>div]:bg-black shadow-[4px_4px_0_0_#000]"
      />
      <div className="flex justify-between text-[10px] font-black text-zinc-400 px-2 tracking-widest">
        <span className="flex items-center gap-2">
          <HardDrive size={10} /> 1.8 GB TRANSFERRED
        </span>
        <span>2,400 MB CORE</span>
      </div>
    </div>
  </div>
);

// 6. Minimalist Needle
export const ProgressThin = () => (
  <div className="w-full space-y-3 p-4">
    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] opacity-30">
      <span>UPLINK_01</span>
      <Wifi size={12} />
    </div>
    <Progress value={45} className="h-1 bg-zinc-200 [&>div]:bg-mainAccent border-0" />
    <div className="flex justify-between font-black text-[8px] tracking-[0.3em] uppercase opacity-20 px-0.5">
      <span>0%</span>
      <span>100%</span>
    </div>
  </div>
);

// 7. Industrial Heavy Block
export const ProgressThick = () => (
  <div className="w-full border-4 border-black bg-zinc-950 p-8 rounded-[3rem] shadow-[12px_12px_0_0_#fbbf24] relative">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-2xl bg-main border-2 border-black flex items-center justify-center -rotate-12">
        <Layers className="text-white" size={24} />
      </div>
      <div>
        <h5 className="text-white font-heading uppercase text-2xl tracking-tighter italic leading-none">
          Stack Index
        </h5>
        <span className="text-[10px] font-black text-main uppercase italic">Tier 4 Clearance</span>
      </div>
    </div>
    <div className="relative">
      <Progress
        value={45}
        className="h-12 border-2 border-black bg-zinc-900 rounded-2xl [&>div]:bg-white overflow-hidden"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white mix-blend-difference font-black italic text-sm tracking-[0.5em] uppercase">
          PROCESSING
        </div>
      </div>
    </div>
  </div>
);

// 8. Dynamic Interaction
export const ProgressDynamic = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + Math.floor(Math.random() * 8) + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-6 p-8 border-2 border-black rounded-[2.5rem] bg-white shadow-[8px_8px_0_0_#88aaee]">
      <div className="flex justify-between items-center text-zinc-900">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-mainAccent" />
          <span className="font-black italic uppercase text-sm tracking-tight">Mainframe Load</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-black opacity-30 uppercase tracking-widest">STATUS_</span>
          <span className="p-1 px-4 bg-black text-white rounded-xl text-lg font-black italic">
            {progress}%
          </span>
        </div>
      </div>
      <div className="relative">
        <Progress
          value={progress}
          className="h-6 border-2 border-black bg-zinc-50 rounded-full transition-all duration-700 ease-out [&>div]:bg-mainAccent [&>div]:border-r-2 [&>div]:border-black"
        />
        <div className="absolute -inset-1 border-2 border-black/5 rounded-full z-[-1] blur-sm"></div>
      </div>
      <div className="flex gap-1">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-sm border border-black ${progress > i * 10 ? "bg-mainAccent" : "bg-transparent"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// 9. Stealth Indeterminate
export const ProgressIndeterminate = () => (
  <div className="w-full flex flex-col gap-3 p-6 border-2 border-black border-dashed rounded-3xl">
    <div className="flex items-center justify-between">
      <span className="font-black text-[10px] uppercase tracking-[0.3em] text-zinc-400">
        Indexing_Resources...
      </span>
      <BarChart3 size={14} className="text-zinc-300 animate-pulse" />
    </div>
    <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden relative border border-black/10">
      <div className="absolute inset-y-0 bg-mainAccent w-1/3 animate-progress-indeterminate rounded-full shadow-[0_0_15px_#88aaee]"></div>
    </div>
    <div className="text-[8px] font-bold text-zinc-300 text-center uppercase italic">
      Awaiting response from primary cluster
    </div>
  </div>
);

// 10. Premium Spectrum
export const ProgressGradient = () => (
  <div className="w-full p-10 border-4 border-black rounded-[4rem] bg-zinc-950 relative overflow-hidden group">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-main/10 rounded-full blur-[80px] group-hover:bg-mainAccent/20 transition-colors duration-1000"></div>
    <div className="absolute top-0 right-0 p-8 rotate-12 opacity-10">
      <Zap size={140} className="text-main" />
    </div>
    <div className="relative z-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-heading text-4xl uppercase tracking-tighter text-white leading-none">
            Phase Alpha
          </h4>
          <span className="text-mainAccent font-black italic uppercase text-xs tracking-[0.4em]">
            Subsidized Logic
          </span>
        </div>
        <ArrowRight className="text-white w-10 h-10 -rotate-45" />
      </div>
      <div className="relative pt-12">
        <div className="absolute top-0 right-0 text-7xl font-black italic text-zinc-900 z-0">
          90
        </div>
        <Progress
          value={90}
          className="relative z-10 h-8 border-2 border-white/20 bg-zinc-900 rounded-full [&>div]:bg-[linear-gradient(90deg,#88aaee,#ef4444,#fbbf24)] shadow-2xl"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white font-black text-[10px] uppercase opacity-40">Load Map</span>
        <div className="flex flex-1 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full border border-white/5 ${i <= 7 ? "bg-mainAccent shadow-[0_0_5px_#88aaee]" : "bg-zinc-800"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
