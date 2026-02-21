export const sampleCodeBadge = `
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}
`.trim();

export const sampleCodeBadgeVariants = `
<div className="flex gap-2">
  <Badge variant="default">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
`.trim();

export const sampleCodeBadgeCustom = `
<Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">
  Success
</Badge>
`.trim();
