import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Loader } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const LoadDotBounce = () => (
  <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes db{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-20px)}}`}</style>
    <div className="flex gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-[#ffe135] border-2 border-black"
          style={{ animation: `db 1.2s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
    <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">DOT_BOUNCE</p>
  </div>
);

const LoadCircleSpinner = () => (
  <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <div className="relative w-16 h-16">
      <svg className="w-full h-full animate-spin" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="4"
        />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#ffe135"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="60 88"
        />
      </svg>
    </div>
    <p className="text-white/60 font-black text-[10px] uppercase tracking-widest">SVG_SPINNER</p>
  </div>
);

const LoadProgressBar = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 1)), 40);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[140px] flex flex-col items-center justify-center gap-4">
      <div className="w-full h-6 bg-zinc-100 border-4 border-black rounded-sm overflow-hidden shadow-[3px_3px_0_0_#000]">
        <div
          className="h-full relative overflow-hidden"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg,#22c55e,#ffe135)",
            transition: "none",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,transparent,transparent 10px,rgba(255,255,255,0.5) 10px,rgba(255,255,255,0.5) 20px)",
            }}
          />
        </div>
      </div>
      <p className="font-black font-mono text-2xl">{pct}%</p>
    </div>
  );
};

const LoadSkeleton = () => (
  <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[140px] flex flex-col gap-3 justify-center">
    <style>{`@keyframes sk{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
    {["w-1/3 h-4", "w-full h-3", "w-5/6 h-3", "w-full h-16", "w-2/3 h-3"].map((cls, i) => (
      <div
        key={i}
        className={`${cls} rounded-lg border border-zinc-200`}
        style={{
          background: "linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%)",
          backgroundSize: "200% 100%",
          animation: "sk 1.5s linear infinite",
        }}
      />
    ))}
  </div>
);

const LoadPulseRing = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes pr{0%{transform:scale(0.8);opacity:1}100%{transform:scale(2.5);opacity:0}}`}</style>
    <div className="relative w-16 h-16 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-indigo-500"
          style={{ animation: `pr 1.8s ease-out infinite`, animationDelay: `${i * 0.6}s` }}
        />
      ))}
      <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white" />
    </div>
    <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">PULSE_RING</p>
  </div>
);

const LoadMorphBlob = () => (
  <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes blob{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}`}</style>
    <div
      className="w-20 h-20 bg-black border-4 border-black"
      style={{ animation: "blob 3s ease-in-out infinite" }}
    />
    <p className="font-black text-[10px] uppercase tracking-widest">MORPHING_BLOB</p>
  </div>
);

const LoadOrbitDots = () => (
  <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes orbit{0%{transform:rotate(0deg) translateX(28px) rotate(0deg)}100%{transform:rotate(360deg) translateX(28px) rotate(-360deg)}}`}</style>
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-[#ffe135] border-2 border-white" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#ef4444] border border-white/50"
          style={{ animation: `orbit 2s linear infinite`, animationDelay: `${i * (2 / 6)}s` }}
        />
      ))}
    </div>
    <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">ORBIT_DOTS</p>
  </div>
);

const LoadFlipSquares = () => (
  <div className="p-8 bg-indigo-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes flip{0%,100%{transform:perspective(120px) rotateX(0)}50%{transform:perspective(120px) rotateX(-180deg)}}`}</style>
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-7 h-7 bg-white border-2 border-black"
          style={{ animation: `flip 1.6s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
    <p className="text-white/60 font-black text-[10px] uppercase tracking-widest">FLIP_SQUARES</p>
  </div>
);

const LoadMusicBars = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes bar{0%,100%{height:8px}50%{height:40px}}`}</style>
    <div className="flex items-end gap-1.5 h-12">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="w-3 rounded-t-sm bg-[#22c55e] border border-[#16a34a]"
          style={{
            height: "8px",
            animation: `bar 0.8s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
    <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">MUSIC_BARS</p>
  </div>
);

const LoadBrutalist = () => {
  const [r, setR] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setR((x) => (x + 1) % 4), 300);
    return () => clearInterval(iv);
  }, []);
  const dirs = [
    { top: 0, left: "50%" },
    { top: "50%", right: 0 },
    { bottom: 0, left: "50%" },
    { top: "50%", left: 0 },
  ];
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[140px] flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12 border-4 border-black">
        <div
          className="absolute w-4 h-4 bg-black transition-all duration-200"
          style={dirs[r] as React.CSSProperties}
        />
      </div>
      <p className="font-black text-[10px] uppercase tracking-widest">BRUTALIST_LOADER</p>
    </div>
  );
};

export const AnimLoading = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Loader className="w-5 h-5" />}
      iconBg="bg-blue-400"
      title="Loading Animations"
      componentCount={10}
      description="10 diverse loading states — dot bounces, SVG spinners, skeleton shimmer, pulse rings, and brutalist corner loaders."
      features={[
        "Dot bounce stagger",
        "SVG arc spinner",
        "Striped progress bar",
        "Skeleton shimmer",
        "Pulse ring waves",
        "Morphing blob",
        "Orbit dot system",
        "3×3 flip squares",
        "Music equalizer bars",
        "Brutalist corner square",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Dot Bounce" subtitle="4 dots stagger bounce">
          <CodePreview
            title="Dot"
            code={sampleCodeHeros}
            preview={<LoadDotBounce />}
            language="tsx"
            nameFile="load-dot.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="SVG Spinner" subtitle="Rotating SVG arc">
          <CodePreview
            title="Spinner"
            code={sampleCodeHeros}
            preview={<LoadCircleSpinner />}
            language="tsx"
            nameFile="load-spinner.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Progress Bar" subtitle="Animated striped fill">
          <CodePreview
            title="Progress"
            code={sampleCodeHeros}
            preview={<LoadProgressBar />}
            language="tsx"
            nameFile="load-progress.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Skeleton Shimmer" subtitle="Shimmer sweep card skeleton">
          <CodePreview
            title="Skeleton"
            code={sampleCodeHeros}
            preview={<LoadSkeleton />}
            language="tsx"
            nameFile="load-skeleton.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Pulse Rings" subtitle="Expanding concentric rings">
          <CodePreview
            title="Pulse"
            code={sampleCodeHeros}
            preview={<LoadPulseRing />}
            language="tsx"
            nameFile="load-pulse.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Morphing Blob" subtitle="CSS border-radius morphing">
          <CodePreview
            title="Blob"
            code={sampleCodeHeros}
            preview={<LoadMorphBlob />}
            language="tsx"
            nameFile="load-blob.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Orbit Dots" subtitle="Dots orbiting a nucleus">
          <CodePreview
            title="Orbit"
            code={sampleCodeHeros}
            preview={<LoadOrbitDots />}
            language="tsx"
            nameFile="load-orbit.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Flip Squares" subtitle="3×3 grid perspective flip">
          <CodePreview
            title="Flip"
            code={sampleCodeHeros}
            preview={<LoadFlipSquares />}
            language="tsx"
            nameFile="load-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Music Bars" subtitle="Equalizer bar animation">
          <CodePreview
            title="Bars"
            code={sampleCodeHeros}
            preview={<LoadMusicBars />}
            language="tsx"
            nameFile="load-bars.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Brutalist Loader" subtitle="Corner square cycling around border">
          <CodePreview
            title="Brutalist"
            code={sampleCodeHeros}
            preview={<LoadBrutalist />}
            language="tsx"
            nameFile="load-brutalist.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
