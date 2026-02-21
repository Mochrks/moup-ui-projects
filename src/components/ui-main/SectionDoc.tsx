"use client";

import { useState, ReactNode } from "react";
import { Check, Copy, Terminal, Layers, Zap, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SectionDocProps {
  /** SVG icon element shown in the header icon box */
  icon: ReactNode;
  /** Icon box background color (Tailwind class e.g. "bg-[#ffe135]") */
  iconBg?: string;
  title: string;
  componentCount: number;
  description: string;
  /** Short bullet features shown in the "What's included" list */
  features: string[];
  /** npm packages to install, e.g. ["framer-motion", "lucide-react"] */
  dependencies: string[];
  /** Shadcn/UI component imports used */
  shadcnDeps?: string[];
  children: ReactNode;
}

interface ComponentBlockProps {
  title: string;
  subtitle: string;
  features?: string[];
  children: ReactNode;
}

// ─── Install Command ──────────────────────────────────────────────────────────
const InstallCommand = ({ deps }: { deps: string[] }) => {
  const [copied, setCopied] = useState(false);
  const cmd = `npm install ${deps.join(" ")}`;

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl group">
      {/* Terminal Container */}
      <div className="relative border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0_0_#000] bg-zinc-950">
        {/* Header */}
        <div className="flex items-center justify-between bg-zinc-800/50 px-4 py-2 border-b-2 border-black">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
          </div>
          <div className="flex items-center gap-1.5 opacity-50">
            <Terminal size={10} className="text-zinc-400" />
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
              bash
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex items-center gap-3 px-5 py-4 font-mono text-sm relative group">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-green-400 font-bold shrink-0">$</span>
            <span className="text-zinc-300 truncate selection:bg-[#ffe135] selection:text-black">
              {cmd}
            </span>
          </div>

          <button
            onClick={copy}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 border-2 border-black hover:bg-[#ffe135] hover:text-black transition-all active:translate-y-[2px] active:shadow-none shadow-[2px_2px_0_0_#000] text-zinc-400"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                >
                  <Check size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                >
                  <Copy size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── SectionDoc ───────────────────────────────────────────────────────────────
export const SectionDoc = ({
  icon,
  iconBg = "bg-[#ffe135]",
  title,
  componentCount,
  description,
  features,
  dependencies,
  shadcnDeps = [],
  children,
}: SectionDocProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* ── Hero Header ── */}
      <div className="w-full border-b-2 border-black bg-white px-6 md:px-10 py-8 md:py-12 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe135]/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className={`w-14 h-14 rounded-2xl ${iconBg} border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] flex-shrink-0`}
            >
              {icon}
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                {title}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded uppercase tracking-widest leading-none">
                  {componentCount} components
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Ready to use
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-muted-foreground max-w-3xl leading-relaxed mb-8 font-medium">
            {description}
          </p>

          {/* Info grid - Fixed to be more responsive and interesting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl">
            {/* Features Panel */}
            <div className="lg:col-span-7 border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_#000] bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles size={80} />
              </div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                  <Layers size={16} className="text-[#ffe135]" />
                </div>
                <span className="text-sm font-black uppercase tracking-wider">What's included</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-2.5 text-xs md:text-[13px] text-zinc-600 font-medium"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#34A853]/10 border border-[#34A853]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-[#34A853]" />
                    </div>
                    <span>{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Dependencies Panel */}
            <div className="lg:col-span-5 border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_#000] bg-zinc-50 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#ffe135] border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                  <Zap size={16} className="text-black" />
                </div>
                <span className="text-sm font-black uppercase tracking-wider">Setup & Deps</span>
              </div>

              {dependencies.length > 0 ? (
                <div className="mb-6">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <Terminal size={10} /> Install Packages
                  </p>
                  <InstallCommand deps={dependencies} />
                </div>
              ) : (
                <div className="mb-6 p-4 rounded-xl bg-white border-2 border-black/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Check size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Zero Dependencies</p>
                    <p className="text-[10px] text-zinc-500 font-medium leading-none mt-0.5">
                      No extra npm packages needed
                    </p>
                  </div>
                </div>
              )}

              {shadcnDeps.length > 0 && (
                <div className="w-full overflow-hidden">
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                      <Layers size={10} /> Shadcn/UI Components
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `npx shadcn-ui@latest add ${shadcnDeps.join(" ")}`
                        );
                      }}
                      className="text-[9px] font-black text-black bg-[#ffe135] px-2 py-0.5 rounded border border-black hover:scale-105 active:scale-95 transition-all shadow-[1px_1px_0_0_#000]"
                    >
                      COPY INSTALL CMD
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {shadcnDeps.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] font-bold px-2.5 py-1 bg-white text-black border-2 border-black rounded-lg hover:bg-[#ffe135] transition-colors cursor-default"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Components ── */}
      <div className="w-full flex flex-col space-y-16 md:space-y-24 px-6 md:px-10 py-12 md:py-20 bg-zinc-50/30">
        {children}
      </div>
    </motion.div>
  );
};

// ─── ComponentBlock ───────────────────────────────────────────────────────────
export const ComponentBlock = ({
  title,
  subtitle,
  features = [],
  children,
}: ComponentBlockProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Component header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-l-4 border-[#ffe135] pl-5 py-1">
        <div>
          <h3 className="font-black text-2xl md:text-3xl tracking-tight leading-none mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base font-medium text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Info bar: Tags only */}
      {features.length > 0 && (
        <div className="flex flex-col gap-4 mb-8">
          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 w-full overflow-hidden">
              {features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 bg-white text-zinc-600 border-2 border-zinc-200 rounded-lg hover:border-black transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-[#ffe135] rounded-full ring-2 ring-[#ffe135]/20" />
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Component preview slot */}
      <div className="relative rounded-2xl p-1 ">{children}</div>
    </div>
  );
};
