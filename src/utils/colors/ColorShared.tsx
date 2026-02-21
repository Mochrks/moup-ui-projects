import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui-shadcn/tooltip";
import { getTextColor } from "./color-utils";

// ─── CopyButton ────────────────────────────────────────────────────────────
interface CopyBtnProps {
  text: string;
  small?: boolean;
}

export function CopyBtn({ text, small }: CopyBtnProps) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <Button
      variant="outline"
      size={small ? "sm" : "icon"}
      onClick={copy}
      className="h-7 w-7 p-1 bg-white"
    >
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
    </Button>
  );
}

// ─── Color Swatch ──────────────────────────────────────────────────────────
interface SwatchProps {
  hex: string;
  label?: string;
  onClick?: () => void;
}

export function Swatch({ hex, label, onClick }: SwatchProps) {
  const [copied, setCopied] = useState(false);
  const copy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="group relative rounded-lg cursor-pointer overflow-hidden border-2 border-transparent hover:border-black transition-all"
            style={{ backgroundColor: hex }}
            onClick={onClick || copy}
          >
            <div className="h-14 w-full" />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              {copied ? (
                <Check className="h-4 w-4" style={{ color: getTextColor(hex) }} />
              ) : (
                <Copy className="h-4 w-4" style={{ color: getTextColor(hex) }} />
              )}
            </div>
            {label && (
              <div
                className="text-[9px] text-center py-0.5 font-mono"
                style={{ color: getTextColor(hex) }}
              >
                {label}
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white border-2 border-black">
          <p className="font-mono font-bold">{hex}</p>
          <p className="text-xs text-gray-400">Click to copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
