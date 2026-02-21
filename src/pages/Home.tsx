import { useEffect, useRef } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { MdArrowOutward } from "react-icons/md";
import { Navbar } from "@/components/ui-main/Navbar";
import { Footer } from "@/components/ui-main/Footer";
import CodePreview from "@/components/ui-main/CodePriview";
import ScrollToTopButton from "@/components/ui-main/ScrollToTopButton";
import { BorderButton, GlowButton, JellyButton, MorphButton, PulseButton } from "@/code/home";
import {
  sampleCodeButtonHome,
  sampleCodeButtonHomeNext,
  sampleCodeButtonHomeHtml,
} from "@/data/code/home";
import CircularText from "@/components/ui-main/CircularText";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";

const SampleComponent = () => {
  return (
    <div className=" bg-gray-100 flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 p-4">
      <PulseButton>Pulse Button</PulseButton>
      <BorderButton>Border Button</BorderButton>
      <JellyButton>Jelly Button</JellyButton>
      <GlowButton>Glow Button</GlowButton>
      <MorphButton>Morph Button</MorphButton>
    </div>
  );
};

// ─── Feature Card ──────────────────────────────────────────────────────────
interface FeatureCardProps {
  href: string;
  emoji?: string;
  title: string;
  description: string;
  badge?: string;
  gradient: string;
  accentColor: string;
}

