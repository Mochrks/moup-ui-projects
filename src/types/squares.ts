export type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

export interface GridOffset {
  x: number;
  y: number;
}

export interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}
