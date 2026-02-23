"use client";

import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Engine, Container } from "@tsparticles/engine";
import CodePreview from "../../ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { sampleCodeHeros } from "@/data/code/heros";
import { ContentLayout } from "@/layout/ContentLayout";
import { Sparkles } from "lucide-react";

// ─── Particle Network Hero ─────────────────────────────────────────────────────
const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) return <></>;
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <Particles
        id="tsparticles-animation"
        particlesLoaded={particlesLoaded}
        options={{
          background: { color: { value: "#0d47a1" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 4,
              straight: false,
            },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

const HeroPreview: React.FC = () => (
  <div className="relative w-full overflow-hidden bg-[#0d47a1]">
    <ParticleBackground />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30 text-white text-center px-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold">
        🚀 Interactive Particle Network
      </div>
      <h1 className="text-3xl md:text-4xl font-black leading-tight">Animated Hero Sections</h1>
      <p className="text-white/70 text-sm max-w-sm leading-relaxed">
        Stunning particle backgrounds powered by tsParticles. Hover to repulse, click to add more.
      </p>
      <div className="flex gap-3 mt-2">
        <button className="px-5 py-2 bg-[#ffe135] text-black font-black rounded-lg border-2 border-white hover:scale-105 transition-transform text-sm">
          Get Started →
        </button>
        <button className="px-5 py-2 bg-white/10 text-white font-bold rounded-lg border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm text-sm">
          View Docs
        </button>
      </div>
    </div>
  </div>
);

// ─── Confetti Burst Preview ────────────────────────────────────────────────────
const ConfettiPreview: React.FC = () => {
  const [burst, setBurst] = useState(false);

  const colors = ["#ffe135", "#6366f1", "#ef4444", "#22c55e", "#f97316", "#ec4899"];
  const pieces = Array.from({ length: 30 });

  return (
    <div className="relative w-full h-[300px] border-4 border-black rounded-3xl bg-black flex flex-col items-center justify-center overflow-hidden shadow-[8px_8px_0_0_#ffe135]">
      {burst &&
        pieces.map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              background: colors[i % colors.length],
              top: "50%",
              left: "50%",
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `confetti-${i} 1s ease-out forwards`,
            }}
          />
        ))}
      <style>{`
        ${pieces
          .map(
            (_, i) => `
          @keyframes confetti-${i} {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% {
              transform: translate(
                calc(-50% + ${(Math.random() - 0.5) * 300}px),
                calc(-50% + ${(Math.random() - 0.5) * 300}px)
              ) scale(1) rotate(${Math.random() * 720}deg);
              opacity: 0;
            }
          }
        `
          )
          .join("")}
      `}</style>
      <div className="text-center z-10 space-y-4">
        <p className="text-white font-black text-xl uppercase tracking-tighter italic">
          CONFETTI_BURST
        </p>
        <p className="text-white/50 font-black text-xs uppercase tracking-widest">
          CSS Animation Triggered
        </p>
        <button
          onClick={() => {
            setBurst(false);
            setTimeout(() => setBurst(true), 10);
          }}
          className="px-8 py-3 bg-[#ffe135] text-black font-black border-4 border-white rounded-2xl shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase italic tracking-widest"
        >
          FIRE! 🎉
        </button>
      </div>
    </div>
  );
};

// ─── Floating Orbs Preview ─────────────────────────────────────────────────────
const FloatingOrbsPreview: React.FC = () => (
  <div className="relative w-full h-[300px] border-4 border-black rounded-3xl bg-zinc-950 overflow-hidden shadow-[8px_8px_0_0_#6366f1] flex items-center justify-center">
    {[
      {
        size: "w-40 h-40",
        color: "bg-indigo-500/30",
        blur: "blur-3xl",
        pos: "top-0 left-0",
        delay: "0s",
      },
      {
        size: "w-52 h-52",
        color: "bg-[#ffe135]/20",
        blur: "blur-3xl",
        pos: "bottom-0 right-0",
        delay: "1s",
      },
      {
        size: "w-32 h-32",
        color: "bg-pink-500/30",
        blur: "blur-2xl",
        pos: "top-10 right-10",
        delay: "0.5s",
      },
    ].map((orb, i) => (
      <div
        key={i}
        className={`absolute ${orb.size} ${orb.color} ${orb.blur} rounded-full ${orb.pos} animate-pulse`}
        style={{ animationDelay: orb.delay, animationDuration: "3s" }}
      />
    ))}
    <div className="relative z-10 text-center space-y-2">
      <p className="text-white font-black text-2xl uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
        FLOATING_ORBS
      </p>
      <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em]">
        Animated Glassmorphism Bg
      </p>
    </div>
  </div>
);

