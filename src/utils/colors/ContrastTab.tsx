import { useState } from "react";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import { Badge } from "@/components/ui-shadcn/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { getContrastRatio, isValidHex } from "./color-utils";

const WCAG_LEVELS = [
  { label: "AA Normal", key: "aa", req: "4.5:1", minRatio: 4.5 },
  { label: "AAA Normal", key: "aaa", req: "7.0:1", minRatio: 7 },
  { label: "AA Large", key: "aaLarge", req: "3.0:1", minRatio: 3 },
  { label: "AAA Large", key: "aaaLarge", req: "4.5:1", minRatio: 4.5 },
];

export function ContrastTab() {
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const contrastRatio = getContrastRatio(fgColor, bgColor);

  const colors = [
    { label: "Foreground", hex: fgColor, set: setFgColor },
    { label: "Background", hex: bgColor, set: setBgColor },
  ];

  const getRatingColor = (ratio: number) => {
    if (ratio >= 7) return "text-green-600";
    if (ratio >= 4.5) return "text-yellow-600";
    if (ratio >= 3) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Contrast Checker</CardTitle>
        <CardDescription>WCAG 2.1 accessibility contrast ratio checker</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Color pickers */}
        <div className="grid sm:grid-cols-2 gap-4">
          {colors.map(({ label, hex, set }) => (
            <div key={label} className="space-y-1">
              <Label className="text-xs">{label}</Label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => set(e.target.value)}
                  className="w-10 h-10 rounded-lg border-2 border-black cursor-pointer p-0.5"
                />
                <Input
                  value={hex}
                  className="font-mono text-xs h-8 flex-1 bg-white"
                  onChange={(e) => {
                    if (isValidHex(e.target.value)) set(e.target.value);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Text preview */}
        <div className="rounded-xl border-2 border-black overflow-hidden">
          <div className="p-4 space-y-2" style={{ backgroundColor: bgColor }}>
            <p className="text-xl font-bold" style={{ color: fgColor }}>
              Large Text Example (18pt+)
            </p>
            <p className="text-sm" style={{ color: fgColor }}>
              This is regular body text on the selected background. Check if it meets WCAG 2.1
              guidelines.
            </p>
            <p className="text-xs" style={{ color: fgColor }}>
              Small fine-print text for captions.
            </p>
          </div>
          <div className="p-3 space-y-1" style={{ backgroundColor: fgColor }}>
            <p className="text-sm font-semibold" style={{ color: bgColor }}>
              Reversed
            </p>
            <p className="text-xs" style={{ color: bgColor }}>
              Colors swapped to show inverse contrast.
            </p>
          </div>
        </div>

        {/* Ratio + WCAG badges */}
        <div className="flex items-center gap-4 flex-wrap p-3 bg-gray-50 rounded-xl border">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Contrast Ratio</p>
            <span className={`text-4xl font-black ${getRatingColor(contrastRatio)}`}>
              {contrastRatio.toFixed(2)}:1
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {WCAG_LEVELS.map(({ label, minRatio }) => {
              const pass = contrastRatio >= minRatio;
              return (
                <Badge
                  key={label}
                  className={`text-xs px-2 py-1 ${pass ? "bg-green-500 text-white" : "bg-red-400 text-white"}`}
                >
                  {pass ? "✓" : "✗"} {label}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Tip */}
        <div className="text-xs text-gray-600 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          💡 <strong>Tip:</strong> AA Normal requires 4.5:1 · AAA requires 7:1 · Large text (18pt+)
          needs only 3:1 for AA.
        </div>
      </CardContent>
    </Card>
  );
}
