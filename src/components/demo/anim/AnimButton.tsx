import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Zap } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const BtnNeonPulse = () => (
  <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[160px] flex items-center justify-center">
    <style>{`@keyframes neonpulse{0%,100%{box-shadow:0 0 5px #6366f1,0 0 10px #6366f1,0 0 20px #6366f1}50%{box-shadow:0 0 10px #6366f1,0 0 30px #6366f1,0 0 60px #6366f1}}`}</style>
    <button
      className="px-8 py-4 border-4 border-[#6366f1] rounded-2xl font-black text-xl uppercase italic text-[#6366f1] cursor-pointer hover:bg-indigo-950/50 transition-colors"
      style={{ animation: "neonpulse 2s ease-in-out infinite" }}
    >
      NEON PULSE
    </button>
  </div>
);

const BtnFillSweep = () => (
  <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[160px] flex flex-col items-center justify-center gap-4">
    <style>{`.fillsweep{position:relative;overflow:hidden;border:4px solid black;cursor:pointer;transition:color 0.4s}.fillsweep::before{content:'';position:absolute;inset:0;background:#000;transform:translateX(-100%);transition:transform 0.4s ease-out}.fillsweep:hover::before{transform:translateX(0)}.fillsweep span{position:relative;z-index:1}.fillsweep:hover span{color:white}`}</style>
    <button className="fillsweep px-8 py-4 rounded-xl font-black text-xl uppercase italic text-black bg-white">
      <span>FILL LEFT →</span>
    </button>
    <style>{`.fillbt::before{transform:translateY(100%)}.fillbt:hover::before{transform:translateY(0)}`}</style>
    <button className="fillbt fillsweep px-8 py-4 rounded-xl font-black text-xl uppercase italic text-black bg-white">
      <span>FILL UP ↑</span>
    </button>
  </div>
);

