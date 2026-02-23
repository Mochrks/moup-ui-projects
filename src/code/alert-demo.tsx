import { Alert, AlertDescription, AlertTitle } from "@/components/ui-shadcn/alert";
import { Button } from "@/components/ui-shadcn/button";
import {
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  ShieldAlert,
  ArrowRight,
  Zap,
  LifeBuoy,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Alerts for high visual impact and premium feel

// 1. Neobrutalist Industrial Alert
export const AlertDefault = () => (
  <Alert className="w-full border-4 border-black bg-zinc-950 text-white rounded-[2rem] p-6 shadow-[8px_8px_0_0_#000] relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
      <Terminal size={80} />
    </div>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-main rounded-xl border-2 border-black text-black">
        <Terminal className="h-5 w-5" />
      </div>
      <AlertTitle className="font-heading uppercase tracking-widest text-lg m-0">
        System Link Active
      </AlertTitle>
    </div>
    <AlertDescription className="text-zinc-400 font-bold italic pl-12">
      Kernel protocols initialised. You are now connected to the primary data stream via MoupUI
      Proxy.
    </AlertDescription>
  </Alert>
);

// 2. High-Alert Destructive
export const AlertDestructive = () => (
  <Alert
    variant="destructive"
    className="w-full border-4 border-black bg-red-50 text-red-900 rounded-3xl p-6 shadow-[8px_8px_0_0_#ef4444]"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-red-500 rounded-2xl border-2 border-black text-white animate-pulse">
        <AlertCircle className="h-6 w-6" />
      </div>
      <div className="space-y-1">
        <AlertTitle className="font-black text-2xl tracking-tighter uppercase italic">
          Access Revoked!
        </AlertTitle>
        <AlertDescription className="font-medium opacity-80 leading-relaxed">
          Your session signature has expired or been intercepted. Immediate re-authentication is
          mandatory for security compliance.
        </AlertDescription>
        <div className="pt-3">
          <Button
            variant="outline"
            className="border-2 border-black bg-white rounded-xl font-bold text-xs h-9"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  </Alert>
);

// 3. Success (Modern Glassmorphism Influence)
export const AlertSuccess = () => (
  <Alert className="w-full border-2 border-black bg-white rounded-[2.5rem] p-8 shadow-[10px_10px_0_0_#22c55e] relative">
    <div className="absolute top-4 right-4">
      <Badge className="bg-green-100 text-green-700 border-2 border-green-700 font-black italic">
        PROCESSED
      </Badge>
    </div>
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 bg-green-500 rounded-full border-2 border-black flex items-center justify-center text-white shrink-0 shadow-[4px_4px_0_0_#000]">
        <CheckCircle2 size={32} />
      </div>
      <div className="space-y-1">
        <AlertTitle className="text-2xl font-black tracking-tight">Payment Verified</AlertTitle>
        <AlertDescription className="text-muted-foreground font-medium">
          Funds for <span className="text-black font-bold underline">ID_99042</span> have been
          secured. Your digital assets reach your wallet in 60 seconds.
        </AlertDescription>
      </div>
    </div>
  </Alert>
);

// 4. Warning with Stripe Pattern
export const AlertWarning = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
    <Alert className="relative w-full border-2 border-black bg-white rounded-3xl p-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fbbf24_10px,#fbbf24_20px)]"></div>
      <AlertTitle className="flex items-center gap-2 font-bold text-amber-900 border-b border-amber-100 pb-2 mb-3">
        <AlertTriangle className="h-4 w-4 text-amber-600" /> QUOTA LIMIT REACHED
      </AlertTitle>
      <AlertDescription className="text-amber-800/80 font-medium">
        Compute usage is at <span className="font-black text-amber-900">92%</span>. Auto-sharding
        will trigger upon reaching 95% to prevent latency spikes.
      </AlertDescription>
    </Alert>
  </div>
);

// 5. Contextual Information Cloud
export const AlertInfo = () => (
  <Alert className="w-full border-2 border-black bg-main/10 rounded-3xl p-6 relative">
    <div className="flex items-start gap-4">
      <div className="p-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0_0_#000]">
        <Compass className="text-mainAccent" size={20} />
      </div>
      <div className="space-y-1">
        <AlertTitle className="font-heading text-mainAccent uppercase text-sm tracking-widest">
          Navigation Guide
        </AlertTitle>
        <AlertDescription className="text-zinc-600 font-bold text-xs italic">
          New experimental components have been added to the{" "}
          <span className="bg-main/20 px-1 border-b border-mainAccent">/labs</span> directory. Try
          our new shader-based backgrounds!
        </AlertDescription>
      </div>
    </div>
  </Alert>
);

// 6. Minimalist Dark Action
export const AlertFilled = () => (
  <Alert className="w-full bg-zinc-950 text-white border-2 border-black rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:bg-zinc-900 transition-colors shadow-[4px_4px_0_0_#88aaee]">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-main flex items-center justify-center text-black border-2 border-black shrink-0 group-hover:rotate-12 transition-transform">
        <Zap size={16} />
      </div>
      <div>
        <AlertTitle className="text-xs font-black uppercase tracking-tighter m-0">
          Real-time Sync
        </AlertTitle>
        <AlertDescription className="text-[10px] font-bold opacity-50 uppercase m-0 leading-none">
          All nodes operational
        </AlertDescription>
      </div>
    </div>
    <ArrowRight size={16} className="text-main group-hover:translate-x-1 transition-transform" />
  </Alert>
);

// 7. Artistic Informational
export const AlertLeftBar = () => (
  <Alert className="w-full border-l-[12px] border-black bg-zinc-100 rounded-2xl rounded-l-none p-6 shadow-sm overflow-hidden">
    <div className="flex items-center gap-4 mb-2">
      <h4 className="font-heading text-xl uppercase tracking-tighter">Documentation Updated</h4>
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-zinc-300"></div>
        ))}
      </div>
    </div>
    <AlertDescription className="text-zinc-500 font-medium">
      Join 4,200+ developers in our redesigned community hub for direct asset downloads and UI
      patterns.
    </AlertDescription>
  </Alert>
);

