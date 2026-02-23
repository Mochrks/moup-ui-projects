import { useState, useRef, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { BookOpen } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const ScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const h = (e: Event) => setScrollY((e.currentTarget as HTMLDivElement).scrollTop);
    el?.addEventListener("scroll", h);
    return () => el?.removeEventListener("scroll", h);
  }, []);
  return (
    <div
      ref={ref}
      className="relative border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] h-[220px] overflow-y-scroll"
    >
      <div
        className="absolute inset-0 bg-indigo-600"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="h-[400px] flex items-start justify-center pt-8">
          <p className="font-black text-white/20 text-8xl uppercase italic">BG</p>
        </div>
      </div>
      <div className="relative z-10 p-6 flex flex-col gap-4">
        <h2 className="font-black text-white text-3xl uppercase italic">PARALLAX</h2>
        <div className="h-[300px] flex flex-col justify-end gap-2">
          <p className="text-white/60 font-black text-sm uppercase">
            ↑ Scroll inside to see BG move slower
          </p>
          {["SECTION 1", "SECTION 2", "SECTION 3"].map((s) => (
            <div key={s} className="border-2 border-white/20 rounded-xl p-3">
              <p className="text-white font-black text-xs uppercase">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScrollRevealList = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [vis, setVis] = useState<boolean[]>([false, false, false, false, false]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = refs.current.indexOf(e.target as HTMLDivElement);
          if (i >= 0 && e.isIntersecting)
            setVis((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            });
        });
      },
      { threshold: 0.5, root: refs.current[0]?.parentElement }
    );
    refs.current.forEach((r) => {
      if (r) obs.observe(r);
    });
    return () => obs.disconnect();
  }, []);
  const items = [
    ["#ffe135", "black", "✦ TEXT ANIMATIONS"],
    ["#6366f1", "white", "⚡ LOADING UI"],
    ["#ef4444", "white", "🎨 BACKGROUNDS"],
    ["#22c55e", "black", "🃏 CARDS"],
    ["#ec4899", "white", "🖱 MICRO ACTIONS"],
  ];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] h-[220px] overflow-y-scroll bg-white p-4 flex flex-col gap-3">
      <style>{`@keyframes revrow{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}`}</style>
      {items.map(([bg, tc, label], i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          style={{
            animation: vis[i] ? `revrow 0.5s ease-out ${i * 0.05}s both` : "none",
            opacity: vis[i] ? undefined : 0,
          }}
        >
          <div
            className="border-4 border-black rounded-xl px-4 py-3 font-black text-sm uppercase cursor-pointer"
            style={{ background: bg, color: tc }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

const ScrollProgressBar = () => {
  const [pct, setPct] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e]">
      <div className="h-2 bg-zinc-100 border-b-2 border-black">
        <div
          className="h-full bg-[#22c55e] transition-all duration-75"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div
        ref={ref}
        className="h-[200px] overflow-y-scroll p-4 bg-white"
        onScroll={(e) => {
          const el = e.currentTarget;
          setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
        }}
      >
        {[
          "INTRODUCTION",
          "GETTING STARTED",
          "INSTALLATION",
          "CONFIGURATION",
          "ADVANCED USAGE",
          "THEMING",
          "ANIMATIONS",
          "API REFERENCE",
          "CHANGELOG",
          "LICENSE",
        ].map((s, i) => (
          <div key={i} className="py-3 border-b-2 border-zinc-100 last:border-0">
            <p className="font-black text-sm uppercase">{s}</p>
            <p className="text-black/30 text-xs font-black mt-1">
              Section {i + 1} content goes here…
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollStickyCard = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135] h-[220px] overflow-y-scroll bg-white relative"
      onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}
    >
      <div className="sticky top-0 z-10 bg-[#ffe135] border-b-4 border-black px-4 py-2 flex justify-between items-center">
        <p className="font-black text-sm uppercase">STICKY HEADER</p>
        <p className="font-mono text-xs font-black">{Math.round(scrollY)}px</p>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-2 border-zinc-100 rounded-xl p-3">
            <p className="font-black text-xs uppercase text-black/30">ROW_{i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollInfinite = () => {
  const [items, setItems] = useState(Array.from({ length: 5 }, (_, i) => `ITEM_${i + 1}`));
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setItems((it) => [
          ...it,
          ...Array.from({ length: 3 }, (_, i) => `ITEM_${it.length + i + 1}`),
        ]);
        setLoading(false);
      }, 700);
    }
  };
  return (
    <div
      ref={ref}
      className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] h-[220px] overflow-y-scroll bg-zinc-950 p-4 flex flex-col gap-2"
      onScroll={onScroll}
    >
      {items.map((i) => (
        <div
          key={i}
          className="border-2 border-zinc-700 rounded-xl px-4 py-3 text-white font-black text-xs uppercase"
        >
          {i}
        </div>
      ))}
      {loading && (
        <div className="flex items-center justify-center py-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#6366f1] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}
      {!loading && (
        <p className="text-white/20 font-black text-[10px] uppercase tracking-widest text-center py-2">
          ↓ SCROLL FOR MORE
        </p>
      )}
    </div>
  );
};

const ScrollFadeIO = () => {
  const COUNT = 4;
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [vis, setVis] = useState<boolean[]>(Array(COUNT).fill(false));
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = refs.current.indexOf(e.target as HTMLDivElement);
          if (i >= 0 && e.isIntersecting)
            setVis((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            });
        });
      },
      { threshold: 0.3, root: refs.current[0]?.parentElement?.parentElement }
    );
    refs.current.forEach((r) => {
      if (r) obs.observe(r);
    });
    return () => obs.disconnect();
  }, []);
  const items = [
    ["#ffe135", "black", "FADE_UP"],
    ["#6366f1", "white", "FADE_LEFT"],
    ["#ef4444", "white", "FADE_RIGHT"],
    ["#22c55e", "black", "FADE_DOWN"],
  ];
  const anims = ["fadeup", "fadeleft", "faderight", "fadedown"];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ef4444] h-[220px] overflow-y-scroll bg-white p-4 flex flex-col gap-3">
      <style>{`@keyframes fadeupio{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}} @keyframes fadeleftio{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}} @keyframes faderightio{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}} @keyframes fadedownio{from{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}`}</style>
      {items.map(([bg, tc, label], i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="border-4 border-black rounded-xl px-4 py-5 font-black text-sm uppercase text-center"
          style={{
            background: bg,
            color: tc,
            animation: vis[i] ? `${anims[i]}io 0.6s ease-out both` : "none",
            opacity: vis[i] ? undefined : 0,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

const ScrollCarousel = () => {
  const [i, setI] = useState(0);
  const CARDS = [
    ["#6366f1", "white", "SLIDE_1"],
    ["#ffe135", "black", "SLIDE_2"],
    ["#ef4444", "white", "SLIDE_3"],
    ["#22c55e", "black", "SLIDE_4"],
  ];
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#000] bg-white">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {CARDS.map(([bg, tc, label]) => (
            <div
              key={label}
              className="min-w-full h-[160px] flex items-center justify-center border-b-4 border-black"
              style={{ background: bg }}
            >
              <h2 className="font-black text-4xl uppercase italic" style={{ color: tc }}>
                {label}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-3 border-t-4 border-black">
        <button
          onClick={() => setI((x) => Math.max(0, x - 1))}
          className="px-4 py-2 border-4 border-black rounded-xl font-black text-sm cursor-pointer disabled:opacity-30"
          disabled={i === 0}
        >
          ←
        </button>
        <div className="flex gap-2">
          {CARDS.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setI(idx)}
              className="w-3 h-3 rounded-full border-2 border-black cursor-pointer"
              style={{ background: i === idx ? "black" : "transparent" }}
            />
          ))}
        </div>
        <button
          onClick={() => setI((x) => Math.min(CARDS.length - 1, x + 1))}
          className="px-4 py-2 border-4 border-black rounded-xl font-black text-sm cursor-pointer disabled:opacity-30"
          disabled={i === CARDS.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

const ScrollSnap = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#6366f1] h-[220px]">
    <div className="h-full overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>
      {[
        ["#6366f1", "white", "SNAP_1"],
        ["#ffe135", "black", "SNAP_2"],
        ["#ef4444", "white", "SNAP_3"],
      ].map(([bg, tc, label]) => (
        <div
          key={label}
          className="h-full min-h-[220px] flex items-center justify-center border-b-4 border-black last:border-0"
          style={{ background: bg, scrollSnapAlign: "start" }}
        >
          <h2 className="font-black text-4xl uppercase italic" style={{ color: tc }}>
            {label}
          </h2>
        </div>
      ))}
    </div>
  </div>
);

const ScrollCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    let n = 0;
    const iv = setInterval(() => {
      n = Math.min(n + 37, 1337);
      setCount(n);
      if (n >= 1337) clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [vis]);
  return (
    <div
      ref={ref}
      className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#22c55e] bg-[#22c55e] h-[220px] flex flex-col items-center justify-center gap-4"
    >
      <p className="font-black text-black/50 text-xs uppercase tracking-widest">TOTAL COMPONENTS</p>
      <div className="font-black font-mono text-8xl text-black">{count}</div>
      <p className="font-black text-black/50 text-xs uppercase tracking-widest">
        SCROLL INTO VIEW TO TRIGGER
      </p>
    </div>
  );
};

const ScrollHorizontal = () => (
  <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_#ffe135]">
    <div className="overflow-x-scroll" style={{ scrollSnapType: "x mandatory" }}>
      <div className="flex w-max">
        {[
          ["#ffe135", "black"],
          ["#6366f1", "white"],
          ["#ef4444", "white"],
          ["#22c55e", "black"],
          ["#ec4899", "white"],
        ].map(([bg, tc], i) => (
          <div
            key={i}
            className="min-w-[60vw] md:min-w-[280px] h-[200px] border-r-4 border-black flex items-center justify-center flex-col gap-2"
            style={{ background: bg, scrollSnapAlign: "start" }}
          >
            <p className="font-black text-4xl uppercase italic" style={{ color: tc }}>
              CARD_{i + 1}
            </p>
            <p className="font-black text-xs uppercase opacity-50" style={{ color: tc }}>
              → SWIPE
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const AnimScroll = () => (
  <ContentLayout>
    <SectionDoc
      icon={<BookOpen className="w-5 h-5" />}
      iconBg="bg-teal-400"
      title="Scroll Animations"
      componentCount={10}
      description="10 scroll-driven interaction patterns — parallax, IntersectionObserver reveals, progress bar, infinite load, carousels, and snap scrolling."
      features={[
        "Parallax background layer",
        "Stagger reveal on scroll",
        "Reading progress bar",
        "Sticky header scroll",
        "Infinite scroll loader",
        "IntersectionObserver IO",
        "Slide carousel + dots",
        "CSS scroll-snap vertical",
        "Count up on scroll-in",
        "Horizontal snap scroll",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Parallax Layer" subtitle="BG moves at 40% of scroll speed">
          <CodePreview
            title="Parallax"
            code={sampleCodeHeros}
            preview={<ScrollParallax />}
            language="tsx"
            nameFile="scroll-parallax.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Reveal on Scroll" subtitle="IntersectionObserver stagger slide-in">
          <CodePreview
            title="Reveal"
            code={sampleCodeHeros}
            preview={<ScrollRevealList />}
            language="tsx"
            nameFile="scroll-reveal.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Progress Bar" subtitle="Width fills as you scroll through doc">
          <CodePreview
            title="Progress"
            code={sampleCodeHeros}
            preview={<ScrollProgressBar />}
            language="tsx"
            nameFile="scroll-progress.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Sticky Header" subtitle="Sticky header with pixel counter">
          <CodePreview
            title="Sticky"
            code={sampleCodeHeros}
            preview={<ScrollStickyCard />}
            language="tsx"
            nameFile="scroll-sticky.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Infinite Scroll" subtitle="Loads more items on reaching bottom">
          <CodePreview
            title="Infinite"
            code={sampleCodeHeros}
            preview={<ScrollInfinite />}
            language="tsx"
            nameFile="scroll-infinite.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="IO Fade In" subtitle="4 direction fade on intersection observe">
          <CodePreview
            title="IO Fade"
            code={sampleCodeHeros}
            preview={<ScrollFadeIO />}
            language="tsx"
            nameFile="scroll-io.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Carousel" subtitle="Horizontal slider with dot indicators">
          <CodePreview
            title="Carousel"
            code={sampleCodeHeros}
            preview={<ScrollCarousel />}
            language="tsx"
            nameFile="scroll-carousel.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scroll Snap" subtitle="CSS scroll-snap vertical paging">
          <CodePreview
            title="Snap"
            code={sampleCodeHeros}
            preview={<ScrollSnap />}
            language="tsx"
            nameFile="scroll-snap.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Count on Scroll" subtitle="Number counts up when scrolled into view">
          <CodePreview
            title="Counter"
            code={sampleCodeHeros}
            preview={<ScrollCounter />}
            language="tsx"
            nameFile="scroll-counter.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Horizontal Scroll" subtitle="Swipeable horizontal snap cards">
          <CodePreview
            title="Horizontal"
            code={sampleCodeHeros}
            preview={<ScrollHorizontal />}
            language="tsx"
            nameFile="scroll-horizontal.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