const BtnShake = () => {
  const [shake, setShake] = useState(false);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-6px)}20%,40%,60%,80%{transform:translateX(6px)}}`}</style>
      <button
        className="px-8 py-4 border-4 border-black rounded-2xl bg-black text-[#ffe135] font-black text-xl uppercase italic cursor-pointer"
        style={{ animation: shake ? "shake 0.6s ease-out" : "none" }}
        onClick={() => {
          setShake(false);
          setTimeout(() => setShake(true), 10);
        }}
      >
        SHAKE IT!
      </button>
      <p className="text-black/40 font-black text-[10px] uppercase tracking-widest">
        CLICK TO SHAKE
      </p>
    </div>
  );
};

const BtnElastic = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <style>{`@keyframes elastic{0%{transform:scale(1)}30%{transform:scale(0.85,1.15)}50%{transform:scale(1.1,0.9)}70%{transform:scale(0.97,1.03)}100%{transform:scale(1)}}`}</style>
      <button
        className="px-8 py-4 border-4 border-black rounded-2xl bg-[#ffe135] font-black text-xl uppercase italic cursor-pointer active:scale-95"
        style={{ animation: pressed ? "elastic 0.5s ease-out" : "none" }}
        onClick={() => {
          setPressed(false);
          setTimeout(() => setPressed(true), 10);
        }}
      >
        ELASTIC!
      </button>
      <p className="text-white/50 font-black text-[10px] uppercase tracking-widest">
        CLICK // elastic bounce
      </p>
    </div>
  );
};

const BtnGradientRotate = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[160px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes brot{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    <button
      className="px-8 py-4 border-4 border-black rounded-2xl font-black text-xl uppercase italic text-white cursor-pointer"
      style={{
        background: "linear-gradient(-45deg,#6366f1,#ec4899,#ef4444,#ffe135)",
        backgroundSize: "300% 300%",
        animation: "brot 3s ease infinite",
      }}
    >
      GRADIENT BTN
    </button>
    <p className="text-white/30 font-black text-[10px] uppercase tracking-widest">
      ANIMATED GRADIENT // background-position
    </p>
  </div>
);

const BtnLoadingState = () => {
  const [st, setSt] = useState<"idle" | "loading" | "done">("idle");
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <button
        className="relative px-8 py-4 border-4 border-black rounded-2xl font-black text-xl uppercase italic cursor-pointer min-w-[180px] flex items-center justify-center gap-3 transition-all"
        style={{
          background: st === "done" ? "#22c55e" : st === "loading" ? "#ffe135" : "black",
          color: st === "idle" ? "white" : "black",
        }}
        onClick={() => {
          if (st === "idle") {
            setSt("loading");
            setTimeout(() => setSt("done"), 1500);
            setTimeout(() => setSt("idle"), 3000);
          }
        }}
      >
        {st === "loading" && (
          <div className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin border-[3px]" />
        )}
        {st === "idle" ? "SUBMIT" : st === "loading" ? "SAVING…" : "✓ SAVED!"}
      </button>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest">
        CLICK // state machine button
      </p>
    </div>
  );
};

const BtnGroupToggle = () => {
  const [active, setActive] = useState("A");
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <div className="flex border-4 border-black rounded-2xl overflow-hidden">
        {["A", "B", "C", "D"].map((l) => (
          <button
            key={l}
            onClick={() => setActive(l)}
            className="px-6 py-3 font-black text-lg uppercase italic cursor-pointer transition-all duration-200 border-r-4 border-black last:border-r-0"
            style={{
              background: active === l ? "#000" : "white",
              color: active === l ? "#ffe135" : "black",
              transform: active === l ? "scale(1)" : "scale(1)",
            }}
          >
            {l}
          </button>
        ))}
      </div>
      <p className="text-black/40 font-black text-[10px] uppercase tracking-widest">
        ACTIVE: {active}
      </p>
    </div>
  );
};

const BtnRippleExplosion = () => {
  const [rips, setRips] = useState<{ id: number; x: number; y: number }[]>([]);
  return (
    <div className="p-8 bg-pink-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <style>{`@keyframes xrip{0%{transform:translate(-50%,-50%) scale(0);opacity:0.7}100%{transform:translate(-50%,-50%) scale(8);opacity:0}}`}</style>
      <button
        className="relative overflow-hidden px-8 py-4 border-4 border-black rounded-2xl bg-black text-white font-black text-xl uppercase italic cursor-pointer w-48"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const id = Date.now();
          setRips((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
          setTimeout(() => setRips((rs) => rs.filter((r) => r.id !== id)), 600);
        }}
      >
        {rips.map((r) => (
          <span
            key={r.id}
            className="absolute w-12 h-12 bg-white/30 rounded-full pointer-events-none"
            style={{ left: r.x, top: r.y, animation: "xrip 0.6s linear" }}
          />
        ))}
        EXPLODE!
      </button>
    </div>
  );
};

const BtnCounterBtn = () => {
  const [c, setC] = useState(0);
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[160px] flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setC((x) => Math.max(0, x - 1))}
          className="w-12 h-12 border-4 border-zinc-600 rounded-xl text-white font-black text-2xl cursor-pointer hover:border-white transition-colors"
        >
          −
        </button>
        <div className="min-w-[80px] text-center">
          <span
            key={c}
            className="font-black font-mono text-5xl text-[#ffe135]"
            style={{ display: "inline-block", animation: "scaleIn 0.15s ease-out" }}
          >
            {c}
          </span>
        </div>
        <button
          onClick={() => setC((x) => x + 1)}
          className="w-12 h-12 border-4 border-[#6366f1] rounded-xl text-[#6366f1] font-black text-2xl cursor-pointer hover:bg-indigo-900/50 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={() => setC(0)}
        className="text-white/30 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-white/60 transition-colors"
      >
        RESET
      </button>
    </div>
  );
};

const BtnFloatingAction = () => {
  const [open, setOpen] = useState(false);
  const actions = [
    ["➕", "ADD", "#22c55e"],
    ["✎", "EDIT", "#6366f1"],
    ["✕", "DEL", "#ef4444"],
  ];
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[260px] flex items-end justify-center pb-8 relative">
      <div className="relative flex flex-col items-center gap-3">
        {open &&
          actions.map(([icon, label, color], i) => (
            <div
              key={label}
              className="flex items-center gap-2"
              style={{ animation: `fadeup 0.3s ease-out ${i * 0.05}s both` }}
            >
              <span className="font-black text-xs uppercase bg-black text-white px-2 py-1 rounded-lg border-2 border-black">
                {label}
              </span>
              <button
                className="w-10 h-10 border-4 border-black rounded-full font-black flex items-center justify-center text-white cursor-pointer"
                style={{ background: color }}
              >
                {icon}
              </button>
            </div>
          ))}
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 border-4 border-black rounded-full bg-black text-white font-black text-2xl cursor-pointer shadow-[4px_4px_0_0_#000] flex items-center justify-center transition-all duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </button>
      </div>
      <style>{`@keyframes fadeup{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
};