// ─── Typewriter Effect Preview ─────────────────────────────────────────────────
const TYPEWRITER_PHRASES = [
  "INITIALIZE_SYSTEM...",
  "LOADING_COMPONENTS...",
  "DEPLOY_READY.",
  "LAUNCH_SEQUENCE.",
];
const TypewriterPreview: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_PHRASES[idx];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIdx((i) => (i + 1) % TYPEWRITER_PHRASES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, idx]);

  return (
    <div className="w-full h-[300px] border-4 border-black rounded-3xl bg-black flex flex-col items-center justify-center gap-6 shadow-[8px_8px_0_0_#22c55e] overflow-hidden">
      <div className="w-full px-8 py-4 bg-zinc-900 border-y-4 border-black font-mono">
        <div className="flex items-center gap-2 mb-3">
          {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${c} border border-black`} />
          ))}
        </div>
        <p className="text-[#22c55e] font-mono font-black text-xl tracking-wider">
          $ {text}
          <span className="animate-pulse">_</span>
        </p>
      </div>
      <p className="text-white/30 font-black uppercase text-[10px] tracking-[0.3em]">
        TYPEWRITER_EFFECT // CSS ANIMATION
      </p>
    </div>
  );
};

// ─── Marquee Scroll Preview ────────────────────────────────────────────────────
const MarqueePreview: React.FC = () => {
  const tags = [
    "NEOBRUTALISM",
    "REACT",
    "TAILWIND",
    "FRAMER",
    "MOUP_UI",
    "TYPESCRIPT",
    "VITE",
    "SHADCN",
  ];
  return (
    <div className="w-full border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[8px_8px_0_0_#000]">
      <div className="overflow-hidden border-b-4 border-black py-4 bg-[#ffe135]">
        <div className="flex gap-6 animate-[marquee_8s_linear_infinite] w-max">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={i}
              className="font-black uppercase italic text-black text-sm whitespace-nowrap px-4 border-r-4 border-black"
            >
              ★ {t}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden py-4 bg-black">
        <div className="flex gap-6 animate-[marquee_12s_linear_infinite_reverse] w-max">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={i}
              className="font-black uppercase italic text-[#ffe135] text-sm whitespace-nowrap px-4 border-r-4 border-[#ffe135]/30"
            >
              ✦ {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// ─── Main Animation Page ───────────────────────────────────────────────────────
export const Animation = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Sparkles className="w-5 h-5" />}
      iconBg="bg-[#ffe135]"
      title="Animations"
      componentCount={5}
      description="High-performance animation components and interactive backgrounds for creating stunning, immersive visual experiences. From particle networks to typewriter effects and smooth marquee scrolls — all built with pure CSS or lightweight libraries."
      features={[
        "Interactive tsParticles network with hover repulse and click push",
        "Confetti burst triggered by user interaction",
        "Floating orb glassmorphism animated backgrounds",
        "Typewriter terminal effect with looping phrases",
        "Infinite dual-direction marquee scroll",
        "Zero extra dependencies (CSS-first approach where possible)",
      ]}
      dependencies={["@tsparticles/react", "@tsparticles/slim", "lucide-react"]}
      shadcnDeps={["button"]}
    >
      <div className="flex flex-col gap-16">
        {/* Particle Network Hero */}
        <ComponentBlock
          title="Particle Network Hero"
          subtitle="Dynamic network background with hero content overlay — interactive on hover & click"
          features={["tsParticles Engine", "Repulse on Hover", "Push on Click"]}
        >
          <CodePreview
            title="Particle Network Hero"
            code={sampleCodeHeros}
            preview={<HeroPreview />}
            language="javascript"
            nameFile="animation-particle-hero.tsx"
          />
        </ComponentBlock>

        {/* Confetti Burst */}
        <ComponentBlock
          title="Confetti Burst"
          subtitle="Click-triggered CSS confetti animation — pure CSS keyframes, no library needed"
          features={["Click Trigger", "Pure CSS", "Multi-Color"]}
        >
          <CodePreview
            title="Confetti Burst"
            code={sampleCodeHeros}
            preview={<ConfettiPreview />}
            language="tsx"
            nameFile="animation-confetti.tsx"
          />
        </ComponentBlock>

        {/* Floating Orbs */}
        <ComponentBlock
          title="Floating Orbs Background"
          subtitle="Animated glassmorphism orbs using Tailwind animate-pulse with staggered delays"
          features={["Glassmorphism", "animate-pulse", "Dark Mode"]}
        >
          <CodePreview
            title="Floating Orbs"
            code={sampleCodeHeros}
            preview={<FloatingOrbsPreview />}
            language="tsx"
            nameFile="animation-orbs.tsx"
          />
        </ComponentBlock>

        {/* Typewriter */}
        <ComponentBlock
          title="Typewriter Terminal"
          subtitle="Looping typewriter effect with blinking cursor — simulates a live terminal output"
          features={["Typewriter Loop", "Blinking Cursor", "React useState"]}
        >
          <CodePreview
            title="Typewriter"
            code={sampleCodeHeros}
            preview={<TypewriterPreview />}
            language="tsx"
            nameFile="animation-typewriter.tsx"
          />
        </ComponentBlock>

        {/* Marquee */}
        <ComponentBlock
          title="Infinite Marquee Scroll"
          subtitle="Dual-direction infinite scrolling ticker — fully CSS driven, zero dependencies"
          features={["Infinite Loop", "Dual Direction", "Pure CSS"]}
        >
          <CodePreview
            title="Marquee Scroll"
            code={sampleCodeHeros}
            preview={<MarqueePreview />}
            language="tsx"
            nameFile="animation-marquee.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
