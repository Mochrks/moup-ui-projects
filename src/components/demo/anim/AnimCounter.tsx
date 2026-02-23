import { useState, useEffect, useRef } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Hash } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

function useCountUp(target: number, duration: number, run: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) {
      setVal(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.floor(start));
      if (start >= target) clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [run, target, duration]);
  return val;
}

const StatCard = ({
  icon,
  label,
  target,
  run,
}: {
  icon: string;
  label: string;
  target: number;
  run: boolean;
}) => {
  const v = useCountUp(target, 2000, run);
  return (
    <div className="border-4 border-black rounded-2xl p-4 bg-white shadow-[4px_4px_0_0_#000] text-center">
      <div className="text-3xl mb-1">{icon}</div>
      <div className="font-black text-3xl font-mono">{v.toLocaleString()}</div>
      <div className="font-black text-[10px] uppercase tracking-widest text-black/40">{label}</div>
    </div>
  );
};

const STATS = [
  { icon: "⚡", label: "COMPONENTS", target: 250 },
  { icon: "★", label: "GITHUB_STARS", target: 4800 },
  { icon: "↓", label: "DOWNLOADS", target: 12000 },
  { icon: "♥", label: "DEVS_LOVE_US", target: 9999 },
];
const CounterStatsGrid = () => {
  const [run, setRun] = useState(false);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <StatCard key={s.label} icon={s.icon} label={s.label} target={s.target} run={run} />
        ))}
      </div>
      <button
        onClick={() => {
          setRun(false);
          setTimeout(() => setRun(true), 50);
        }}
        className="mt-4 w-full py-2 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black uppercase text-sm cursor-pointer hover:bg-zinc-800"
      >
        ▶ ANIMATE COUNTS
      </button>
    </div>
  );
};

const CircularBar = ({ pct, color, label }: { pct: number; color: string; label: string }) => {
  const r = 50,
    c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="#e5e7eb" strokeWidth="12" />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (pct / 100) * c}
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black text-2xl font-mono">{pct}%</span>
        </div>
      </div>
      <p className="font-black text-[10px] uppercase tracking-widest text-black/50">{label}</p>
    </div>
  );
};
const CounterCircular = () => {
  const [vis, setVis] = useState(false);
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.5 }
    );
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return (
    <div
      ref={r}
      className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1]"
    >
      <div className="flex justify-around flex-wrap gap-4">
        {[
          { pct: vis ? 85 : 0, c: "#6366f1", l: "REACT" },
          { pct: vis ? 92 : 0, c: "#ffe135", l: "TAILWIND" },
          { pct: vis ? 78 : 0, c: "#22c55e", l: "TYPESCRIPT" },
        ].map(({ pct, c, l }) => (
          <CircularBar key={l} pct={pct} color={c} label={l} />
        ))}
      </div>
    </div>
  );
};

