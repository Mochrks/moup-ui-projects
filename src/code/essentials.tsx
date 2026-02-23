import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-neobrutalism/card";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Badge } from "@/components/ui-neobrutalism/badge";
import {
  Github,
  Twitter,
  Mail,
  Search,
  Bell,
  CheckCircle2,
  Info,
  ArrowRight,
  Book,
  MessageCircle,
  LifeBuoy,
  Zap,
  Terminal,
} from "lucide-react";

// ─── Footer Components ───
export const SimpleFooter = () => (
  <footer className="w-full bg-white border-t-8 border-black py-16 px-8 select-none">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 lg:gap-20">
      <div className="col-span-1 md:col-span-1 space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl border-2 border-white shadow-[2px_2px_0_0_#000]">
            <Zap className="text-[#ffe135]" size={24} fill="#ffe135" />
          </div>
          <h3 className="text-3xl font-black tracking-tighter italic uppercase leading-none">
            Moup_CORE.
          </h3>
        </div>
        <p className="text-sm font-bold text-black/60 leading-relaxed italic uppercase">
          Heavy-duty UI infrastructure for high-impact digital deployment. Built for zero-latency
          visual dominance.
        </p>
        <div className="flex gap-3 pt-2">
          {[Twitter, Github, Mail].map((Icon, i) => (
            <Button
              key={i}
              variant="neutral"
              className="h-12 w-12 border-2 border-black bg-white shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Icon size={20} />
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          <h4 className="font-black text-xs uppercase tracking-widest border-l-4 border-[#ffe135] pl-3">
            SYSTEM_NODES
          </h4>
          <ul className="space-y-3 text-sm font-black uppercase italic tracking-tighter">
            <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Components
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Templates
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Arch_Kit
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-black text-xs uppercase tracking-widest border-l-4 border-pink-400 pl-3">
            RESOURCES_LOG
          </h4>
          <ul className="space-y-3 text-sm font-black uppercase italic tracking-tighter">
            <li className="hover:text-pink-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Manifest
            </li>
            <li className="hover:text-pink-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Network
            </li>
            <li className="hover:text-pink-600 cursor-pointer transition-colors flex items-center gap-2">
              <ArrowRight size={14} /> Delta_Logs
            </li>
          </ul>
        </div>
      </div>

      <div className="col-span-1 space-y-6">
        <h4 className="font-black text-xs uppercase tracking-widest border-l-4 border-black pl-3">
          INTAKE_PROTOCOL
        </h4>
        <div className="space-y-4">
          <div className="relative">
            <Input
              placeholder="IDENT_EMAIL..."
              className="h-12 bg-zinc-50 border-2 border-black font-black uppercase italic text-xs shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
            />
          </div>
          <Button className="w-full bg-black text-white border-2 border-black font-black uppercase italic h-12 shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            JOIN_CORE
          </Button>
        </div>
        <p className="text-[10px] font-black uppercase text-black/40 italic">
          Periodic synchronization via neural link.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between gap-6">
      <div className="flex items-center gap-4">
        <span className="text-xs font-black uppercase italic tracking-widest">
          ©_2025_MOUP_INDUSTRIAL
        </span>
        <div className="hidden md:block w-8 h-1 bg-black" />
      </div>
      <div className="flex gap-8 text-[10px] font-black uppercase italic tracking-tighter">
        <span className="hover:underline cursor-pointer">Security_Manifest</span>
        <span className="hover:underline cursor-pointer">Service_Terms</span>
        <span className="hover:underline cursor-pointer">Global_Privacy</span>
      </div>
    </div>
  </footer>
);

export const CenteredFooter = () => (
  <footer className="w-full bg-[#ffe135] border-t-8 border-black py-20 px-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-2 bg-black/10" />
    <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 bg-black border-4 border-white shadow-[6px_6px_0_0_#000] rounded-3xl flex items-center justify-center rotate-3">
          <Zap className="text-white" size={40} fill="white" />
        </div>
        <h3 className="text-5xl font-black tracking-tighter italic uppercase leading-none mt-4 text-black underline decoration-8 decoration-white underline-offset-8">
          CORE_LINK.
        </h3>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-base font-black uppercase italic tracking-tighter text-black">
        <a
          href="#"
          className="hover:bg-black hover:text-[#ffe135] px-4 py-1 border-2 border-transparent hover:border-black transition-all rounded shadow-none hover:shadow-[4px_4px_0_0_#fff]"
        >
          INIT
        </a>
        <a
          href="#"
          className="hover:bg-black hover:text-[#ffe135] px-4 py-1 border-2 border-transparent hover:border-black transition-all rounded shadow-none hover:shadow-[4px_4px_0_0_#fff]"
        >
          UNITS
        </a>
        <a
          href="#"
          className="hover:bg-black hover:text-[#ffe135] px-4 py-1 border-2 border-transparent hover:border-black transition-all rounded shadow-none hover:shadow-[4px_4px_0_0_#fff]"
        >
          GRIDS
        </a>
        <a href="#" className="hover:text-white transition-colors">
          GITHUB_EXT
        </a>
      </nav>

      <div className="flex justify-center gap-4">
        {[Twitter, Github, Mail].map((Icon, i) => (
          <Button
            key={i}
            variant="neutral"
            className="h-14 w-14 border-4 border-black bg-white shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <Icon size={24} />
          </Button>
        ))}
      </div>

      <div className="pt-12 border-t-2 border-black/10">
        <p className="text-[10px] font-black uppercase italic tracking-[0.2em] text-black/50">
          DESIGNED_BY_ELITE_CORE_UNITS / DEPLOYED_FOR_ARCHITECTS_2025
        </p>
      </div>
    </div>
  </footer>
);

// ─── Help Center Components ───
export const HelpSearchHero = () => (
  <div className="w-full bg-white py-16 md:py-24 px-8 rounded-[40px] text-center space-y-10 relative overflow-hidden border-4 border-black shadow-[12px_12px_0_0_#000]">
    <div className="absolute top-0 right-0 p-8 flex gap-2">
      <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black" />
      <div className="w-4 h-4 rounded-full bg-[#ffe135] border-2 border-black" />
      <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
      <div className="inline-block px-4 py-1 bg-black text-white font-black uppercase italic text-xs rounded border-2 border-black mb-2 animate-bounce">
        SYSTEM_ONLINE
      </div>
      <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
        HOW_CAN_CORE?
      </h2>

      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-black" />
        <Input
          placeholder="QUERY_CORE_DATABASE..."
          className="h-20 pl-16 pr-8 text-xl font-black uppercase italic border-4 border-black rounded-3xl bg-zinc-50 text-black shadow-[8px_8px_0_0_#ffe135] focus-visible:ring-0"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-4">
        {["IDENT_NODE", "MANIFEST_VAL", "UNIT_DATA", "PORTAL_SEC"].map((tag) => (
          <Badge
            key={tag}
            className="px-6 py-2 bg-black text-white font-black uppercase italic text-[10px] tracking-widest border-2 border-black hover:bg-zinc-800 transition-colors shadow-[3px_3px_0_0_#ffe135] hover:shadow-none translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

export const SupportGrid = () => {
  const categories = [
    { title: "CORE_BOOT_SEQUENCE", icon: Book, items: 12, color: "bg-indigo-400" },
    { title: "LOGISTICS_NODES", icon: ArrowRight, items: 8, color: "bg-pink-400" },
    { title: "SYSTEM_RECOVERY", icon: LifeBuoy, items: 15, color: "bg-[#ffe135]" },
    { title: "GRID_COMMS", icon: MessageCircle, items: 23, color: "bg-green-400" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
      {categories.map((cat, i) => (
        <Card
          key={i}
          className="group cursor-pointer border-4 border-black shadow-[8px_8px_0_0_#000] rounded-3xl bg-white overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <CardHeader
            className={`${cat.color} border-b-4 border-black p-6 flex items-center justify-between`}
          >
            <div className="w-14 h-14 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] group-hover:scale-110 transition-transform">
              <cat.icon size={28} className="text-black" />
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black uppercase italic opacity-60 leading-none">
                ENTRIES
              </p>
              <p className="text-3xl font-black italic leading-none text-black mt-1">{cat.items}</p>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 leading-tight border-l-4 border-black pl-4">
              {cat.title}
            </h4>
            <div className="flex items-center gap-2 group-hover:gap-4 transition-all text-sm font-black uppercase italic text-black/40">
              ACCESS_LOGS <ArrowRight size={14} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ─── Notification Components ───
export const NotificationCenterMock = () => (
  <Card className="w-full max-w-md border-4 border-black bg-white shadow-[12px_12px_0_0_#000] overflow-hidden rounded-3xl">
    <CardHeader className="flex flex-row items-center justify-between border-b-4 border-black bg-[#ffe135] py-5 px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl border-2 border-white shadow-[2px_2px_0_0_#000]">
          <Bell size={20} className="text-white animate-ring" />
        </div>
        <div>
          <CardTitle className="text-xl font-black italic uppercase tracking-tighter leading-none">
            PULSE_FEED
          </CardTitle>
          <p className="text-[10px] font-black uppercase italic text-black/50">
            Real-time status updates
          </p>
        </div>
      </div>
      <Badge className="bg-red-500 text-white border-2 border-black font-black italic text-xs h-7 px-3 shadow-[2px_2px_0_0_#000]">
        3_ACTIVE
      </Badge>
    </CardHeader>
    <CardContent className="p-0 max-h-[400px] overflow-y-auto">
      {[
        {
          title: "CORE_DEPLOYMENT_SYCH",
          text: "DEPLOY_MYPORTFOLIO_NODE_SECURE. TRANSMISSION_SUCCESSFUL.",
          time: "2m ago",
          status: "success",
          icon: CheckCircle2,
          color: "bg-green-400",
        },
        {
          title: "MANIFEST_NODE_UPDATE",
          text: "PRO_SUBSCRIPTION_RENEWAL_COMPLETED. ACCESS_PERIOD_EXTENDED.",
          time: "1h ago",
          status: "info",
          icon: Info,
          color: "bg-indigo-400",
        },
        {
          title: "CRIT_SECURITY_RELAY",
          text: "UNAUTHORIZED_INTAKE_ATTEMPT_HALTED. CORE_RECOVERY_PROTOCOL_READY.",
          time: "3h ago",
          status: "warning",
          icon: Terminal,
          color: "bg-pink-400",
        },
      ].map((n, i) => (
        <div
          key={i}
          className="p-6 border-b-2 border-black last:border-0 flex gap-5 hover:bg-zinc-50 transition-colors cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="shrink-0">
            <div
              className={`w-12 h-12 rounded-xl border-4 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] rotate-2 group-hover:rotate-0 transition-transform ${n.color}`}
            >
              <n.icon size={22} className="text-black" />
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-black italic uppercase tracking-tighter text-black group-hover:text-indigo-600 transition-colors">
                {n.title}
              </h4>
              <span className="text-[9px] font-black uppercase text-black/40 italic">{n.time}</span>
            </div>
            <p className="text-[11px] font-bold text-gray-700 leading-snug line-clamp-2 uppercase italic">
              {n.text}
            </p>
          </div>
        </div>
      ))}
    </CardContent>
    <div className="p-4 bg-zinc-50 border-t-2 border-black">
      <Button
        variant="neutral"
        className="w-full h-12 bg-white text-black border-2 border-black font-black uppercase italic text-xs shadow-[4px_4px_0_0_#000] hover:shadow-none transition-all flex items-center gap-3"
      >
        ACCESS_ALL_TRANSMISSIONS <ArrowRight size={16} />
      </Button>
    </div>
  </Card>
);
