import { Skeleton } from "@/components/ui-shadcn/skeleton";

import { User, Image as ImageIcon, FileText, Layout, PieChart } from "lucide-react";

// Enhancing Skeletons to be visually distinctive even during loading states

// 1. Industrial Avatar Placeholder
export const SkeletonCircle = () => (
  <div className="p-1 border-2 border-black rounded-full w-fit">
    <Skeleton className="h-14 w-14 rounded-full bg-zinc-200 border-2 border-black shadow-[2px_2px_0_0_#000]" />
  </div>
);

// 2. Bold Heading Block
export const SkeletonHeading = () => (
  <div className="space-y-2">
    <Skeleton className="h-10 w-80 rounded-xl bg-zinc-200 border-2 border-black shadow-[4px_4px_0_0_#000]" />
    <Skeleton className="h-4 w-40 rounded-lg bg-zinc-100 border border-black/10" />
  </div>
);

// 3. Structured Article Paragraph
export const SkeletonPara = () => (
  <div className="space-y-3 w-full p-6 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000]">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-4 bg-main rounded-full"></div>
      <Skeleton className="h-4 w-32 rounded-full" />
    </div>
    <Skeleton className="h-4 w-full rounded-md" />
    <Skeleton className="h-4 w-full rounded-md" />
    <Skeleton className="h-4 w-5/6 rounded-md" />
    <div className="pt-2">
      <Skeleton className="h-8 w-24 rounded-xl border-2 border-black" />
    </div>
  </div>
);

// 4. Premium Image Card
export const SkeletonSquare = () => (
  <div className="p-4 border-2 border-black rounded-3xl bg-white shadow-[8px_8px_0_0_#88aaee]">
    <div className="relative">
      <Skeleton className="h-48 w-48 rounded-2xl bg-zinc-100 flex items-center justify-center">
        <ImageIcon className="text-zinc-300 animate-pulse" size={40} />
      </Skeleton>
      <div className="absolute top-2 right-2 flex gap-1">
        <Skeleton className="h-5 w-5 rounded-md border border-black/10" />
        <Skeleton className="h-5 w-5 rounded-md border border-black/10" />
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <Skeleton className="h-4 w-3/4 rounded-full" />
      <Skeleton className="h-3 w-1/2 rounded-full opacity-50" />
    </div>
  </div>
);

// 5. Immersive Hero Section
export const SkeletonHero = () => (
  <div className="w-full h-80 border-4 border-black rounded-[2.5rem] bg-zinc-50 relative overflow-hidden group">
    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-white to-transparent pt-20">
      <div className="space-y-4">
        <Skeleton className="h-12 w-2/3 rounded-2xl bg-zinc-200 border-2 border-black" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 rounded-xl border-2 border-black" />
          <Skeleton className="h-10 w-10 rounded-xl border-2 border-black" />
        </div>
      </div>
    </div>
    <div className="absolute top-10 right-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
      <Layout size={200} />
    </div>
  </div>
);

// 6. Navigation Control Bar
export const SkeletonNav = () => (
  <div className="flex items-center gap-4 p-3 border-2 border-black rounded-full bg-white shadow-[4px_4px_0_0_#000]">
    <div className="flex -space-x-3 pl-2">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-8 w-8 rounded-full border-2 border-black bg-zinc-200" />
      ))}
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-9 w-24 rounded-xl border-2 border-black bg-zinc-50" />
      <Skeleton className="h-9 w-24 rounded-xl border-2 border-black bg-zinc-50" />
    </div>
    <Skeleton className="h-10 w-10 rounded-full border-2 border-black ml-auto bg-mainAccent" />
  </div>
);

// 7. Identity Capsule
export const SkeletonProfile = () => (
  <div className="p-5 border-2 border-black rounded-[2rem] bg-white flex items-center gap-5 shadow-[5px_5px_0_0_#000]">
    <div className="relative">
      <Skeleton className="h-16 w-16 rounded-2xl bg-zinc-100 border-2 border-black shadow-[2px_2px_0_0_#fbbf24] flex items-center justify-center text-zinc-300">
        <User size={32} />
      </Skeleton>
      <div className="absolute -bottom-1 -right-1">
        <Skeleton className="h-5 w-5 rounded-full border-2 border-black bg-white" />
      </div>
    </div>
    <div className="space-y-2 flex-1">
      <Skeleton className="h-5 w-3/4 rounded-full" />
      <Skeleton className="h-3 w-1/3 rounded-full opacity-40 italic" />
    </div>
  </div>
);

// 8. Grid Data Nodes
export const SkeletonGrid = () => (
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div
        key={i}
        className="p-4 border-2 border-black rounded-2xl bg-white space-y-3 hover:-translate-y-1 transition-transform shadow-[3px_3px_0_0_#000]"
      >
        <div className="flex justify-between items-start">
          <Skeleton className="h-8 w-8 rounded-lg bg-zinc-100" />
          <Skeleton className="h-4 w-4 rounded-full bg-zinc-100" />
        </div>
        <Skeleton className="h-3 w-full rounded-full" />
      </div>
    ))}
  </div>
);

// 9. Document List Table
export const SkeletonTable = () => (
  <div className="space-y-0 border-2 border-black rounded-3xl overflow-hidden bg-white">
    <div className="bg-zinc-50 p-4 border-b-2 border-black flex justify-between">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-16" />
    </div>
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="flex gap-6 p-5 border-b-2 border-black last:border-0 items-center hover:bg-zinc-50/50 transition-colors"
      >
        <div className="w-10 h-10 border-2 border-black rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-300">
          <FileText size={18} />
        </div>
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-2/3 rounded-full" />
          <Skeleton className="h-3 w-1/3 rounded-full opacity-40" />
        </div>
        <Skeleton className="h-8 w-20 rounded-lg border-2 border-black" />
      </div>
    ))}
  </div>
);

// 10. Dashboard Feature Shell
export const SkeletonDash = () => (
  <div className="p-8 border-4 border-black rounded-[3rem] bg-white space-y-6 shadow-[10px_10px_0_0_#fb6f92]">
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-2xl border-2 border-black bg-zinc-950 flex items-center justify-center text-main">
          <PieChart size={24} />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-4 w-28 rounded-full" />
          <Skeleton className="h-3 w-20 rounded-full opacity-30" />
        </div>
      </div>
      <Skeleton className="h-10 w-10 rounded-full border-2 border-black bg-pink-100" />
    </div>
    <div className="space-y-3 pt-4 border-t-2 border-black border-dashed">
      <Skeleton className="h-14 w-40 rounded-2xl bg-zinc-100 border-2 border-black" />
      <div className="flex gap-2">
        <Skeleton className="h-2 flex-1 rounded-full bg-mainAccent/20" />
        <Skeleton className="h-2 w-12 rounded-full" />
      </div>
    </div>
  </div>
);
