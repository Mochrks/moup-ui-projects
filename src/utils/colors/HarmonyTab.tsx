import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
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
import {
  generateHarmony,
  randomHex,
  isValidHex,
  getTextColor,
  formatColorValue,
} from "./color-utils";
import { CopyBtn, Swatch } from "./ColorShared";
import type { ColorFormat } from "./color-utils";

const HARMONY_TYPES = [
  { value: "complementary", label: "Complementary" },
  { value: "analogous", label: "Analogous" },
  { value: "triadic", label: "Triadic" },
  { value: "tetradic", label: "Tetradic" },
  { value: "split-complementary", label: "Split-Complementary" },
];

const DESCRIPTIONS: Record<string, string> = {
  complementary: "Two colors opposite on the color wheel — high contrast, bold look.",
  analogous: "Five colors adjacent on the wheel — harmonious and natural.",
  triadic: "Three colors equally spaced — vibrant and balanced.",
  tetradic: "Four colors forming a rectangle — rich variety.",
  "split-complementary": "Base color plus two adjacent to its complement — softer contrast.",
};

interface HarmonyTabProps {
  format: ColorFormat;
}

export function HarmonyTab({ format }: HarmonyTabProps) {
  const [hex, setHex] = useState("#3b82f6");
  const [inputVal, setInputVal] = useState("#3b82f6");
  const [harmonyType, setHarmonyType] = useState("complementary");

  const harmonyColors = generateHarmony(hex, harmonyType);

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Color Harmony</CardTitle>
        <CardDescription>Generate harmonious color schemes from a base color</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={hex}
              onChange={(e) => {
                setHex(e.target.value);
                setInputVal(e.target.value);
              }}
              className="w-10 h-10 rounded-lg border-2 border-black cursor-pointer p-0.5"
            />
            <Input
              value={inputVal}
              className="font-mono text-xs h-8 w-28 bg-white"
              onChange={(e) => {
                setInputVal(e.target.value);
                if (isValidHex(e.target.value)) setHex(e.target.value);
              }}
            />
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const h = randomHex();
              setHex(h);
              setInputVal(h);
            }}
            className="text-xs h-8 bg-white"
          >
            <Shuffle className="h-3 w-3 mr-1" /> Random
          </Button>
          <Select value={harmonyType} onValueChange={setHarmonyType}>
            <SelectTrigger className="w-48 h-8 text-xs bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {HARMONY_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 border">
          {DESCRIPTIONS[harmonyType]}
        </p>

        {/* Color strip */}
        <div className="flex rounded-xl overflow-hidden border-2 border-black h-20">
          {harmonyColors.map((c, i) => (
            <div
              key={i}
              className="flex-1 flex items-end justify-center pb-1"
              style={{ backgroundColor: c }}
            >
              <span className="text-[9px] font-mono" style={{ color: getTextColor(c) }}>
                {c}
              </span>
            </div>
          ))}
        </div>

        {/* Swatches with copy */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {harmonyColors.map((c, i) => (
            <div key={i} className="space-y-1">
              <Swatch hex={c} />
              <div className="flex items-center gap-1">
                <span className="font-mono text-[10px] flex-1 truncate">
                  {formatColorValue(c, format)}
                </span>
                <CopyBtn text={formatColorValue(c, format)} small />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
