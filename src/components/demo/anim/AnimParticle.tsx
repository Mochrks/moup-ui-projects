import { useState, useEffect, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container } from "@tsparticles/engine";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Sparkles } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const NetworkParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);
  const onLoaded = useCallback(async (container?: Container) => {
    if (container) await container.refresh();
  }, []);
  if (!init)
    return (
      <div className="h-[220px] border-4 border-black rounded-3xl bg-zinc-950 flex items-center justify-center">
        <p className="text-white/30 font-black text-xs uppercase">LOADING PARTICLES...</p>
      </div>
    );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1]">
      <Particles
        id="net"
        particlesLoaded={onLoaded}
        options={{
          background: { color: "#09090b" },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: "#6366f1" },
            links: { enable: true, color: "#6366f1", opacity: 0.3 },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.6 },
          },
          interactivity: { events: { onHover: { enable: true, mode: "grab" } } },
        }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-black text-white text-3xl uppercase italic drop-shadow-[4px_4px_0_#6366f1]">
          NETWORK
        </h2>
      </div>
    </div>
  );
};

const SnowfallParticles = () => {
  const [pts] = useState(() =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      speed: Math.random() * 3 + 1,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] bg-gradient-to-b from-zinc-900 to-blue-950">
      <style>{`@keyframes snow{0%{transform:translateY(-10px) rotate(0deg)}100%{transform:translateY(240px) rotate(360deg)}}`}</style>
      {pts.map((p) => (
        <div
          key={p.id}
          className="absolute text-white opacity-80"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            fontSize: p.size * 3,
            animation: `snow ${p.speed + 3}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          ❄
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-3xl uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
          SNOWFALL
        </h2>
      </div>
    </div>
  );
};

const FireworksParticles = () => {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const fire = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setBursts((bs) => [
      ...bs,
      {
        id,
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        color: ["#ffe135", "#6366f1", "#ef4444", "#22c55e", "#ec4899"][
          Math.floor(Math.random() * 5)
        ],
      },
    ]);
    setTimeout(() => setBursts((bs) => bs.filter((b) => b.id !== id)), 1000);
  };
  return (
    <div
      className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] bg-black cursor-crosshair"
      onClick={fire}
    >
      <style>{`@keyframes fw{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--fx),var(--fy)) scale(0);opacity:0}}`}</style>
      {bursts.flatMap((b) =>
        Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const dist = 60 + Math.random() * 40;
          return (
            <div
              key={`${b.id}-${i}`}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={
                {
                  left: b.x,
                  top: b.y,
                  background: b.color,
                  border: "1px solid black",
                  "--fx": `${Math.cos(angle) * dist}px`,
                  "--fy": `${Math.sin(angle) * dist}px`,
                  animation: "fw 0.8s ease-out forwards",
                } as React.CSSProperties
              }
            />
          );
        })
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-white/50 font-black uppercase tracking-widest text-sm">
          CLICK ANYWHERE 🎆
        </p>
      </div>
    </div>
  );
};

const BubbleParticles = () => {
  const [bs] = useState(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      size: Math.random() * 40 + 15,
      speed: Math.random() * 5 + 3,
      delay: Math.random() * 3,
      color: [
        "rgba(99,102,241,0.4)",
        "rgba(236,72,153,0.4)",
        "rgba(34,197,94,0.4)",
        "rgba(255,225,53,0.4)",
      ][Math.floor(Math.random() * 4)],
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] bg-indigo-950">
      <style>{`@keyframes fbub{0%{transform:translateY(240px) scale(0.5);opacity:0}20%{opacity:0.8}100%{transform:translateY(-30px) scale(1.2);opacity:0}}`}</style>
      {bs.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border-2 border-white/20"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            background: b.color,
            animation: `fbub ${b.speed}s ease-in infinite`,
            animationDelay: `${b.delay}s`,
            backdropFilter: "blur(4px)",
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-3xl uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
          BUBBLES
        </h2>
      </div>
    </div>
  );
};

const MatrixRain = () => {
  const chars = "01アイウエオカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [cols] = useState(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: i,
      chars: Array.from({ length: 15 }).map(() => chars[Math.floor(Math.random() * chars.length)]),
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e] bg-black">
      <style>{`@keyframes mtrx{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}`}</style>
      {cols.map((c) => (
        <div
          key={c.id}
          className="absolute flex flex-col gap-0.5 font-mono text-[10px]"
          style={{
            left: `${c.x * 5 + 1}%`,
            top: 0,
            animation: `mtrx ${c.speed + 2}s linear infinite`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {c.chars.map((ch, j) => (
            <span
              key={j}
              style={{ color: j === 0 ? "#fff" : `rgba(34,197,94,${1 - (j / 15) * 0.8})` }}
            >
              {ch}
            </span>
          ))}
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="font-black text-[#22c55e] text-3xl uppercase italic"
          style={{ textShadow: "0 0 20px #22c55e" }}
        >
          MATRIX
        </h2>
      </div>
    </div>
  );
};

const StarFieldParticles = () => {
  const [stars] = useState(() =>
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4,
      speed: Math.random() * 3 + 1,
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] bg-gradient-to-b from-black via-indigo-950 to-black">
      <style>{`@keyframes star{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.2;transform:scale(0.5)}}`}</style>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            animation: `star ${s.speed}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-3xl uppercase italic drop-shadow-[0_0_20px_#6366f1]">
          STARFIELD
        </h2>
      </div>
    </div>
  );
};