// 8. Security Priority Notice
export const AlertAction = () => (
  <div className="p-1 bg-gradient-to-br from-yellow-400 to-red-500 rounded-[2rem] shadow-xl overflow-hidden">
    <Alert className="w-full bg-white rounded-[1.8rem] border-0 p-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 bg-yellow-100 rounded-3xl border-2 border-black flex items-center justify-center shrink-0">
          <LifeBuoy className="text-yellow-600 animate-[spin_10s_linear_infinite]" size={40} />
        </div>
        <div className="space-y-4 flex-1">
          <div className="space-y-1">
            <AlertTitle className="text-2xl font-black uppercase italic tracking-tighter text-yellow-600">
              Upgrade Safety!
            </AlertTitle>
            <AlertDescription className="text-zinc-500 font-bold leading-relaxed text-sm">
              Your workspace is currently using Legacy Auth. Migration takes{" "}
              <span className="text-black italic underline">2 minutes</span> and removes 2FA
              vulnerabilities.
            </AlertDescription>
          </div>
          <Button className="bg-yellow-600 hover:bg-yellow-700 border-2 border-black text-white font-heading rounded-xl shadow-[4px_4px_0_0_#000] active:translate-y-1 transition-all">
            UPGRADE WORKSPACE
          </Button>
        </div>
      </div>
    </Alert>
  </div>
);

// 9. Status Pill (Floating style)
export const AlertMinimal = () => (
  <div className="flex p-1 pl-4 items-center gap-4 border-2 border-black rounded-full bg-white shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-all cursor-crosshair group">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-main group-hover:scale-150 transition-transform animate-pulse"></div>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
        Network State
      </span>
    </div>
    <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full">
      <span className="text-xs font-bold uppercase italic tracking-tighter">Latency: 12ms</span>
      <div className="w-px h-3 bg-white/20"></div>
      <ArrowRight size={14} className="text-main" />
    </div>
  </div>
);

// 10. Intensive Feedback
export const AlertSecurity = () => (
  <Alert className="w-full border-4 border-black bg-yellow-50/50 rounded-3xl p-8 relative">
    <div className="absolute top-0 right-0 p-3">
      <Badge className="bg-yellow-500 text-white border-2 border-black font-black">
        HIGH PRIORITY
      </Badge>
    </div>
    <div className="grid gap-6">
      <div className="flex items-start gap-4 border-b border-black/10 pb-4">
        <ShieldAlert size={32} className="text-yellow-600 shrink-0" />
        <div className="space-y-1">
          <AlertTitle className="text-xl font-heading text-yellow-950">
            Intrusion Attempt Blocked
          </AlertTitle>
          <AlertDescription className="text-yellow-900/60 font-medium">
            Device type "Android 14" failed challenge response in region{" "}
            <span className="font-bold underline">ID-JKT</span>.
          </AlertDescription>
        </div>
      </div>
      <div className="flex gap-3">
        <Button className="flex-1 border-2 border-black bg-white rounded-xl font-bold hover:bg-zinc-100 h-11">
          Review Logs
        </Button>
        <Button className="flex-1 border-2 border-black bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600 h-11 shadow-[4px_4px_0_0_#000]">
          Secure Account
        </Button>
      </div>
    </div>
  </Alert>
);
