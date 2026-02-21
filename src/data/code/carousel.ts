export const sampleCodeBasicCarousel = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, bg: "#ffe135", label: "Design Systems", emoji: "🎨" },
  { id: 2, bg: "#dbeafe", label: "Component Library", emoji: "🧩" },
  { id: 3, bg: "#d1fae5", label: "Open Source", emoji: "🌿" },
  { id: 4, bg: "#fce7f3", label: "Production Ready", emoji: "🚀" },
];

export const BasicCarousel = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-64 rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_0_#000]">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute w-full h-full flex flex-col items-center justify-center gap-3"
          style={{ background: slides[index].bg }}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-5xl">{slides[index].emoji}</span>
          <p className="font-black text-2xl text-black">{slides[index].label}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all z-10">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all z-10">
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className={\`h-2 rounded-full border-2 border-black bg-white transition-all \${i === index ? "w-6" : "w-2"}\`} />
        ))}
      </div>
    </div>
  );
};`.trim();

export const sampleCodeCarouselNext = `"use client";

${sampleCodeBasicCarousel}`;

export const sampleCodeCarouselHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Basic Carousel — MoupUI</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f9fafb; font-family: system-ui, sans-serif; padding: 16px; }
    .carousel { position: relative; width: 100%; max-width: 600px; height: 256px; border: 2px solid black; border-radius: 12px; overflow: hidden; box-shadow: 4px 4px 0 0 #000; }
    .slide { position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: all 0.3s ease; }
    .slide-emoji { font-size: 3rem; }
    .slide-label { font-weight: 900; font-size: 1.5rem; color: black; }
    .btn { position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%; background: white; border: 2px solid black; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; z-index: 10; }
    .btn:hover { background: black; color: white; }
    .btn-prev { left: 12px; }
    .btn-next { right: 12px; }
    .dots { position: absolute; bottom: 12px; left: 0; right: 0; display: flex; justify-content: center; gap: 8px; z-index: 10; }
    .dot { height: 8px; border-radius: 4px; border: 2px solid black; background: white; cursor: pointer; transition: width 0.2s; width: 8px; }
    .dot.active { width: 24px; }
  </style>
</head>
<body>
  <div class="carousel" id="carousel">
    <div class="slide" style="background:#ffe135">
      <span class="slide-emoji">🎨</span>
      <p class="slide-label">Design Systems</p>
    </div>
    <div class="dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <button class="btn btn-prev" onclick="prevSlide()">‹</button>
    <button class="btn btn-next" onclick="nextSlide()">›</button>
  </div>
  <script>
    let current = 0;
    const slides = [
      { bg: "#ffe135", emoji: "🎨", label: "Design Systems" },
      { bg: "#dbeafe", emoji: "🧩", label: "Component Library" },
      { bg: "#d1fae5", emoji: "🌿", label: "Open Source" },
      { bg: "#fce7f3", emoji: "🚀", label: "Production Ready" },
    ];
    function render() {
      const c = document.getElementById("carousel");
      const s = slides[current];
      c.querySelector(".slide").style.background = s.bg;
      c.querySelector(".slide-emoji").textContent = s.emoji;
      c.querySelector(".slide-label").textContent = s.label;
      c.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === current));
    }
    function nextSlide() { current = (current + 1) % slides.length; render(); }
    function prevSlide() { current = (current - 1 + slides.length) % slides.length; render(); }
  </script>
</body>
</html>`.trim();

export const sampleCodeZoomCarousel = sampleCodeBasicCarousel;
export const sampleCodeCubeCarousel = sampleCodeBasicCarousel;
export const sampleCodeInfiniteCarousel = sampleCodeBasicCarousel;
export const sampleCodeFadeCarousel = sampleCodeBasicCarousel;
export const sampleCodeParallaxCarousel = sampleCodeBasicCarousel;