const FeatureCard = ({
  href,
  title,
  description,
  badge,
  gradient,
  accentColor,
}: FeatureCardProps) => {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 block"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 group-hover:opacity-90 transition-opacity duration-300"
        style={{ background: gradient }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
        style={{ backgroundColor: accentColor }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[200px]">
        <div className="space-y-3">
          <div className="flex items-start justify-end">
            {badge && (
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full border-2 border-black bg-white text-black">
                {badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-black text-black tracking-tight">{title}</h3>
          <p className="text-sm text-black/70 font-medium leading-relaxed">{description}</p>
        </div>

        {/* Arrow button */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-bold text-black/50 uppercase tracking-widest">
            Explore →
          </span>
          <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-200 shadow-[2px_2px_0_0_#000]">
            <MdArrowOutward className="w-5 h-5 group-hover:rotate-45 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </a>
  );
};

// ─── Marquee Strip ─────────────────────────────────────────────────────────
const marqueeWords = [
  "Components",
  "Colors",
  "Templates",
  "Animations",
  "Neobrutalism",
  "TailwindCSS",
  "ShadcnUI",
  "React",
  "TypeScript",
  "Open Source",
];

const MarqueeStrip = () => (
  <div className="w-full overflow-hidden border-y-4 border-black bg-[#ffe135] py-3">
    <div className="flex animate-marquee whitespace-nowrap will-change-transform">
      {[...marqueeWords, ...marqueeWords].map((word, i) => (
        <span key={i} className="flex items-center gap-3 mr-6">
          <span className="text-sm font-black uppercase tracking-widest text-black">{word}</span>
          <span className="text-black font-black text-lg">✦</span>
        </span>
      ))}
    </div>
  </div>
);

// ─── Feature Data ──────────────────────────────────────────────────────────
const FEATURE_CARDS: FeatureCardProps[] = [
  {
    href: "/docs/introduction",
    title: "Documentation",
    description:
      "Comprehensive guides, API references, and getting-started tutorials to integrate MoupUI into your project.",
    badge: "Start Here",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    accentColor: "#3b82f6",
  },
  {
    href: "/components/all-components",
    title: "Components",
    description:
      "50+ beautifully crafted neobrutalist components — buttons, cards, modals, tables, and much more.",
    badge: "50+ Items",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    accentColor: "#f59e0b",
  },
  {
    href: "/colors",
    title: "Color Generator",
    description:
      "Pick, convert, blend, and explore colors. Generate harmonies, check contrast, and extract colors from images.",
    badge: "New ✨",
    gradient: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
    accentColor: "#ec4899",
  },
  {
    href: "/docs/templates",
    title: "Templates",
    description:
      "Production-ready page templates — hero sections, dashboards, auth flows, and landing pages ready to copy & paste.",
    badge: "Free",
    gradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
    accentColor: "#10b981",
  },
];

// ─── How It Works ───────────────────────────────────────────────────────────
const STEPS = [
  {
    step: "01",
    title: "Browse & Pick",
    description:
      "Explore 50+ neobrutalist components and templates. Find exactly what fits your design.",
    color: "bg-[#dbeafe]",
    border: "border-[#3b82f6]",
  },
  {
    step: "02",
    title: "Copy the Code",
    description:
      "Each component ships with React/TSX, Next.js, and plain HTML code ready to copy in one click.",
    color: "bg-[#fef3c7]",
    border: "border-[#f59e0b]",
  },
  {
    step: "03",
    title: "Paste & Customize",
    description:
      "Paste into your project, tweak colors, fonts, and sizing — it just works with Tailwind.",
    color: "bg-[#d1fae5]",
    border: "border-[#10b981]",
  },
];

const HowItWorks = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white border-b-4 border-black px-6 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block text-xs font-black uppercase tracking-[0.3em] border-2 border-black px-3 py-1 mb-4 bg-black text-white rounded-full">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            From zero to{" "}
            <span className="underline decoration-[#ffe135] decoration-4">production-ready</span> in
            minutes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-black z-0" />

          {STEPS.map((s, i) => (
            <div
              key={i}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className={`relative opacity-0 translate-y-8 rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0_0_#000] ${s.color} transition-none`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Step number bubble */}
              <div
                className={`w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center mb-4 shadow-[3px_3px_0_0_#000] font-black text-sm z-10 relative`}
              >
                {s.step}
              </div>
              <h3 className="text-xl font-black mb-2">{s.title}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
const Home = () => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleReadDocs = () => {
    smoothNavigate("/docs/introduction");
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <div className="hidden lg:block absolute top-[10rem] left-5 z-10 max-w-[200px]">
        <CircularText
          text="MOUP*UI*COMPONENTS*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        {/* Hero section */}
        <main className="flex-grow pt-20">
          <div className="flex flex-col items-center justify-center space-y-10 py-10 md:py-[9rem]">
            <div className="flex flex-col text-start md:text-center space-y-5 md:space-y-10">
              <h1 className="max-w-5xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-20 md:pt-1 2xl:pt-6 px-5">
                Elevate Your Apps with <span className="text-primary">MoupUI</span> – Stunning
                Animated UI Components
              </h1>
              <p className="max-w-5xl text-xl leading-7 [&:not(:first-child)]:mt-3 px-5">
                Transform your React applications with <span className="font-semibold">MoupUI</span>
                , the ultimate UI component library for creating captivating animations. Seamlessly
                integrated with Tailwind CSS, ShadCN UI, and Framer Motion,{" "}
                <span className="font-semibold">MoupUI</span> makes it effortless to bring your
                designs to life. Simply copy, paste, and watch your app shine!
              </p>
            </div>

            <Button className="px-5 py-6 text-xl cursor-pointer" onClick={handleReadDocs}>
              Read the docs
              <MdArrowOutward className="m-2 w-5 h-5" />
            </Button>

            <div className="flex items-center justify-center w-full max-w-6xl px-5 pt-20">
              <CodePreview
                title="Button"
                code={sampleCodeButtonHome}
                codeNext={sampleCodeButtonHomeNext}
                codeHtml={sampleCodeButtonHomeHtml}
                language="tsx"
                nameFile="Button.tsx"
                preview={<SampleComponent />}
              />
            </div>
          </div>
        </main>

        {/* ─── Feature Showcase ──────────────────────────────────── */}
        <section className="mt-20">
          {/* Yellow marquee strip */}
          <MarqueeStrip />

          {/* Section header */}
          <div className="bg-white border-b-4 border-black px-6 py-12 md:py-16 text-center">
            <p className="inline-block text-xs font-black uppercase tracking-[0.3em] border-2 border-black px-3 py-1 mb-4 bg-[#ffe135] rounded-full">
              Explore MoupUI
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              Everything you need to build{" "}
              <span className="underline decoration-[#ffe135] decoration-4">stunning UIs</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              From sleek components to powerful color tools — MoupUI gives you the full toolkit to
              ship beautiful, accessible React apps faster.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-gray-50 border-b-4 border-black px-6 py-12 md:py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURE_CARDS.map((card) => (
                <FeatureCard key={card.href} {...card} />
              ))}
            </div>

            {/* Stats strip */}
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { num: "50+", label: "Components" },
                { num: "22", label: "Color Palettes" },
                { num: "8", label: "Color Tools" },
                { num: "100%", label: "Free & Open Source" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl border-2 border-black bg-white shadow-[4px_4px_0_0_#000]"
                >
                  <p className="text-3xl font-black text-black">{num}</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* How it works section */}
          <HowItWorks />

          {/* Black CTA strip */}
          <div className="bg-black px-6 py-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-3">
              Start building today
            </p>
            <h2 className="text-white text-2xl md:text-4xl font-black mb-2">
              Ready to build something <span className="text-[#ffe135]">awesome?</span> 🚀
            </h2>
            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
              Free forever. No account needed. Just copy, paste, and ship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/docs/introduction"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ffe135] text-black font-black rounded-xl border-2 border-[#ffe135] hover:bg-white transition-colors duration-200 shadow-[4px_4px_0_0_#ffe135] hover:shadow-none text-sm md:text-base"
              >
                Get Started Free <MdArrowOutward className="w-4 h-4" />
              </a>
              <a
                href="/components/all-components"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-black rounded-xl border-2 border-white/30 hover:border-white transition-colors duration-200 text-sm md:text-base"
              >
                Browse Components
              </a>
            </div>
          </div>
          <Footer />
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