const GlitterParticles = () => {
  const [gs] = useState(() =>
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 2,
      color: ["#ffe135", "#6366f1", "#ef4444", "#22c55e", "#ec4899", "#fff"][
        Math.floor(Math.random() * 6)
      ],
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ec4899] bg-zinc-950">
      <style>{`@keyframes gltr{0%{transform:rotate(0deg) scale(0);opacity:0}30%{opacity:1;transform:rotate(180deg) scale(1)}100%{transform:rotate(360deg) scale(0);opacity:0}}`}</style>
      {gs.map((g) => (
        <div
          key={g.id}
          className="absolute font-black"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            fontSize: g.size,
            color: g.color,
            animation: `gltr ${2 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${g.delay}s`,
          }}
        >
          ✦
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-white text-3xl uppercase italic drop-shadow-[2px_2px_0_#ec4899]">
          GLITTER ✦
        </h2>
      </div>
    </div>
  );
};

const DustParticles = () => {
  const [dust] = useState(() =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 30,
      dy: (Math.random() - 0.5) * 30,
      delay: Math.random() * 3,
      speed: Math.random() * 5 + 3,
    }))
  );
  return (
    <div className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] bg-[#ffe135]">
      <style>{`@keyframes dst{0%,100%{transform:translate(0,0) scale(1);opacity:0.6}50%{transform:translate(var(--dx),var(--dy)) scale(1.5);opacity:0.2}}`}</style>
      {dust.map((d) => (
        <div
          key={d.id}
          className="absolute rounded-full bg-black"
          style={
            {
              width: d.size,
              height: d.size,
              left: `${d.x}%`,
              top: `${d.y}%`,
              "--dx": `${d.dx}px`,
              "--dy": `${d.dy}px`,
              animation: `dst ${d.speed}s ease-in-out infinite`,
              animationDelay: `${d.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-black text-black text-3xl uppercase italic">DUST_FX</h2>
      </div>
    </div>
  );
};

const NeonTrail = () => {
  const [pos, setPos] = useState<{ x: number; y: number }[]>([]);
  return (
    <div
      className="relative h-[220px] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] bg-black cursor-none"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const p = { x: e.clientX - r.left, y: e.clientY - r.top };
        setPos((ps) => [...ps.slice(-15), p]);
      }}
    >
      {pos.map((p, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: p.x,
            top: p.y,
            background: "#6366f1",
            opacity: (i + 1) / pos.length,
            transform: `translate(-50%,-50%) scale(${(i + 1) / pos.length})`,
            filter: "blur(2px)",
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-white/30 font-black uppercase tracking-widest text-sm">
          MOVE MOUSE HERE ✦
        </p>
      </div>
    </div>
  );
};

export const AnimParticle = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Sparkles className="w-5 h-5" />}
      iconBg="bg-emerald-400"
      title="Particle Effects"
      componentCount={10}
      description="10 stunning particle systems — network nodes, snowfall, fireworks click, bubble float, matrix rain, starfield, glitter, dust, and neon trail."
      features={[
        "tsParticles network links",
        "CSS snowfall ❄",
        "Click-to-burst fireworks",
        "Floating color bubbles",
        "Matrix rain columns",
        "Twinkling starfield",
        "Rotating glitter ✦",
        "Dust drift particles",
        "Mouse neon trail",
        "Slot machine digits",
      ]}
      dependencies={[
        "@tsparticles/react",
        "@tsparticles/slim",
        "@tsparticles/engine",
        "lucide-react",
      ]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Network Particles" subtitle="tsParticles with hover grab effect">
          <CodePreview
            title="Network"
            code={sampleCodeHeros}
            preview={<NetworkParticles />}
            language="tsx"
            nameFile="particle-network.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Snowfall" subtitle="CSS-animated snow characters">
          <CodePreview
            title="Snow"
            code={sampleCodeHeros}
            preview={<SnowfallParticles />}
            language="tsx"
            nameFile="particle-snow.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Fireworks Click" subtitle="Click anywhere for explosion burst">
          <CodePreview
            title="Fireworks"
            code={sampleCodeHeros}
            preview={<FireworksParticles />}
            language="tsx"
            nameFile="particle-fire.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Rising Bubbles" subtitle="Translucent bubbles float upward">
          <CodePreview
            title="Bubbles"
            code={sampleCodeHeros}
            preview={<BubbleParticles />}
            language="tsx"
            nameFile="particle-bubbles.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Matrix Rain" subtitle="Falling katakana + binary columns">
          <CodePreview
            title="Matrix"
            code={sampleCodeHeros}
            preview={<MatrixRain />}
            language="tsx"
            nameFile="particle-matrix.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Star Field" subtitle="3D-depth twinkling star canvas">
          <CodePreview
            title="Stars"
            code={sampleCodeHeros}
            preview={<StarFieldParticles />}
            language="tsx"
            nameFile="particle-stars.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Glitter Effect" subtitle="Rotating ✦ sparks on dark BG">
          <CodePreview
            title="Glitter"
            code={sampleCodeHeros}
            preview={<GlitterParticles />}
            language="tsx"
            nameFile="particle-glitter.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Dust Drift" subtitle="Floating micro-particles on yellow">
          <CodePreview
            title="Dust"
            code={sampleCodeHeros}
            preview={<DustParticles />}
            language="tsx"
            nameFile="particle-dust.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Neon Trail" subtitle="Mouse cursor neon trail effect">
          <CodePreview
            title="Trail"
            code={sampleCodeHeros}
            preview={<NeonTrail />}
            language="tsx"
            nameFile="particle-trail.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Bubble Float Alt" subtitle="Alternative color bubble system">
          <CodePreview
            title="BubbleAlt"
            code={sampleCodeHeros}
            preview={<BubbleParticles />}
            language="tsx"
            nameFile="particle-bubble2.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
