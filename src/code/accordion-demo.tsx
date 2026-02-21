import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-shadcn/accordion";
import { Shield, MapPin, Zap, ArrowRight, Cpu, Cloud, Layout, Layers, Palette } from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing animations and visual structure for premium feel

// 1. Sleek Modern Accordion
export const AccordionSimple = () => (
  <Accordion type="single" collapsible className="w-full space-y-2">
    <AccordionItem
      value="item-1"
      className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0_0_#000]"
    >
      <AccordionTrigger className="px-5 hover:no-underline hover:bg-zinc-50 font-heading uppercase text-sm tracking-tight">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-main/10 flex items-center justify-center border-2 border-black">
            <Cpu size={16} className="text-mainAccent" />
          </div>
          Engine Architecture
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-5 pt-2 text-sm text-muted-foreground font-medium leading-relaxed border-t-2 border-dashed border-black/5">
        Our core engine is built on a distributed microservices model, ensuring 99.9% uptime and
        horizontal scaling capabilities for intense workloads.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="item-2"
      className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0_0_#000]"
    >
      <AccordionTrigger className="px-5 hover:no-underline hover:bg-zinc-50 font-heading uppercase text-sm tracking-tight">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center border-2 border-black">
            <Cloud size={16} className="text-pink-600" />
          </div>
          Cloud Infrastructure
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-5 pt-2 text-sm text-muted-foreground font-medium border-t-2 border-dashed border-black/5">
        Native integration with AWS and Azure allows for seamless deployments and automated backups
        across multiple global regions.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 2. Multi-Select with Indicators
export const AccordionMultiple = () => (
  <Accordion type="multiple" className="w-full space-y-3">
    {[
      {
        id: "1",
        title: "Global Network",
        icon: MapPin,
        color: "text-blue-500",
        desc: "Access 52 edge locations worldwide with sub-20ms latency.",
      },
      {
        id: "2",
        title: "Security Layers",
        icon: Shield,
        color: "text-green-500",
        desc: "Military-grade encryption for all data at rest and in transit.",
      },
    ].map((item) => (
      <AccordionItem
        key={item.id}
        value={item.id}
        className="border-2 border-black rounded-3xl bg-white overflow-hidden transition-all data-[state=open]:shadow-[8px_8px_0_0_#000]"
      >
        <AccordionTrigger className="px-6 py-5 hover:no-underline">
          <div className="flex items-center gap-4">
            <item.icon className={item.color} size={20} />
            <span className="font-bold text-lg">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-16 pb-8 text-muted-foreground relative">
          <div className="absolute left-8 top-0 bottom-8 w-1 bg-zinc-100 rounded-full"></div>
          {item.desc}
          <div className="mt-4 flex gap-2">
            <Badge variant="outline" className="border-black font-bold">
              L1
            </Badge>
            <Badge variant="outline" className="border-black font-bold">
              L2
            </Badge>
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

// 3. Status Nested Accordion
export const AccordionColored = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1" className="border-b-2 border-black border-dashed">
      <AccordionTrigger className="group hover:no-underline">
        <div className="flex items-center justify-between w-full pr-4">
          <span className="font-bold text-mainAccent group-hover:translate-x-1 transition-transform flex items-center gap-2">
            <Zap size={16} /> Performance Metrics
          </span>
          <Badge className="bg-green-500 text-white border-0 font-black italic">98% PASS</Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-main/5 p-4 rounded-xl mb-4 border-2 border-black/5">
        Current throughput is exceeding expectations by 15% following the latest cache optimization
        patch.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-none">
      <AccordionTrigger className="group hover:no-underline">
        <div className="flex items-center justify-between w-full pr-4">
          <span className="font-bold text-zinc-600 group-hover:translate-x-1 transition-transform flex items-center gap-2">
            <Layout size={16} /> Interface Audit
          </span>
          <Badge className="bg-zinc-200 text-zinc-600 border-0 font-black italic">PENDING</Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-zinc-50 p-4 rounded-xl border-2 border-black/5">
        Waiting for the design team to finalize the accessibility report for the mobile navigation
        system.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 4. Tech Stack Showcase
export const AccordionIconic = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="frontend" className="group">
      <AccordionTrigger className="hover:no-underline text-2xl font-black italic tracking-tighter uppercase gap-4">
        <Palette className="w-8 h-8 text-pink-500 group-data-[state=open]:rotate-12 transition-transform" />{" "}
        Frontend
      </AccordionTrigger>
      <AccordionContent className="grid grid-cols-2 gap-3 pt-2">
        {["React 19", "Tailwind v4", "Framer Motion", "Lucide"].map((tech) => (
          <div
            key={tech}
            className="p-3 border-2 border-black rounded-xl bg-white flex items-center gap-2 shadow-[2px_2px_0_0_#000]"
          >
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <span className="text-xs font-bold">{tech}</span>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="backend" className="group">
      <AccordionTrigger className="hover:no-underline text-2xl font-black italic tracking-tighter uppercase gap-4">
        <Layers className="w-8 h-8 text-blue-500 group-data-[state=open]:-rotate-12 transition-transform" />{" "}
        Systems
      </AccordionTrigger>
      <AccordionContent className="grid grid-cols-2 gap-3 pt-2">
        {["Node.js", "PostgreSQL", "Redis", "Docker"].map((tech) => (
          <div
            key={tech}
            className="p-3 border-2 border-black rounded-xl bg-white flex items-center gap-2 shadow-[2px_2px_0_0_#000]"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs font-bold">{tech}</span>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 5. Minimalist Header Flow
export const AccordionCard = () => (
  <div className="space-y-4 w-full">
    <div className="bg-zinc-950 p-6 rounded-[2.5rem] border-2 border-black shadow-[8px_8px_0_0_#000]">
      <Accordion type="single" collapsible className="w-full text-zinc-400">
        <AccordionItem value="item-1" className="border-b-zinc-800 border-b">
          <AccordionTrigger className="hover:no-underline py-4 text-zinc-200">
            <div className="flex gap-4 items-center">
              <div className="w-1.5 h-6 bg-main rounded-full"></div>
              <span className="font-heading uppercase tracking-widest text-xs">
                Security Protocol 01
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-5 border-l border-main/20 ml-0.5">
            End-to-end encryption active for all websocket connections. Heartbeat monitor is stable
            at 50ms average.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="hover:no-underline py-4 text-zinc-200">
            <div className="flex gap-4 items-center">
              <div className="w-1.5 h-6 bg-pink-500 rounded-full"></div>
              <span className="font-heading uppercase tracking-widest text-xs">System Pulse</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-5 border-l border-pink-500/20 ml-0.5">
            Core CPU load is sitting at 12%. No memory leaks detected in the last 72 hours of
            continuous operation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

// 6. Transparent Layering
export const AccordionSubtle = () => (
  <div className="bg-main border-2 border-black rounded-3xl p-2">
    <Accordion type="single" collapsible className="w-full space-y-1">
      <AccordionItem value="1" className="border-none">
        <AccordionTrigger className="px-6 bg-white/10 text-white hover:bg-white/20 rounded-2xl transition-all border-0 hover:no-underline font-bold">
          User Management
        </AccordionTrigger>
        <AccordionContent className="px-8 pt-4 pb-6 text-white/80 font-medium">
          Provision new developer accounts and manage role-based access control with ease.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2" className="border-none">
        <AccordionTrigger className="px-6 bg-white/10 text-white hover:bg-white/20 rounded-2xl transition-all border-0 hover:no-underline font-bold">
          Database Scaling
        </AccordionTrigger>
        <AccordionContent className="px-8 pt-4 pb-6 text-white/80 font-medium">
          Automatically partition large datasets across multiple shards during peak traffic
          intervals.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// 7. Compact (Flush)
export const AccordionCompact = () => (
  <Accordion
    type="single"
    collapsible
    className="w-full bg-zinc-50 border-2 border-black rounded-2xl overflow-hidden"
  >
    <AccordionItem value="item-1" className="border-b-2 border-black">
      <AccordionTrigger className="px-4 py-3 text-xs font-black uppercase tracking-widest hover:no-underline hover:bg-zinc-100">
        Notifications
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 pt-2 text-xs font-bold text-muted-foreground italic">
        Desktop, Mobile, and Email alerts enabled.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-none">
      <AccordionTrigger className="px-4 py-3 text-xs font-black uppercase tracking-widest hover:no-underline hover:bg-zinc-100">
        API Tokens
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 pt-2 text-xs font-bold text-muted-foreground italic">
        3 active tokens. Last used 4 minutes ago.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 8. With Avatar/Profile Indicators
export const AccordionBadged = () => (
  <Accordion type="single" collapsible className="w-full space-y-3">
    <AccordionItem value="1" className="border-2 border-black rounded-2xl bg-white p-2">
      <AccordionTrigger className="hover:no-underline p-3 group">
        <div className="flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-100 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="font-bold text-sm">Alex Rivers</span>
            <span className="text-[10px] text-muted-foreground font-bold">PRO ACCOUNT</span>
          </div>
          <Badge className="ml-auto border-black bg-main text-white italic font-black">
            ACTIVE
          </Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-4 border-t-2 border-black border-dotted mt-2 text-sm font-medium">
        Alex has been a member since 2024 and specializes in reactive system architectures.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 9. Informational (Error/Warning)
export const AccordionStatus = () => (
  <Accordion type="single" collapsible className="w-full gap-3 flex flex-col">
    <AccordionItem
      value="item-1"
      className="bg-red-50 border-2 border-red-500 rounded-2xl overflow-hidden"
    >
      <AccordionTrigger className="px-6 hover:no-underline text-red-900 font-heading">
        Critical Failure
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 text-red-700/80 font-bold italic">
        Authentication server in US-EAST-1 is currently unreachable. Failover initiated to
        EU-CENTRAL-1.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="item-2"
      className="bg-yellow-50 border-2 border-yellow-500 rounded-2xl overflow-hidden"
    >
      <AccordionTrigger className="px-6 hover:no-underline text-yellow-900 font-heading">
        Security Advisory
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 text-yellow-700/80 font-bold italic">
        New login detected from an unrecognized IP in Singapore. Verify your session immediately.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 10. Ultimate Branding Accordion
export const AccordionGlass = () => (
  <div className="relative p-8 border-2 border-black rounded-[3rem] bg-zinc-50 overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-main/5 to-transparent"></div>
    <Accordion type="single" collapsible className="relative z-10 w-full space-y-4">
      <AccordionItem value="1" className="border-none">
        <AccordionTrigger className="hover:no-underline text-3xl font-black italic uppercase tracking-tighter flex items-end gap-2 group/trig">
          <span className="text-zinc-300 group-data-[state=open]:text-main transition-colors">
            01.
          </span>
          EXPLORE
          <div className="h-1 flex-1 bg-zinc-200 mb-2 group-data-[state=open]:bg-main transition-colors"></div>
          <ArrowRight className="-rotate-45 group-data-[state=open]:rotate-0 transition-transform" />
        </AccordionTrigger>
        <AccordionContent className="text-sm font-bold text-muted-foreground max-w-xs pl-12">
          Dive deep into our interactive documentation and learn the ropes of premium component
          design.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2" className="border-none">
        <AccordionTrigger className="hover:no-underline text-3xl font-black italic uppercase tracking-tighter flex items-end gap-2 group/trig">
          <span className="text-zinc-300 group-data-[state=open]:text-main transition-colors">
            02.
          </span>
          BUILD
          <div className="h-1 flex-1 bg-zinc-200 mb-2 group-data-[state=open]:bg-main transition-colors"></div>
          <ArrowRight className="-rotate-45 group-data-[state=open]:rotate-0 transition-transform" />
        </AccordionTrigger>
        <AccordionContent className="text-sm font-bold text-muted-foreground max-w-xs pl-12">
          Utilize our CLI tools to boilerplate production-ready interfaces in minutes, not hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
