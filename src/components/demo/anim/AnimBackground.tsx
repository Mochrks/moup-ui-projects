import type { ReactNode } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Layers } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const BgWrap = ({
  children,
  label,
  shadow = "#000",
}: {
  children: ReactNode;
  label: string;
  shadow?: string;
}) => (
  <div
    className="relative w-full h-[220px] border-4 border-black rounded-3xl overflow-hidden"
    style={{ boxShadow: `8px 8px 0 0 ${shadow}` }}
  >
    {children}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
      <p className="text-white font-black text-[9px] uppercase tracking-[0.3em] whitespace-nowrap">
        {label}
      </p>
    </div>
  </div>
);

const BgFloatingOrbs = () => (
  <BgWrap label="FLOATING_ORBS" shadow="#6366f1">
    <div className="absolute inset-0 bg-zinc-950">
      <div
        className="absolute w-36 h-36 bg-indigo-500/40 rounded-full blur-3xl animate-pulse top-0 left-0"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute w-48 h-48 bg-[#ffe135]/20 rounded-full blur-3xl animate-pulse bottom-0 right-0"
        style={{ animationDuration: "3s", animationDelay: "1s" }}
      />
      <div
        className="absolute w-28 h-28 bg-pink-500/40 rounded-full blur-2xl animate-pulse top-4 right-8"
        style={{ animationDuration: "3s", animationDelay: "0.5s" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic tracking-tight">
          GLASSMORPHISM
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgAnimGrid = () => (
  <BgWrap label="ANIMATED_DOT_GRID" shadow="#000">
    <div className="absolute inset-0 bg-black">
      <style>{`@keyframes gridmove{0%{background-position:0 0}100%{background-position:20px 20px}}`}</style>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle,#ffe135 1px,transparent 1px)",
          backgroundSize: "20px 20px",
          animation: "gridmove 2s linear infinite",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[4px_4px_0_#ffe135]">
          DOT_MATRIX
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgWavePattern = () => (
  <BgWrap label="CSS_WAVE_SVG" shadow="#6366f1">
    <div className="absolute inset-0 bg-indigo-600 overflow-hidden">
      <style>{`@keyframes waved{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      <div className="absolute bottom-0 w-[200%]" style={{ animation: "waved 4s linear infinite" }}>
        <svg viewBox="0 0 1000 80" className="w-full">
          <path
            d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,80 L0,80 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[4px_4px_0_#000]">
          WAVE_BG
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgGeometricShapes = () => (
  <BgWrap label="ROTATING_SHAPES" shadow="#ffe135">
    <div className="absolute inset-0 bg-[#ffe135] overflow-hidden flex items-center justify-center">
      <style>{`@keyframes gspin{to{transform:rotate(360deg)}} @keyframes gspinr{to{transform:rotate(-360deg)}}`}</style>
      {[
        { sz: 120, spd: "8s", op: 0.3 },
        { sz: 80, spd: "5s", op: 0.5, rev: true },
        { sz: 50, spd: "3s", op: 0.8 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute border-4 border-black"
          style={{
            width: s.sz,
            height: s.sz,
            animation: `${s.rev ? "gspinr" : "gspin"} ${s.spd} linear infinite`,
            opacity: s.op,
            transform: "rotate(45deg)",
          }}
        />
      ))}
      <h2 className="font-black text-4xl uppercase italic tracking-tighter z-10">GEO</h2>
    </div>
  </BgWrap>
);

const BgGradientMesh = () => (
  <BgWrap label="GRADIENT_MESH" shadow="#ec4899">
    <div className="absolute inset-0">
      <style>{`@keyframes meshmv{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}`}</style>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)",
          backgroundSize: "400% 400%",
          animation: "meshmv 8s ease infinite",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] tracking-tighter">
          MESH_GRADIENT
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgBubbleRise = () => (
  <BgWrap label="RISING_BUBBLES" shadow="#22c55e">
    <div className="absolute inset-0 bg-cyan-900 overflow-hidden">
      <style>{`@keyframes rise{0%{transform:translateY(100%) scale(0.5);opacity:0}50%{opacity:0.6}100%{transform:translateY(-100%) scale(1.2);opacity:0}}`}</style>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full border-2 border-white/30"
          style={{
            width: `${Math.random() * 20 + 8}px`,
            height: `${Math.random() * 20 + 8}px`,
            left: `${Math.random() * 90}%`,
            background: "rgba(255,255,255,0.1)",
            animation: `rise ${Math.random() * 3 + 2}s ease-in infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[2px_2px_0_#000]">
          BUBBLES
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgTwinkleStars = () => (
  <BgWrap label="TWINKLING_STARS" shadow="#000">
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <style>{`@keyframes twinkle{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.2;transform:scale(0.5)}}`}</style>
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 1}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[0_0_20px_#6366f1]">
          STARFIELD
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgAurora = () => (
  <BgWrap label="AURORA_EFFECT" shadow="#6366f1">
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <style>{`@keyframes aurora{0%,100%{opacity:0.6;transform:scale(1) rotate(0deg)}50%{opacity:1;transform:scale(1.1) rotate(5deg)}}`}</style>
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(99,102,241,0.8),transparent)",
          filter: "blur(60px)",
          animation: "aurora 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(236,72,153,0.6),transparent)",
          filter: "blur(50px)",
          animation: "aurora 8s ease-in-out infinite reverse",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[0_0_20px_rgba(99,102,241,0.9)]">
          AURORA
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgNoise = () => (
  <BgWrap label="NOISE_GRAIN_TEXTURE" shadow="#000">
    <div className="absolute inset-0 bg-[#ffe135]">
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise2)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(black 1px,transparent 1px),linear-gradient(90deg,black 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-black text-3xl uppercase italic tracking-tighter">
          NOISE_BG
        </h2>
      </div>
    </div>
  </BgWrap>
);

const BgGridPulse = () => (
  <BgWrap label="GRID_PULSE_CELLS" shadow="#6366f1">
    <div className="absolute inset-0 bg-black overflow-hidden">
      <style>{`@keyframes gpulse{0%,100%{opacity:0.05}50%{opacity:0.3}}`}</style>
      <div className="grid grid-cols-8 grid-rows-5 w-full h-full">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="border border-indigo-500/20"
            style={{
              background: "rgba(99,102,241,0.05)",
              animation: `gpulse ${1 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-2xl uppercase italic drop-shadow-[0_0_10px_rgba(99,102,241,1)]">
          GRID_PULSE
        </h2>
      </div>
    </div>
  </BgWrap>
);

export const AnimBackground = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Layers className="w-5 h-5" />}
      iconBg="bg-indigo-400"
      title="Background Animations"
      componentCount={10}
      description="10 stunning animated background effects — blurred orbs, dot grids, SVG waves, aurora lights, and grid pulse patterns."
      features={[
        "Floating blur orbs",
        "Moving radial dot grid",
        "SVG wave sweep",
        "Rotating diamonds",
        "Gradient mesh shift",
        "Rising bubbles",
        "Twinkling stars",
        "Aurora radial lights",
        "Noise grain texture",
        "Pulse opacity grid",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Floating Orbs" subtitle="Blurred pulsing orbs">
          <CodePreview
            title="Orbs"
            code={sampleCodeHeros}
            preview={<BgFloatingOrbs />}
            language="tsx"
            nameFile="bg-orbs.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Animated Dot Grid" subtitle="Moving radial dot pattern">
          <CodePreview
            title="Grid"
            code={sampleCodeHeros}
            preview={<BgAnimGrid />}
            language="tsx"
            nameFile="bg-grid.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="CSS Wave" subtitle="SVG wave flowing animation">
          <CodePreview
            title="Wave"
            code={sampleCodeHeros}
            preview={<BgWavePattern />}
            language="tsx"
            nameFile="bg-wave.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Rotating Geometry" subtitle="Nested rotating squares">
          <CodePreview
            title="Geo"
            code={sampleCodeHeros}
            preview={<BgGeometricShapes />}
            language="tsx"
            nameFile="bg-geo.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Gradient Mesh" subtitle="4-color diagonal gradient loop">
          <CodePreview
            title="Mesh"
            code={sampleCodeHeros}
            preview={<BgGradientMesh />}
            language="tsx"
            nameFile="bg-mesh.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Rising Bubbles" subtitle="Transparent bubbles floating up">
          <CodePreview
            title="Bubbles"
            code={sampleCodeHeros}
            preview={<BgBubbleRise />}
            language="tsx"
            nameFile="bg-bubbles.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Twinkling Stars" subtitle="Random star opacity pulse">
          <CodePreview
            title="Stars"
            code={sampleCodeHeros}
            preview={<BgTwinkleStars />}
            language="tsx"
            nameFile="bg-stars.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Aurora Effect" subtitle="Radial gradient blobs slow drift">
          <CodePreview
            title="Aurora"
            code={sampleCodeHeros}
            preview={<BgAurora />}
            language="tsx"
            nameFile="bg-aurora.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Noise Grain" subtitle="SVG turbulence on brutalist yellow">
          <CodePreview
            title="Noise"
            code={sampleCodeHeros}
            preview={<BgNoise />}
            language="tsx"
            nameFile="bg-noise.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Grid Pulse" subtitle="Cell-by-cell opacity pulse">
          <CodePreview
            title="Grid Pulse"
            code={sampleCodeHeros}
            preview={<BgGridPulse />}
            language="tsx"
            nameFile="bg-gridpulse.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
