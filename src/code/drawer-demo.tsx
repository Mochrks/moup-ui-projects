import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui-shadcn/drawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui-shadcn/sheet";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import {
  User,
  ShoppingCart,
  Bell,
  Filter,
  ChevronRight,
  LayoutList,
  MoreHorizontal,
  Trash2,
  PieChart,
  Zap,
  Shield,
  Smartphone,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Drawer and Sheet Demos for premium, industrial, and high-fidelity visuals

// 1. Industrial Bottom Drawer
export const DrawerBottom = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-black font-black uppercase tracking-tighter hover:bg-main hover:text-white shadow-[4px_4px_0_0_#000]"
      >
        Access Metrics
      </Button>
    </DrawerTrigger>
    <DrawerContent className="border-t-4 border-black rounded-t-[3rem] bg-white">
      <div className="mx-auto w-full max-w-lg p-10">
        <DrawerHeader className="text-center sm:text-left">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-main animate-pulse">
              <PieChart size={24} />
            </div>
            <div>
              <DrawerTitle className="font-heading text-3xl uppercase tracking-tighter italic">
                Live Telemetry
              </DrawerTitle>
              <DrawerDescription className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest">
                Global load distributions
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className="py-10 grid grid-cols-2 gap-4">
          <div className="p-6 border-2 border-black rounded-3xl bg-zinc-50 shadow-[4px_4px_0_0_#000]">
            <span className="text-[10px] font-black opacity-40 uppercase">CPU Heat</span>
            <div className="text-4xl font-black italic text-main">42%</div>
          </div>
          <div className="p-6 border-2 border-black rounded-3xl bg-zinc-50 shadow-[4px_4px_0_0_#000]">
            <span className="text-[10px] font-black opacity-40 uppercase">Node Uptime</span>
            <div className="text-4xl font-black italic text-black shrink-0">99.9%</div>
          </div>
        </div>
        <DrawerFooter className="px-0">
          <Button className="h-14 bg-black text-white border-2 border-black font-heading rounded-2xl hover:bg-main transition-all uppercase">
            SYNCHRONIZE CORE
          </Button>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
);

