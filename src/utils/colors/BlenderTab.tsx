import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import { Slider } from "@/components/ui-shadcn/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { blendColors, randomHex, isValidHex, formatColorValue } from "./color-utils";
import { Swatch } from "./ColorShared";
import type { ColorFormat } from "./color-utils";

interface BlenderTabProps {
  format: ColorFormat;
}

export function BlenderTab({ format }: BlenderTabProps) {
  const [colorA, setColorA] = useState("#3b82f6");
  const [colorB, setColorB] = useState("#ef4444");
  const [steps, setSteps] = useState(5);

  const blended = blendColors(colorA, colorB, steps);

  const colorInputs = [
    { label: "Color A", hex: colorA, set: setColorA },
    { label: "Color B", hex: colorB, set: setColorB },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Color Blender</CardTitle>
        <CardDescription>Blend two colors to create a smooth transition palette</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Inputs */}
        <div className="grid sm:grid-cols-2 gap-4">
          {colorInputs.map(({ label, hex, set }) => (
            <div key={label} className="space-y-1">
              <Label className="text-xs">{label}</Label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => set(e.target.value)}
                  className="w-10 h-10 rounded-lg border-2 border-black cursor-pointer p-0.5 shrink-0"
                />
                <Input
                  value={hex}
                  className="font-mono text-xs h-8 flex-1 bg-white"
                  onChange={(e) => {
                    if (isValidHex(e.target.value)) set(e.target.value);
                  }}
                />
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0 bg-white shrink-0"
                  onClick={() => set(randomHex())}
                >
                  <Shuffle className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Steps slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <Label>Blend Steps</Label>
            <span className="font-mono text-gray-500">{steps}</span>
          </div>
          <Slider min={2} max={12} step={1} value={[steps]} onValueChange={([v]) => setSteps(v)} />
        </div>

        {/* Strip preview */}
        <div className="flex rounded-xl overflow-hidden border-2 border-black h-16">
          {blended.map((hex, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: hex }} />
          ))}
        </div>

        {/* Swatches */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {blended.map((hex, i) => (
            <div key={i} className="space-y-1">
              <Swatch hex={hex} />
              <p className="font-mono text-[9px] text-center truncate">
                {formatColorValue(hex, format)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
