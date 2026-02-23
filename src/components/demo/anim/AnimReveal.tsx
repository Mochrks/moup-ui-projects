import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Play } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const RevCurtain = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <div className="relative w-full h-20 overflow-hidden border-4 border-black rounded-xl">
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-400">
          <p className="font-black text-white text-2xl uppercase italic">DISCOVER</p>
        </div>
        <div
          className="absolute inset-0 bg-black transition-transform duration-700"
          style={{ transform: go ? "scaleX(0)" : "scaleX(1)", transformOrigin: "right" }}
        />
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 50);
        }}
        className="px-6 py-2 border-4 border-white rounded-xl bg-white text-black font-black uppercase text-sm cursor-pointer"
      >
        REVEAL
      </button>
    </div>
  );
};

const RevCircleExpand = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <div className="relative w-full h-24 overflow-hidden border-4 border-black rounded-xl bg-black flex items-center justify-center">
        <p className="font-black text-[#ffe135] text-2xl uppercase italic z-10 relative">
          CIRCLE_EXPAND
        </p>
        <div
          className="absolute bg-[#ffe135] rounded-full transition-all duration-700"
          style={{ width: go ? "200%" : "0%", height: go ? "400%" : "0%", opacity: go ? 0 : 1 }}
        />
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 50);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black uppercase text-sm cursor-pointer"
      >
        EXPAND
      </button>
    </div>
  );
};

const BOUNCE_ITEMS = ["DESIGN", "SYSTEM", "FOR", "REBELS!"];
const RevBounceIn = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <style>{`@keyframes bncin{0%{transform:translateY(-80px) scale(0.5);opacity:0}60%{transform:translateY(10px) scale(1.05)}80%{transform:translateY(-5px)}100%{transform:translateY(0) scale(1);opacity:1}}`}</style>
      <div className="flex flex-wrap gap-2 justify-center">
        {BOUNCE_ITEMS.map((w, i) => (
          <span
            key={`${go}-${i}`}
            className="font-black text-white text-3xl uppercase italic"
            style={{
              animation: go ? `bncin 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` : "none",
              opacity: go ? undefined : 0,
            }}
          >
            {w}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 10);
        }}
        className="px-6 py-2 border-4 border-white rounded-xl text-white font-black uppercase text-sm cursor-pointer"
      >
        BOUNCE IN
      </button>
    </div>
  );
};

const RevFadeUp = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <style>{`@keyframes fadeup{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="flex flex-col gap-1 w-full">
        {["FADE", "UP", "REVEAL"].map((t, i) => (
          <p
            key={`${go}-${i}`}
            className="font-black text-4xl uppercase italic"
            style={{
              animation: go ? `fadeup 0.6s ease-out ${i * 0.15}s both` : "none",
              opacity: go ? undefined : 0,
            }}
          >
            {t}
          </p>
        ))}
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 10);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-[#22c55e] text-black font-black uppercase text-sm cursor-pointer"
      >
        FADE UP
      </button>
    </div>
  );
};

const RevSlideLeft = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-pink-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-4 items-center justify-center overflow-hidden">
      <style>{`@keyframes slideleft{from{opacity:0;transform:translateX(80px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex flex-col gap-2 w-full">
        {[
          ["BIG", "text-6xl"],
          ["BOLD", "text-6xl"],
          ["IDEAS.", "text-4xl text-white/70"],
        ].map(([t, cls], i) => (
          <span
            key={`${go}-${i}`}
            className={`font-black uppercase italic ${cls}`}
            style={{
              animation: go ? `slideleft 0.5s ease-out ${i * 0.1}s both` : "none",
              opacity: go ? undefined : 0,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 10);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-black text-white font-black uppercase text-sm cursor-pointer self-start"
      >
        SLIDE IN
      </button>
    </div>
  );
};

const RevClipPath = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <style>{`@keyframes clip{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}`}</style>
      <div
        key={go ? "go" : "idle"}
        className="text-center"
        style={{
          animation: go ? "clip 0.8s ease-out forwards" : "none",
          clipPath: go ? undefined : "inset(0 100% 0 0)",
        }}
      >
        <h2
          className="font-black text-white text-5xl uppercase italic"
          style={{ WebkitTextStroke: "2px #ffe135" }}
        >
          CLIP
        </h2>
        <h2 className="font-black text-[#ffe135] text-5xl uppercase italic">PATH!</h2>
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 20);
        }}
        className="px-6 py-2 border-4 border-[#ffe135] rounded-xl text-[#ffe135] font-black uppercase text-sm cursor-pointer"
      >
        CLIP REVEAL
      </button>
    </div>
  );
};

const RevScale = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-indigo-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <style>{`@keyframes scaleIn{from{transform:scale(0) rotate(15deg);opacity:0}70%{transform:scale(1.1) rotate(-3deg)}to{transform:scale(1) rotate(0);opacity:1}}`}</style>
      <div
        key={go ? "g" : "i"}
        className="border-8 border-black bg-[#ffe135] px-8 py-4 rounded-3xl"
        style={{
          animation: go ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
          opacity: go ? undefined : 0,
        }}
      >
        <p className="font-black text-black text-3xl uppercase italic">SCALE IN!</p>
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 20);
        }}
        className="px-6 py-2 border-4 border-white rounded-xl text-white font-black uppercase text-sm cursor-pointer"
      >
        SCALE IN
      </button>
    </div>
  );
};

