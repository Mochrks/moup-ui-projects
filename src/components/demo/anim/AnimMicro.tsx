import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Heart, Star, Copy, Check, Bell } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const MicroHeart = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <style>{`@keyframes hpop{0%{transform:scale(1)}30%{transform:scale(1.5)}60%{transform:scale(0.9)}100%{transform:scale(1)}}`}</style>
      <button
        onClick={() => setLiked((l) => !l)}
        className="flex items-center gap-3 px-6 py-3 border-4 border-black rounded-2xl font-black text-sm uppercase transition-all active:scale-95"
        style={{ background: liked ? "#ef4444" : "white", color: liked ? "white" : "black" }}
      >
        <Heart
          className="w-5 h-5"
          style={{
            fill: liked ? "white" : "none",
            animation: liked ? "hpop 0.4s ease-out" : "none",
          }}
        />
        {liked ? "LIKED!" : "LIKE"}
      </button>
    </div>
  );
};

const MicroRipple = () => {
  const [rips, setRips] = useState<{ id: number; x: number; y: number }[]>([]);
  return (
    <div className="p-8 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <style>{`@keyframes ripple{0%{transform:scale(0);opacity:0.6}100%{transform:scale(4);opacity:0}}`}</style>
      <button
        className="relative overflow-hidden px-8 py-3 border-4 border-black rounded-2xl bg-[#ffe135] font-black text-lg uppercase italic cursor-pointer"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const id = Date.now();
          setRips((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
          setTimeout(() => setRips((rs) => rs.filter((r) => r.id !== id)), 600);
        }}
      >
        {rips.map((r) => (
          <span
            key={r.id}
            className="absolute w-10 h-10 bg-black/20 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{ left: r.x, top: r.y, animation: "ripple 0.6s linear" }}
          />
        ))}
        RIPPLE
      </button>
    </div>
  );
};

const MicroCopy = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <div className="flex items-center gap-2 bg-zinc-800 border-2 border-zinc-600 rounded-xl px-4 py-2">
        <code className="text-[#22c55e] font-mono text-sm">npm install moup-ui</code>
        <button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="ml-2 p-1.5 rounded-lg border-2 border-zinc-600 hover:border-[#22c55e] transition-colors cursor-pointer"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#22c55e]" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400" />
          )}
        </button>
      </div>
      <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">
        COPY_TO_CLIPBOARD
      </p>
    </div>
  );
};

const MicroRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className="w-10 h-10 cursor-pointer transition-all duration-150 hover:scale-125"
            style={{
              fill: (hover || rating) >= i ? "#000" : "none",
              stroke: "#000",
              strokeWidth: 2.5,
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(i)}
          />
        ))}
      </div>
      <p className="font-black text-black/50 text-sm uppercase">
        {rating ? `${rating}/5 STARS` : "CLICK TO RATE"}
      </p>
    </div>
  );
};

const MicroNotification = () => {
  const [count, setCount] = useState(3);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <style>{`@keyframes badge{0%{transform:scale(0) rotate(-15deg)}60%{transform:scale(1.3) rotate(5deg)}100%{transform:scale(1) rotate(0)}}`}</style>
      <div className="relative cursor-pointer" onClick={() => setCount((c) => Math.max(0, c - 1))}>
        <div className="w-14 h-14 border-4 border-black rounded-2xl bg-zinc-100 flex items-center justify-center">
          <Bell className="w-7 h-7" />
        </div>
        {count > 0 && (
          <span
            key={count}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#ef4444] border-2 border-black rounded-full flex items-center justify-center text-white font-black text-xs"
            style={{ animation: "badge 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
          >
            {count}
          </span>
        )}
      </div>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest">
        CLICK TO DISMISS
      </p>
    </div>
  );
};

const MicroToggle = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="p-8 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <button
        onClick={() => setOn((o) => !o)}
        className="relative w-20 h-10 border-4 border-black rounded-full transition-colors duration-300 cursor-pointer"
        style={{ background: on ? "#22c55e" : "#374151" }}
      >
        <div
          className="absolute top-0.5 w-7 h-7 bg-white border-2 border-black rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] transition-all duration-300"
          style={{
            left: on ? "calc(100% - 30px)" : "2px",
            transform: on ? "rotate(360deg)" : "rotate(0)",
          }}
        />
      </button>
      <p className="text-white/40 font-black text-sm uppercase font-mono">
        {on ? "ENABLED" : "DISABLED"}
      </p>
    </div>
  );
};

const MicroProgressStep = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ec4899] flex flex-col items-center justify-center gap-6 min-h-[140px]">
      <div className="flex items-center gap-1 w-full">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div
              className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center font-black text-xs shrink-0 transition-all duration-300"
              style={{
                background: i <= step ? "#ec4899" : "white",
                color: i <= step ? "white" : "black",
              }}
            >
              {i + 1}
            </div>
            {i < 3 && (
              <div
                className="flex-1 h-1 border-t-4 border-black transition-all duration-300"
                style={{ background: i < step ? "#ec4899" : "transparent" }}
              />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setStep((s) => (s < 3 ? s + 1 : 0))}
        className="px-6 py-2 border-4 border-black rounded-xl bg-[#ec4899] text-white font-black text-sm uppercase cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none"
        style={{ boxShadow: "4px 4px 0 0 #000" }}
      >
        {step < 3 ? "NEXT STEP" : "RESET"}
      </button>
    </div>
  );
};

const MicroAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[140px] flex flex-col justify-center gap-2">
      {["WHAT_IS_MOUP?", "HOW_TO_USE?", "IS_IT_FREE?"].map((q, i) => (
        <div key={i} className="border-2 border-zinc-700 rounded-xl overflow-hidden">
          <button
            className="w-full px-4 py-2.5 text-left text-white font-black text-sm uppercase flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-colors"
            onClick={() => setOpen((o) => (o === i ? null : i))}
          >
            {q}
            <span
              className="transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "60px" : "0" }}
          >
            <p className="px-4 py-2 text-white/50 text-xs">
              Yes, it is! Moup UI is open source and built with Neobrutalism design system.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MicroInputFocus = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] flex flex-col items-center justify-center gap-4 min-h-[140px]">
      <div className="relative w-full max-w-xs">
        <input
          className="w-full px-4 py-3 border-4 border-black rounded-xl font-black text-sm outline-none transition-all duration-200"
          style={{
            boxShadow: active ? "4px 4px 0 0 #6366f1" : "4px 4px 0 0 #000",
            transform: active ? "translate(-2px,-2px)" : "translate(0,0)",
          }}
          placeholder="FOCUS FOR EFFECT..."
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
      </div>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest">
        FOCUS_LIFT // box-shadow + translate
      </p>
    </div>
  );
};

const MicroConfetti = () => {
  const [pts, setPts] = useState<
    { id: number; x: number; y: number; c: string; dx: number; dy: number }[]
  >([]);
  const fire = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top;
    const colors = ["#ffe135", "#6366f1", "#ef4444", "#22c55e", "#ec4899"];
    const newPts = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      c: colors[i % colors.length],
      dx: (Math.random() - 0.5) * 200,
      dy: -(Math.random() * 200 + 50),
    }));
    setPts((p) => [...p, ...newPts]);
    setTimeout(() => setPts([]), 800);
  };
  return (
    <div className="p-8 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center gap-4 min-h-[140px] relative overflow-hidden">
      <style>{`@keyframes conf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--dx),var(--dy)) rotate(360deg);opacity:0}}`}</style>
      {pts.map((p) => (
        <div
          key={p.id}
          className="fixed w-3 h-3 rounded-sm pointer-events-none"
          style={
            {
              left: p.x,
              top: p.y,
              background: p.c,
              border: "1px solid black",
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              animation: "conf 0.8s ease-out forwards",
            } as React.CSSProperties
          }
        />
      ))}
      <button
        onClick={fire}
        className="px-8 py-3 border-4 border-black rounded-xl bg-black text-[#ffe135] font-black text-lg uppercase italic cursor-pointer active:scale-95 transition-transform"
      >
        🎉 CONFETTI!
      </button>
    </div>
  );
};

export const AnimMicro = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Heart className="w-5 h-5" />}
      iconBg="bg-green-400"
      title="Micro Interactions"
      componentCount={10}
      description="10 delightful micro-interaction patterns — heart like, ripple click, copy button, star rating, notification badge, and more."
      features={[
        "Heart like toggle",
        "Click ripple wave",
        "Copy to clipboard",
        "Star rating hover",
        "Notification badge pop",
        "Smooth toggle switch",
        "Multi-step progress",
        "Accordion expand",
        "Focus lift input",
        "Confetti burst",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Heart Like" subtitle="Toggle heart with pop animation">
          <CodePreview
            title="Heart"
            code={sampleCodeHeros}
            preview={<MicroHeart />}
            language="tsx"
            nameFile="micro-heart.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Ripple Click" subtitle="Material-style click ripple effect">
          <CodePreview
            title="Ripple"
            code={sampleCodeHeros}
            preview={<MicroRipple />}
            language="tsx"
            nameFile="micro-ripple.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Copy Button" subtitle="One-click copy with check feedback">
          <CodePreview
            title="Copy"
            code={sampleCodeHeros}
            preview={<MicroCopy />}
            language="tsx"
            nameFile="micro-copy.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Star Rating" subtitle="Interactive hover star rating">
          <CodePreview
            title="Rating"
            code={sampleCodeHeros}
            preview={<MicroRating />}
            language="tsx"
            nameFile="micro-rating.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Notification Badge" subtitle="Badge pop with dismiss on click">
          <CodePreview
            title="Notif"
            code={sampleCodeHeros}
            preview={<MicroNotification />}
            language="tsx"
            nameFile="micro-notif.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Toggle Switch" subtitle="Smooth toggle with rotation">
          <CodePreview
            title="Toggle"
            code={sampleCodeHeros}
            preview={<MicroToggle />}
            language="tsx"
            nameFile="micro-toggle.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Progress Steps" subtitle="Multi-step wizard with progress bar">
          <CodePreview
            title="Steps"
            code={sampleCodeHeros}
            preview={<MicroProgressStep />}
            language="tsx"
            nameFile="micro-steps.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Accordion" subtitle="Smooth height expand/collapse">
          <CodePreview
            title="Accordion"
            code={sampleCodeHeros}
            preview={<MicroAccordion />}
            language="tsx"
            nameFile="micro-accordion.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Focus Lift Input" subtitle="Input lifts on focus with shadow">
          <CodePreview
            title="Input"
            code={sampleCodeHeros}
            preview={<MicroInputFocus />}
            language="tsx"
            nameFile="micro-input.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Confetti Burst" subtitle="Click for burst confetti effect">
          <CodePreview
            title="Confetti"
            code={sampleCodeHeros}
            preview={<MicroConfetti />}
            language="tsx"
            nameFile="micro-confetti.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
