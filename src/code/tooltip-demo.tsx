import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui-shadcn/tooltip";
import { Button } from "@/components/ui-shadcn/button";
import {
  Settings,
  HelpCircle,
  Bell,
  Mail,
  Share2,
  Heart,
  Download,
  Zap,
  Terminal,
  Shield,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// 1. Industrial Bold Tooltip
export const TooltipTop = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-black font-black uppercase text-xs h-10 px-4 shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          Top Vector
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-black text-white border-2 border-white/20 p-2 font-black italic text-xs uppercase tracking-tighter shadow-xl"
      >
        North Coordinate Locked
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 2. High-Visibility Bottom
export const TooltipBottom = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-black font-black uppercase text-xs h-10 px-4 bg-zinc-950 text-white"
        >
          South Vector
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-main text-black border-2 border-black p-2 font-black italic text-xs uppercase tracking-tighter shadow-[4px_4px_0_0_#000]"
      >
        Accessing Root Layer...
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 3. Status Trigger Left
export const TooltipLeft = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center cursor-help shadow-[3px_3px_0_0_#ef4444]">
          <Settings size={18} />
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="left"
        className="bg-white border-2 border-black p-3 rounded-xl shadow-lg"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="font-black text-[10px] uppercase">Service Error</span>
        </div>
        <p className="text-[10px] font-bold text-zinc-400">Restart required for node 0x2A</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 4. Info Group Right
export const TooltipRight = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-black rounded-full h-10 w-10 p-0 hover:bg-main hover:text-white transition-colors"
        >
          <HelpCircle size={18} />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="bg-zinc-950 text-white border-2 border-black p-4 rounded-2xl max-w-xs shadow-2xl"
      >
        <div className="flex gap-3 items-start">
          <div className="p-2 border border-white/10 rounded-lg bg-white/5">
            <Terminal size={16} className="text-main" />
          </div>
          <div className="space-y-1">
            <h5 className="font-heading text-xs uppercase italic text-main">Terminal Help</h5>
            <p className="text-[10px] font-medium text-zinc-400 leading-relaxed">
              Execute <code className="bg-white/5 px-1 rounded text-white">moup-ui init</code> to
              boilerplate your workspace.
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 5. Rich Diagnostic Card
export const TooltipRich = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-3 p-3 border-2 border-black rounded-2xl bg-white hover:bg-zinc-50 cursor-pointer transition-all shadow-[4px_4px_0_0_#000]">
          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
            <Zap size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase italic leading-none">Power Node</span>
            <span className="text-[9px] font-bold text-zinc-400 mt-0.5">VERIFIED</span>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-white border-2 border-black p-0 overflow-hidden rounded-2xl shadow-2xl w-64">
        <div className="bg-zinc-950 p-4 text-white">
          <Badge className="bg-main text-black border-0 font-black text-[8px] mb-2 uppercase">
            Core Engine
          </Badge>
          <h6 className="font-heading uppercase italic tracking-tighter">Diagnostic Data</h6>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-[10px] font-bold border-b border-zinc-100 pb-2">
            <span className="text-zinc-400">LATENCY</span>
            <span className="text-mainAccent">12 MS</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-zinc-400">UPTIME</span>
            <span className="text-black">100.0%</span>
          </div>
          <Button className="w-full h-8 bg-black text-white text-[9px] font-black uppercase rounded-lg mt-2">
            Open Dashboard
          </Button>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 6. Minimal Glowing Pill
export const TooltipColored = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="rounded-xl h-12 px-6 border-2 border-black bg-white text-black hover:bg-zinc-950 hover:text-white group transition-all">
          <Shield size={18} className="mr-2 group-hover:text-main" /> Security
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-main text-white font-black italic uppercase tracking-widest text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_#000]">
        Protocols Active
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 7. Interactive Feedback Hint
export const TooltipSuccess = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="p-4 border-2 border-black rounded-full bg-green-50 flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-green-100 transition-colors">
          <Heart size={20} className="text-green-600 fill-green-600" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-zinc-950 text-white border-2 border-black rounded-xl p-3 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="font-black text-xs uppercase tracking-tighter">1.4k Saved</span>
          <ArrowRight size={14} className="text-main" />
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 8. Long Delay Instructional
export const TooltipDelayed = () => (
  <TooltipProvider delayDuration={1000}>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="p-4 border-2 border-black border-dashed rounded-2xl bg-zinc-50 flex items-center gap-4 cursor-wait group">
          <Clock size={20} className="text-zinc-400 group-hover:animate-spin" />
          <span className="text-xs font-bold uppercase tracking-widest opacity-40 italic">
            Deep Scan...
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-black text-white p-3 border-2 border-white/20 rounded-xl font-medium text-xs max-w-[200px]">
        Intentional delay active to prevent UI flickering during heavy database synchronization.
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// 9. Floating Tooltip Strip
export const TooltipActions = () => (
  <TooltipProvider>
    <div className="flex gap-2 p-2 border-2 border-black bg-white rounded-2xl shadow-[4px_4px_0_0_#000]">
      {[
        { icon: Download, label: "Export Raw Data" },
        { icon: Share2, label: "Broadcast Sync" },
        { icon: Mail, label: "Dispatch Email" },
      ].map((item, i) => (
        <Tooltip key={i}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 border-2 border-transparent hover:border-black hover:bg-main/10 transition-all"
            >
              <item.icon size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white font-black italic uppercase text-[9px] tracking-widest">
            {item.label}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  </TooltipProvider>
);

// 10. Status Alert Pill
export const TooltipPill = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-3 p-1 pr-4 border-2 border-black rounded-full bg-zinc-950 group cursor-pointer hover:bg-zinc-900 transition-colors">
          <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden flex items-center justify-center bg-white shadow-inner group-hover:rotate-12 transition-transform">
            <Bell size={18} className="animate-swing" />
          </div>
          <div>
            <div className="text-[10px] font-black text-white uppercase tracking-tighter leading-none">
              Notifications
            </div>
            <div className="text-[8px] font-bold text-main uppercase italic tracking-widest leading-none mt-1">
              3 Unread
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-red-500 text-white border-2 border-black rounded-full px-5 py-2 font-black italic uppercase tracking-tighter text-xs shadow-[4px_4px_0_0_#000]">
        Critical Priority Active!
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
