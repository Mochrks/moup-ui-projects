import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { MousePointer2 } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const Card3DFlip = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[200px] flex flex-col items-center justify-center gap-4">
      <div
        className="relative w-40 h-28 cursor-pointer"
        style={{ perspective: "600px" }}
        onClick={() => setFlip((f) => !f)}
      >
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flip ? "rotateY(180deg)" : "rotateY(0)",
          }}
        >
          <div
            className="absolute inset-0 border-4 border-black rounded-2xl bg-indigo-500 flex items-center justify-center backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="font-black text-white text-xl uppercase italic">FRONT</p>
          </div>
          <div
            className="absolute inset-0 border-4 border-black rounded-2xl bg-[#ffe135] flex items-center justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="font-black text-black text-xl uppercase italic">BACK!</p>
          </div>
        </div>
      </div>
      <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">
        CLICK TO FLIP // rotateY 3D
      </p>
    </div>
  );
};

const CardTilt = () => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] flex flex-col items-center justify-center">
      <div
        className="w-44 h-28 border-4 border-black rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 cursor-pointer flex items-center justify-center select-none"
        style={{
          transform: `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.1s",
          boxShadow: "8px 8px 0 0 #000",
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({
            rx: -(e.clientY - r.top - r.height / 2) * 0.2,
            ry: (e.clientX - r.left - r.width / 2) * 0.2,
          });
        }}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      >
        <p className="font-black text-white text-xl uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
          HOVER ME
        </p>
      </div>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest mt-4">
        MOUSE_TILT // perspective rotateX/Y
      </p>
    </div>
  );
};

const CardNeonGlow = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[200px] flex flex-col items-center justify-center gap-4">
    <style>{`.nglw{transition:box-shadow 0.3s,transform 0.3s}.nglw:hover{box-shadow:0 0 20px #22c55e,0 0 40px #22c55e,inset 0 0 20px rgba(34,197,94,0.1);transform:translateY(-4px)}`}</style>
    <div className="nglw w-44 h-28 border-4 border-[#22c55e] rounded-2xl bg-zinc-900 flex items-center justify-center cursor-pointer">
      <p
        className="font-black text-[#22c55e] text-xl uppercase italic"
        style={{ textShadow: "0 0 10px #22c55e,0 0 20px #22c55e" }}
      >
        NEON_GLOW
      </p>
    </div>
    <p className="text-white/30 font-black text-[10px] uppercase tracking-widest">
      HOVER // box-shadow neon
    </p>
  </div>
);

const CardStackHover = () => {
  const [hov, setHov] = useState(false);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] flex items-center justify-center">
      <div
        className="relative w-36 h-24 cursor-pointer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {[2, 1, 0].map((i) => (
          <div
            key={i}
            className="absolute inset-0 border-4 border-black rounded-xl"
            style={{
              backgroundColor: ["#6366f1", "#ec4899", "#ffe135"][i],
              transform: hov
                ? `translate(${[-10, 0, 10][i]}px,${[8, 0, -8][i]}px) rotate(${[-6, 0, 6][i]}deg)`
                : `translate(${[4, 2, 0][i]}px,${[4, 2, 0][i]}px) rotate(0)`,
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              zIndex: 3 - i,
            }}
          >
            {i === 0 && (
              <div className="w-full h-full flex items-center justify-center">
                <p className="font-black text-black text-lg uppercase italic">STACK</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CardSpotlight = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[200px] flex flex-col items-center justify-center">
      <div
        className="relative w-48 h-28 border-4 border-zinc-700 rounded-2xl bg-zinc-900 overflow-hidden cursor-crosshair"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 60px at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.15), transparent)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-black text-white text-xl uppercase italic">SPOTLIGHT</p>
        </div>
      </div>
      <p className="text-white/30 font-black text-[10px] uppercase tracking-widest mt-4">
        MOUSE_SPOTLIGHT // radial-gradient
      </p>
    </div>
  );
};

const CardRevealContent = () => {
  const [hov, setHov] = useState(false);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[200px] flex flex-col items-center justify-center">
      <div
        className="relative w-48 h-28 border-4 border-black rounded-2xl overflow-hidden cursor-pointer bg-indigo-500"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hov ? 0 : 1 }}
        >
          <p className="font-black text-white text-xl uppercase italic">HOVER ME</p>
        </div>
        <div
          className="absolute inset-0 bg-[#ffe135] border-t-4 border-black flex items-center justify-center transition-transform duration-400"
          style={{ transform: hov ? "translateY(0)" : "translateY(100%)" }}
        >
          <p className="font-black text-black text-xl uppercase italic">REVEALED!</p>
        </div>
      </div>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest mt-4">
        SLIDE_REVEAL // translateY overlay
      </p>
    </div>
  );
};

const CardBorderGlow = () => (
  <div className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[200px] flex flex-col items-center justify-center gap-4">
    <style>{`@keyframes rot{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}} .bglow{position:relative;border-radius:16px;overflow:hidden}.bglow::before{content:'';position:absolute;inset:-2px;background:conic-gradient(#ffe135,#6366f1,#ef4444,#22c55e,#ffe135);animation:rot 3s linear infinite;border-radius:18px}.bglow::after{content:'';position:absolute;inset:3px;background:#111;border-radius:13px}`}</style>
    <div className="bglow w-44 h-28 flex items-center justify-center cursor-pointer">
      <p className="font-black text-white text-xl uppercase italic relative z-10">BORDER_GLOW</p>
    </div>
    <p className="text-white/30 font-black text-[10px] uppercase tracking-widest">
      CONIC_GRADIENT // rotating border
    </p>
  </div>
);

