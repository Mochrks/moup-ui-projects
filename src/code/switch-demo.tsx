import { Switch } from "@/components/ui-shadcn/switch";
import { Label } from "@/components/ui-shadcn/label";
import {
  Moon,
  Sun,
  Zap,
  Smartphone,
  Volume2,
  Wifi,
  ZapOff,
  Fingerprint,
  Activity,
  Power,
  PowerOff,
  ShieldAlert,
  Terminal,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";
import { cn } from "@/lib/utils";

// Enhancing Switch Demos with high-fidelity industrial styling and interactive neobrutalist designs

// 1. Industrial Bold Toggle
export const SwitchDefault = () => (
  <div className="flex items-center justify-between w-full p-5 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border-2 border-black flex items-center justify-center group-hover:rotate-6 transition-transform">
        <Smartphone size={24} className="text-zinc-400 group-hover:text-black transition-colors" />
      </div>
      <div className="space-y-0.5">
        <Label
          htmlFor="airplane-mode"
          className="font-heading uppercase text-lg italic tracking-tighter cursor-pointer"
        >
          Airplane Mode
        </Label>
        <span className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          Global Comms Cutoff
        </span>
      </div>
    </div>
    <Switch
      id="airplane-mode"
      className="border-2 border-black data-[state=checked]:bg-main h-8 w-14"
    />
  </div>
);

// 2. High-Alert Toggle
export const SwitchDestructive = () => (
  <div className="flex items-center justify-between w-full p-5 border-2 border-black rounded-3xl bg-red-50 shadow-[6px_6px_0_0_#ef4444] group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-red-500 flex items-center justify-center group-hover:animate-pulse">
        <ZapOff size={24} className="text-red-500" />
      </div>
      <div className="space-y-0.5">
        <Label
          htmlFor="destructive"
          className="font-black uppercase text-sm text-red-900 leading-none"
        >
          Sever Connection
        </Label>
        <span className="block text-[9px] font-bold text-red-400 uppercase italic">
          Immutable Protocol Terminate
        </span>
      </div>
    </div>
    <Switch
      id="destructive"
      className="border-2 border-black data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-white h-8 w-14 shadow-[2px_2px_0_0_#000]"
    />
  </div>
);

// 3. Success Confirmation
export const SwitchSuccess = () => (
  <div className="flex items-center justify-between w-full bg-zinc-950 p-4 pl-6 rounded-full border-2 border-black shadow-[6px_6px_0_0_#88aaee]">
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-white font-black text-xs uppercase tracking-[0.2em] leading-none mb-1">
          Grid_Uplink
        </span>
        <Badge className="bg-mainAccent text-white border-0 font-black italic text-[8px] h-4">
          STABLE_OS_01
        </Badge>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-[1px] h-8 bg-zinc-800"></div>
      <Switch
        id="success"
        className="border-2 border-white/20 data-[state=checked]:bg-mainAccent data-[state=unchecked]:bg-zinc-800 h-7 w-12"
      />
    </div>
  </div>
);

// 4. Oversized Industrial Switch (Master Kill)
export const SwitchLarge = () => (
  <div className="w-full border-4 border-black bg-white p-8 rounded-[3rem] shadow-[12px_12px_0_0_#000] relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
      <Power size={120} />
    </div>
    <div className="relative z-10 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-zinc-950 rounded-3xl border-2 border-black text-white">
          <PowerOff size={28} />
        </div>
        <div className="space-y-1">
          <h4 className="font-heading text-3xl uppercase italic tracking-tighter leading-none">
            Security Kill
          </h4>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none italic">
            Instant Power Sever Protocol
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 bg-zinc-50 border-2 border-dashed border-black rounded-3xl">
        <div className="scale-[2] origin-center">
          <Switch
            id="large"
            className="border-2 border-black data-[state=checked]:bg-black data-[state=unchecked]:bg-white"
          />
        </div>
      </div>
      <div className="text-center">
        <Badge
          variant="outline"
          className="border-2 border-black font-black uppercase text-[10px] animate-pulse"
        >
          Awaiting Manual Confirmation
        </Badge>
      </div>
    </div>
  </div>
);

// 5. Micro Controller
export const SwitchSmall = () => (
  <div className="flex items-center gap-4 bg-zinc-50 border-2 border-black p-2 pr-4 rounded-2xl shadow-[4px_4px_0_0_#000]">
    <div className="p-2 bg-black text-white rounded-xl">
      <Activity size={16} />
    </div>
    <div className="flex-1">
      <span className="block text-[8px] font-black text-zinc-400 uppercase tracking-tighter leading-none">
        Kernel
      </span>
      <span className="block text-[10px] font-black uppercase">Debug_Mode</span>
    </div>
    <div className="scale-75 origin-right">
      <Switch id="small" className="border-2 border-black data-[state=checked]:bg-mainAccent" />
    </div>
  </div>
);

// 6. Aesthetic Theme Control (Dual state)
export const SwitchTheme = () => (
  <div className="relative p-2 border-2 border-black rounded-[2.5rem] bg-zinc-100 flex items-center justify-between overflow-hidden shadow-[6px_6px_0_0_#fbbf24]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_70%)]"></div>
    <div className="flex items-center gap-3 relative z-10">
      <div className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]">
        <Sun className="h-5 w-5 text-amber-500" />
      </div>
      <span className="font-black text-xs uppercase italic text-black/40 tracking-tighter">
        Radiance
      </span>
    </div>

    <Switch
      id="theme"
      className="border-4 border-black data-[state=checked]:bg-zinc-950 data-[state=unchecked]:bg-amber-400 h-10 w-20 relative z-10"
    />

    <div className="flex items-center gap-3 relative z-10">
      <span className="font-black text-xs uppercase italic text-black/40 tracking-tighter text-right">
        Void
      </span>
      <div className="w-10 h-10 rounded-full bg-zinc-950 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#88aaee]">
        <Moon className="h-5 w-5 text-mainAccent" />
      </div>
    </div>
  </div>
);

