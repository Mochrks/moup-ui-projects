// ─── Color Utility Functions ────────────────────────────────────────────────

export type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk";

export function hslToRgb(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) };
}

export function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((x) =>
        Math.max(0, Math.min(255, Math.round(x)))
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
  );
}

export function hexToRgb(hex: string) {
  const c = hex.replace("#", "");
  const full =
    c.length === 3
      ? c
          .split("")
          .map((x) => x + x)
          .join("")
      : c;
  const r = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);
  return r
    ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
    : { r: 0, g: 0, b: 0 };
}

export function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function rgbToCmyk(r: number, g: number, b: number) {
  const rr = r / 255,
    gg = g / 255,
    bb = b / 255;
  const k = 1 - Math.max(rr, gg, bb);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  return {
    c: Math.round(((1 - rr - k) / (1 - k)) * 100),
    m: Math.round(((1 - gg - k) / (1 - k)) * 100),
    y: Math.round(((1 - bb - k) / (1 - k)) * 100),
    k: Math.round(k * 100),
  };
}

export function formatColorValue(hex: string, format: ColorFormat): string {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  const cmyk = rgbToCmyk(r, g, b);
  if (format === "rgb") return `rgb(${r}, ${g}, ${b})`;
  if (format === "hsl") return `hsl(${h}, ${s}%, ${l}%)`;
  if (format === "cmyk") return `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
  return hex;
}

export function getRelativeLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getContrastRatio(hex1: string, hex2: string) {
  const c1 = hexToRgb(hex1),
    c2 = hexToRgb(hex2);
  const l1 = getRelativeLuminance(c1.r, c1.g, c1.b);
  const l2 = getRelativeLuminance(c2.r, c2.g, c2.b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function getTextColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return getRelativeLuminance(r, g, b) > 0.179 ? "#000000" : "#ffffff";
}

export function blendColors(hex1: string, hex2: string, steps: number = 5): string[] {
  const c1 = hexToRgb(hex1),
    c2 = hexToRgb(hex2);
  return Array.from({ length: steps + 2 }, (_, i) => {
    const t = i / (steps + 1);
    return rgbToHex(
      Math.round(c1.r + (c2.r - c1.r) * t),
      Math.round(c1.g + (c2.g - c1.g) * t),
      Math.round(c1.b + (c2.b - c1.b) * t)
    );
  });
}

export function generateShades(hex: string, count = 10): string[] {
  const { r, g, b } = hexToRgb(hex);
  const { h, s } = rgbToHsl(r, g, b);
  return Array.from({ length: count }, (_, i) => {
    const l = Math.round((100 / (count + 1)) * (i + 1));
    const rgb = hslToRgb(h, s, l);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  });
}

export function generateHarmony(hex: string, type: string): string[] {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  const offsets: Record<string, number[]> = {
    complementary: [0, 180],
    analogous: [-30, -15, 0, 15, 30],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    "split-complementary": [0, 150, 210],
  };
  return (offsets[type] || [0]).map((offset) => {
    const nh = (h + offset + 360) % 360;
    const rgb = hslToRgb(nh, s, l);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  });
}

export function randomHex() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

export function isValidHex(hex: string) {
  return /^#[0-9a-fA-F]{6}$/.test(hex);
}

// ─── Saved Colors (localStorage) ───────────────────────────────────────────
const SAVED_KEY = "moupui-saved-colors";

export function getSavedColors(): string[] {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleSavedColor(hex: string): string[] {
  const saved = getSavedColors();
  const next = saved.includes(hex) ? saved.filter((c) => c !== hex) : [hex, ...saved].slice(0, 50);
  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
  return next;
}

export function clearSavedColors() {
  localStorage.removeItem(SAVED_KEY);
}
