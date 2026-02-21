"use client";

import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Engine, Container } from "@tsparticles/engine";
import CodePreview from "../../ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { sampleCodeHeros, sampleCodeHerosNext, sampleCodeHerosHtml } from "@/data/code/heros";
import { ContentLayout } from "@/layout/ContentLayout";

// ─── Particle Hero Preview Component ─────────────────────────────────────────
const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) return <></>;
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: { color: { value: "#0d47a1" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 4,
              straight: false,
            },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

const HeroPreview: React.FC = () => (
  <div className="relative w-full overflow-hidden bg-[#0d47a1]">
    <ParticleBackground />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30 text-white text-center px-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold">
        🚀 Interactive Particle Network
      </div>
      <h1 className="text-3xl md:text-4xl font-black leading-tight">Animated Hero Sections</h1>
      <p className="text-white/70 text-sm max-w-sm leading-relaxed">
        Stunning particle backgrounds powered by tsParticles. Hover to repulse, click to add more.
      </p>
      <div className="flex gap-3 mt-2">
        <button className="px-5 py-2 bg-[#ffe135] text-black font-black rounded-lg border-2 border-white hover:scale-105 transition-transform text-sm">
          Get Started →
        </button>
        <button className="px-5 py-2 bg-white/10 text-white font-bold rounded-lg border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm text-sm">
          View Docs
        </button>
      </div>
    </div>
  </div>
);

const HeroIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Heros = () => (
  <ContentLayout>
    <SectionDoc
      icon={<HeroIcon />}
      iconBg="bg-[#dbeafe]"
      title="Animated Heros"
      componentCount={1}
      description="Capture your users' attention immediately with stunning animated hero sections. These components combine high-performance particle backgrounds using tsParticles with interactive elements to create an immersive first impression. Perfect for landing pages, SaaS frontpages, and creative portfolios."
      features={[
        "Interactive tsParticles network with hover and click effects",
        "Smooth Framer Motion animations for taglines and call-to-actions",
        "Responsive design that maintains visual impact on mobile",
        "Customizable particle density, speed, and link colors",
        "Standard Shadcn UI button styles for seamless integration",
        "Optimized for performance with loadSlim tsParticles engine",
      ]}
      dependencies={["@tsparticles/react", "@tsparticles/slim", "framer-motion"]}
      shadcnDeps={["button", "badge"]}
    >
      <ComponentBlock
        title="Interactive Particle Hero"
        subtitle="Dynamic network background with hero content overlay"
        features={["tsParticles Engine", "Repulse on Hover", "Push on Click", "Glassmorphism UI"]}
      >
        <div className="w-full px-0">
          <CodePreview
            title="Particle Network Hero"
            code={sampleCodeHeros}
            codeNext={sampleCodeHerosNext}
            codeHtml={sampleCodeHerosHtml}
            language="javascript"
            nameFile="hero-particle.tsx"
            preview={<HeroPreview />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
