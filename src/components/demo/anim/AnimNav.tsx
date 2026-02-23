import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Navigation } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const NavBorderSlide = () => {
  const [active, setActive] = useState("HOME");
  const ITEMS = ["HOME", "ABOUT", "WORK", "CONTACT"];
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4">
      <nav className="flex border-b-4 border-black">
        {ITEMS.map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 py-3 font-black text-sm uppercase relative cursor-pointer transition-colors"
            style={{ color: active === i ? "black" : "rgba(0,0,0,0.3)" }}
          >
            {i}
            {active === i && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6366f1] transition-all" />
            )}
          </button>
        ))}
      </nav>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest text-center">
        ACTIVE: {active} // border-bottom indicator
      </p>
    </div>
  );
};

const NavPillActive = () => {
  const [active, setActive] = useState(0);
  const ITEMS = ["DESIGN", "CODE", "SHIP", "ITERATE"];
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4">
      <div className="flex bg-white border-4 border-black rounded-2xl p-1 gap-1">
        {ITEMS.map((i, idx) => (
          <button
            key={i}
            onClick={() => setActive(idx)}
            className="flex-1 py-2 px-1 font-black text-xs uppercase rounded-xl transition-all duration-200 cursor-pointer relative z-10"
            style={{
              background: active === idx ? "black" : "transparent",
              color: active === idx ? "#ffe135" : "black",
              transform: active === idx ? "scale(1.02)" : "scale(1)",
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <p className="text-black/40 font-black text-[10px] uppercase tracking-widest text-center">
        PILL_ACTIVE // background transition
      </p>
    </div>
  );
};

const NavBreadcrumb = () => {
  const [path, setPath] = useState(["HOME"]);
  const ALL = ["HOME", "PRODUCTS", "ELECTRONICS", "LAPTOPS"];
  const next = () => {
    const n = ALL[path.length];
    if (n) setPath((p) => [...p, n]);
    else setPath(["HOME"]);
  };
  return (
    <div className="p-6 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4 min-h-[140px]">
      <style>{`@keyframes crumb{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex flex-wrap items-center gap-1">
        {path.map((p, i) => (
          <div
            key={`${p}-${i}`}
            className="flex items-center gap-1"
            style={{ animation: "crumb 0.25s ease-out" }}
          >
            <button
              onClick={() => setPath((ps) => ps.slice(0, i + 1))}
              className="font-black text-sm uppercase cursor-pointer"
              style={{ color: i === path.length - 1 ? "#ffe135" : "rgba(255,255,255,0.5)" }}
            >
              {p}
            </button>
            {i < path.length - 1 && <span className="text-white/30 font-black">/</span>}
          </div>
        ))}
      </div>
      <button
        onClick={next}
        className="self-start px-4 py-2 border-2 border-white/50 rounded-lg text-white font-black text-xs uppercase cursor-pointer hover:border-white transition-colors"
      >
        {path.length >= ALL.length ? "RESET" : "GO DEEPER →"}
      </button>
    </div>
  );
};

const SCROLL_ITEMS = ["TOP", "FEATURES", "PRICING", "CONTACT"];
const NavScrollSpy = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SCROLL_ITEMS.length), 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        {SCROLL_ITEMS.map((i, idx) => (
          <button
            key={i}
            onClick={() => setActive(idx)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left"
            style={{ background: active === idx ? "rgba(99,102,241,0.2)" : "transparent" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full transition-all duration-200"
              style={{
                background: active === idx ? "#6366f1" : "rgba(255,255,255,0.2)",
                transform: active === idx ? "scale(1.5)" : "scale(1)",
              }}
            />
            <span
              className="font-black text-sm uppercase"
              style={{ color: active === idx ? "#6366f1" : "rgba(255,255,255,0.4)" }}
            >
              {i}
            </span>
            {active === idx && <span className="ml-auto text-[#6366f1] font-black text-xs">●</span>}
          </button>
        ))}
      </div>
      <p className="text-white/20 font-black text-[9px] uppercase tracking-widest">
        AUTO-ADVANCES // simulate scroll spy
      </p>
    </div>
  );
};

const NavMegaMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] relative min-h-[200px]">
      <style>{`@keyframes megain{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <nav className="flex items-center gap-4 border-4 border-black rounded-xl px-4 py-2 bg-black">
        {["HOME", "ABOUT"].map((i) => (
          <a
            key={i}
            href="#"
            className="text-white font-black text-sm uppercase"
            onClick={(e) => e.preventDefault()}
          >
            {i}
          </a>
        ))}
        <button
          className="text-white font-black text-sm uppercase flex items-center gap-1 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        >
          PRODUCTS {open ? "▲" : "▼"}
        </button>
      </nav>
      {open && (
        <div
          className="absolute top-20 left-6 right-6 bg-white border-4 border-black rounded-2xl p-4 shadow-[8px_8px_0_0_#000] z-10"
          style={{ animation: "megain 0.25s ease-out" }}
        >
          <div className="grid grid-cols-3 gap-3">
            {[
              ["🎨", "UI KITS"],
              ["⚡", "TEMPLATES"],
              ["🛠", "TOOLS"],
              ["📚", "DOCS"],
              ["🔒", "AUTH"],
              ["🚀", "DEPLOY"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="p-2 border-2 border-zinc-100 rounded-lg hover:border-black cursor-pointer transition-all text-center"
              >
                <div className="text-2xl">{icon}</div>
                <p className="font-black text-[10px] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavStepProgress = () => {
  const [step, setStep] = useState(0);
  const STEPS = ["DETAILS", "REVIEW", "PAYMENT", "CONFIRM"];
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4">
      <div className="flex items-center w-full">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => setStep(i)}
              className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center font-black text-xs shrink-0 cursor-pointer transition-all duration-300"
              style={{
                background: i <= step ? "black" : "white",
                color: i <= step ? "#ffe135" : "black",
                transform: i === step ? "scale(1.2)" : "scale(1)",
              }}
            >
              {i + 1}
            </button>
            {i < STEPS.length - 1 && (
              <div
                className="flex-1 h-1 border-t-4 border-black"
                style={{ background: i < step ? "black" : "transparent" }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="font-black text-xs uppercase text-center text-black/50">{STEPS[step]}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="flex-1 py-2 border-4 border-black rounded-xl font-black text-xs uppercase cursor-pointer bg-white"
        >
          ← BACK
        </button>
        <button
          onClick={() => setStep((s) => Math.min(3, s + 1))}
          className="flex-1 py-2 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black text-xs uppercase cursor-pointer"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
};

const NavAccMenu = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ITEMS = [
    ["PRODUCTS", ["UI Kit", "Templates", "Icons", "Fonts"]],
    ["RESOURCES", ["Docs", "Blog", "Changelog", "Status"]],
    ["COMPANY", ["About", "Careers", "Press", "Contact"]],
  ];
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] flex flex-col gap-2">
      {ITEMS.map(([title, sub], i) => (
        <div key={i} className="border-2 border-zinc-700 rounded-xl overflow-hidden">
          <button
            className="w-full px-4 py-3 flex justify-between items-center text-white font-black text-sm uppercase cursor-pointer hover:bg-zinc-800 transition-colors"
            onClick={() => setOpenIdx((o) => (o === i ? null : i))}
          >
            {title}
            <span
              className="transition-transform duration-300"
              style={{ transform: openIdx === i ? "rotate(90deg)" : "rotate(0)" }}
            >
              &gt;
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: openIdx === i ? "160px" : "0" }}
          >
            <div className="px-4 pb-3 flex flex-col gap-1">
              {(sub as string[]).map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-white/50 hover:text-[#22c55e] font-black text-xs uppercase transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NavTabSwitch = () => {
  const [tab, setTab] = useState(0);
  const TABS = [
    ["OVERVIEW", "Comprehensive UI kit for modern web apps."],
    ["FEATURES", "10+ animation types, 50+ components."],
    ["PRICING", "Free, Pro, and Enterprise tiers."],
  ];
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] flex flex-col gap-4 min-h-[180px]">
      <style>{`@keyframes tabin{from{opacity:0;transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex border-4 border-black rounded-xl overflow-hidden">
        {TABS.map(([label], i) => (
          <button
            key={label}
            onClick={() => setTab(i)}
            className="flex-1 py-2 font-black text-xs uppercase cursor-pointer border-r-4 border-black last:border-r-0 transition-all"
            style={{
              background: tab === i ? "black" : "white",
              color: tab === i ? "white" : "black",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <p
        key={tab}
        className="text-black/60 font-black text-sm"
        style={{ animation: "tabin 0.25s ease-out" }}
      >
        {TABS[tab][1]}
      </p>
    </div>
  );
};

const NavDotNav = () => {
  const [active, setActive] = useState(0);
  const PAGES = 6;
  return (
    <div className="p-6 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center gap-6 min-h-[180px] justify-center">
      <div className="w-full bg-indigo-500 border-4 border-black rounded-2xl h-24 flex items-center justify-center">
        <p className="font-black text-white text-2xl uppercase italic">PAGE {active + 1}</p>
      </div>
      <div className="flex gap-3">
        {Array.from({ length: PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full border-4 border-white cursor-pointer transition-all duration-300"
            style={{
              width: active === i ? "40px" : "14px",
              height: "14px",
              background: active === i ? "#ffe135" : "transparent",
              transform: active === i ? "scale(1.1)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          className="px-4 py-2 border-4 border-white rounded-xl text-white font-black text-xs uppercase cursor-pointer"
        >
          ←
        </button>
        <button
          onClick={() => setActive((a) => Math.min(PAGES - 1, a + 1))}
          className="px-4 py-2 border-4 border-white rounded-xl text-white font-black text-xs uppercase cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  );
};

const NavFloatingBtn = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col gap-4 min-h-[180px] justify-between relative">
      <style>{`@keyframes fltbtn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="flex flex-col gap-2">
        {["Component", "Animation", "Docs"].map((i) => (
          <div key={i} className="h-4 bg-black/10 rounded-full" />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {["More text", "Here too", "And here"].map((i) => (
          <div
            key={i}
            className="h-4 bg-black/10 rounded-full"
            style={{ width: `${Math.random() * 40 + 60}%` }}
          />
        ))}
      </div>
      {visible && (
        <button
          className="absolute bottom-6 right-6 w-12 h-12 border-4 border-black bg-black text-[#ffe135] rounded-full font-black flex items-center justify-center text-xl shadow-[4px_4px_0_0_#000] cursor-pointer"
          style={{ animation: "fltbtn 0.4s cubic-bezier(0.22,1,0.36,1)" }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export const AnimNav = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Navigation className="w-5 h-5" />}
      iconBg="bg-indigo-400"
      title="Navigation Animations"
      componentCount={10}
      description="10 sophisticated navigation patterns — sliding indicators, pill switchers, mega menu, scroll spy, breadcrumbs, and carousel dot nav."
      features={[
        "Sliding border indicator",
        "Pill active background",
        "Animated breadcrumbs",
        "Scroll spy sidebar",
        "Mega dropdown grid",
        "Multi-step wizard",
        "Accordion side nav",
        "Tab content switch",
        "Dot carousel nav",
        "Back-to-top FAB",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Border Slide Nav" subtitle="Bottom border slides to active tab">
          <CodePreview
            title="Border"
            code={sampleCodeHeros}
            preview={<NavBorderSlide />}
            language="tsx"
            nameFile="nav-border.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Pill Toggle" subtitle="Filled pill follows active selection">
          <CodePreview
            title="Pill"
            code={sampleCodeHeros}
            preview={<NavPillActive />}
            language="tsx"
            nameFile="nav-pill.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Breadcrumbs" subtitle="Animated crumb appears on navigation">
          <CodePreview
            title="Breadcrumb"
            code={sampleCodeHeros}
            preview={<NavBreadcrumb />}
            language="tsx"
            nameFile="nav-breadcrumb.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scroll Spy" subtitle="Sidebar dot highlights active section">
          <CodePreview
            title="ScrollSpy"
            code={sampleCodeHeros}
            preview={<NavScrollSpy />}
            language="tsx"
            nameFile="nav-scrollspy.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Mega Menu" subtitle="Grid dropdown with icon cards">
          <CodePreview
            title="Mega"
            code={sampleCodeHeros}
            preview={<NavMegaMenu />}
            language="tsx"
            nameFile="nav-mega.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Step Progress" subtitle="Wizard with back/next + indicators">
          <CodePreview
            title="Steps"
            code={sampleCodeHeros}
            preview={<NavStepProgress />}
            language="tsx"
            nameFile="nav-steps.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Accordion Nav" subtitle="Expand/collapse grouped nav links">
          <CodePreview
            title="Accordion"
            code={sampleCodeHeros}
            preview={<NavAccMenu />}
            language="tsx"
            nameFile="nav-accordion.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Tab Content" subtitle="Animated content swap on tab click">
          <CodePreview
            title="Tabs"
            code={sampleCodeHeros}
            preview={<NavTabSwitch />}
            language="tsx"
            nameFile="nav-tabs.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Dot Nav" subtitle="Expandable dot carousel navigation">
          <CodePreview
            title="Dots"
            code={sampleCodeHeros}
            preview={<NavDotNav />}
            language="tsx"
            nameFile="nav-dots.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Back to Top" subtitle="FAB appears on scroll with animate-in">
          <CodePreview
            title="BackTop"
            code={sampleCodeHeros}
            preview={<NavFloatingBtn />}
            language="tsx"
            nameFile="nav-backtop.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
