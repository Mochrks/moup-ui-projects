import { useState } from "react";
import { Shuffle, Heart } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import { Slider } from "@/components/ui-shadcn/slider";
import { Badge } from "@/components/ui-shadcn/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import {
  hexToRgb,
  rgbToHsl,
  rgbToCmyk,
  hslToRgb,
  rgbToHex,
  generateShades,
  randomHex,
  isValidHex,
  formatColorValue,
  toggleSavedColor,
} from "./color-utils";
import { CopyBtn, Swatch } from "./ColorShared";
import type { ColorFormat } from "./color-utils";

interface ColorPickerTabProps {
  format: ColorFormat;
  onSaved: () => void;
}

export function ColorPickerTab({ format, onSaved }: ColorPickerTabProps) {
  const [pickerHex, setPickerHex] = useState("#3b82f6");
  const [pickerInput, setPickerInput] = useState("#3b82f6");

  const updateFromHex = (hex: string) => {
    setPickerHex(hex);
    setPickerInput(hex);
  };

  const pickerRgb = hexToRgb(pickerHex);
  const pickerHsl = rgbToHsl(pickerRgb.r, pickerRgb.g, pickerRgb.b);
  const pickerCmyk = rgbToCmyk(pickerRgb.r, pickerRgb.g, pickerRgb.b);

  const formats = [
    { label: "HEX", value: pickerHex },
    { label: "RGB", value: `rgb(${pickerRgb.r}, ${pickerRgb.g}, ${pickerRgb.b})` },
    { label: "RGBA", value: `rgba(${pickerRgb.r}, ${pickerRgb.g}, ${pickerRgb.b}, 1)` },
    { label: "HSL", value: `hsl(${pickerHsl.h}, ${pickerHsl.s}%, ${pickerHsl.l}%)` },
    { label: "HSLA", value: `hsla(${pickerHsl.h}, ${pickerHsl.s}%, ${pickerHsl.l}%, 1)` },
    {
      label: "CMYK",
      value: `cmyk(${pickerCmyk.c}%, ${pickerCmyk.m}%, ${pickerCmyk.y}%, ${pickerCmyk.k}%)`,
    },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Color Picker &amp; Converter</CardTitle>
        <CardDescription>Pick a color and get all format values instantly</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: picker + sliders + shades */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={pickerHex}
                onChange={(e) => updateFromHex(e.target.value)}
                className="w-20 h-20 rounded-xl border-2 border-black cursor-pointer p-0.5"
              />
              <div className="flex-1 space-y-2">
                <div className="flex gap-2">
                  <Input
                    value={pickerInput}
                    onChange={(e) => {
                      setPickerInput(e.target.value);
                      if (isValidHex(e.target.value)) setPickerHex(e.target.value);
                    }}
                    placeholder="#3b82f6"
                    className="font-mono text-sm h-8 bg-white"
                  />
                  <CopyBtn text={pickerHex} />
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateFromHex(randomHex())}
                    className="text-xs h-7 bg-white"
                  >
                    <Shuffle className="h-3 w-3 mr-1" /> Random
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      toggleSavedColor(pickerHex);
                      onSaved();
                    }}
                    className="text-xs h-7"
                  >
                    <Heart className="h-3 w-3 mr-1" /> Save
                  </Button>
                </div>
              </div>
            </div>

            {/* HSL sliders */}
            {(
              [
                { label: "Hue", key: "h", max: 360, val: pickerHsl.h },
                { label: "Saturation", key: "s", max: 100, val: pickerHsl.s },
                { label: "Lightness", key: "l", max: 100, val: pickerHsl.l },
              ] as const
            ).map(({ label, key, max, val }) => (
              <div key={key} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <Label>{label}</Label>
                  <span className="font-mono text-gray-500">{val}</span>
                </div>
                <Slider
                  min={0}
                  max={max}
                  step={1}
                  value={[val]}
                  onValueChange={([v]) => {
                    const newHsl = { ...pickerHsl, [key]: v };
                    const rgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
                    updateFromHex(rgbToHex(rgb.r, rgb.g, rgb.b));
                  }}
                />
              </div>
            ))}

            {/* Shades row */}
            <div>
              <Label className="text-xs mb-1 block">Shades</Label>
              <div className="grid grid-cols-10 gap-1">
                {generateShades(pickerHex, 10).map((hex, i) => (
                  <Swatch key={i} hex={hex} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: all format values + preview */}
          <div className="space-y-3">
            {formats.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border">
                <Badge variant="outline" className="text-[10px] w-12 shrink-0 justify-center">
                  {label}
                </Badge>
                <span className="font-mono text-xs flex-1 truncate">{value}</span>
                <CopyBtn text={value} small />
              </div>
            ))}

            {/* Text color preview */}
            <div className="mt-2 rounded-xl overflow-hidden border-2 border-black">
              <div className="h-16" style={{ backgroundColor: pickerHex }} />
              <div className="grid grid-cols-2">
                <div
                  className="h-8 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: pickerHex, color: "#ffffff" }}
                >
                  White text
                </div>
                <div
                  className="h-8 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: pickerHex, color: "#000000" }}
                >
                  Black text
                </div>
              </div>
            </div>

            {/* Current format output */}
            <div className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg">
              <span className="text-green-400 font-mono text-xs flex-1">
                {formatColorValue(pickerHex, format)}
              </span>
              <CopyBtn text={formatColorValue(pickerHex, format)} small />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
