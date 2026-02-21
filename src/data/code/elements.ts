export const sampleCodeSwitch = `
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return <Switch />
}
`.trim();

export const sampleCodeTooltip = `
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent><p>Add to library</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
`.trim();

export const sampleCodeProgress = `
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={33} />
}
`.trim();

export const sampleCodeSkeleton = `
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return <Skeleton className="h-4 w-[250px]" />
}
`.trim();
