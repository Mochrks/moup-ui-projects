import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Type } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const TW_TEXTS = [
  "INITIALIZE_SYSTEM...",
  "LOADING_COMPONENTS...",
  "DEPLOY_READY.",
  "LAUNCH_SEQUENCE.",
];
const TextTypewriter = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = TW_TEXTS[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(cur.slice(0, text.length + 1));
          if (text.length + 1 === cur.length) setTimeout(() => setDel(true), 800);
        } else {
          setText(cur.slice(0, text.length - 1));
          if (text.length === 0) {
            setDel(false);
            setIdx((i) => (i + 1) % TW_TEXTS.length);
          }
        }
      },
      del ? 50 : 100
    );
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return (
    <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[140px] flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4">
        {["bg-red-500", "bg-yellow-400", "bg-green-400"].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
        ))}
      </div>
      <p className="text-[#22c55e] font-mono font-black text-xl">
        $ {text}
        <span className="animate-pulse">_</span>
      </p>
    </div>
  );
};

const TextGlitch = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] text-center overflow-hidden min-h-[140px] flex flex-col items-center justify-center">
    <style>{`@keyframes glitch1{0%,100%{clip-path:inset(0 0 88% 0);transform:translateX(-5px)}50%{clip-path:inset(45% 0 30% 0);transform:translateX(5px)}} @keyframes glitch2{0%,100%{clip-path:inset(35% 0 48% 0);transform:translateX(5px)}50%{clip-path:inset(78% 0 8% 0);transform:translateX(-5px)}} .glitch{position:relative;display:inline-block}.glitch::before{content:attr(data-t);position:absolute;top:0;left:0;color:#ef4444;animation:glitch1 2s infinite}.glitch::after{content:attr(data-t);position:absolute;top:0;left:0;color:#6366f1;animation:glitch2 2s infinite .5s}`}</style>
    <h2
      className="glitch text-white font-black text-5xl uppercase italic tracking-tighter"
      data-t="GLITCH_FX"
    >
      GLITCH_FX
    </h2>
    <p className="text-white/25 text-[10px] font-black uppercase tracking-[0.3em] mt-4">
      CSS CLIP-PATH // BEFORE + AFTER
    </p>
  </div>
);

const WAVE_CHARS = "WAVE_ANIMATION".split("");
const TextWave = () => (
  <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] text-center min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes wvl{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-18px) rotate(-3deg)}}`}</style>
    <div className="flex justify-center gap-0.5 flex-wrap">
      {WAVE_CHARS.map((c, i) => (
        <span
          key={i}
          className="text-white font-black text-3xl uppercase italic inline-block"
          style={{ animation: `wvl 1.2s ease-in-out infinite`, animationDelay: `${i * 0.08}s` }}
        >
          {c}
        </span>
      ))}
    </div>
  </div>
);

const TextGradientShimmer = () => (
  <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] text-center min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes shimtx{0%{background-position:-200% center}100%{background-position:200% center}}`}</style>
    <h2
      className="font-black text-6xl uppercase italic"
      style={{
        background: "linear-gradient(90deg,#ffe135,#6366f1,#ef4444,#22c55e,#ffe135)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "shimtx 3s linear infinite",
      }}
    >
      MOUP_UI
    </h2>
    <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
      gradient background-size: 200%
    </p>
  </div>
);

const SC_CHARS = "!@#$%^&*ABCDEFGH0123456789";
const TextScramble = () => {
  const [display, setDisplay] = useState("HOVER_ME!");
  const target = "DECRYPTED!";
  const trigger = () => {
    let i = 0;
    const iv = setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((c, j) => (j < i ? c : SC_CHARS[Math.floor(Math.random() * SC_CHARS.length)]))
          .join("")
      );
      if (++i > target.length) clearInterval(iv);
    }, 55);
  };
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] text-center min-h-[140px] flex flex-col items-center justify-center gap-3">
      <h2
        className="font-black text-4xl uppercase italic tracking-tighter cursor-pointer select-none font-mono"
        onMouseEnter={trigger}
        onMouseLeave={() => setDisplay("HOVER_ME!")}
      >
        {display}
      </h2>
      <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">
        HOVER TO SCRAMBLE DECODE
      </p>
    </div>
  );
};