const CardParallaxLayers = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] flex flex-col items-center justify-center"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - r.left - r.width / 2) / 20,
          y: (e.clientY - r.top - r.height / 2) / 20,
        });
      }}
    >
      <div className="relative w-44 h-28">
        <div
          className="absolute inset-0 bg-indigo-800 rounded-2xl border-4 border-black"
          style={{ transform: `translate(${pos.x * 2}px,${pos.y * 2}px)` }}
        />
        <div
          className="absolute inset-2 bg-indigo-500 rounded-xl border-2 border-black"
          style={{ transform: `translate(${pos.x}px,${pos.y}px)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-black text-white text-xl uppercase italic relative z-10">PARALLAX</p>
        </div>
      </div>
      <p className="text-white/50 font-black text-[10px] uppercase tracking-widest mt-4">
        MOUSE_PARALLAX // layer depth
      </p>
    </div>
  );
};

const CardMorphButton = () => {
  const [s, setS] = useState<"idle" | "loading" | "done">("idle");
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[200px] flex flex-col items-center justify-center gap-4">
      <button
        className="border-4 border-black font-black text-lg uppercase italic px-8 py-3 transition-all duration-500 cursor-pointer"
        style={{
          background: s === "done" ? "#22c55e" : s === "loading" ? "#ffe135" : "#6366f1",
          color: s === "idle" ? "white" : "black",
          borderRadius: s === "loading" ? "50px" : "12px",
          transform: s === "loading" ? "scale(0.9)" : "scale(1)",
        }}
        onClick={() => {
          if (s === "idle") {
            setS("loading");
            setTimeout(() => setS("done"), 1500);
            setTimeout(() => setS("idle"), 3000);
          }
        }}
      >
        {s === "idle" ? "CLICK ME!" : s === "loading" ? "LOADING…" : "✓ DONE!"}
      </button>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest">
        MORPH_STATE // border-radius + color transition
      </p>
    </div>
  );
};

const CardShinyHover = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[200px] flex flex-col items-center justify-center gap-4">
    <style>{`.shiny{position:relative;overflow:hidden}.shiny::after{content:'';position:absolute;top:-50%;left:-75%;width:50%;height:200%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);transform:skewX(-25deg);transition:left 0.6s}.shiny:hover::after{left:125%}`}</style>
    <div className="shiny w-44 h-28 border-4 border-black rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center cursor-pointer">
      <p className="font-black text-black text-xl uppercase italic">SHINY</p>
    </div>
    <p className="text-white/30 font-black text-[10px] uppercase tracking-widest">
      HOVER // shine sweep pseudo-element
    </p>
  </div>
);

export const AnimCard = () => (
  <ContentLayout>
    <SectionDoc
      icon={<MousePointer2 className="w-5 h-5" />}
      iconBg="bg-pink-400"
      title="Card Animations"
      componentCount={10}
      description="10 interactive card animation effects — 3D flip, mouse tilt, neon glow, stack spread, spotlight, and more."
      features={[
        "3D flip on click",
        "Mouse-tilt perspective",
        "Neon glow hover",
        "Stack fan-out hover",
        "Mouse spotlight follow",
        "Slide reveal overlay",
        "Rotating conic border",
        "Parallax layer depth",
        "State morph button",
        "Shiny hover sweep",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="3D Card Flip" subtitle="Click to flip front/back with rotateY">
          <CodePreview
            title="3D Flip"
            code={sampleCodeHeros}
            preview={<Card3DFlip />}
            language="tsx"
            nameFile="card-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Mouse Tilt" subtitle="Card follows cursor with rotateX/Y">
          <CodePreview
            title="Tilt"
            code={sampleCodeHeros}
            preview={<CardTilt />}
            language="tsx"
            nameFile="card-tilt.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Neon Glow" subtitle="Box-shadow neon glow on hover">
          <CodePreview
            title="Neon"
            code={sampleCodeHeros}
            preview={<CardNeonGlow />}
            language="tsx"
            nameFile="card-neon.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Stack Hover" subtitle="Layered cards fan out on hover">
          <CodePreview
            title="Stack"
            code={sampleCodeHeros}
            preview={<CardStackHover />}
            language="tsx"
            nameFile="card-stack.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Spotlight" subtitle="Mouse-follow radial light effect">
          <CodePreview
            title="Spotlight"
            code={sampleCodeHeros}
            preview={<CardSpotlight />}
            language="tsx"
            nameFile="card-spotlight.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Slide Reveal" subtitle="Content slides up on hover">
          <CodePreview
            title="Reveal"
            code={sampleCodeHeros}
            preview={<CardRevealContent />}
            language="tsx"
            nameFile="card-reveal.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Rotating Border" subtitle="Conic-gradient spinning border">
          <CodePreview
            title="Border"
            code={sampleCodeHeros}
            preview={<CardBorderGlow />}
            language="tsx"
            nameFile="card-border.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Parallax Layers" subtitle="Multi-layer depth on mouse move">
          <CodePreview
            title="Parallax"
            code={sampleCodeHeros}
            preview={<CardParallaxLayers />}
            language="tsx"
            nameFile="card-parallax.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Morph State" subtitle="Border-radius + color state machine">
          <CodePreview
            title="Morph"
            code={sampleCodeHeros}
            preview={<CardMorphButton />}
            language="tsx"
            nameFile="card-morph.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Shiny Hover" subtitle="Shine sweep on hover via ::after">
          <CodePreview
            title="Shiny"
            code={sampleCodeHeros}
            preview={<CardShinyHover />}
            language="tsx"
            nameFile="card-shiny.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
