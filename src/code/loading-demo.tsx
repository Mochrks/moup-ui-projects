"use client";

import { Loader2, RotateCw, Loader, Zap, Cpu, Settings, Terminal, Layers } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import { motion } from "framer-motion";

// ─── 1. INDUSTRIAL SPINNER ──────────────────────────────────────────
export const LoaderSimple = () => (
  <div className="relative">
    <Loader2 className="w-12 h-12 animate-spin text-black" strokeWidth={3} />
    <div className="absolute inset-0 flex items-center justify-center animate-pulse">
      <Zap size={14} className="fill-black" />
    </div>
  </div>
);

// ─── 2. RELOAD BUTTONS ──────────────────────────────────────────────
export const LoaderButton = () => (
  <div className="flex flex-wrap gap-4">
    <Button
      disabled
      className="border-4 border-black bg-white text-black shadow-[4px_4px_0_0_#000] opacity-100 font-black uppercase italic"
    >
      <RotateCw className="mr-2 h-5 w-5 animate-spin" strokeWidth={3} /> INITIALIZING...
    </Button>
    <Button
      variant="outline"
      disabled
      className="bg-[#ffe135] text-black border-4 border-black shadow-[4px_4px_0_0_#000] opacity-100 font-black uppercase italic"
    >
      <Loader className="mr-2 h-5 w-5 animate-spin" strokeWidth={3} /> PROCESSING
    </Button>
  </div>
);

// ─── 3. NEOBRUTALIST TEXT SKELETON ──────────────────────────────────
export const LoaderTextSkeleton = () => (
  <div className="space-y-3 w-full max-w-sm p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_#000] rounded-2xl">
    <div className="h-6 w-full bg-zinc-200 border-2 border-black rounded-lg overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe135]/50 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
    <div className="h-4 w-3/4 bg-zinc-100 border-2 border-black/10 rounded-lg" />
  </div>
);

// ─── 4. KERNEL LOADING (LOGO PULSE) ─────────────────────────────────
export const LoaderBranded = () => (
  <div className="flex items-center justify-center relative w-32 h-32">
    <motion.div
      className="absolute inset-0 border-4 border-black rounded-3xl"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 4, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <motion.div
      className="absolute inset-2 border-2 border-zinc-200 rounded-2xl"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
    <div className="relative z-10 w-16 h-16 bg-[#ffe135] border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
      <Cpu className="w-8 h-8 text-black" strokeWidth={2.5} />
    </div>
  </div>
);

// ─── 5. DATA MATRIX LOADER ──────────────────────────────────────────
export const LoaderDots = () => (
  <div className="grid grid-cols-3 gap-2">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <motion.div
        key={i}
        className="w-4 h-4 bg-black border border-white/20"
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1, 0.8],
          backgroundColor: i % 2 === 0 ? "#ffe135" : "#000",
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
);

// ─── 6. INDUSTRIAL RING ─────────────────────────────────────────────
export const LoaderRing = () => (
  <div className="relative w-20 h-20">
    <div className="absolute inset-0 border-8 border-zinc-100 rounded-full" />
    <motion.div
      className="absolute inset-0 border-8 border-transparent border-t-[#ffe135] border-r-black rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <Settings className="w-6 h-6 animate-[spin_3s_linear_infinite]" />
    </div>
  </div>
);

// ─── 7. SYSTEM PROGRESS BAR ─────────────────────────────────────────
export const LoaderBar = () => (
  <div className="w-full max-w-md">
    <div className="flex justify-between mb-2">
      <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
        <Terminal size={12} /> Syncing Nodes
      </span>
      <span className="text-[10px] font-black text-[#ffe135] bg-black px-2 py-0.5 rounded italic">
        99.4%
      </span>
    </div>
    <div className="h-6 w-full border-4 border-black bg-white shadow-[4px_4px_0_0_#000] p-1 overflow-hidden">
      <motion.div
        className="h-full bg-black relative"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,225,53,0.3)_10px,rgba(255,225,53,0.3)_20px)]" />
      </motion.div>
    </div>
  </div>
);

// ─── 8. INTERACTIVE SKELETON CARD ───────────────────────────────────
export const LoaderPulseCard = () => (
  <div className="w-full max-w-sm border-4 border-black rounded-[2rem] p-6 space-y-6 bg-white shadow-[10px_10px_0_0_#000] overflow-hidden relative">
    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 bg-zinc-100 border-2 border-black rounded-2xl relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white/40 skew-x-[-20deg]"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-black rounded w-2/3" />
        <div className="h-3 bg-zinc-100 rounded w-1/3" />
      </div>
    </div>
    <div className="h-40 bg-zinc-50 border-2 border-dashed border-black/20 rounded-2xl flex items-center justify-center">
      <Layers className="text-zinc-200 scale-[2]" />
    </div>
  </div>
);

// ─── 9. MECHANICAL GEAR LOADER ──────────────────────────────────────
export const LoaderMechanical = () => (
  <div className="flex items-end gap-1">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    >
      <Settings size={32} className="text-black" strokeWidth={3} />
    </motion.div>
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      className="-ml-1 -mb-1"
    >
      <Settings size={20} className="text-[#ffe135]" strokeWidth={4} />
    </motion.div>
  </div>
);

// ─── 10. TERMINAL BOOT ──────────────────────────────────────────────
export const LoaderTerminal = () => (
  <div className="w-full max-w-sm bg-black border-2 border-zinc-800 rounded-xl overflow-hidden font-mono text-[10px] shadow-2xl">
    <div className="bg-zinc-900 px-3 py-1.5 border-b border-zinc-800 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <span className="text-zinc-500 uppercase text-[8px] font-bold tracking-tighter">
        moup-kernel-v4
      </span>
    </div>
    <div className="p-4 space-y-1">
      <div className="flex gap-2 text-green-500">
        <span className="text-white/40">0.021s</span>
        <span>[ OK ] Initializing core artifacts...</span>
      </div>
      <div className="flex gap-2 text-[#ffe135]">
        <span className="text-white/40">0.145s</span>
        <span>[ WAIT ] Scaling industrial nodes...</span>
      </div>
      <motion.div
        className="w-1 h-3 bg-white"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      />
    </div>
  </div>
);
