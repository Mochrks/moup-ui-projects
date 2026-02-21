import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn/select";
import {
  SlidersHorizontal,
  Layers,
  Palette,
  Contrast,
  Blend,
  Droplets,
  Image as ImageIcon,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/ui-main/Navbar";
import ScrollToTopButton from "@/components/ui-main/ScrollToTopButton";

// ─── Tab imports ───────────────────────────────────────────────────────────
import { ColorPickerTab } from "@/utils/colors/ColorPickerTab";
import { GradientTab } from "@/utils/colors/GradientTab";
import { HarmonyTab } from "@/utils/colors/HarmonyTab";
import { ContrastTab } from "@/utils/colors/ContrastTab";
import { BlenderTab } from "@/utils/colors/BlenderTab";
import { PalettesTab } from "@/utils/colors/PalettesTab";
import { ExtractorTab } from "@/utils/colors/ExtractorTab";
import { SavedTab } from "@/utils/colors/SavedTab";
import { getSavedColors } from "@/utils/colors/color-utils";
import type { ColorFormat } from "@/utils/colors/color-utils";

// ─── Tab config ────────────────────────────────────────────────────────────
const TABS = [
  { value: "picker", icon: <SlidersHorizontal className="h-3 w-3" />, label: "Picker" },
  { value: "gradient", icon: <Layers className="h-3 w-3" />, label: "Gradient" },
  { value: "harmony", icon: <Palette className="h-3 w-3" />, label: "Harmony" },
  { value: "contrast", icon: <Contrast className="h-3 w-3" />, label: "Contrast" },
  { value: "blender", icon: <Blend className="h-3 w-3" />, label: "Blender" },
  { value: "palettes", icon: <Droplets className="h-3 w-3" />, label: "Palettes" },
  { value: "extractor", icon: <ImageIcon className="h-3 w-3" />, label: "Extract" },
  { value: "saved", icon: <Heart className="h-3 w-3" />, label: "Saved" },
];

// ═══════════════════════════════════════════════════════════════════════════
export default function Colors() {
  const [format, setFormat] = useState<ColorFormat>("hex");
  const [savedColors, setSavedColors] = useState<string[]>(getSavedColors);

  const refreshSaved = () => setSavedColors(getSavedColors());

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 py-6 px-4 sm:px-7 pt-28">
        <div className="container mx-auto max-w-6xl space-y-4">
          {/* Hero */}
          <div className="text-center mb-6 pt-16">
            <h1 className="text-4xl font-black tracking-tight">🎨 Color Generator</h1>
            <p className="text-gray-500 mt-1">
              Pick, convert, blend, contrast &amp; explore colors
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-xs text-gray-400">Output format:</span>
              <Select value={format} onValueChange={(v: ColorFormat) => setFormat(v)}>
                <SelectTrigger className="w-28 h-7 text-xs bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="hex">HEX</SelectItem>
                  <SelectItem value="rgb">RGB</SelectItem>
                  <SelectItem value="hsl">HSL</SelectItem>
                  <SelectItem value="cmyk">CMYK</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tab navigation */}
          <Tabs defaultValue="picker" className="w-full">
            <TabsList className="grid grid-cols-4 sm:grid-cols-8 h-auto gap-1 bg-white border-2 border-black p-1 rounded-xl mb-4">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold data-[state=active]:bg-black data-[state=active]:text-white rounded-lg"
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="picker">
              <ColorPickerTab format={format} onSaved={refreshSaved} />
            </TabsContent>

            <TabsContent value="gradient">
              <GradientTab />
            </TabsContent>

            <TabsContent value="harmony">
              <HarmonyTab format={format} />
            </TabsContent>

            <TabsContent value="contrast">
              <ContrastTab />
            </TabsContent>

            <TabsContent value="blender">
              <BlenderTab format={format} />
            </TabsContent>

            <TabsContent value="palettes">
              <PalettesTab format={format} />
            </TabsContent>

            <TabsContent value="extractor">
              <ExtractorTab format={format} />
            </TabsContent>

            <TabsContent value="saved">
              <SavedTab savedColors={savedColors} onRefresh={refreshSaved} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="text-black py-2">
        <div className="mx-auto px-4 text-end text-xs">
          © {new Date().getFullYear()} MoupUI. All rights reserved.
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