const FW = ["INNOVATIVE", "BRUTALIST", "RESPONSIVE", "POWERFUL", "OPEN SOURCE"];
const TextFlipWords = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % FW.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] text-center min-h-[160px] flex flex-col items-center justify-center gap-1">
      <style>{`@keyframes flipIn{0%{transform:rotateX(-90deg) scale(0.8);opacity:0}100%{transform:rotateX(0) scale(1);opacity:1}}`}</style>
      <p className="font-black text-xl uppercase italic text-black/50">We build</p>
      <div
        className="overflow-hidden h-16 flex items-center justify-center"
        style={{ perspective: "600px" }}
      >
        <h2
          key={i}
          className="font-black text-5xl uppercase italic text-indigo-600"
          style={{ animation: "flipIn 0.45s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          {FW[i]}
        </h2>
      </div>
      <p className="font-black text-xl uppercase italic text-black/50">components.</p>
    </div>
  );
};

const MQ_TAGS = [
  "NEOBRUTALISM",
  "REACT",
  "TAILWIND",
  "FRAMER",
  "MOUP_UI",
  "TYPESCRIPT",
  "VITE",
  "SHADCN",
];
const TextMarquee = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000]">
    <style>{`@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    <div className="overflow-hidden py-4 bg-[#ffe135] border-b-4 border-black">
      <div className="flex gap-6 w-max" style={{ animation: "mq 8s linear infinite" }}>
        {[...MQ_TAGS, ...MQ_TAGS].map((t, i) => (
          <span
            key={i}
            className="font-black uppercase italic text-black text-sm px-4 border-r-4 border-black whitespace-nowrap"
          >
            ★ {t}
          </span>
        ))}
      </div>
    </div>
    <div className="overflow-hidden py-4 bg-black">
      <div className="flex gap-6 w-max" style={{ animation: "mq 12s linear infinite reverse" }}>
        {[...MQ_TAGS, ...MQ_TAGS].map((t, i) => (
          <span
            key={i}
            className="font-black uppercase italic text-[#ffe135] text-sm px-4 border-r-4 border-[#ffe135]/30 whitespace-nowrap"
          >
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BL_CHARS = "BOUNCE!".split("");
const TextBounceLetters = () => (
  <div className="p-8 bg-pink-400 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] text-center min-h-[140px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes lbounce{0%,100%{transform:translateY(0) rotate(0deg)}30%{transform:translateY(-22px) rotate(-5deg)}60%{transform:translateY(-10px) rotate(3deg)}}`}</style>
    <div className="flex justify-center gap-1">
      {BL_CHARS.map((c, i) => (
        <span
          key={i}
          className="font-black text-5xl uppercase italic text-black inline-block"
          style={{ animation: "lbounce 1s ease-in-out infinite", animationDelay: `${i * 0.1}s` }}
        >
          {c}
        </span>
      ))}
    </div>
  </div>
);

const TextHighlightReveal = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] text-center min-h-[140px] flex flex-col items-center justify-center gap-4">
      <style>{`@keyframes hl{from{background-size:0% 35%}to{background-size:100% 35%}}`}</style>
      <h2
        className="font-black text-4xl uppercase italic tracking-tighter cursor-pointer select-none"
        style={{
          backgroundImage: on ? "linear-gradient(transparent 60%,#ffe135 60%)" : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 85%",
          animation: on ? "hl 0.5s ease-out forwards" : "none",
        }}
        onClick={() => {
          setOn(false);
          setTimeout(() => setOn(true), 20);
        }}
      >
        CLICK TO HIGHLIGHT
      </h2>
      <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">
        BACKGROUND-SIZE SWEEP // click to replay
      </p>
    </div>
  );
};

