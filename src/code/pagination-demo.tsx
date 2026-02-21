import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui-shadcn/pagination";
import { Button } from "@/components/ui-shadcn/button";
import { ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Pagination Demos for high visual impact and premium navigation feel

// 1. Neobrutalist Standard
export const PaginationSimple = () => (
  <div className="p-4 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0_0_#000]">
    <Pagination>
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-2 border-black font-black hover:bg-zinc-100"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="border-2 border-black bg-main text-white font-black shadow-[2px_2px_0_0_#000]"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-black hover:bg-zinc-100">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-black hover:bg-zinc-100">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="border-2 border-black font-black hover:bg-zinc-100" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
);

// 2. Minimalist Control Strip
export const PaginationIconic = () => (
  <div className="flex items-center gap-4 bg-zinc-950 p-2 rounded-full border-2 border-black shadow-[4px_4px_0_0_#88aaee]">
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-2 border-black bg-white hover:bg-main hover:text-white transition-all"
    >
      <ChevronLeft size={16} />
    </Button>
    <div className="flex items-center gap-2 px-1">
      <span className="text-[10px] font-black text-white uppercase tracking-widest italic">
        Node
      </span>
      <Badge className="bg-main text-black border-0 font-black">01 / 10</Badge>
    </div>
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-2 border-black bg-white hover:bg-main hover:text-white transition-all"
    >
      <ChevronRight size={16} />
    </Button>
  </div>
);

// 3. Complex Data Set
export const PaginationWithEllipsis = () => (
  <div className="w-full flex justify-center py-4 bg-zinc-50 border-2 border-dashed border-black rounded-3xl">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-bold h-10 w-10">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-black font-black" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-bold h-10 w-10">
            42
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="border-2 border-black bg-zinc-900 text-white font-bold h-10 w-10"
          >
            43
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-bold h-10 w-10">
            44
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-black font-black" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border-2 border-black font-bold h-10 w-10">
            999
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
);

// 4. Pill Industrial shapes
export const PaginationPill = () => (
  <div className="bg-white p-3 border-2 border-black rounded-full shadow-[4px_4px_0_0_#000]">
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full border-2 border-black font-black w-12 hover:bg-zinc-50 transition-colors"
          >
            7
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full border-2 border-black font-black w-24 bg-main text-white shadow-inner"
          >
            ACTIVE
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full border-2 border-black font-black w-12 hover:bg-zinc-50 transition-colors"
          >
            9
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
);

// 5. Minimal Arrows (Ghost Style)
export const PaginationMinimal = () => (
  <div className="flex gap-4 p-4 items-center">
    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter hover:text-main transition-colors group">
      <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> SEQUENCE
      PREV
    </button>
    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter hover:text-main transition-colors group">
      SEQUENCE NEXT{" "}
      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

// 6. Solid Block Sequence
export const PaginationSolid = () => (
  <div className="flex gap-1 border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0_0_#000]">
    {[1, 2, 3, 4, 5].map((i) => (
      <button
        key={i}
        className={`h-11 w-11 font-black text-sm border-r-2 border-black last:border-0 hover:bg-main hover:text-white transition-colors ${i === 3 ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {i.toString().padStart(2, "0")}
      </button>
    ))}
  </div>
);

// 7. Jump Coordinate Entry
export const PaginationJump = () => (
  <div className="flex items-center gap-4 p-4 border-2 border-black rounded-[2rem] bg-white w-fit shadow-[6px_6px_0_0_#fb6f92]">
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 border-2 border-black rounded-xl hover:bg-zinc-50"
      >
        <ChevronLeft size={18} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 border-2 border-black rounded-xl hover:bg-zinc-50"
      >
        <ChevronRight size={18} />
      </Button>
    </div>
    <div className="h-8 w-px bg-zinc-200"></div>
    <div className="flex items-center gap-3 text-xs font-bold leading-none">
      <span className="uppercase tracking-widest text-[10px] opacity-40">GO TO</span>
      <input
        className="w-14 h-10 border-2 border-black rounded-xl px-0 text-center font-black focus:bg-main/10 outline-none"
        defaultValue="05"
      />
      <span className="text-muted-foreground uppercase tracking-widest text-[10px]">OF 99+</span>
    </div>
  </div>
);

// 8. XL Visibility Numbers
export const PaginationLarge = () => (
  <div className="flex items-end gap-2">
    {[21, 22, 23].map((i) => (
      <button
        key={i}
        className={`font-black tracking-tighter transition-all hover:-translate-y-2 ${i === 22 ? "text-6xl text-main" : "text-3xl text-zinc-300"}`}
      >
        {i}
      </button>
    ))}
  </div>
);

// 9. Floating Progress Indicator
export const PaginationCompact = () => (
  <div className="flex items-center gap-6 border-2 border-black rounded-full px-5 py-3 bg-white shadow-[6px_6px_0_0_#000] hover:scale-105 transition-transform cursor-pointer">
    <button className="text-black hover:text-main transition-colors">
      <ChevronLeft size={24} strokeWidth={3} />
    </button>
    <div className="flex gap-2 items-center">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className={`transition-all duration-500 rounded-full ${i === 2 ? "w-10 h-3 bg-main border-2 border-black" : "w-3 h-3 bg-zinc-100 border-2 border-black"}`}
        ></div>
      ))}
    </div>
    <button className="text-black hover:text-main transition-colors">
      <ChevronRight size={24} strokeWidth={3} />
    </button>
  </div>
);

// 10. Dashboard Hub Controller
export const PaginationDashboard = () => (
  <div className="flex items-center justify-between w-full px-8 py-5 border-2 border-black rounded-3xl bg-zinc-950 text-white relative">
    <div className="absolute top-0 left-0 w-24 h-1 bg-main"></div>
    <div className="flex items-center gap-10">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-main">
          <Layers size={16} />{" "}
          <span className="text-[10px] font-black uppercase tracking-widest">Entry Scope</span>
        </div>
        <div className="text-lg font-bold leading-none italic">
          1-25 <span className="text-zinc-500 font-medium">/ 1,402</span>
        </div>
      </div>
      <div className="h-10 w-px bg-zinc-800"></div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <Button
            key={i}
            variant="ghost"
            className={`h-11 w-11 rounded-xl font-black text-lg ${i === 1 ? "bg-white text-black" : "text-zinc-600 hover:text-white"}`}
          >
            {i}
          </Button>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Button className="bg-main hover:bg-mainAccent text-white border-2 border-black rounded-xl h-11 px-6 font-heading uppercase text-xs shadow-[4px_4px_0_0_#000] active:translate-y-1 transition-all flex items-center gap-2">
        NEXT STAGE <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);
