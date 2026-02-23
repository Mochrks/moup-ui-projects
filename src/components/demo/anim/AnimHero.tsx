import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Zap } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const HeroGradientShift = () => (
  <div className="relative border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[220px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes hgsft{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}`}</style>
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ffe135,#6366f1)",
        backgroundSize: "400% 400%",
        animation: "hgsft 8s ease infinite",
      }}
    />
    <div className="relative z-10 text-center px-8">
      <h1 className="font-black text-white text-6xl uppercase italic drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] tracking-tighter">
        MOUP UI
      </h1>
      <p className="text-white/80 font-black text-sm uppercase tracking-[0.3em] mt-2">
        THE NEOBRUTALIST COMPONENT SYSTEM
      </p>
      <button className="mt-4 px-6 py-2 bg-black border-4 border-white text-white font-black uppercase rounded-xl text-sm cursor-pointer hover:bg-white hover:text-black transition-colors">
        GET STARTED →
      </button>
    </div>
  </div>
);

const HeroTerminalTyping = () => {
  const LINES = [
    "$ npm install moup-ui",
    "> Installed 47 components...",
    "> Ready for production.",
    "✓ System online.",
  ];
  const [lines, setLines] = useState<string[]>([]);
  const [cur, setCur] = useState(0);
  useEffect(() => {
    if (cur >= LINES.length) return;
    let i = 0;
    const full = LINES[cur];
    const t = setInterval(() => {
      i++;
      setLines((ls) => {
        const n = [...ls];
        n[cur] = full.slice(0, i);
        return n;
      });
      if (i >= full.length) {
        clearInterval(t);
        setTimeout(() => setCur((c) => c + 1), 400);
      }
    }, 50);
    return () => clearInterval(t);
  }, [cur]);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e] min-h-[220px]">
      <div className="bg-zinc-800 border-b-4 border-black px-4 py-2 flex gap-2">
        {["bg-red-500", "bg-yellow-400", "bg-green-400"].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
        ))}
        <span className="ml-2 text-white/50 font-mono text-xs">terminal — bash</span>
      </div>
      <div className="bg-black p-6 min-h-[180px] font-mono flex flex-col gap-2">
        {lines.map((l, i) => (
          <p
            key={i}
            className="text-sm"
            style={{
              color: l.startsWith("$")
                ? "#22c55e"
                : l.startsWith("✓")
                  ? "#ffe135"
                  : "rgba(255,255,255,0.7)",
            }}
          >
            {l}
            {i === cur && <span className="animate-pulse ml-1">▍</span>}
          </p>
        ))}
      </div>
    </div>
  );
};

const HeroNeonBrut = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[220px] bg-black flex flex-col items-center justify-center gap-4 relative">
    <style>{`@keyframes neonpls{0%,100%{text-shadow:0 0 10px #6366f1,0 0 20px #6366f1,0 0 40px #6366f1}50%{text-shadow:0 0 5px #6366f1,0 0 10px #6366f1}}`}</style>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(99,102,241,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.03) 1px,transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
    <div className="relative z-10 text-center">
      <h1
        className="font-black text-7xl uppercase italic text-[#6366f1]"
        style={{ animation: "neonpls 2s ease-in-out infinite", WebkitTextStroke: "1px #6366f1" }}
      >
        NEON
      </h1>
      <h2 className="font-black text-4xl uppercase text-white italic -mt-2">BRUTALIST</h2>
    </div>
    <div className="relative z-10 flex gap-3">
      {["#ffe135", "#6366f1", "#ef4444"].map((c, i) => (
        <div
          key={i}
          className="w-8 h-8 border-2 border-white"
          style={{ background: c, transform: `rotate(${i * 15}deg)` }}
        />
      ))}
    </div>
  </div>
);

