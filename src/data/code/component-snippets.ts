export interface ComponentCode {
  react: string;
  next: string;
  html: string;
}

// ─── LOADING COMPONENTS ───────────────────────────────────────────────
export const loaderSimpleCode: ComponentCode = {
  react: `import { Loader2 } from "lucide-react";

export const LoaderSimple = () => (
    <Loader2 className="w-12 h-12 animate-spin text-black" strokeWidth={3} />
);`,
  next: `"use client";

import { Loader2 } from "lucide-react";

export const LoaderSimple = () => (
    <Loader2 className="w-12 h-12 animate-spin text-black" strokeWidth={3} />
);`,
  html: `<div class="relative">
    <svg class="w-12 h-12 animate-spin text-black" ...></svg>
</div>`,
};

export const loaderBarCode: ComponentCode = {
  react: `import { motion } from "framer-motion";

export const LoaderBar = () => (
    <div className="h-6 w-full border-4 border-black bg-white shadow-[4px_4px_0_0_#000] p-1 overflow-hidden">
        <motion.div 
            className="h-full bg-black"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, repeat: Infinity }}
        />
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";

export const LoaderBar = () => (
    <div className="h-6 w-full border-4 border-black bg-white shadow-[4px_4px_0_0_#000] p-1 overflow-hidden">
        <motion.div 
            className="h-full bg-black"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, repeat: Infinity }}
        />
    </div>
);`,
  html: `<div class="w-full h-6 border-4 border-black bg-white shadow-[4px_4px_0_0_#000] p-1 overflow-hidden">
    <div class="h-full bg-black animate-progress"></div>
</div>`,
};

export const loaderButtonCode: ComponentCode = {
  react: `import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

export const LoaderButton = () => (
    <Button disabled className="border-4 border-black bg-white text-black shadow-[4px_4px_0_0_#000] font-black uppercase italic">
        <RotateCw className="mr-2 h-5 w-5 animate-spin" strokeWidth={3} /> INITIALIZING...
    </Button>
);`,
  next: `"use client";

import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

export const LoaderButton = () => (
    <Button disabled className="border-4 border-black bg-white text-black shadow-[4px_4px_0_0_#000] font-black uppercase italic">
        <RotateCw className="mr-2 h-5 w-5 animate-spin" strokeWidth={3} /> INITIALIZING...
    </Button>
);`,
  html: `<button disabled class="px-6 py-3 border-4 border-black bg-white text-black shadow-[4px_4px_0_0_#000] font-black uppercase">...</button>`,
};

export const loaderTextSkeletonCode: ComponentCode = {
  react: `import { motion } from "framer-motion";

export const LoaderTextSkeleton = () => (
    <div className="space-y-3 w-full p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_#000] rounded-2xl">
        <div className="h-6 w-full bg-zinc-200 border-2 border-black rounded-lg overflow-hidden relative">
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe135]/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
        </div>
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";

export const LoaderTextSkeleton = () => (
    <div className="space-y-3 w-full p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_#000] rounded-2xl">
        <div className="h-6 w-full bg-zinc-200 border-2 border-black rounded-lg overflow-hidden relative">
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe135]/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
        </div>
    </div>
);`,
  html: `<div class="p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_#000] rounded-2xl">...</div>`,
};

export const loaderBrandedCode: ComponentCode = {
  react: `import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export const LoaderBranded = () => (
    <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="relative z-10 w-16 h-16 bg-[#ffe135] border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
            <Cpu className="w-8 h-8 text-black" strokeWidth={2.5} />
        </div>
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export const LoaderBranded = () => (
    <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="relative z-10 w-16 h-16 bg-[#ffe135] border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
            <Cpu className="w-8 h-8 text-black" strokeWidth={2.5} />
        </div>
    </div>
);`,
  html: `<div class="w-16 h-16 bg-[#ffe135] border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">...</div>`,
};