const RevTypewriter = () => {
  const FULL = "MOUP UI IS THE FUTURE OF DESIGN.";
  const [text, setText] = useState("");
  const play = () => {
    setText("");
    let i = 0;
    const iv = setInterval(() => {
      setText(FULL.slice(0, ++i));
      if (i >= FULL.length) clearInterval(iv);
    }, 60);
  };
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <p className="font-black text-[#22c55e] font-mono text-xl text-center min-h-[64px]">
        {">"} {text}
        <span className="animate-pulse">_</span>
      </p>
      <button
        onClick={play}
        className="px-6 py-2 border-4 border-[#22c55e] rounded-xl text-[#22c55e] font-black uppercase text-sm cursor-pointer"
      >
        TYPE IT
      </button>
    </div>
  );
};

const RevStagger = () => {
  const [go, setGo] = useState(false);
  const items = ["🎨 BEAUTIFUL", "⚡ FAST", "🛠 CUSTOMIZABLE", "🔒 ACCESSIBLE"];
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[180px] flex flex-col gap-4">
      <style>{`@keyframes srv{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex flex-col gap-2">
        {items.map((t, i) => (
          <div
            key={`${go}-${i}`}
            className="px-4 py-2 border-4 border-black rounded-xl font-black uppercase text-sm"
            style={{
              animation: go ? `srv 0.5s ease-out ${i * 0.1}s both` : "none",
              opacity: go ? undefined : 0,
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 10);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-[#ef4444] text-white font-black uppercase text-sm cursor-pointer"
      >
        STAGGER IN
      </button>
    </div>
  );
};

const RevBlur = () => {
  const [go, setGo] = useState(false);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-4 items-center justify-center">
      <style>{`@keyframes blurin{from{filter:blur(20px);opacity:0;transform:scale(1.1)}to{filter:blur(0);opacity:1;transform:scale(1)}}`}</style>
      <h2
        key={go ? "g" : "i"}
        className="font-black text-5xl uppercase italic"
        style={{
          animation: go ? "blurin 0.7s ease-out forwards" : "none",
          opacity: go ? undefined : 0,
        }}
      >
        BLUR_REVEAL
      </h2>
      <button
        onClick={() => {
          setGo(false);
          setTimeout(() => setGo(true), 10);
        }}
        className="px-6 py-2 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black uppercase text-sm cursor-pointer"
      >
        BLUR IN
      </button>
    </div>
  );
};

export const AnimReveal = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Play className="w-5 h-5" />}
      iconBg="bg-cyan-400"
      title="Reveal Animations"
      componentCount={10}
      description="10 dramatic reveal effects — curtain sweep, circle expand, bounce in, slide, clip-path, typewriter, and blur reveal."
      features={[
        "Curtain scaleX sweep",
        "Circle expand mask",
        "Bounce in stagger",
        "Fade up text",
        "Slide left entrance",
        "Clip-path wipe",
        "Scale in with rotate",
        "Terminal typewriter",
        "Stagger list reveal",
        "Blur-to-clear zoom",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Curtain Sweep" subtitle="ScaleX wipe from right to left">
          <CodePreview
            title="Curtain"
            code={sampleCodeHeros}
            preview={<RevCurtain />}
            language="tsx"
            nameFile="reveal-curtain.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Circle Expand" subtitle="Expanding circle mask reveal">
          <CodePreview
            title="Circle"
            code={sampleCodeHeros}
            preview={<RevCircleExpand />}
            language="tsx"
            nameFile="reveal-circle.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Bounce In" subtitle="Words bounce from above with stagger">
          <CodePreview
            title="Bounce"
            code={sampleCodeHeros}
            preview={<RevBounceIn />}
            language="tsx"
            nameFile="reveal-bounce.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Fade Up" subtitle="Lines fade up with delay stagger">
          <CodePreview
            title="Fade Up"
            code={sampleCodeHeros}
            preview={<RevFadeUp />}
            language="tsx"
            nameFile="reveal-fade.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Slide Left" subtitle="Words slide in from right">
          <CodePreview
            title="Slide"
            code={sampleCodeHeros}
            preview={<RevSlideLeft />}
            language="tsx"
            nameFile="reveal-slide.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Clip-Path Wipe" subtitle="inset() clip-path left sweep">
          <CodePreview
            title="Clip"
            code={sampleCodeHeros}
            preview={<RevClipPath />}
            language="tsx"
            nameFile="reveal-clip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scale In" subtitle="Scale from 0 with overshoot rotation">
          <CodePreview
            title="Scale"
            code={sampleCodeHeros}
            preview={<RevScale />}
            language="tsx"
            nameFile="reveal-scale.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Typewriter" subtitle="Character-by-character reveal">
          <CodePreview
            title="Type"
            code={sampleCodeHeros}
            preview={<RevTypewriter />}
            language="tsx"
            nameFile="reveal-type.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Stagger List" subtitle="List items cascade from left">
          <CodePreview
            title="Stagger"
            code={sampleCodeHeros}
            preview={<RevStagger />}
            language="tsx"
            nameFile="reveal-stagger.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Blur Reveal" subtitle="Blur clears with scale-down zoom">
          <CodePreview
            title="Blur"
            code={sampleCodeHeros}
            preview={<RevBlur />}
            language="tsx"
            nameFile="reveal-blur.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
