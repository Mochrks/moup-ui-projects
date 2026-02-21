export const sampleCodeAvatar = `
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
`.trim();

export const sampleCodeAvatarGroup = `
<div className="flex -space-x-3">
  <Avatar className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/150?u=1" /></Avatar>
  <Avatar className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/150?u=2" /></Avatar>
  <Avatar className="bg-zinc-200 border-2 border-background flex items-center justify-center text-xs font-bold">+5</Avatar>
</div>
`.trim();
