import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-shadcn/dialog";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import {
  User,
  Settings,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Lock,
  Copy,
  ExternalLink,
  Download,
  Zap,
  ShieldAlert,
  Smartphone,
  AtSign,
  Image as ImageIcon,
  Target,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Dialog Demos for premium, high-impact visual design

// 1. Industrial Primary Dialog
export const DialogSimple = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className="border-4 border-black font-black uppercase italic tracking-tighter hover:bg-main hover:text-white transition-all shadow-[6px_6px_0_0_#000]"
      >
        Access Kernel
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] border-4 border-black rounded-[2.5rem] bg-white p-8 shadow-[12px_12px_0_0_#000]">
      <DialogHeader className="space-y-4">
        <div className="w-16 h-16 bg-main border-4 border-black rounded-2xl flex items-center justify-center -rotate-6 shadow-[4px_4px_0_0_#000] mx-auto sm:mx-0">
          <Target className="text-white" size={32} />
        </div>
        <div>
          <DialogTitle className="font-heading text-2xl uppercase tracking-tighter">
            System Override
          </DialogTitle>
          <DialogDescription className="font-bold text-zinc-400 italic">
            Authorizing administrative privileges for current workspace session.
          </DialogDescription>
        </div>
      </DialogHeader>
      <div className="py-6 border-y-2 border-black border-dashed my-4">
        <p className="text-sm font-medium text-zinc-600">
          Secure link established via{" "}
          <span className="text-black font-black underline">MOUP_ENCRYPT_L4</span>. Do not refresh
          this window during the handshake protocol.
        </p>
      </div>
      <DialogFooter className="sm:justify-start">
        <Button
          className="border-2 border-black bg-black text-white hover:bg-main font-heading h-12 px-8 uppercase"
          onClick={() => {}}
        >
          PROCEED
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

// 2. High-Fidelity Profile Editor
export const DialogForm = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-white text-black border-2 border-black font-bold hover:bg-zinc-50 rounded-xl h-11 px-6 shadow-[4px_4px_0_0_#88aaee]">
        Update Identity
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[450px] border-2 border-black rounded-[2rem] p-0 overflow-hidden">
      <div className="bg-zinc-950 p-8 text-white relative">
        <div className="absolute top-4 right-8 opacity-20">
          <User size={60} />
        </div>
        <Badge className="bg-main text-black border-0 font-black mb-2 animate-pulse">
          PROFILE LABS
        </Badge>
        <DialogTitle className="text-2xl font-black italic tracking-tighter uppercase">
          Digital Bio
        </DialogTitle>
        <DialogDescription className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mt-1">
          Configure your metadata
        </DialogDescription>
      </div>
      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <Label className="font-black text-xs uppercase text-zinc-400 pl-1">Display Hash</Label>
          <div className="relative">
            <AtSign className="absolute left-3 top-3 text-zinc-400" size={16} />
            <Input
              defaultValue="peduarte_dev"
              className="pl-10 h-12 border-2 border-black bg-zinc-50 font-bold focus-visible:ring-0 focus-visible:border-main transition-colors"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="font-black text-xs uppercase text-zinc-400 pl-1">Primary Grid</Label>
          <Input
            defaultValue="Jakarta, ID"
            className="h-12 border-2 border-black bg-zinc-50 font-bold focus-visible:ring-0"
          />
        </div>
        <Button className="w-full h-12 bg-black text-white border-2 border-black rounded-xl font-heading uppercase text-sm hover:bg-main transition-all">
          Synchronize Changes
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 3. Destructive Warning (Impact Style)
export const DialogDelete = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="destructive"
        className="border-2 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ef4444] rounded-full px-6"
      >
        NUKE ACCOUNT
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[400px] border-4 border-black rounded-[3rem] p-10 text-center">
      <div className="mx-auto w-20 h-20 bg-red-100 border-2 border-red-500 rounded-3xl flex items-center justify-center mb-6 animate-bounce">
        <ShieldAlert className="w-10 h-10 text-red-600" />
      </div>
      <DialogTitle className="text-3xl font-black tracking-tighter uppercase mb-2">
        CRITICAL RECOVERY!
      </DialogTitle>
      <DialogDescription className="font-bold text-zinc-500 leading-relaxed mb-8">
        This is a <span className="text-red-600 underline">High Impact</span> action. Data recovery
        is impossible once the wipe is initiated.
      </DialogDescription>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="border-2 border-black h-12 font-bold uppercase">
          ABORT
        </Button>
        <Button
          variant="destructive"
          className="border-2 border-black h-12 font-black uppercase shadow-[4px_4px_0_0_#ef4444]"
        >
          INITIATE
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 4. Success Completion Card
export const DialogSuccess = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="h-14 px-8 bg-black text-white border-2 border-black font-heading rounded-2xl hover:bg-main hover:text-black transition-all group">
        ACTIVATE NOW <Zap size={18} className="ml-2 group-hover:fill-current" />
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[420px] border-4 border-black rounded-[3rem] p-0 overflow-hidden bg-main">
      <div className="p-10 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-white border-4 border-black rounded-[2rem] flex items-center justify-center mb-8 shadow-[8px_8px_0_0_#000] animate-[spin_10s_linear_infinite]">
          <CheckCircle2 size={48} className="text-mainAccent" />
        </div>
        <DialogTitle className="text-4xl font-black italic tracking-tighter text-white uppercase drop-shadow-[2px_2px_0_#000]">
          Unlocked!
        </DialogTitle>
        <DialogDescription className="mt-4 text-white font-black opacity-80 leading-relaxed max-w-[280px]">
          Vault access granted. Your cryptographic keys are now synced across all nodes.
        </DialogDescription>
        <Button className="mt-10 w-full h-14 bg-black text-white border-2 border-black font-heading uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          GO TO SECURE CORE
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 5. Modern Share Overlay
export const DialogShare = () => {
  const [copied, setCopied] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-11 rounded-full border-2 border-black px-6 font-bold hover:bg-zinc-50"
        >
          <ExternalLink className="mr-2 h-4 w-4" /> Share Hub
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-2 border-black rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading uppercase italic">
            Broadcast Link
          </DialogTitle>
          <DialogDescription className="font-bold text-zinc-400">
            Public visibility active. Anyone with this hash can view content.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-3 mt-4">
          <div className="flex-1">
            <Input
              value="moup.io/v1/sh/88f2-x9k"
              readOnly
              className="border-2 border-black bg-zinc-50 h-12 font-black italic"
            />
          </div>
          <Button
            size="icon"
            className={`h-12 w-12 border-2 border-black ${copied ? "bg-green-500" : "bg-black"} transition-colors`}
            onClick={() => setCopied(true)}
          >
            {copied ? (
              <CheckCircle2 size={20} className="text-white" />
            ) : (
              <Copy size={20} className="text-white" />
            )}
          </Button>
        </div>
        <div className="mt-6 p-4 bg-zinc-900 border-2 border-black rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone size={16} className="text-zinc-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">
              Mobile Optimized
            </span>
          </div>
          <Badge className="bg-main text-black font-black text-[8px]">ACTIVE</Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// 6. Documentation Modal
export const DialogLarge = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="border-2 border-black rounded-xl h-11 px-6 font-bold">
        Standard Clauses
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[700px] border-4 border-black rounded-[2.5rem] p-0 overflow-hidden">
      <div className="px-10 pt-10 pb-6 border-b-2 border-black bg-zinc-50">
        <h4 className="font-heading text-2xl uppercase italic tracking-tighter">
          Legal Framework 4.0
        </h4>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">
          Version 2.4.2 · Updated Aug 2025
        </p>
      </div>
      <div className="max-h-[400px] overflow-y-auto p-10 text-sm font-medium leading-relaxed text-zinc-600 space-y-6">
        <div className="p-4 bg-main/5 border-l-4 border-main rounded-r-xl">
          <h5 className="font-black text-black uppercase text-xs mb-2">01. Acceptance Scope</h5>
          <p>
            By initializing the MoupUI kernel, you concede to all telemetry data collection
            protocols as specified in the Global Data Accord of 2024.
          </p>
        </div>
        <div className="p-4 bg-zinc-50 border-l-4 border-zinc-300 rounded-r-xl">
          <h5 className="font-black text-black uppercase text-xs mb-2">02. License Bounds</h5>
          <p>
            Permission is granted to utilize the component artifacts for commercial production,
            provided the "Engineered by MoupUI" metadata remains intact.
          </p>
        </div>
        <p>
          3. Performance Guarantee: MoupUI artifact performance is subject to regional CDN latency.
          We do not guarantee sub-10ms response times for non-enterprise nodes.
        </p>
        <p>
          4. Liability Cap: In no event shall the maintainers be liable for UX failures resulting
          from excessive nesting or incorrect Tailwind configurations.
        </p>
      </div>
      <div className="p-8 border-t-2 border-black flex justify-end gap-3 bg-zinc-50">
        <Button variant="outline" className="border-2 border-black font-bold h-12 px-6">
          DECLINE
        </Button>
        <Button className="border-2 border-black bg-black text-white font-heading h-12 px-8 uppercase hover:bg-main transition-colors">
          ACCEPT & SYNC
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 7. Mini Control Hub
export const DialogMini = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 border-2 border-black rounded-2xl bg-white shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
      >
        <Settings className="w-5 h-5 text-black" />
      </Button>
    </DialogTrigger>
    <DialogContent className="fixed right-6 top-6 translate-x-0 translate-y-0 sm:max-w-[320px] rounded-[2rem] border-2 border-black shadow-[10px_10px_0_0_#000] p-6 bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
          <Zap size={16} />
        </div>
        <DialogTitle className="text-sm font-black uppercase tracking-tighter">
          Quick Core
        </DialogTitle>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 border-2 border-black rounded-xl bg-zinc-50 group hover:border-main transition-colors">
          <span className="text-[10px] font-black uppercase">Dark State</span>
          <div className="w-10 h-5 bg-black border-2 border-white/20 rounded-full flex items-center px-1">
            <div className="w-3 h-3 bg-main rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between items-center p-3 border-2 border-black rounded-xl bg-zinc-50 group hover:border-main transition-colors">
          <span className="text-[10px] font-black uppercase">Stealth Mode</span>
          <div className="w-10 h-5 bg-zinc-200 border-2 border-zinc-300 rounded-full flex items-center justify-end px-1">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <Button className="w-full bg-black text-white font-heading h-10 text-[10px] uppercase">
          All Settings
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 8. Warning Notification
export const DialogWarning = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-amber-500 bg-amber-50 text-amber-700 h-11 px-6 font-bold hover:bg-amber-100 rounded-xl flex gap-2"
      >
        <AlertTriangle size={18} /> Performance Alert
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[420px] border-2 border-black rounded-3xl p-0 overflow-hidden bg-white">
      <div className="bg-amber-400 p-6 border-b-2 border-black flex items-center gap-4">
        <div className="p-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0_0_#000]">
          <AlertTriangle className="text-amber-600" size={24} />
        </div>
        <DialogTitle className="font-heading uppercase text-xl italic drop-shadow-sm text-amber-950">
          Heat Warning
        </DialogTitle>
      </div>
      <div className="p-8">
        <DialogDescription className="font-bold text-zinc-500 text-sm leading-relaxed mb-6">
          Core nodes in <span className="text-black underline italic">US-EAST-1</span> are
          experiencing thermal throttling. Auto-sharding may result in higher processing costs.
        </DialogDescription>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="border-2 border-black font-bold h-12 uppercase">
            IGNORE
          </Button>
          <Button className="bg-amber-950 text-white border-2 border-black font-heading h-12 uppercase hover:bg-black transition-colors">
            ALLOCATE BOX
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

// 9. Auth Center (Premium Style)
export const DialogAuth = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-black bg-zinc-950 text-white font-black uppercase italic tracking-tighter h-12 px-8 rounded-full shadow-[4px_4px_0_0_#88aaee] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
      >
        MEMBER PORTAL
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[400px] border-4 border-black rounded-[3rem] p-10 bg-white">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-main border-2 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000]">
          <Lock className="text-white" size={28} />
        </div>
        <DialogTitle className="text-3xl font-black italic tracking-tighter uppercase mb-1">
          Authorization
        </DialogTitle>
        <DialogDescription className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">
          Access restricted to verified ID holders
        </DialogDescription>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-zinc-400" size={16} />
          <Input
            placeholder="OPERATOR EMAIL"
            className="pl-10 h-12 border-2 border-black bg-zinc-50 font-black italic focus-visible:ring-0"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-zinc-400" size={16} />
          <Input
            placeholder="SECURITY PIN"
            type="password"
            className="pl-10 h-12 border-2 border-black bg-zinc-50 font-black italic focus-visible:ring-0"
          />
        </div>
        <Button className="w-full h-14 bg-black text-white border-2 border-black font-heading rounded-2xl shadow-[4px_4px_0_0_#000] hover:bg-main hover:text-black transition-all group">
          ENTER GATEWAY{" "}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// 10. Multi-Action Immersive Media
export const DialogMedia = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className="border-2 border-black rounded-2xl p-0 overflow-hidden w-64 h-32 group relative"
      >
        <img
          src="https://picsum.photos/id/10/300/200"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          alt="trigger"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white font-black text-xs uppercase tracking-widest">
            EXPAND ASSET
          </span>
        </div>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px] border-4 border-black rounded-[3rem] p-0 overflow-hidden bg-zinc-950">
      <div className="relative aspect-video group/img">
        <img
          src="https://picsum.photos/id/10/800/450"
          className="object-cover w-full h-full"
          alt="demo"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/60 backdrop-blur-md text-white border-0 font-bold">
            4K RESOLUTION
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all">
          <Button
            size="icon"
            className="bg-white text-black border-2 border-black rounded-xl hover:bg-main"
          >
            <Download size={20} />
          </Button>
          <Button
            size="icon"
            className="bg-white text-black border-2 border-black rounded-xl hover:bg-main"
          >
            <ExternalLink size={20} />
          </Button>
        </div>
      </div>
      <div className="p-8 bg-white border-t-2 border-black flex justify-between items-center">
        <div className="space-y-1">
          <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter">
            Asset #10 - Peak Silence
          </DialogTitle>
          <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase">
            <ImageIcon size={12} /> Digital RAW · 12.4 MB · sRGB
          </div>
        </div>
        <Button className="bg-black text-white font-heading h-12 px-6 uppercase border-2 border-black shadow-[4px_4px_0_0_#000]">
          DOWNLOAD
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);