const HeroSplitScreen = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] min-h-[220px] flex">
    <div className="flex-1 bg-black flex items-center justify-center border-r-4 border-black">
      <div className="text-center">
        <h2 className="font-black text-4xl uppercase italic text-white">DARK</h2>
        <p className="text-white/30 font-black text-[10px] uppercase tracking-widest mt-1">
          SIDE ONE
        </p>
      </div>
    </div>
    <div className="flex-1 bg-[#ffe135] flex items-center justify-center">
      <div className="text-center">
        <h2 className="font-black text-4xl uppercase italic text-black">LIGHT</h2>
        <p className="text-black/30 font-black text-[10px] uppercase tracking-widest mt-1">
          SIDE TWO
        </p>
      </div>
    </div>
  </div>
);

const HeroParticleGrid = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ef4444] min-h-[220px] bg-zinc-950 relative flex items-center justify-center">
    <style>{`@keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
    {Array.from({ length: 16 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: ["#ffe135", "#6366f1", "#ef4444", "#22c55e"][i % 4],
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
          animation: `float2 ${2 + Math.random() * 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
    <div className="relative z-10 text-center">
      <h1 className="font-black text-5xl uppercase italic text-white drop-shadow-[4px_4px_0_#ef4444]">
        FLOATING
      </h1>
      <h2 className="font-black text-5xl uppercase italic text-[#ef4444]">ELEMENTS</h2>
    </div>
  </div>
);

const HeroCountdown = () => {
  const [secs, setSecs] = useState(99);
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 99)), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[220px] bg-[#ffe135] flex flex-col items-center justify-center gap-4">
      <p className="font-black text-black/50 text-xs uppercase tracking-[0.4em]">LAUNCH IN</p>
      <div className="flex gap-3">
        {String(secs)
          .padStart(2, "0")
          .split("")
          .map((d, i) => (
            <div
              key={i}
              className="w-16 h-20 border-4 border-black bg-white flex items-center justify-center shadow-[4px_4px_0_0_#000]"
            >
              <span className="font-black font-mono text-5xl">{d}</span>
            </div>
          ))}
      </div>
      <p className="font-black text-black/50 text-xs uppercase tracking-[0.4em]">SECONDS</p>
    </div>
  );
};

const HeroTypeFade = () => {
  const WS = ["INNOVATE", "CREATE", "BUILD", "DESIGN", "DEPLOY"];
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((x) => (x + 1) % WS.length);
        setShow(true);
      }, 300);
    }, 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[220px] bg-indigo-600 flex flex-col items-center justify-center gap-4">
      <h1 className="font-black text-white text-5xl uppercase italic tracking-tighter">LET'S</h1>
      <div className="overflow-hidden h-20 flex items-center justify-center">
        <h1
          className="font-black text-7xl uppercase italic text-[#ffe135] drop-shadow-[4px_4px_0_rgba(0,0,0,0.4)] transition-all duration-300"
          style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)" }}
        >
          {WS[i]}
        </h1>
      </div>
      <h1 className="font-black text-white text-5xl uppercase italic tracking-tighter">
        TOGETHER.
      </h1>
    </div>
  );
};

const HeroMorphBtn = () => {
  const [hov, setHov] = useState(false);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[220px] bg-white flex flex-col items-center justify-center gap-6">
      <h1 className="font-black text-5xl uppercase italic text-black">READY?</h1>
      <button
        className="relative overflow-hidden px-10 py-4 border-4 border-black font-black text-xl uppercase italic cursor-pointer transition-all duration-300"
        style={{
          borderRadius: hov ? "50px" : "12px",
          background: hov ? "#000" : "#ffe135",
          color: hov ? "#ffe135" : "#000",
          transform: hov ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {hov ? "✓ BEGIN! →" : "START NOW"}
      </button>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest">
        HOVER // morph border-radius
      </p>
    </div>
  );
};

const HeroStriped = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[220px] relative flex items-center justify-center">
    <style>{`@keyframes stripes{0%{background-position:0 0}100%{background-position:60px 0}}`}</style>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg,#ffe135 0,#ffe135 15px,#000 15px,#000 30px)",
        animation: "stripes 2s linear infinite",
      }}
    />
    <div className="relative z-10 bg-white border-4 border-black px-8 py-4 text-center">
      <h1 className="font-black text-4xl uppercase italic">UNDER CONSTRUCTION</h1>
      <p className="font-black text-black/40 text-xs uppercase tracking-widest mt-1">
        ANIMATED STRIPE BACKGROUND
      </p>
    </div>
  </div>
);