export const loaderDotsCode: ComponentCode = {
  react: `import { motion } from "framer-motion";

export const LoaderDots = () => (
    <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-4 bg-black"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            />
        ))}
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";

export const LoaderDots = () => (
    <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-4 bg-black"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            />
        ))}
    </div>
);`,
  html: `<div class="grid grid-cols-3 gap-2">...</div>`,
};

export const loaderRingCode: ComponentCode = {
  react: `import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const LoaderRing = () => (
    <div className="relative w-20 h-20">
        <motion.div 
            className="absolute inset-0 border-8 border-transparent border-t-[#ffe135] border-r-black rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <Settings className="w-6 h-6 animate-spin" />
        </div>
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const LoaderRing = () => (
    <div className="relative w-20 h-20">
        <motion.div 
            className="absolute inset-0 border-8 border-transparent border-t-[#ffe135] border-r-black rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <Settings className="w-6 h-6 animate-spin" />
        </div>
    </div>
);`,
  html: `<div class="relative w-20 h-20 animate-spin">...</div>`,
};

export const loaderPulseCardCode: ComponentCode = {
  react: `export const LoaderPulseCard = () => (
    <div className="w-full max-w-sm border-4 border-black rounded-[2rem] p-6 bg-white shadow-[10px_10px_0_0_#000]">
        <div className="flex gap-4 items-center animate-pulse">
            <div className="w-14 h-14 bg-zinc-100 border-2 border-black rounded-2xl" />
        </div>
    </div>
);`,
  next: `"use client";

export const LoaderPulseCard = () => (
    <div className="w-full max-w-sm border-4 border-black rounded-[2rem] p-6 bg-white shadow-[10px_10px_0_0_#000]">
        <div className="flex gap-4 items-center animate-pulse">
            <div className="w-14 h-14 bg-zinc-100 border-2 border-black rounded-2xl" />
        </div>
    </div>
);`,
  html: `<div class="p-6 border-4 border-black rounded-[2rem] bg-white shadow-[10px_10px_0_0_#000]">...</div>`,
};

export const loaderMechanicalCode: ComponentCode = {
  react: `import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const LoaderMechanical = () => (
    <div className="flex items-end gap-1">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
            <Settings size={32} className="text-black" strokeWidth={3} />
        </motion.div>
    </div>
);`,
  next: `"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const LoaderMechanical = () => (
    <div className="flex items-end gap-1">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
            <Settings size={32} className="text-black" strokeWidth={3} />
        </motion.div>
    </div>
);`,
  html: `<div class="flex items-center gap-1">...</div>`,
};

export const loaderTerminalCode: ComponentCode = {
  react: `export const LoaderTerminal = () => (
    <div className="bg-black border-2 border-zinc-800 rounded-xl font-mono text-[10px] p-4 text-green-500">
        <div>[ OK ] Initializing...</div>
    </div>
);`,
  next: `"use client";

export const LoaderTerminal = () => (
    <div className="bg-black border-2 border-zinc-800 rounded-xl font-mono text-[10px] p-4 text-green-500">
        <div>[ OK ] Initializing...</div>
    </div>
);`,
  html: `<div class="bg-black p-4 font-mono text-xs text-green-500">...</div>`,
};

// ... existing switch code ...
export const switchDefaultCode: ComponentCode = {
  react: `import { Switch } from "@/components/ui/switch";

export const SwitchDefault = () => (
    <Switch className="data-[state=checked]:bg-black" />
);`,
  next: `"use client";

import { Switch } from "@/components/ui/switch";

export const SwitchDefault = () => (
    <Switch className="data-[state=checked]:bg-black" />
);`,
  html: `<!-- Neobrutalist Switch -->
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer">
  <div class="w-14 h-8 bg-zinc-200 border-4 border-black rounded-full peer peer-checked:bg-[#ffe135] relative">
    <div class="absolute top-1 left-1 w-4 h-4 bg-black rounded-full transition-transform peer-checked:translate-x-6"></div>
  </div>
</label>`,
};