// 2. High-Tech Right Sheet
export const SheetRight = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="outline"
        className="h-11 border-2 border-black rounded-xl font-bold px-6 hover:bg-zinc-50 shadow-[3px_3px_0_0_#88aaee]"
      >
        Control Panel
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="w-[400px] border-l-4 border-black bg-white p-0 overflow-hidden"
    >
      <div className="bg-zinc-950 p-8 text-white relative">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Layers size={120} />
        </div>
        <Badge className="bg-main text-black border-0 font-black mb-4">MOUP ENGINE v4</Badge>
        <SheetTitle className="text-3xl font-black italic uppercase tracking-tighter text-white">
          System Ops
        </SheetTitle>
        <SheetDescription className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mt-1">
          Configure workspace parameters
        </SheetDescription>
      </div>
      <div className="p-8 space-y-4">
        {[
          { icon: User, label: "Profile Architect", desc: "Manage your digital identity" },
          { icon: Shield, label: "Security Vault", desc: "Encryption keys & hardware auth" },
          { icon: Bell, label: "Dispatch Hub", desc: "Configure event listeners" },
        ].map((item, i) => (
          <button
            key={i}
            className="w-full text-left p-4 border-2 border-black rounded-2xl hover:bg-zinc-50 transition-all flex items-center justify-between group"
          >
            <div className="flex gap-4 items-center">
              <div className="p-2 border-2 border-black rounded-xl bg-white group-hover:bg-main group-hover:text-white transition-colors">
                <item.icon size={18} />
              </div>
              <div>
                <div className="text-sm font-black uppercase italic">{item.label}</div>
                <div className="text-[10px] text-zinc-400 font-bold">{item.desc}</div>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-zinc-300 group-hover:text-black group-hover:translate-x-1 transition-all"
            />
          </button>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-zinc-50 border-t-2 border-black flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest leading-none">
            Status: Nominal
          </span>
        </div>
        <Button className="bg-black text-white border-2 border-black rounded-xl font-heading uppercase text-xs h-10 px-6">
          LOGOUT
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

// 3. Left Navigation Terminal
export const SheetLeft = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-black rounded-xl font-bold hover:shadow-[3px_3px_0_0_#000] transition-all"
      >
        Directory
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="bg-zinc-950 border-r-4 border-black text-white p-0">
      <div className="p-10 border-b border-zinc-800">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-main rounded-xl border-2 border-black flex items-center justify-center -rotate-12 shadow-[4px_4px_0_0_#000]">
            <LayoutList className="text-white" size={20} />
          </div>
          <SheetTitle className="text-xl font-heading text-white italic uppercase tracking-tighter">
            Exploration
          </SheetTitle>
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4">
              Core Files
            </div>
            <div className="space-y-1">
              {["Dashboard", "Analytics", "Team Hub", "Asset Store"].map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-900 flex items-center justify-between group"
                >
                  <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">
                    {cat}
                  </span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-main"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <Button className="w-full bg-white text-black border-2 border-black font-black uppercase italic rounded-xl h-12 shadow-[4px_4px_0_0_#88aaee]">
          BOOT SEQUENCE
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

// 4. Integrated Search Beam (Top)
export const SheetTop = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className="border-2 border-black rounded-lg font-bold">
        <Filter size={14} className="mr-2" /> Global Query
      </Button>
    </SheetTrigger>
    <SheetContent side="top" className="bg-white border-b-4 border-black p-0">
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-3xl border-2 border-black bg-zinc-50 flex items-center justify-center shrink-0">
            <Zap className="text-main" size={32} />
          </div>
          <div className="flex-1">
            <Input
              placeholder="TYPE ANY KEYWORD TO QUERY GLOBAL DATABASE..."
              className="h-16 border-2 border-black bg-zinc-50 rounded-2xl text-xl font-black italic px-8 focus-visible:ring-0 focus-visible:border-main shadow-[4px_4px_0_0_#000]"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          {["RESOURCES", "DOCUMENTATION", "SOURCE CODE", "METADATA"].map((tag) => (
            <Badge
              key={tag}
              className="bg-white border-2 border-black text-black font-black uppercase text-[10px] px-4 py-2 hover:bg-main hover:text-white cursor-pointer transition-all"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

// 5. Destructive Security Drawer
export const DrawerConfirm = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button
        variant="destructive"
        className="border-2 border-black font-black uppercase italic shadow-[3px_3px_0_0_#000]"
      >
        TERMINATE SESSION
      </Button>
    </DrawerTrigger>
    <DrawerContent className="bg-red-50 border-t-4 border-black">
      <div className="mx-auto w-full max-w-lg p-10 text-center">
        <div className="w-20 h-20 bg-red-100 border-2 border-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#000]">
          <Trash2 className="text-red-500" size={32} />
        </div>
        <DrawerTitle className="text-3xl font-black uppercase italic tracking-tighter mb-2">
          Protocol Wipe
        </DrawerTitle>
        <DrawerDescription className="text-zinc-500 font-bold mb-8">
          This will immediately sever all websocket links for{" "}
          <span className="text-red-600 underline">dev-node-04</span>. This action is recorded in
          the immutable audit log.
        </DrawerDescription>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="destructive"
            className="flex-1 h-14 border-2 border-black rounded-2xl font-black uppercase italic shadow-[4px_4px_0_0_#000]"
          >
            DO IT
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="flex-1 h-14 border-2 border-black rounded-2xl font-bold uppercase transition-all"
            >
              CANCEL
            </Button>
          </DrawerClose>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

// 6. Panoramic Documentation Sheet
export const SheetFull = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className="border-2 border-black h-11 px-8 rounded-full font-bold">
        Project Blueprint
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-full sm:w-[600px] border-l-4 border-black bg-white p-0">
      <div className="h-full flex flex-col">
        <div className="p-10 bg-zinc-50 border-b-2 border-black flex justify-between items-end">
          <div>
            <Badge className="bg-black text-white border-0 font-bold mb-4">BLUEPRINT v1</Badge>
            <SheetTitle className="text-5xl font-black italic uppercase tracking-tighter">
              Architecture
            </SheetTitle>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center font-black text-2xl italic">
            64
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-10 space-y-10">
          <div className="space-y-4">
            <h4 className="font-heading text-lg uppercase flex items-center gap-2 underline underline-offset-4">
              <Smartphone size={20} /> Hybrid Core
            </h4>
            <p className="font-medium text-zinc-500 leading-relaxed">
              MoupUI uses a hybrid rendering strategy, optimizing for sub-50ms interaction states
              while maintaining a robust server-side foundation for SEO and data-rich sections.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-heading text-lg uppercase flex items-center gap-2 underline underline-offset-4">
              <Star size={20} /> Aesthetic Standards
            </h4>
            <p className="font-medium text-zinc-500 leading-relaxed">
              Every component is stress-tested against the Industrial-Neo-Brutalist design paradigm,
              ensuring high contrast, accessibility, and visual impact at any viewport scale.
            </p>
          </div>
        </div>
        <div className="p-10 border-t-2 border-black bg-zinc-50 flex gap-4">
          <Button className="flex-1 bg-black text-white font-heading h-14 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000]">
            DOWNLOAD PDF
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

// 7. Profile Update Hub
export const SheetForm = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button className="bg-main text-white border-2 border-black rounded-xl h-12 px-8 font-heading uppercase italic shadow-[4px_4px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
        Member Profile
      </Button>
    </SheetTrigger>
    <SheetContent className="border-l-4 border-black">
      <SheetHeader className="mb-8">
        <div className="w-16 h-16 bg-zinc-100 border-2 border-black rounded-full flex items-center justify-center mb-4">
          <User size={32} className="text-zinc-400" />
        </div>
        <SheetTitle className="font-heading text-2xl uppercase italic">Edit Identity</SheetTitle>
        <SheetDescription className="font-bold text-zinc-400">
          Configure your public visibility across the MOUP network.
        </SheetDescription>
      </SheetHeader>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="font-black text-xs uppercase text-zinc-400">Title</Label>
          <Input
            placeholder="e.g. CORE DEVELOPER"
            className="h-12 border-2 border-black font-black uppercase italic bg-zinc-50"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-black text-xs uppercase text-zinc-400">Broadcast Bio</Label>
          <textarea
            className="w-full h-32 border-2 border-black rounded-xl p-4 bg-zinc-50 font-bold text-sm focus:ring-0 outline-none"
            placeholder="Who are you in 140 chars?"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-14 bg-black text-white border-2 border-black rounded-2xl font-heading uppercase italic tracking-widest shadow-[4px_4px_0_0_#88aaee]"
        >
          COMMIT CHANGES
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

// 8. Modular Filter System
export const DrawerFilter = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline" className="border-2 border-black h-11 px-6 rounded-xl font-bold">
        <Filter className="mr-2 h-4 w-4" /> Filter Engine
      </Button>
    </DrawerTrigger>
    <DrawerContent className="h-[85vh] border-t-4 border-black rounded-t-[3rem] bg-white">
      <div className="mx-auto w-full max-w-3xl overflow-y-auto p-12">
        <DrawerHeader className="px-0 flex flex-col items-center">
          <div className="w-12 h-1 bg-zinc-200 rounded-full mb-8"></div>
          <DrawerTitle className="font-heading text-4xl uppercase italic tracking-tighter mb-2">
            Search Logic
          </DrawerTitle>
          <DrawerDescription className="font-bold text-zinc-400 uppercase text-xs tracking-widest">
            Adjust query parameters for node results
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-12">
          <div className="space-y-4">
            <div className="font-black uppercase text-sm flex gap-2">
              <div className="w-1 h-5 bg-main"></div> Numerical Range
            </div>
            <div className="flex gap-4">
              <Input
                type="number"
                placeholder="MIN VAL"
                className="h-14 border-2 border-black bg-zinc-50 font-black"
              />
              <Input
                type="number"
                placeholder="MAX VAL"
                className="h-14 border-2 border-black bg-zinc-50 font-black"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-black uppercase text-sm flex gap-2">
              <div className="w-1 h-5 bg-pink-500"></div> Metadata Tagging
            </div>
            <div className="flex flex-wrap gap-2">
              {["ENGINE", "UI/UX", "CORE", "API", "DB"].map((c) => (
                <Button
                  key={c}
                  variant="outline"
                  className="rounded-xl border-2 border-black font-black uppercase text-xs h-9 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000]"
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black border-dashed pt-8">
          <Button className="w-full h-16 bg-black text-white border-2 border-black rounded-2xl font-heading text-xl uppercase italic shadow-[6px_6px_0_0_#fb6f92]">
            EXECUTE FILTER (2,402 NODES)
          </Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

// 9. Side Terminal Explorer
export const SheetList = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-black rounded-xl font-bold bg-zinc-950 text-white hover:bg-black"
      >
        <LayoutList className="mr-2 h-4 w-4 text-main" /> System Logs
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="p-0 border-r-4 border-black w-[400px]">
      <div className="h-full flex flex-col bg-zinc-950 text-white">
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/50">
          <div className="text-[10px] font-black text-main uppercase tracking-widest mb-1">
            Live Monitor
          </div>
          <h3 className="font-heading text-3xl uppercase italic tracking-tighter">Event Logs</h3>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <button
              key={i}
              className="w-full text-left p-5 rounded-2xl border-2 border-transparent hover:border-main bg-zinc-900/40 hover:bg-zinc-900 flex items-center justify-between text-sm transition-all group"
            >
              <div className="flex gap-4 items-center">
                <div className="text-zinc-700 font-black text-xs italic">0x{i}A2</div>
                <span className="font-bold text-zinc-300">system_node_init_{i}.log</span>
              </div>
              <Badge className="bg-zinc-800 text-zinc-500 group-hover:bg-main group-hover:text-black font-black text-[8px] transition-colors uppercase">
                RAW
              </Badge>
            </button>
          ))}
        </div>
        <div className="p-8 border-t border-zinc-900">
          <Button className="w-full bg-main text-white border-0 font-heading uppercase italic tracking-widest h-12 rounded-xl">
            FLUSH ALL
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

// 10. Floating Actions Drawer (Menu)
export const DrawerActions = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="h-14 w-14 border-2 border-black rounded-full bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
      >
        <MoreHorizontal size={24} />
      </Button>
    </DrawerTrigger>
    <DrawerContent className="bg-zinc-50 border-t-4 border-black">
      <div className="mx-auto w-full max-sm p-8 space-y-4">
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 bg-black text-white text-[10px] font-black uppercase italic rounded-full mb-2">
            Workspace Controls
          </div>
        </div>
        {[
          { icon: Bell, label: "Pin to Priority", color: "text-blue-500" },
          { icon: ShoppingCart, label: "Archive Bundle", color: "text-zinc-500" },
          { icon: Trash2, label: "Purge Asset", color: "text-red-500" },
        ].map((item, i) => (
          <Button
            key={i}
            variant="outline"
            className="w-full justify-between h-14 border-2 border-black rounded-2xl bg-white hover:bg-zinc-100 group px-6"
          >
            <div className="flex items-center gap-4">
              <item.icon size={18} className={item.color} />
              <span className="font-black uppercase italic tracking-tighter text-sm">
                {item.label}
              </span>
            </div>
            <ArrowRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Button>
        ))}
      </div>
    </DrawerContent>
  </Drawer>
);