const HeroStickyReveal = () => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <div
      className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e] min-h-[220px] bg-zinc-950 overflow-y-auto relative"
      onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}
    >
      <div className="h-[400px] relative flex flex-col">
        <div className="sticky top-0 bg-zinc-950 px-6 py-4 border-b-4 border-zinc-700 z-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-white font-black text-sm uppercase">
              STICKY NAVBAR // scroll: {Math.round(scrollY)}px
            </span>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-4">
          {["SECTION ONE", "SECTION TWO", "SECTION THREE"].map((s, i) => (
            <div key={i} className="border-2 border-zinc-700 rounded-xl p-4">
              <p className="font-black text-white uppercase">{s}</p>
              <p className="text-white/30 text-sm mt-1">Scroll down to see the sticky navbar.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AnimHero = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Zap className="w-5 h-5" />}
      iconBg="bg-red-400"
      title="Hero Animations"
      componentCount={10}
      description="10 cinematic hero section patterns — gradient shifts, terminal typing, neon brutalism, split screen, and morphing CTAs."
      features={[
        "Gradient mesh shift",
        "Terminal typing sequence",
        "Neon brutalist grid",
        "Split screen contrast",
        "Floating particle dots",
        "Countdown timer",
        "Word fade rotator",
        "CTA morph on hover",
        "Animated stripes",
        "Sticky header reveal",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Gradient Shift Hero" subtitle="6-color diagonal gradient loop">
          <CodePreview
            title="Gradient"
            code={sampleCodeHeros}
            preview={<HeroGradientShift />}
            language="tsx"
            nameFile="hero-gradient.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Terminal Typing" subtitle="Line-by-line typewriter sequence">
          <CodePreview
            title="Terminal"
            code={sampleCodeHeros}
            preview={<HeroTerminalTyping />}
            language="tsx"
            nameFile="hero-terminal.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Neon Brutalist" subtitle="Flickering neon text on grid">
          <CodePreview
            title="Neon"
            code={sampleCodeHeros}
            preview={<HeroNeonBrut />}
            language="tsx"
            nameFile="hero-neon.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Split Screen" subtitle="Contrasting dark/light halves">
          <CodePreview
            title="Split"
            code={sampleCodeHeros}
            preview={<HeroSplitScreen />}
            language="tsx"
            nameFile="hero-split.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Floating Particles" subtitle="Randomly floating colored dots">
          <CodePreview
            title="Particles"
            code={sampleCodeHeros}
            preview={<HeroParticleGrid />}
            language="tsx"
            nameFile="hero-float.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Launch Countdown" subtitle="Auto-decrementing digit display">
          <CodePreview
            title="Countdown"
            code={sampleCodeHeros}
            preview={<HeroCountdown />}
            language="tsx"
            nameFile="hero-countdown.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Word Fader" subtitle="Fade-swap rotating action words">
          <CodePreview
            title="WordFade"
            code={sampleCodeHeros}
            preview={<HeroTypeFade />}
            language="tsx"
            nameFile="hero-wordfade.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Morph CTA" subtitle="Button morphs to pill on hover">
          <CodePreview
            title="MorphCTA"
            code={sampleCodeHeros}
            preview={<HeroMorphBtn />}
            language="tsx"
            nameFile="hero-morph.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Striped BG" subtitle="Animated diagonal stripe pattern">
          <CodePreview
            title="Stripes"
            code={sampleCodeHeros}
            preview={<HeroStriped />}
            language="tsx"
            nameFile="hero-stripe.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Sticky Reveal" subtitle="Sticky navbar with scroll tracking">
          <CodePreview
            title="Sticky"
            code={sampleCodeHeros}
            preview={<HeroStickyReveal />}
            language="tsx"
            nameFile="hero-sticky.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
