import { useState } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { Layers } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const ModalBlurZoom = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes bzin{from{opacity:0;transform:scale(0.85);filter:blur(8px)}to{opacity:1;transform:scale(1);filter:blur(0)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-lg uppercase italic text-center">Click to open blur modal</p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-black bg-[#6366f1] text-white rounded-xl font-black uppercase text-sm cursor-pointer"
        >
          OPEN MODAL
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#6366f1] max-w-xs w-full mx-4"
            style={{ animation: "bzin 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-xl uppercase italic mb-2">BLUR ZOOM IN</h3>
            <p className="text-sm text-black/60 font-black">Scale + blur animates in smoothly.</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full py-2 border-4 border-black rounded-xl bg-black text-white font-black uppercase text-sm cursor-pointer"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalSlideUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes slideup{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-lg uppercase italic text-center">Bottom sheet modal</p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-black bg-black text-[#ffe135] rounded-xl font-black uppercase text-sm cursor-pointer"
        >
          OPEN SHEET
        </button>
      </div>
      {open && (
        <div className="absolute inset-0 bg-black/40 flex items-end" onClick={() => setOpen(false)}>
          <div
            className="w-full bg-white border-t-4 border-black p-6"
            style={{ animation: "slideup 0.35s cubic-bezier(0.22,1,0.36,1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-black/20 rounded mx-auto mb-4" />
            <h3 className="font-black text-xl uppercase italic mb-2">BOTTOM SHEET</h3>
            <p className="text-sm text-black/60 font-black mb-4">Slides up from the bottom edge.</p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 border-4 border-black rounded-xl bg-black text-white font-black uppercase text-sm cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalScale = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes popscale{0%{transform:scale(0.5) rotate(-5deg);opacity:0}60%{transform:scale(1.05) rotate(1deg)}100%{transform:scale(1) rotate(0);opacity:1}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-white text-lg uppercase italic text-center">
          Scale-pop modal
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-[#ef4444] text-[#ef4444] rounded-xl font-black uppercase text-sm cursor-pointer hover:bg-red-950/50 transition-colors"
        >
          OPEN POP
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#ef4444] border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] max-w-xs w-full mx-4"
            style={{ animation: "popscale 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-black text-xl uppercase italic mb-2">POP SCALE IN!</h3>
            <p className="text-sm text-black/70 font-black mb-4">
              Scales from center with rotation.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 border-4 border-black rounded-xl bg-black text-white font-black uppercase text-sm cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalFlipDoor = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[200px] relative overflow-hidden"
      style={{ perspective: "800px" }}
    >
      <style>{`@keyframes flipdoor{from{transform:perspective(800px) rotateY(-90deg);opacity:0}to{transform:perspective(800px) rotateY(0);opacity:1}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-lg uppercase italic text-center">Flip door open</p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-black bg-[#22c55e] rounded-xl font-black uppercase text-sm cursor-pointer"
        >
          FLIP OPEN
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#22c55e] max-w-xs w-full mx-4"
            style={{ animation: "flipdoor 0.4s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-xl uppercase italic mb-2">FLIP DOOR</h3>
            <p className="text-sm text-black/60 font-black mb-4">RotateY from -90° to 0°.</p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 border-4 border-black rounded-xl bg-[#22c55e] text-black font-black uppercase text-sm cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-indigo-600 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes drwsl{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-white text-lg uppercase italic text-center">
          Side drawer panel
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-white text-white rounded-xl font-black uppercase text-sm cursor-pointer hover:bg-indigo-500 transition-colors"
        >
          ☰ OPEN DRAWER
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/50 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <div
            className="h-full bg-white border-l-4 border-black w-3/5 p-6"
            style={{ animation: "drwsl 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-xl uppercase italic mb-4">DRAWER</h3>
            {["HOME", "PROFILE", "SETTINGS", "LOGOUT"].map((i) => (
              <div
                key={i}
                className="py-3 border-b-2 border-zinc-100 font-black text-sm uppercase cursor-pointer hover:text-indigo-600 transition-colors"
              >
                {i}
              </div>
            ))}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full py-2 border-4 border-black rounded-xl bg-black text-white font-black uppercase text-sm cursor-pointer"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalAlert = () => {
  const [t, setT] = useState<"idle" | "success" | "error" | "warn">("idle");
  const configs: Record<string, { bg: string; border: string; text: string; msg: string }> = {
    success: { bg: "#22c55e", border: "#16a34a", text: "black", msg: "✓ Action completed!" },
    error: { bg: "#ef4444", border: "#b91c1c", text: "white", msg: "✕ Something went wrong!" },
    warn: { bg: "#ffe135", border: "#ca8a04", text: "black", msg: "⚠ Check your input!" },
  };
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ffe135] min-h-[200px] flex flex-col justify-center gap-4">
      <style>{`@keyframes toast{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      {t !== "idle" && (
        <div
          className="border-4 border-black rounded-xl px-4 py-3 font-black text-sm"
          style={{
            background: configs[t].bg,
            color: configs[t].text,
            animation: "toast 0.3s ease-out",
          }}
        >
          {configs[t].msg}
        </div>
      )}
      <div className="flex gap-2 flex-wrap">
        {(["success", "error", "warn"] as const).map((k) => (
          <button
            key={k}
            onClick={() => {
              setT(k);
              setTimeout(() => setT("idle"), 2000);
            }}
            className="flex-1 py-2 border-4 border-black rounded-xl font-black text-xs uppercase cursor-pointer capitalize"
            style={{ background: configs[k].bg, color: configs[k].text }}
          >
            {k}
          </button>
        ))}
      </div>
    </div>
  );
};

const ModalGlitch = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-black border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes glitchIn{0%{opacity:0;clip-path:inset(30% 0 40% 0);transform:translateX(-10px)}20%{clip-path:inset(10% 0 70% 0);transform:translateX(10px)}40%{clip-path:inset(60% 0 10% 0);transform:translateX(0)}60%{clip-path:inset(0 0 0 0);opacity:1}100%{clip-path:none;opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-[#6366f1] text-lg uppercase italic text-center font-mono">
          Glitch appear
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-[#6366f1] text-[#6366f1] rounded-xl font-black uppercase text-sm cursor-pointer font-mono"
        >
          GLITCH IN
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-zinc-900 border-4 border-[#6366f1] rounded-2xl p-6 max-w-xs w-full mx-4"
            style={{
              animation: "glitchIn 0.5s ease-out",
              boxShadow: "0 0 20px rgba(99,102,241,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black font-mono text-[#6366f1] text-xl uppercase italic mb-2">
              GLITCH_MODAL
            </h3>
            <p className="text-sm text-white/60 font-black font-mono mb-4">
              clip-path + translate glitch effect.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 border-4 border-[#6366f1] rounded-xl text-[#6366f1] font-black uppercase text-sm cursor-pointer font-mono"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalConfirm = () => {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes cfmin{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        {done ? (
          <p className="font-black text-2xl uppercase italic">DELETED! 🗑</p>
        ) : (
          <>
            <p className="font-black text-lg uppercase italic text-center">Delete confirmation</p>
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 border-4 border-black bg-[#ef4444] text-white rounded-xl font-black uppercase text-sm cursor-pointer"
            >
              DELETE ITEM
            </button>
          </>
        )}
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] max-w-xs w-full mx-4"
            style={{ animation: "cfmin 0.25s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-xl uppercase italic mb-2">ARE YOU SURE?</h3>
            <p className="text-sm text-black/60 font-black mb-4">This action cannot be undone.</p>
            <div className="flex gap-2">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 border-4 border-black rounded-xl font-black uppercase text-sm cursor-pointer"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  setDone(true);
                }}
                className="flex-1 py-2 border-4 border-black rounded-xl bg-[#ef4444] text-white font-black uppercase text-sm cursor-pointer"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalFullscreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-indigo-500 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes fsin{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="font-black text-white text-lg uppercase italic text-center">
          Fullscreen overlay
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 border-4 border-white text-white rounded-xl font-black uppercase text-sm cursor-pointer hover:bg-indigo-400 transition-colors"
        >
          ⛶ FULLSCREEN
        </button>
      </div>
      {open && (
        <div
          className="absolute inset-0 bg-[#6366f1] flex flex-col items-center justify-center gap-6"
          style={{ animation: "fsin 0.3s ease-out" }}
        >
          <h2 className="font-black text-white text-4xl uppercase italic text-center drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
            FULLSCREEN
            <br />
            MODAL
          </h2>
          <p className="text-white/60 font-black uppercase text-sm">
            TAKES OVER THE ENTIRE SECTION
          </p>
          <button
            onClick={() => setOpen(false)}
            className="px-8 py-3 border-4 border-white rounded-xl text-white font-black uppercase text-sm cursor-pointer hover:bg-indigo-500 transition-colors"
          >
            CLOSE ✕
          </button>
        </div>
      )}
    </div>
  );
};

const ModalImageLightbox = () => {
  const [open, setOpen] = useState(false);
  const COLORS = ["#ffe135", "#6366f1", "#ef4444", "#22c55e", "#ec4899", "#f97316"];
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ec4899] min-h-[200px] relative overflow-hidden">
      <style>{`@keyframes lbin{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {COLORS.map((c, i) => (
          <div
            key={i}
            onClick={() => setOpen(true)}
            className="aspect-square border-4 border-black rounded-xl cursor-pointer hover:scale-105 transition-transform"
            style={{ background: c }}
          />
        ))}
      </div>
      <p className="text-black/30 font-black text-[10px] uppercase tracking-widest text-center">
        CLICK TO LIGHTBOX
      </p>
      {open && (
        <div
          className="absolute inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-40 h-40 border-4 border-white rounded-2xl"
            style={{
              background: "linear-gradient(135deg,#6366f1,#ec4899)",
              animation: "lbin 0.3s ease-out",
            }}
          />
        </div>
      )}
    </div>
  );
};

export const AnimModal = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Layers className="w-5 h-5" />}
      iconBg="bg-sky-400"
      title="Modal Transitions"
      componentCount={10}
      description="10 modal and overlay animation patterns — blur zoom, bottom sheet, scale pop, flip door, side drawer, toast alerts, and glitch entrance."
      features={[
        "Blur + zoom scale in",
        "Slide up bottom sheet",
        "Scale pop with rotation",
        "Flip door rotateY",
        "Side drawer slide",
        "Toast alert system",
        "Glitch clip-path appear",
        "Confirm delete dialog",
        "Fullscreen overlay",
        "Image lightbox grid",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Blur Zoom In" subtitle="Scale + blur fade modal entrance">
          <CodePreview
            title="Blur"
            code={sampleCodeHeros}
            preview={<ModalBlurZoom />}
            language="tsx"
            nameFile="modal-blur.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Bottom Sheet" subtitle="Slide up from bottom edge">
          <CodePreview
            title="Sheet"
            code={sampleCodeHeros}
            preview={<ModalSlideUp />}
            language="tsx"
            nameFile="modal-sheet.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scale Pop" subtitle="Scale from center with rotation">
          <CodePreview
            title="Scale"
            code={sampleCodeHeros}
            preview={<ModalScale />}
            language="tsx"
            nameFile="modal-scale.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Flip Door" subtitle="RotateY flip door open effect">
          <CodePreview
            title="Flip"
            code={sampleCodeHeros}
            preview={<ModalFlipDoor />}
            language="tsx"
            nameFile="modal-flip.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Side Drawer" subtitle="Right slide-in navigation drawer">
          <CodePreview
            title="Drawer"
            code={sampleCodeHeros}
            preview={<ModalDrawer />}
            language="tsx"
            nameFile="modal-drawer.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Toast Alerts" subtitle="Success/error/warning toast system">
          <CodePreview
            title="Toast"
            code={sampleCodeHeros}
            preview={<ModalAlert />}
            language="tsx"
            nameFile="modal-toast.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Glitch Appear" subtitle="Clip-path glitch frame entrance">
          <CodePreview
            title="Glitch"
            code={sampleCodeHeros}
            preview={<ModalGlitch />}
            language="tsx"
            nameFile="modal-glitch.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Confirm Delete" subtitle="Confirmation dialog with actions">
          <CodePreview
            title="Confirm"
            code={sampleCodeHeros}
            preview={<ModalConfirm />}
            language="tsx"
            nameFile="modal-confirm.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Fullscreen" subtitle="Full-overlay with scale animation">
          <CodePreview
            title="Full"
            code={sampleCodeHeros}
            preview={<ModalFullscreen />}
            language="tsx"
            nameFile="modal-full.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Lightbox Grid" subtitle="Click grid item for image lightbox">
          <CodePreview
            title="Lightbox"
            code={sampleCodeHeros}
            preview={<ModalImageLightbox />}
            language="tsx"
            nameFile="modal-lightbox.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
