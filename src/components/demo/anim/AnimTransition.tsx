import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Cpu } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const TransPageSlide = () => {
  const [page, setPage] = useState(0);
  const PAGES = [
    ["#6366f1", "white", "PAGE ONE", "Home content"],
    ["#ffe135", "black", "PAGE TWO", "About content"],
    ["#ef4444", "white", "PAGE THREE", "Contact content"],
  ];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[200px]">
      <div className="relative h-[160px] overflow-hidden">
        {PAGES.map(([bg, tc, title, sub], i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-transform duration-500"
            style={{ background: bg as string, transform: `translateX(${(i - page) * 100}%)` }}
          >
            <h2 className="font-black text-3xl uppercase italic" style={{ color: tc as string }}>
              {title}
            </h2>
            <p className="font-black text-sm uppercase" style={{ color: `${tc}80` }}>
              {sub}
            </p>
          </div>
        ))}
      </div>
      <div className="flex border-t-4 border-black">
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="flex-1 py-2 font-black text-xs uppercase border-r-4 border-black last:border-r-0 cursor-pointer transition-colors"
            style={{
              background: page === i ? "black" : "white",
              color: page === i ? "white" : "black",
            }}
          >
            P{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const TransFadePage = () => {
  const [page, setPage] = useState(0);
  const [vis, setVis] = useState(true);
  const PAGES = [
    ["#22c55e", "black", "GREEN VIEW"],
    ["#ec4899", "white", "PINK VIEW"],
    ["#000", "#ffe135", "DARK VIEW"],
  ];
  const go = (i: number) => {
    setVis(false);
    setTimeout(() => {
      setPage(i);
      setVis(true);
    }, 250);
  };
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e] min-h-[200px]">
      <div
        className="relative h-[160px] flex items-center justify-center transition-opacity duration-250"
        style={{ background: PAGES[page][0], opacity: vis ? 1 : 0 }}
      >
        <h2 className="font-black text-3xl uppercase italic" style={{ color: PAGES[page][1] }}>
          {PAGES[page][2]}
        </h2>
      </div>
      <div className="flex border-t-4 border-black">
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="flex-1 py-2 font-black text-xs uppercase border-r-4 border-black last:border-r-0 cursor-pointer transition-colors"
            style={{
              background: page === i ? "black" : "white",
              color: page === i ? "white" : "black",
            }}
          >
            P{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const TransClipWipe = () => {
  const [page, setPage] = useState(0);
  const [anim, setAnim] = useState(false);
  const PAGES = [
    ["#6366f1", "white", "CLIP WIPE 1"],
    ["#ffe135", "black", "CLIP WIPE 2"],
    ["#ef4444", "white", "CLIP WIPE 3"],
  ];
  const go = (i: number) => {
    if (i === page) return;
    setAnim(true);
    setTimeout(() => {
      setPage(i);
      setAnim(false);
    }, 400);
  };
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] min-h-[200px]">
      <style>{`@keyframes clipwipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}`}</style>
      <div
        className="relative h-[160px] flex items-center justify-center"
        style={{ background: PAGES[page][0] }}
      >
        <h2
          className="font-black text-3xl uppercase italic"
          style={{ color: PAGES[page][1], animation: anim ? "clipwipe 0.4s ease-out" : "none" }}
        >
          {PAGES[page][2]}
        </h2>
      </div>
      <div className="flex border-t-4 border-black">
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="flex-1 py-2 font-black text-xs uppercase border-r-4 border-black last:border-r-0 cursor-pointer transition-colors"
            style={{
              background: page === i ? "black" : "white",
              color: page === i ? "white" : "black",
            }}
          >
            P{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const TransFlipPage = () => {
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const PAGES = [
    ["#6366f1", "white", "FRONT SIDE"],
    ["#ffe135", "black", "BACK SIDE"],
  ];
  const toggle = () => {
    setFlip(true);
    setTimeout(() => {
      setPage((p) => 1 - p);
      setFlip(false);
    }, 350);
  };
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[200px]">
      <style>{`@keyframes fliphalf{0%{transform:perspective(600px) rotateY(0)}100%{transform:perspective(600px) rotateY(90deg)}}`}</style>
      <div
        className="h-[160px] flex items-center justify-center relative overflow-hidden cursor-pointer"
        style={{
          background: PAGES[page][0],
          animation: flip ? "fliphalf 0.35s ease-in forwards" : "",
        }}
        onClick={toggle}
      >
        <h2 className="font-black text-3xl uppercase italic" style={{ color: PAGES[page][1] }}>
          {PAGES[page][2]}
        </h2>
        <p
          className="absolute bottom-3 right-4 text-xs font-black uppercase"
          style={{ color: `${PAGES[page][1]}60` }}
        >
          CLICK TO FLIP
        </p>
      </div>
      <div className="py-2 border-t-4 border-black bg-white text-center">
        <p className="font-black text-xs uppercase text-black/30">3D FLIP TRANSITION</p>
      </div>
    </div>
  );
};

const TransScaleBlur = () => {
  const [page, setPage] = useState(0);
  const [trans, setTrans] = useState(false);
  const PAGES = [
    ["#000", "#ffe135", "ZOOM_OUT"],
    ["#ffe135", "#000", "ZOOM_IN"],
    ["#6366f1", "white", "BLUR_OUT"],
  ];
  const go = (i: number) => {
    setTrans(true);
    setTimeout(() => {
      setPage(i);
      setTrans(false);
    }, 300);
  };
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[200px]">
      <div
        className="h-[160px] flex items-center justify-center transition-all duration-300"
        style={{
          background: PAGES[page][0],
          transform: trans ? "scale(0.9)" : "scale(1)",
          filter: trans ? "blur(8px)" : "blur(0)",
          opacity: trans ? 0 : 1,
        }}
      >
        <h2 className="font-black text-3xl uppercase italic" style={{ color: PAGES[page][1] }}>
          {PAGES[page][2]}
        </h2>
      </div>
      <div className="flex border-t-4 border-black">
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="flex-1 py-2 font-black text-xs uppercase border-r-4 border-black last:border-r-0 cursor-pointer transition-colors"
            style={{
              background: page === i ? "black" : "white",
              color: page === i ? "white" : "black",
            }}
          >
            P{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const TransStagger = () => {
  const [step, setStep] = useState(0);
  const items = [
    ["🎨", "COLOR", "Vibrant neobrutalist palettes"],
    ["⚡", "SPEED", "Lightning fast components"],
    ["🛠", "BUILD", "Ship-ready from day one"],
    ["💎", "STYLE", "Premium design aesthetics"],
  ];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ef4444] min-h-[200px] bg-white">
      <style>{`@keyframes stagitem{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="p-4 flex flex-col gap-2 min-h-[160px]">
        {items.slice(0, step + 1).map(([icon, title, desc]) => (
          <div
            key={title}
            className="flex items-center gap-3 border-4 border-black rounded-xl p-3"
            style={{ animation: `stagitem 0.3s ease-out both` }}
          >
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="font-black text-sm uppercase">{title}</p>
              <p className="text-black/40 text-xs font-black">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex border-t-4 border-black">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="flex-1 py-2 border-r-4 border-black font-black text-xs uppercase cursor-pointer"
        >
          ← LESS
        </button>
        <button
          onClick={() => setStep((s) => Math.min(items.length - 1, s + 1))}
          className="flex-1 py-2 font-black text-xs uppercase cursor-pointer bg-black text-white"
        >
          MORE →
        </button>
      </div>
    </div>
  );
};

const TransSkeletonToContent = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[200px]">
      <style>{`@keyframes shimmer2{0%{background-position:-400px 0}100%{background-position:400px 0}} .skel2{background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);background-size:800px 100%;animation:shimmer2 2s infinite} @keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
      <div className="p-4 min-h-[160px]" style={{ background: "#f9fafb" }}>
        {!loaded ? (
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="skel2 w-12 h-12 rounded-full border-2 border-black" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="skel2 h-4 rounded-full border border-black" />
                <div className="skel2 h-3 w-2/3 rounded-full border border-black" />
              </div>
            </div>
            {[100, 85, 70].map((w) => (
              <div
                key={w}
                className={`skel2 h-3 rounded-full border border-black`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3" style={{ animation: "fadeIn 0.5s ease-out" }}>
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full border-4 border-black bg-[#6366f1] flex items-center justify-center text-white font-black">
                M
              </div>
              <div>
                <p className="font-black text-sm uppercase">MOUP_USER</p>
                <p className="text-black/40 text-xs font-black">@moupui · just now</p>
              </div>
            </div>
            <p className="font-black text-sm text-black/70">
              Skeleton loaders make perceived performance feel instant. Use them!
            </p>
          </div>
        )}
      </div>
      <div className="border-t-4 border-black bg-white py-2 flex justify-center">
        <button
          onClick={() => setLoaded((l) => !l)}
          className="px-6 py-1.5 border-4 border-black rounded-xl bg-black text-white font-black text-xs uppercase cursor-pointer"
        >
          {loaded ? "SHOW SKELETON" : "LOAD CONTENT"}
        </button>
      </div>
    </div>
  );
};

const TransNumFlip = () => {
  const [n, setN] = useState(0);
  const [dir, setDir] = useState<"up" | "down">("up");
  const digits = String(n).padStart(4, "0").split("");
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] min-h-[200px] bg-[#ffe135]">
      <div className="p-6 flex flex-col items-center gap-4">
        <style>{`@keyframes flipup{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}} @keyframes flipdown{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
        <div className="flex gap-1">
          {digits.map((d, i) => (
            <div
              key={i}
              className="w-12 h-16 bg-black rounded-xl flex items-center justify-center overflow-hidden border-4 border-zinc-800"
            >
              <span
                key={`${n}-${i}`}
                className="font-black font-mono text-[#ffe135] text-4xl"
                style={{ animation: `${dir === "up" ? "flipup" : "flipdown"} 0.2s ease-out` }}
              >
                {d}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setDir("down");
              setN((x) => Math.max(0, x - 1));
            }}
            className="px-4 py-2 border-4 border-black rounded-xl bg-white font-black cursor-pointer"
          >
            -1
          </button>
          <button
            onClick={() => {
              setDir("up");
              setN((x) => x + 1);
            }}
            className="px-4 py-2 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black cursor-pointer"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

const TYPING_STATES: ["loading" | "typing" | "recording" | "idle", string, string][] = [
  ["loading", "LOADING…", "opacity-70"],
  ["typing", "TYPING…", "text-[#6366f1]"],
  ["recording", "REC ●", "text-[#ef4444]"],
  ["idle", "ONLINE", "text-[#22c55e]"],
];

const TransTypingIndicator = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TYPING_STATES.length), 2000);
    return () => clearInterval(t);
  }, []);
  const [state, label] = TYPING_STATES[idx];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] min-h-[200px] bg-zinc-950">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 border-4 border-black flex items-center justify-center text-white font-black text-sm">
            M
          </div>
          <div>
            <p className="font-black text-white text-sm">moup_ai</p>
            <p className={`font-black text-xs uppercase ${TYPING_STATES[idx][2]}`}>{label}</p>
          </div>
        </div>
        {state === "typing" && (
          <div className="bg-zinc-800 border-2 border-zinc-600 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 w-fit">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}
        {state === "loading" && (
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-1 h-8 bg-zinc-800 rounded-xl animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        )}
        {state === "recording" && (
          <div className="flex items-center gap-3 bg-red-950/50 border-2 border-[#ef4444] rounded-2xl px-4 py-3">
            <div className="w-3 h-3 rounded-full bg-[#ef4444] animate-pulse" />
            <p className="text-white font-black text-sm uppercase">Recording… 00:08</p>
          </div>
        )}
        {state === "idle" && (
          <p className="text-white/40 font-black text-sm uppercase">Type a message…</p>
        )}
      </div>
    </div>
  );
};

const TransColorMode = () => {
  const [dark, setDark] = useState(true);
  return (
    <div
      className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] min-h-[200px] transition-all duration-500"
      style={{ background: dark ? "#09090b" : "#ffffff" }}
    >
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2
            className="font-black text-xl uppercase italic transition-colors duration-500"
            style={{ color: dark ? "white" : "black" }}
          >
            THEME SWITCH
          </h2>
          <button
            onClick={() => setDark((d) => !d)}
            className="relative w-14 h-7 border-4 border-current rounded-full cursor-pointer transition-all"
            style={{ background: dark ? "white" : "black", color: dark ? "white" : "black" }}
          >
            <div
              className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300"
              style={{
                background: dark ? "black" : "white",
                left: dark ? "2px" : "calc(100% - 18px)",
              }}
            />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 rounded-xl border-2 transition-colors duration-500"
              style={{
                background: dark ? `rgba(255,255,255,${i * 0.05})` : `rgba(0,0,0,${i * 0.05})`,
                borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
        <p
          className="font-black text-xs uppercase transition-colors duration-500"
          style={{ color: dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" }}
        >
          MODE: {dark ? "DARK" : "LIGHT"}
        </p>
      </div>
    </div>
  );
};

export const AnimTransition = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Cpu className="w-5 h-5" />}
      iconBg="bg-purple-400"
      title="Transition Effects"
      componentCount={10}
      description="10 smooth UI transition patterns — page slide, fade swap, clip wipe, 3D flip, skeleton to content, odometer digits, and dark mode toggle."
      features={[
        "Horizontal page slide",
        "Cross-fade page swap",
        "Clip-path wipe reveal",
        "3D rotateY page flip",
        "Scale + blur exit",
        "Stagger item entrance",
        "Skeleton to content",
        "Number odometer flip",
        "Chat state indicator",
        "Dark/light mode toggle",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Page Slide" subtitle="translateX pages side by side">
          <CodePreview
            title="Slide"
            code={sampleCodeHeros}
            preview={<TransPageSlide />}
            language="tsx"
            nameFile="trans-slide.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Fade Page" subtitle="Opacity cross-fade between pages">
          <CodePreview
            title="Fade"
            code={sampleCodeHeros}
            preview={<TransFadePage />}
            language="tsx"
            nameFile="trans-fade.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Clip Wipe" subtitle="clip-path inset() wipe transition">
          <CodePreview
            title="Clip"
            code={sampleCodeHeros}
            preview={<TransClipWipe />}
            language="tsx"
            nameFile="trans-clip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="3D Flip" subtitle="Click to flip card with rotateY">
          <CodePreview
            title="Flip"
            code={sampleCodeHeros}
            preview={<TransFlipPage />}
            language="tsx"
            nameFile="trans-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scale Blur" subtitle="Scale + blur on page exit/enter">
          <CodePreview
            title="ScaleBlur"
            code={sampleCodeHeros}
            preview={<TransScaleBlur />}
            language="tsx"
            nameFile="trans-scaleblur.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Stagger Items" subtitle="List items animate in one by one">
          <CodePreview
            title="Stagger"
            code={sampleCodeHeros}
            preview={<TransStagger />}
            language="tsx"
            nameFile="trans-stagger.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Skeleton → Content" subtitle="Loading skeleton transitions to data">
          <CodePreview
            title="Skeleton"
            code={sampleCodeHeros}
            preview={<TransSkeletonToContent />}
            language="tsx"
            nameFile="trans-skeleton.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Number Flip" subtitle="Digit slot machine with direction">
          <CodePreview
            title="NumFlip"
            code={sampleCodeHeros}
            preview={<TransNumFlip />}
            language="tsx"
            nameFile="trans-numflip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Chat States" subtitle="Typing/loading/recording indicators">
          <CodePreview
            title="Chat"
            code={sampleCodeHeros}
            preview={<TransTypingIndicator />}
            language="tsx"
            nameFile="trans-chat.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Dark Mode Toggle" subtitle="Smooth color-mode transition">
          <CodePreview
            title="DarkMode"
            code={sampleCodeHeros}
            preview={<TransColorMode />}
            language="tsx"
            nameFile="trans-dark.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
