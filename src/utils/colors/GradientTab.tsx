import { useState } from "react";
import { Shuffle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { randomHex, isValidHex } from "./color-utils";
import { CopyBtn } from "./ColorShared";

type GradientType = "linear" | "radial" | "conic";

const DIRECTIONS = [
  "to right",
  "to left",
  "to top",
  "to bottom",
  "to top right",
  "to bottom right",
  "to bottom left",
  "45deg",
  "135deg",
];

const PRESETS = [
  ["#667eea", "#764ba2"],
  ["#f093fb", "#f5576c"],
  ["#4facfe", "#00f2fe"],
  ["#43e97b", "#38f9d7"],
  ["#fa709a", "#fee140"],
  ["#30cfd0", "#330867"],
];

export function GradientTab() {
  const [colors, setColors] = useState(["#3b82f6", "#8b5cf6"]);
  const [type, setType] = useState<GradientType>("linear");
  const [direction, setDirection] = useState("to right");

  const gradientCSS = (() => {
    const stops = colors.join(", ");
    if (type === "radial") return `radial-gradient(circle, ${stops})`;
    if (type === "conic") return `conic-gradient(${stops})`;
    return `linear-gradient(${direction}, ${stops})`;
  })();

  const updateColor = (i: number, val: string) =>
    setColors((prev) => prev.map((c, j) => (j === i ? val : c)));

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Gradient Generator</CardTitle>
        <CardDescription>Build CSS gradients with custom color stops</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preview */}
        <div
          className="h-36 rounded-xl border-2 border-black"
          style={{ background: gradientCSS }}
        />

        {/* CSS output */}
        <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg">
          <code className="text-green-400 text-xs flex-1 truncate font-mono">
            background: {gradientCSS};
          </code>
          <CopyBtn text={`background: ${gradientCSS};`} small />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Color stops */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold">Color Stops</Label>
            {colors.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="color"
                  value={c}
                  onChange={(e) => updateColor(i, e.target.value)}
                  className="w-8 h-8 rounded border cursor-pointer p-0.5 shrink-0"
                />
                <Input
                  value={c}
                  className="font-mono text-xs h-7 flex-1 bg-white"
                  onChange={(e) => {
                    if (isValidHex(e.target.value)) updateColor(i, e.target.value);
                  }}
                />
                {colors.length > 2 && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-7 p-0 bg-white"
                    onClick={() => setColors((prev) => prev.filter((_, j) => j !== i))}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 w-full bg-white"
              onClick={() => setColors((prev) => [...prev, randomHex()])}
            >
              + Add Color
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 w-full bg-white"
              onClick={() => setColors([randomHex(), randomHex()])}
            >
              <Shuffle className="h-3 w-3 mr-1" /> Random
            </Button>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <div>
              <Label className="text-xs">Type</Label>
              <div className="flex gap-2 mt-1">
                {(["linear", "radial", "conic"] as const).map((t) => (
                  <Button
                    key={t}
                    size="sm"
                    variant={type === t ? "default" : "outline"}
                    className="text-xs h-7 capitalize flex-1 bg-white data-[active=true]:bg-black"
                    data-active={type === t}
                    onClick={() => setType(t)}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            </div>

            {type === "linear" && (
              <div>
                <Label className="text-xs">Direction</Label>
                <Select value={direction} onValueChange={setDirection}>
                  <SelectTrigger className="h-8 text-xs mt-1 bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {DIRECTIONS.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label className="text-xs">Preset Gradients</Label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {PRESETS.map((cols, i) => (
                  <button
                    key={i}
                    className="h-10 rounded-lg border-2 border-transparent hover:border-black transition-all"
                    style={{ background: `linear-gradient(to right, ${cols[0]}, ${cols[1]})` }}
                    onClick={() => {
                      setColors(cols);
                      setType("linear");
                      setDirection("to right");
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
