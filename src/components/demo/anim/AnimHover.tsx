import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { MousePointer } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const HoverMagnetic = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="p-8 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[180px] flex flex-col items-center justify-center gap-4"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - r.left - r.width / 2) * 0.15,
          y: (e.clientY - r.top - r.height / 2) * 0.15,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <div
        className="px-8 py-4 border-4 border-[#6366f1] rounded-2xl bg-indigo-900/50 cursor-pointer transition-transform duration-150"
        style={{ transform: `translate(${pos.x}px,${pos.y}px)` }}
      >
        <p className="font-black text-white text-xl uppercase italic">MAGNETIC</p>
      </div>
      <p className="text-white/30 font-black text-[10px] uppercase tracking-widest">
        HOVER NEARBY TO PULL
      </p>
    </div>
  );
};

const HoverSpotlight = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      className="p-4 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[180px] relative overflow-hidden cursor-crosshair"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 100px at ${pos.x}% ${pos.y}%, rgba(255,225,53,0.15) 0%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <p className="font-black text-white text-2xl uppercase italic">SPOTLIGHT HOVER</p>
      </div>
    </div>
  );
};

const HoverTiltCard = () => {
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex items-center justify-center">
      <div
        className="w-48 h-32 border-4 border-black rounded-2xl overflow-hidden cursor-pointer select-none"
        style={{
          transform: `perspective(600px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: "transform 0.1s",
          boxShadow: "8px 8px 0 0 #000",
          background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.3), transparent),linear-gradient(135deg,#6366f1,#ec4899)`,
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const rx = -(e.clientY - r.top - r.height / 2) * 0.25;
          const ry = (e.clientX - r.left - r.width / 2) * 0.25;
          const gx = ((e.clientX - r.left) / r.width) * 100;
          const gy = ((e.clientY - r.top) / r.height) * 100;
          setT({ rx, ry, gx, gy });
        }}
        onMouseLeave={() => setT({ rx: 0, ry: 0, gx: 50, gy: 50 })}
      >
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-black text-white text-xl uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
            3D TILT
          </p>
        </div>
      </div>
    </div>
  );
};

const HoverGlowBorder = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px] flex flex-col items-center justify-center gap-4">
    <style>{`.glowbdr{border:4px solid #333;transition:border-color 0.3s,box-shadow 0.3s}.glowbdr:hover{border-color:#22c55e;box-shadow:0 0 20px rgba(34,197,94,0.5),inset 0 0 20px rgba(34,197,94,0.05)}`}</style>
    <div className="glowbdr w-full max-w-xs rounded-2xl p-6 cursor-pointer text-center">
      <p className="font-black text-white text-xl uppercase italic">HOVER GLOW</p>
      <p className="text-white/30 text-xs font-black uppercase mt-1">neon border grow</p>
    </div>
    <div
      className="glowbdr w-full max-w-xs rounded-2xl p-4 cursor-pointer text-center"
      style={{ borderColor: "#333" }}
    >
      <p className="font-black text-white text-sm uppercase">SECONDARY CARD</p>
    </div>
  </div>
);

const HoverTextReveal = () => {
  const [hov, setHov] = useState(false);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col items-center justify-center gap-4">
      <div
        className="relative cursor-pointer group"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <h2
          className="font-black text-5xl uppercase italic transition-opacity duration-200"
          style={{ opacity: hov ? 0 : 1 }}
        >
          HOVER ME
        </h2>
        <h2
          className="font-black text-5xl uppercase italic text-black absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ opacity: hov ? 1 : 0, transform: hov ? "translateY(0)" : "translateY(10px)" }}
        >
          REVEALED!
        </h2>
      </div>
      <p className="text-black/40 font-black text-[10px] uppercase tracking-widest">
        FADE SWAP ON HOVER
      </p>
    </div>
  );
};

const HoverColorShift = () => (
  <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[180px] flex flex-col items-center justify-center gap-3">
    <style>{`.colshift{background:white;color:black;transition:background 0.4s,color 0.4s,transform 0.2s,box-shadow 0.2s;cursor:pointer}.colshift:hover{background:#ef4444;color:white;transform:translateY(-3px);box-shadow:0 8px 0 #900}`}</style>
    {["DANGER_BTN", "WARNING_BTN", "SUCCESS_BTN"].map((t, i) => (
      <div
        key={i}
        className="colshift w-full max-w-xs px-6 py-3 border-4 border-black rounded-xl font-black text-sm uppercase text-center"
      >
        {t}
      </div>
    ))}
  </div>
);

const HoverRubberDuck = () => {
  const [anim, setAnim] = useState(false);
  return (
    <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col items-center justify-center gap-4">
      <style>{`@keyframes rubber{0%{transform:scale(1,1)}30%{transform:scale(1.25,0.75)}40%{transform:scale(0.75,1.25)}50%{transform:scale(1.15,0.85)}65%{transform:scale(0.95,1.05)}75%{transform:scale(1.05,0.95)}100%{transform:scale(1,1)}}`}</style>
      <button
        className="px-8 py-4 border-4 border-black rounded-2xl bg-[#ffe135] font-black text-xl uppercase italic cursor-pointer"
        style={{ animation: anim ? "rubber 0.8s ease-out" : "none" }}
        onMouseEnter={() => {
          setAnim(false);
          setTimeout(() => setAnim(true), 10);
        }}
      >
        RUBBER!
      </button>
      <p className="text-white/50 font-black text-[10px] uppercase tracking-widest">
        ELASTIC SQUASH STRETCH
      </p>
    </div>
  );
};

