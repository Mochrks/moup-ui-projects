import { Heart, Trash2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui-shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { toggleSavedColor, clearSavedColors } from "./color-utils";
import { Swatch } from "./ColorShared";

interface SavedTabProps {
  savedColors: string[];
  onRefresh: () => void;
}

export function SavedTab({ savedColors, onRefresh }: SavedTabProps) {
  const handleRemove = (hex: string) => {
    toggleSavedColor(hex);
    onRefresh();
  };

  const handleClearAll = () => {
    clearSavedColors();
    onRefresh();
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Saved Colors</CardTitle>
            <CardDescription>
              {savedColors.length} saved color{savedColors.length !== 1 ? "s" : ""}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={onRefresh}
              className="text-xs h-8 bg-white"
            >
              <RefreshCw className="h-3 w-3 mr-1" /> Refresh
            </Button>
            {savedColors.length > 0 && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleClearAll}
                className="text-xs h-8 bg-white text-red-500 border-red-200"
              >
                <Trash2 className="h-3 w-3 mr-1" /> Clear All
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {savedColors.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Heart className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">No saved colors yet</p>
            <p className="text-xs mt-1">Click "Save" in the Color Picker tab to add colors here</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {savedColors.map((hex, i) => (
              <div key={i} className="space-y-1 group">
                <Swatch hex={hex} />
                <p className="font-mono text-[9px] text-center truncate">{hex}</p>
                <button
                  className="w-full text-[9px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-600"
                  onClick={() => handleRemove(hex)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
