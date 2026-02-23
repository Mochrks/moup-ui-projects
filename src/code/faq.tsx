import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-neobrutalism/accordion";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Search, MessageCircle, Mail, HelpCircle, Plus } from "lucide-react";
import { Badge } from "@/components/ui-neobrutalism/badge";

export const SimpleFAQ = () => (
  <Accordion type="single" collapsible className="w-full space-y-4">
    <AccordionItem
      value="item-1"
      className="border-4 border-black shadow-[4px_4px_0_0_#000] rounded-xl bg-white overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-50 transition-colors">
        <span className="text-left font-black uppercase italic tracking-tight">
          What is MoupUI Industrial?
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-2 text-sm font-bold border-t-2 border-black/10 bg-zinc-50 leading-relaxed italic">
        MoupUI is a high-performance, industrial-grade library of components built for speed and
        heavy impact. Engineered with Neobrutalist DNA, React, and Tailwind CSS.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="item-2"
      className="border-4 border-black shadow-[4px_4px_0_0_#000] rounded-xl bg-white overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-50 transition-colors">
        <span className="text-left font-black uppercase italic tracking-tight">
          Access Protocol / Cost?
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-2 text-sm font-bold border-t-2 border-black/10 bg-zinc-50 leading-relaxed italic">
        The core protocol is open-source and free forever. No credits, no premium locks on base
        units.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="item-3"
      className="border-4 border-black shadow-[4px_4px_0_0_#000] rounded-xl bg-white overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-50 transition-colors">
        <span className="text-left font-black uppercase italic tracking-tight">
          Deployment Strategy?
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-2 text-sm font-bold border-t-2 border-black/10 bg-zinc-50 leading-relaxed italic">
        Check our initialization logs for a complete walkthrough on integrating MoupUI into your
        local terminal.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const FAQWithSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-10 p-8 border-4 border-black bg-white rounded-3xl shadow-[12px_12px_0_0_#000]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Badge className="bg-[#ffe135] text-black border-2 border-black font-black uppercase italic mb-2">
            SYSTEM_SUPPORT
          </Badge>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
            HELP_DESK / FAQ
          </h2>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
          <Input
            placeholder="OPER_SEARCH_QUERY..."
            className="pl-12 h-14 border-4 border-black bg-zinc-50 font-black uppercase tracking-widest text-xs shadow-[4px_4px_0_0_#000] focus-visible:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <SimpleFAQ />
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-[#ffe135] border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000]">
            <HelpCircle size={32} className="mb-4" />
            <h3 className="font-black uppercase italic text-xl mb-2">Need Direct Comms?</h3>
            <p className="text-sm font-bold italic mb-6">
              Our support nodes are active 24/7 for technical assistance.
            </p>
            <div className="space-y-3">
              <Button className="w-full bg-black text-white border-2 border-black font-black italic uppercase text-xs h-12 shadow-[2px_2px_0_0_#fff] hover:shadow-none transition-all">
                <Mail size={14} className="mr-2" /> TRANSMIT EMAIL
              </Button>
              <Button
                variant="neutral"
                className="w-full bg-white text-black border-4 border-black font-black italic uppercase text-xs h-12 shadow-[4px_4px_0_0_#000] hover:shadow-none transition-all"
              >
                <MessageCircle size={14} className="mr-2" /> LIVE_CHAT_CORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategoryFAQ = () => (
  <div className="grid md:grid-cols-2 gap-10">
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b-4 border-black">
        <div className="w-10 h-10 bg-indigo-400 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]">
          <Plus size={20} className="text-white" />
        </div>
        <h3 className="font-black text-2xl uppercase italic tracking-tighter">Core Protocols</h3>
      </div>
      <SimpleFAQ />
    </div>
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b-4 border-black">
        <div className="w-10 h-10 bg-pink-400 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]">
          <Plus size={20} className="text-white" />
        </div>
        <h3 className="font-black text-2xl uppercase italic tracking-tighter">
          Finance & Logistics
        </h3>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem
          value="item-1"
          className="border-4 border-black shadow-[4px_4px_0_0_#000] rounded-xl bg-white overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-50 transition-colors">
            <span className="text-left font-black uppercase italic tracking-tight">
              Refund Logic?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2 text-sm font-bold border-t-2 border-black/10 bg-zinc-50 leading-relaxed italic text-black/60">
            We operate a 30-cycle refund protocol for all premium terminal units.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-4 border-black shadow-[4px_4px_0_0_#000] rounded-xl bg-white overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-50 transition-colors">
            <span className="text-left font-black uppercase italic tracking-tight">
              Payment Gateways?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2 text-sm font-bold border-t-2 border-black/10 bg-zinc-50 leading-relaxed italic text-black/60">
            We accept Credits, Neural-Pay, and Global-Debit nodes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);