const SP_WORDS = ["WE", "BUILD", "THE", "FUTURE."];
const TextSplitReveal = () => {
  const [play, setPlay] = useState(false);
  return (
    <div
      className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] text-center min-h-[160px] flex flex-col items-center justify-center gap-6 cursor-pointer"
      onClick={() => {
        setPlay(false);
        setTimeout(() => setPlay(true), 30);
      }}
    >
      <style>{`@keyframes sprev{0%{opacity:0;transform:translateY(40px) skewY(6deg)}100%{opacity:1;transform:translateY(0) skewY(0)}}`}</style>
      <div className="flex flex-wrap justify-center gap-4">
        {SP_WORDS.map((w, i) => (
          <span
            key={`${play}-${i}`}
            className="font-black text-5xl uppercase italic text-white"
            style={
              play
                ? { animation: `sprev 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` }
                : { opacity: 0 }
            }
          >
            {w}
          </span>
        ))}
      </div>
      <p className="text-white/25 text-[10px] font-black uppercase tracking-widest">
        CLICK TO REPLAY // stagger + skew
      </p>
    </div>
  );
};

export const AnimText = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Type className="w-5 h-5" />}
      iconBg="bg-indigo-400"
      title="Text Animations"
      componentCount={10}
      description="10 production-ready text animation effects — from terminal typewriters to CSS glitch, wave, scramble, and cinematic split reveals."
      features={[
        "Typewriter terminal loop",
        "CSS clip-path glitch",
        "Per-letter wave stagger",
        "Gradient shimmer fill",
        "Scramble-decode hover",
        "3D word flipper",
        "Dual-direction marquee",
        "Bounce stagger letters",
        "Highlight sweep reveal",
        "Split text entrance",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock
          title="Typewriter Terminal"
          subtitle="Looping type-delete with blinking cursor"
        >
          <CodePreview
            title="Typewriter"
            code={sampleCodeHeros}
            preview={<TextTypewriter />}
            language="tsx"
            nameFile="text-typewriter.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Glitch Effect" subtitle="CSS clip-path split with red/blue channel">
          <CodePreview
            title="Glitch"
            code={sampleCodeHeros}
            preview={<TextGlitch />}
            language="tsx"
            nameFile="text-glitch.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Wave Text" subtitle="Per-letter staggered sine wave loop">
          <CodePreview
            title="Wave"
            code={sampleCodeHeros}
            preview={<TextWave />}
            language="tsx"
            nameFile="text-wave.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Gradient Shimmer" subtitle="Moving rainbow gradient clipped to text">
          <CodePreview
            title="Shimmer"
            code={sampleCodeHeros}
            preview={<TextGradientShimmer />}
            language="tsx"
            nameFile="text-shimmer.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Letter Scramble" subtitle="Hover to decode — random char scramble">
          <CodePreview
            title="Scramble"
            code={sampleCodeHeros}
            preview={<TextScramble />}
            language="tsx"
            nameFile="text-scramble.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Flip Words" subtitle="3D rotateX word switcher every 2s">
          <CodePreview
            title="Flip Words"
            code={sampleCodeHeros}
            preview={<TextFlipWords />}
            language="tsx"
            nameFile="text-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Infinite Marquee" subtitle="Dual-direction continuous scroll ticker">
          <CodePreview
            title="Marquee"
            code={sampleCodeHeros}
            preview={<TextMarquee />}
            language="tsx"
            nameFile="text-marquee.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Bounce Letters" subtitle="Staggered bounce loop with rotate twist">
          <CodePreview
            title="Bounce"
            code={sampleCodeHeros}
            preview={<TextBounceLetters />}
            language="tsx"
            nameFile="text-bounce.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Highlight Reveal" subtitle="Click to sweep highlighter across text">
          <CodePreview
            title="Highlight"
            code={sampleCodeHeros}
            preview={<TextHighlightReveal />}
            language="tsx"
            nameFile="text-highlight.tsx"
          />
        </ComponentBlock>
        <ComponentBlock
          title="Split Text Reveal"
          subtitle="Words fly in with skew — click to replay"
        >
          <CodePreview
            title="Split Reveal"
            code={sampleCodeHeros}
            preview={<TextSplitReveal />}
            language="tsx"
            nameFile="text-split.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
