"use client";

import CodePreview from "../../ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { sampleCodeHeros } from "@/data/code/heros";
import { ContentLayout } from "@/layout/ContentLayout";

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

import {
  HeroSimpleGradient,
  HeroGlassmorphism,
  HeroSplit,
  HeroFeatures,
  HeroSearch,
  HeroDarkMinimal,
  HeroAnnouncement,
  HeroVisualList,
  HeroFloatingUI,
  HeroTiered,
} from "@/code/heros-demo";

export const Heros = () => (
  <ContentLayout>
    <SectionDoc
      icon={<HeroIcon />}
      iconBg="bg-[#dbeafe]"
      title="Heros"
      componentCount={11}
      description="Capture your users' attention immediately with stunning animated hero sections. These components combine high-performance particle backgrounds using tsParticles with interactive elements to create an immersive first impression. Perfect for landing pages, SaaS frontpages, and creative portfolios."
      features={[
        "Interactive tsParticles network with hover and click effects",
        "Smooth Framer Motion animations for taglines and call-to-actions",
        "Responsive design that maintains visual impact on mobile",
        "Customizable particle density, speed, and link colors",
        "Standard Shadcn UI button styles for seamless integration",
        "Optimized for performance with loadSlim tsParticles engine",
      ]}
      dependencies={["@tsparticles/react", "@tsparticles/slim", "framer-motion", "lucide-react"]}
      shadcnDeps={["button", "badge"]}
    >
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 gap-12">
          <ComponentBlock title="Simple Gradient" subtitle="Soft background with strong typography">
            <CodePreview
              title="Simple Gradient Hero"
              code={sampleCodeHeros}
              preview={<HeroSimpleGradient />}
              language="tsx"
              nameFile="hero-gradient.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Glassmorphism Premium"
            subtitle="Vibrant colors with translucent layers"
          >
            <CodePreview
              title="Glass Hero"
              code={sampleCodeHeros}
              preview={<HeroGlassmorphism />}
              language="tsx"
              nameFile="hero-glass.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Creative Split" subtitle="Dual-pane layout for content & visual">
            <CodePreview
              title="Split Hero"
              code={sampleCodeHeros}
              preview={<HeroSplit />}
              language="tsx"
              nameFile="hero-split.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Feature Matrix" subtitle="Hero combined with key features grid">
            <CodePreview
              title="Features Hero"
              code={sampleCodeHeros}
              preview={<HeroFeatures />}
              language="tsx"
              nameFile="hero-features.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Search Centric" subtitle="Ideal for documentation or search apps">
            <CodePreview
              title="Search Hero"
              code={sampleCodeHeros}
              preview={<HeroSearch />}
              language="tsx"
              nameFile="hero-search.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Dark Minimalist" subtitle="High contrast dark mode design">
            <CodePreview
              title="Dark Hero"
              code={sampleCodeHeros}
              preview={<HeroDarkMinimal />}
              language="tsx"
              nameFile="hero-dark.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Event Announcement" subtitle="Bold banner style for major news">
            <CodePreview
              title="Announcement Hero"
              code={sampleCodeHeros}
              preview={<HeroAnnouncement />}
              language="tsx"
              nameFile="hero-announcement.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Visual Workflow"
            subtitle="Structured list with visual preview area"
          >
            <CodePreview
              title="Workflow Hero"
              code={sampleCodeHeros}
              preview={<HeroVisualList />}
              language="tsx"
              nameFile="hero-workflow.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Dynamic Floating UI"
            subtitle="Playful elements with bouncing animations"
          >
            <CodePreview
              title="Floating Hero"
              code={sampleCodeHeros}
              preview={<HeroFloatingUI />}
              language="tsx"
              nameFile="hero-floating.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Conversion Tiered" subtitle="Hybrid hero with pricing comparison">
            <CodePreview
              title="Tiered Hero"
              code={sampleCodeHeros}
              preview={<HeroTiered />}
              language="tsx"
              nameFile="hero-tiered.tsx"
            />
          </ComponentBlock>
        </div>
      </div>
    </SectionDoc>
  </ContentLayout>
);