const HoverScanLine = () => (
  <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px] flex flex-col items-center justify-center">
    <style>{`.scan{position:relative;overflow:hidden}.scan::after{content:'';position:absolute;top:-100%;left:0;width:100%;height:50%;background:linear-gradient(transparent,rgba(34,197,94,0.1),transparent);transition:top 0s}.scan:hover::after{top:200%;transition:top 0.6s linear}`}</style>
    <div
      className="scan w-full max-w-xs border-4 border-[#22c55e] rounded-2xl p-6 cursor-pointer text-center"
      style={{ boxShadow: "0 0 10px rgba(34,197,94,0.3)" }}
    >
      <p className="font-mono text-[#22c55e] font-black text-xl uppercase">SCAN_ME</p>
      <p className="font-mono text-[#22c55e]/40 text-xs mt-1">HOVER // scan line sweep</p>
    </div>
  </div>
);

const HoverFloatShadow = () => (
  <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-wrap items-center justify-center gap-4">
    <style>{`.flthov{transition:transform 0.2s,box-shadow 0.2s;cursor:pointer}.flthov:hover{transform:translateY(-8px);box-shadow:8px 16px 0 0 #000}`}</style>
    {[
      ["#ffe135", "black"],
      ["#6366f1", "white"],
      ["#ef4444", "white"],
      ["#22c55e", "black"],
    ].map(([bg, tc], i) => (
      <div
        key={i}
        className="flthov w-20 h-20 border-4 border-black rounded-2xl flex items-center justify-center font-black text-xs uppercase"
        style={{ background: bg, color: tc, boxShadow: "4px 4px 0 0 #000" }}
      >
        {["CARD", "FLOAT", "LIFT", "FLY"][i]}
      </div>
    ))}
    <p className="w-full text-center text-black/30 font-black text-[10px] uppercase tracking-widest">
      HOVER EACH CARD TO LIFT
    </p>
  </div>
);

const HoverSlideUnderline = () => (
  <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col items-center justify-center gap-6">
    <style>{`.slnav a{position:relative;color:black;text-decoration:none}.slnav a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:3px;background:black;transition:width 0.3s ease}.slnav a:hover::after{width:100%}`}</style>
    <nav className="slnav flex gap-8">
      {["HOME", "WORKS", "ABOUT", "CONTACT"].map((n) => (
        <a
          key={n}
          href="#"
          className="font-black text-xl uppercase italic"
          onClick={(e) => e.preventDefault()}
        >
          {n}
        </a>
      ))}
    </nav>
    <p className="text-black/40 font-black text-[10px] uppercase tracking-widest">
      SLIDE_UNDERLINE // ::after width
    </p>
  </div>
);

export const AnimHover = () => (
  <ContentLayout>
    <SectionDoc
      icon={<MousePointer className="w-5 h-5" />}
      iconBg="bg-yellow-400"
      title="Hover Effects"
      componentCount={10}
      description="10 modern hover interaction effects — magnetic pull, spotlight, 3D tilt, glow border, rubber stretch, and scan line animations."
      features={[
        "Magnetic element pull",
        "Radial spotlight follow",
        "3D perspective tilt",
        "Neon glow border grow",
        "Fade swap text reveal",
        "Background color shift",
        "Rubber squash-stretch",
        "Scan line sweep",
        "Float with shadow lift",
        "Slide underline nav",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Magnetic Pull" subtitle="Element pulls toward cursor">
          <CodePreview
            title="Magnetic"
            code={sampleCodeHeros}
            preview={<HoverMagnetic />}
            language="tsx"
            nameFile="hover-magnetic.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Spotlight" subtitle="Radial light follows mouse position">
          <CodePreview
            title="Spotlight"
            code={sampleCodeHeros}
            preview={<HoverSpotlight />}
            language="tsx"
            nameFile="hover-spotlight.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="3D Tilt" subtitle="Perspective tilt + shine highlight">
          <CodePreview
            title="3D Tilt"
            code={sampleCodeHeros}
            preview={<HoverTiltCard />}
            language="tsx"
            nameFile="hover-tilt.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Glow Border" subtitle="Neon glow border appears on hover">
          <CodePreview
            title="Glow"
            code={sampleCodeHeros}
            preview={<HoverGlowBorder />}
            language="tsx"
            nameFile="hover-glow.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Text Reveal" subtitle="Hidden text fades up on hover">
          <CodePreview
            title="TextReveal"
            code={sampleCodeHeros}
            preview={<HoverTextReveal />}
            language="tsx"
            nameFile="hover-text.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Color Shift" subtitle="Background color fills on hover">
          <CodePreview
            title="ColorShift"
            code={sampleCodeHeros}
            preview={<HoverColorShift />}
            language="tsx"
            nameFile="hover-color.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Rubber Stretch" subtitle="Elastic squash-and-stretch bounce">
          <CodePreview
            title="Rubber"
            code={sampleCodeHeros}
            preview={<HoverRubberDuck />}
            language="tsx"
            nameFile="hover-rubber.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scan Line" subtitle="Glowing scan line sweeps down">
          <CodePreview
            title="Scan"
            code={sampleCodeHeros}
            preview={<HoverScanLine />}
            language="tsx"
            nameFile="hover-scan.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Float Shadow" subtitle="Card lifts with growing shadow">
          <CodePreview
            title="Float"
            code={sampleCodeHeros}
            preview={<HoverFloatShadow />}
            language="tsx"
            nameFile="hover-float.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Slide Underline" subtitle="Nav underline slides in from left">
          <CodePreview
            title="Underline"
            code={sampleCodeHeros}
            preview={<HoverSlideUnderline />}
            language="tsx"
            nameFile="hover-underline.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
