import { useState, useRef, useEffect } from "react";
import { Upload, RefreshCw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { rgbToHex, formatColorValue } from "./color-utils";
import { Swatch } from "./ColorShared";
import type { ColorFormat } from "./color-utils";

interface ExtractorTabProps {
  format: ColorFormat;
}

export function ExtractorTab({ format }: ExtractorTabProps) {
  const [extractedColors, setExtractedColors] = useState<string[]>([]);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [extracting, setExtracting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImgSrc(ev.target?.result as string);
      setExtracting(true);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imgSrc || !canvasRef.current) return;
    const img = new window.Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colorMap: Record<string, number> = {};
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        const hex = rgbToHex(r, g, b);
        colorMap[hex] = (colorMap[hex] || 0) + 1;
      }
      const sorted = Object.entries(colorMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 16)
        .map(([hex]) => hex);
      setExtractedColors(sorted);
      setExtracting(false);
    };
    img.src = imgSrc;
  }, [imgSrc]);

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Image Color Extractor</CardTitle>
        <CardDescription>Upload an image to extract its dominant colors</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <canvas ref={canvasRef} className="hidden" />

        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-black hover:bg-gray-50 transition-all"
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
          }}
        >
          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm font-semibold">Click to upload or drag &amp; drop</p>
          <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP supported</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </div>

        {imgSrc && (
          <div className="grid sm:grid-cols-2 gap-4">
            <img
              src={imgSrc}
              alt="Uploaded"
              className="rounded-xl border-2 border-black max-h-48 object-contain w-full"
            />
            <div>
              {extracting ? (
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Extracting colors...
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-600">
                    {extractedColors.length} dominant colors
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {extractedColors.map((hex, i) => (
                      <div key={i} className="space-y-1">
                        <Swatch hex={hex} />
                        <p className="font-mono text-[9px] text-center truncate">
                          {formatColorValue(hex, format)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