export const AnimButton = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Zap className="w-5 h-5" />}
      iconBg="bg-rose-400"
      title="Button Animations"
      componentCount={10}
      description="10 premium button animation patterns — neon pulse, fill sweep, shake, elastic, gradient rotate, loading state, and FAB menu."
      features={[
        "Neon box-shadow pulse",
        "Fill sweep left/up",
        "Click shake effect",
        "Elastic squash-stretch",
        "Animated gradient fill",
        "State machine loading",
        "Group toggle selector",
        "Ripple explosion",
        "Counter with pop",
        "Floating action menu",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Neon Pulse" subtitle="Box-shadow pulsing neon glow loop">
          <CodePreview
            title="Neon"
            code={sampleCodeHeros}
            preview={<BtnNeonPulse />}
            language="tsx"
            nameFile="btn-neon.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Fill Sweep" subtitle="Background fills from left/bottom">
          <CodePreview
            title="Fill"
            code={sampleCodeHeros}
            preview={<BtnFillSweep />}
            language="tsx"
            nameFile="btn-fill.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Shake Effect" subtitle="Click to trigger shake keyframe">
          <CodePreview
            title="Shake"
            code={sampleCodeHeros}
            preview={<BtnShake />}
            language="tsx"
            nameFile="btn-shake.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Elastic Bounce" subtitle="Squash and stretch on click">
          <CodePreview
            title="Elastic"
            code={sampleCodeHeros}
            preview={<BtnElastic />}
            language="tsx"
            nameFile="btn-elastic.tsx"
          />
        </ComponentBlock>
        <ComponentBlock
          title="Gradient Rotate"
          subtitle="CSS gradient animates background-position"
        >
          <CodePreview
            title="Gradient"
            code={sampleCodeHeros}
            preview={<BtnGradientRotate />}
            language="tsx"
            nameFile="btn-gradient.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Loading State" subtitle="Idle → loading → done state machine">
          <CodePreview
            title="Loading"
            code={sampleCodeHeros}
            preview={<BtnLoadingState />}
            language="tsx"
            nameFile="btn-loading.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Group Toggle" subtitle="Segmented control with active state">
          <CodePreview
            title="Toggle"
            code={sampleCodeHeros}
            preview={<BtnGroupToggle />}
            language="tsx"
            nameFile="btn-toggle.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Ripple Explosion" subtitle="Click ripple with scale animation">
          <CodePreview
            title="Ripple"
            code={sampleCodeHeros}
            preview={<BtnRippleExplosion />}
            language="tsx"
            nameFile="btn-ripple.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Counter Button" subtitle="Increment/decrement with pop animation">
          <CodePreview
            title="Counter"
            code={sampleCodeHeros}
            preview={<BtnCounterBtn />}
            language="tsx"
            nameFile="btn-counter.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="FAB Menu" subtitle="Floating action button with speed dial">
          <CodePreview
            title="FAB"
            code={sampleCodeHeros}
            preview={<BtnFloatingAction />}
            language="tsx"
            nameFile="btn-fab.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