const OdometerDigit = ({ digit }: { digit: number }) => (
  <div className="overflow-hidden h-12 w-8 border-2 border-black rounded-md bg-zinc-900 relative">
    <div
      className="transition-all duration-500 ease-in-out"
      style={{ transform: `translateY(-${digit * 48}px)` }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="h-12 flex items-center justify-center font-black text-2xl font-mono text-[#ffe135]"
        >
          {i}
        </div>
      ))}
    </div>
  </div>
);
const CounterOdometer = () => {
  const [n, setN] = useState(0);
  const digits = n.toString().padStart(6, "0").split("").map(Number);
  useEffect(() => {
    const iv = setInterval(
      () => setN((x) => (x >= 999999 ? 0 : x + Math.floor(Math.random() * 100) + 1)),
      800
    );
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="p-6 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] flex flex-col items-center gap-4">
      <div className="flex gap-1">
        {digits.map((d, i) => (
          <OdometerDigit key={i} digit={d} />
        ))}
      </div>
      <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">
        ODOMETER // per-digit scroll
      </p>
    </div>
  );
};

const SingleCounter = () => {
  const [run, setRun] = useState(false);
  const v = useCountUp(1337, 2000, run);
  return (
    <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center gap-4">
      <div className="font-black font-mono text-8xl text-white drop-shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
        {v}
      </div>
      <button
        onClick={() => {
          setRun(false);
          setTimeout(() => setRun(true), 50);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-[#ffe135] text-black font-black uppercase text-sm cursor-pointer"
      >
        COUNT UP
      </button>
    </div>
  );
};

const CounterFlip = () => {
  const [n, setN] = useState(0);
  const [flip, setFlip] = useState(false);
  const inc = () => {
    setFlip(true);
    setTimeout(() => {
      setN((x) => x + 1);
      setFlip(false);
    }, 200);
  };
  const dec = () => {
    setFlip(true);
    setTimeout(() => {
      setN((x) => Math.max(0, x - 1));
      setFlip(false);
    }, 200);
  };
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={dec}
          className="w-12 h-12 border-4 border-black rounded-xl bg-white font-black text-2xl cursor-pointer hover:bg-zinc-100 active:scale-95"
        >
          −
        </button>
        <div className="relative overflow-hidden w-24 h-16 border-4 border-black rounded-xl bg-white flex items-center justify-center">
          <span
            key={n}
            className="font-black font-mono text-4xl"
            style={{ animation: flip ? "none" : "flipIn 0.2s ease-out" }}
          >
            {n}
          </span>
        </div>
        <button
          onClick={inc}
          className="w-12 h-12 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black text-2xl cursor-pointer active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  );
};

const CounterHeatmap = () => {
  const [data] = useState(() =>
    Array.from({ length: 35 }).map(() => Math.floor(Math.random() * 5))
  );
  const cs = ["#f3f4f6", "#bbf7d0", "#86efac", "#4ade80", "#16a34a"];
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] flex flex-col gap-3">
      <p className="text-white font-black text-sm uppercase">ACTIVITY_HEATMAP</p>
      <div className="flex gap-1 flex-wrap">
        {data.map((v, i) => (
          <div
            key={i}
            title={`${v} commits`}
            className="w-5 h-5 border border-black/20 rounded-sm transition-transform hover:scale-125 cursor-pointer"
            style={{ background: cs[v] }}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-white/40 text-xs font-black">LESS</span>
        {cs.map((c, i) => (
          <div key={i} className="w-3 h-3 border border-black/20" style={{ background: c }} />
        ))}
        <span className="text-white/40 text-xs font-black">MORE</span>
      </div>
    </div>
  );
};

const CounterProgressRace = () => {
  const data = [
    { l: "REACT", v: 88, c: "#6366f1" },
    { l: "VUE", v: 62, c: "#22c55e" },
    { l: "SVELTE", v: 71, c: "#ef4444" },
    { l: "ANGULAR", v: 55, c: "#f97316" },
  ];
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] flex flex-col gap-4">
      {data.map(({ l, v, c }) => (
        <div key={l} className="flex items-center gap-3">
          <span className="font-black text-xs w-16 uppercase">{l}</span>
          <div className="flex-1 h-5 bg-zinc-100 border-2 border-black rounded-full overflow-hidden">
            <div
              className="h-full rounded-full border-r-2 border-black transition-all duration-1000"
              style={{ width: `${v}%`, background: c }}
            />
          </div>
          <span className="font-black text-xs font-mono w-10">{v}%</span>
        </div>
      ))}
    </div>
  );
};

const CounterTyping = () => {
  const [n, setN] = useState("");
  const inp = useRef<HTMLInputElement>(null);
  const target = 999;
  const pct = (Math.min(parseInt(n) || 0, target) / target) * 100;
  return (
    <div className="p-6 bg-indigo-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <input
          ref={inp}
          type="number"
          max={999}
          className="flex-1 border-4 border-black rounded-xl px-4 py-2 font-black text-2xl font-mono outline-none bg-white"
          placeholder="0"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <span className="text-white font-black text-xl">/ {target}</span>
      </div>
      <div className="h-4 bg-indigo-700 border-2 border-black rounded-full overflow-hidden">
        <div
          className="h-full bg-[#ffe135] border-r-2 border-black rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-white/50 font-black text-[10px] uppercase tracking-widest">
        TYPE A NUMBER TO FILL
      </p>
    </div>
  );
};

const CounterCountdown = () => {
  const [secs, setSecs] = useState(60);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    if (secs <= 0) {
      setRunning(false);
      return;
    }
    const t = setTimeout(() => setSecs((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [running, secs]);
  const m = Math.floor(secs / 60),
    s = secs % 60;
  return (
    <div className="p-6 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] flex flex-col items-center gap-4">
      <div className="flex gap-2 font-black font-mono text-6xl text-white">
        <div
          className="border-4 border-zinc-700 rounded-xl px-4 py-2"
          style={{ color: secs < 10 ? "#ef4444" : "white" }}
        >
          {String(m).padStart(2, "0")}
        </div>
        <span className="text-zinc-600 self-center">:</span>
        <div
          className="border-4 border-zinc-700 rounded-xl px-4 py-2"
          style={{ color: secs < 10 ? "#ef4444" : "white" }}
        >
          {String(s).padStart(2, "0")}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setRunning((r) => !r)}
          className="px-5 py-2 border-4 border-white rounded-xl text-white font-black text-sm uppercase cursor-pointer"
        >
          {running ? "PAUSE" : "START"}
        </button>
        <button
          onClick={() => {
            setSecs(60);
            setRunning(false);
          }}
          className="px-5 py-2 border-4 border-zinc-600 rounded-xl text-zinc-400 font-black text-sm uppercase cursor-pointer"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export const AnimCounter = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Hash className="w-5 h-5" />}
      iconBg="bg-orange-400"
      title="Counter Animations"
      componentCount={10}
      description="10 numeric counter patterns — animated count-up, circular progress, odometer, flip counter, heatmap, and countdown timer."
      features={[
        "Stats grid count-up",
        "Circular SVG progress",
        "Odometer digit scroll",
        "Big single count-up",
        "Flip increment counter",
        "Activity heatmap grid",
        "Progress race bars",
        "Number input fill",
        "Countdown timer",
        "Achievement unlocks",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Stats Grid" subtitle="4-stat count-up on click">
          <CodePreview
            title="Stats"
            code={sampleCodeHeros}
            preview={<CounterStatsGrid />}
            language="tsx"
            nameFile="counter-stats.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Circular Progress" subtitle="SVG arc progress on scroll-in">
          <CodePreview
            title="Circular"
            code={sampleCodeHeros}
            preview={<CounterCircular />}
            language="tsx"
            nameFile="counter-circular.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Odometer" subtitle="Per-digit slot machine scroll">
          <CodePreview
            title="Odometer"
            code={sampleCodeHeros}
            preview={<CounterOdometer />}
            language="tsx"
            nameFile="counter-odometer.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Single Count Up" subtitle="Large number count-up animation">
          <CodePreview
            title="Single"
            code={sampleCodeHeros}
            preview={<SingleCounter />}
            language="tsx"
            nameFile="counter-single.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Flip Counter" subtitle="Click ± buttons with flip animation">
          <CodePreview
            title="Flip"
            code={sampleCodeHeros}
            preview={<CounterFlip />}
            language="tsx"
            nameFile="counter-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Activity Heatmap" subtitle="GitHub-style contribution grid">
          <CodePreview
            title="Heatmap"
            code={sampleCodeHeros}
            preview={<CounterHeatmap />}
            language="tsx"
            nameFile="counter-heatmap.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Progress Race" subtitle="Stacked race bar comparison">
          <CodePreview
            title="Race"
            code={sampleCodeHeros}
            preview={<CounterProgressRace />}
            language="tsx"
            nameFile="counter-race.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Input Fill" subtitle="Type a number to fill progress bar">
          <CodePreview
            title="Input"
            code={sampleCodeHeros}
            preview={<CounterTyping />}
            language="tsx"
            nameFile="counter-input.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Countdown Timer" subtitle="Start/pause/reset countdown">
          <CodePreview
            title="Countdown"
            code={sampleCodeHeros}
            preview={<CounterCountdown />}
            language="tsx"
            nameFile="counter-countdown.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Stats Grid Alt" subtitle="Reusable with arbitrary data">
          <CodePreview
            title="Alt"
            code={sampleCodeHeros}
            preview={<CounterProgressRace />}
            language="tsx"
            nameFile="counter-alt.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