// 7. Contextual Settings Duo (List)
export const SwitchLabeled = () => (
  <div className="space-y-4 w-full p-8 border-4 border-black rounded-[3rem] bg-white shadow-[10px_10px_0_0_#000]">
    <div className="mb-4 pb-4 border-b-2 border-zinc-100 flex justify-between items-center">
      <h5 className="font-heading text-xl uppercase italic">Hardware Prefs</h5>
      <Terminal size={18} className="text-zinc-300" />
    </div>
    {[
      { id: "s1", label: "Neural Audio", icon: Volume2, color: "text-blue-500", bg: "bg-blue-50" },
      { id: "s2", label: "Private Mesh", icon: Wifi, color: "text-green-500", bg: "bg-green-50" },
    ].map((s) => (
      <div
        key={s.id}
        className="flex items-center justify-between p-4 bg-zinc-50 border-2 border-transparent hover:border-black rounded-[1.5rem] transition-all group"
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-3 border-2 border-black rounded-2xl transition-transform group-hover:-rotate-6 shadow-[3px_3px_0_0_#000]",
              s.bg
            )}
          >
            <s.icon size={20} className={cn("transition-all", s.color)} />
          </div>
          <div className="space-y-0.5">
            <Label
              htmlFor={s.id}
              className="font-black text-sm uppercase italic tracking-tighter cursor-pointer"
            >
              {s.label}
            </Label>
            <span className="block text-[8px] font-bold text-zinc-400 uppercase">
              Uplink Ver: 2.1.4
            </span>
          </div>
        </div>
        <Switch id={s.id} className="border-2 border-black data-[state=checked]:bg-black" />
      </div>
    ))}
  </div>
);

// 8. Premium Utility Card
export const SwitchCard = () => (
  <div className="w-full border-4 border-black p-1 bg-black rounded-[3rem] shadow-2xl transition-all hover:scale-[1.02]">
    <div className="bg-white rounded-[2.8rem] p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="p-4 bg-mainAccent rounded-3xl border-2 border-black text-white shadow-[4px_4px_0_0_#000]">
          <Shield size={24} />
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-black text-[10px] uppercase opacity-20 mr-2">SECURE_TUNNEL</span>
          <Switch
            defaultChecked
            className="border-2 border-black data-[state=checked]:bg-mainAccent h-8 w-14"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading text-3xl uppercase italic leading-none tracking-tighter">
          Hardened Core
        </h5>
        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] italic leading-tight">
          MoupUI Military Standards Enabled :: RSA-4096 ACTIVE
        </p>
      </div>
      <div className="pt-4 border-t-2 border-zinc-100 flex justify-between items-center">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200" />
          ))}
        </div>
        <span className="text-[9px] font-black italic underline decoration-mainAccent decoration-2 underline-offset-4 cursor-pointer">
          AUDIT LOGS
        </span>
      </div>
    </div>
  </div>
);

// 9. Status Gauge Style (Binary)
export const SwitchStatus = () => {
  return (
    <div className="flex items-center justify-between w-full border-2 border-black rounded-2xl bg-zinc-950 p-6 shadow-[8px_8px_0_0_#000] relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <ShieldAlert size={40} className="text-main" />
      </div>
      <div className="space-y-1 relative z-10">
        <span className="block text-[10px] font-black text-main/50 uppercase tracking-[0.5em] italic">
          State_Gate
        </span>
        <span className="block text-2xl font-black text-white uppercase italic tracking-tighter">
          System_Lock
        </span>
      </div>
      <div className="flex items-center gap-6 relative z-10">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-zinc-600 uppercase">Status</span>
          <span className="text-sm font-black text-main italic">NOMINAL</span>
        </div>
        <Switch className="border-2 border-white/20 data-[state=checked]:bg-main h-9 w-16" />
      </div>
    </div>
  );
};

// 10. Dashboard Interaction Pills (Compact Duo)
export const SwitchIconic = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="p-6 border-2 border-black rounded-[2rem] bg-white flex flex-col items-center gap-6 hover:bg-zinc-50 transition-all shadow-[4px_4px_0_0_#88aaee] group">
      <div className="flex items-center gap-2 font-black uppercase text-xs italic tracking-tighter text-zinc-400 group-hover:text-black transition-colors">
        <Zap size={16} className="text-mainAccent" /> Neural Sync
      </div>
      <Switch
        id="sync"
        className="scale-125 border-2 border-black data-[state=checked]:bg-mainAccent"
      />
      <Badge variant="outline" className="border-2 border-black font-black uppercase text-[8px]">
        Protocol v4
      </Badge>
    </div>
    <div className="p-6 border-2 border-black rounded-[2rem] bg-zinc-950 flex flex-col items-center gap-6 hover:bg-black transition-all shadow-[4px_4px_0_0_#ef4444] group">
      <div className="flex items-center gap-2 font-black uppercase text-xs italic tracking-tighter text-zinc-700 group-hover:text-zinc-300 transition-colors">
        <Fingerprint size={16} className="text-red-500" /> Biometric
      </div>
      <Switch
        id="lock"
        className="scale-125 border-2 border-white/20 data-[state=checked]:bg-red-600"
      />
      <span className="text-[9px] font-black text-red-500 uppercase italic opacity-20">
        LOCKED_IN
      </span>
    </div>
  </div>
);
