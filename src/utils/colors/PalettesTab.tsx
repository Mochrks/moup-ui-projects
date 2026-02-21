import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import {
  pastelColors,
  retroColors,
  vintageColors,
  neonColors,
  goldColors,
  warmColors,
  coldColors,
  summerColors,
  sunsetColors,
  skyColors,
  seaColors,
  coffeeColors,
  creamColors,
  kidsColors,
  rainbowColors,
  spaceXColors,
  galaxyColors,
  cyberpunkColors,
  weddingColors,
  halloweenColors,
  christmasColors,
  ramadhanColors,
} from "@/utils/colors/color";
import { generateShades, formatColorValue } from "./color-utils";
import { Swatch } from "./ColorShared";
import type { ColorFormat } from "./color-utils";

const ALL_PALETTES = [
  { key: "pastel", label: "🌸 Pastel", colors: pastelColors },
  { key: "retro", label: "📼 Retro", colors: retroColors },
  { key: "vintage", label: "🎞️ Vintage", colors: vintageColors },
  { key: "neon", label: "⚡ Neon", colors: neonColors },
  { key: "gold", label: "✨ Gold", colors: goldColors },
  { key: "warm", label: "🔥 Warm", colors: warmColors },
  { key: "cold", label: "❄️ Cold", colors: coldColors },
  { key: "summer", label: "☀️ Summer", colors: summerColors },
  { key: "sunset", label: "🌅 Sunset", colors: sunsetColors },
  { key: "sky", label: "🌤️ Sky", colors: skyColors },
  { key: "sea", label: "🌊 Sea", colors: seaColors },
  { key: "coffee", label: "☕ Coffee", colors: coffeeColors },
  { key: "cream", label: "🍦 Cream", colors: creamColors },
  { key: "kids", label: "🎈 Kids", colors: kidsColors },
  { key: "rainbow", label: "🌈 Rainbow", colors: rainbowColors },
  { key: "space", label: "🚀 Space", colors: spaceXColors },
  { key: "galaxy", label: "🌌 Galaxy", colors: galaxyColors },
  { key: "cyberpunk", label: "🤖 Cyberpunk", colors: cyberpunkColors },
  { key: "wedding", label: "💍 Wedding", colors: weddingColors },
  { key: "halloween", label: "🎃 Halloween", colors: halloweenColors },
  { key: "christmas", label: "🎄 Christmas", colors: christmasColors },
  { key: "ramadhan", label: "🌙 Ramadhan", colors: ramadhanColors },
];

interface PalettesTabProps {
  format: ColorFormat;
}

export function PalettesTab({ format }: PalettesTabProps) {
  const [open, setOpen] = useState<string | null>("pastel");

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Curated Color Palettes</CardTitle>
        <CardDescription>
          {ALL_PALETTES.length} themed palettes with 10 shades each — click any color to copy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {ALL_PALETTES.map(({ key, label, colors }) => (
          <div key={key} className="border-2 border-gray-200 rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-sm"
              onClick={() => setOpen(open === key ? null : key)}
            >
              <span>{label}</span>
              <span className="text-gray-400 text-xs">{open === key ? "▲" : "▼"}</span>
            </button>

            {open === key && (
              <div className="p-4 space-y-4">
                {Object.entries(colors).map(([name, hex], i) => {
                  const shades = generateShades(hex as string, 10);
                  return (
                    <div key={i} className="space-y-1">
                      <p className="text-xs font-semibold text-gray-600 capitalize">
                        {name.replace(/_/g, " ")}
                      </p>
                      <div className="grid grid-cols-10 gap-1">
                        {shades.map((sh, si) => (
                          <Swatch key={si} hex={sh} label={formatColorValue(sh, format)} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
