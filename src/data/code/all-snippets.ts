// ─────────────────────────────────────────────────────────────────
// ALL COMPONENT CODE SNIPPETS  (React · Next.js · Vanilla HTML)
// ─────────────────────────────────────────────────────────────────

export interface ComponentCode {
  react: string;
  next: string;
  html: string;
}

// ── helper: wrap any react snippet for Next.js ──
const toNext = (react: string) => `"use client";\n\n${react}`;

// ═══════════════════════════════════════════════
//  SWITCH
// ═══════════════════════════════════════════════
export const switchDefaultSnippet: ComponentCode = {
  react: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Smartphone } from "lucide-react";

export const SwitchDefault = () => (
  <div className="flex items-center justify-between w-full p-5 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000]">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border-2 border-black flex items-center justify-center">
        <Smartphone size={24} className="text-zinc-400" />
      </div>
      <div>
        <Label htmlFor="airplane-mode" className="font-black uppercase tracking-tighter cursor-pointer">Airplane Mode</Label>
        <span className="block text-[10px] font-black text-zinc-400 uppercase">Global Comms Cutoff</span>
      </div>
    </div>
    <Switch id="airplane-mode" className="border-2 border-black data-[state=checked]:bg-yellow-400 h-8 w-14" />
  </div>
);`,
  next: ``,
  html: `<div class="flex items-center justify-between p-5 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000]">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-2xl bg-zinc-50 border-2 border-black flex items-center justify-center">
      <!-- icon -->
    </div>
    <div>
      <label class="font-black uppercase tracking-tighter cursor-pointer">Airplane Mode</label>
      <span class="block text-[10px] font-black text-zinc-400 uppercase">Global Comms Cutoff</span>
    </div>
  </div>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer">
    <div class="w-14 h-8 bg-zinc-200 border-2 border-black rounded-full peer peer-checked:bg-yellow-400 transition-all relative">
      <div class="absolute top-1 left-1 w-5 h-5 bg-white border-2 border-black rounded-full transition-transform peer-checked:translate-x-6"></div>
    </div>
  </label>
</div>`,
};
switchDefaultSnippet.next = toNext(switchDefaultSnippet.react);

export const switchDestructiveSnippet: ComponentCode = {
  react: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ZapOff } from "lucide-react";

export const SwitchDestructive = () => (
  <div className="flex items-center justify-between w-full p-5 border-2 border-black rounded-3xl bg-red-50 shadow-[6px_6px_0_0_#ef4444]">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-red-500 flex items-center justify-center">
        <ZapOff size={24} className="text-red-500" />
      </div>
      <div>
        <Label className="font-black uppercase text-sm text-red-900">Sever Connection</Label>
        <span className="block text-[9px] font-bold text-red-400 uppercase italic">Immutable Protocol Terminate</span>
      </div>
    </div>
    <Switch className="border-2 border-black data-[state=checked]:bg-red-600 h-8 w-14 shadow-[2px_2px_0_0_#000]" />
  </div>
);`,
  next: ``,
  html: `<div class="flex items-center justify-between p-5 border-2 border-black rounded-3xl bg-red-50 shadow-[6px_6px_0_0_#ef4444]">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-2xl bg-white border-2 border-red-500 flex items-center justify-center">
      <!-- ZapOff icon -->
    </div>
    <div>
      <label class="font-black uppercase text-sm text-red-900">Sever Connection</label>
    </div>
  </div>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer">
    <div class="w-14 h-8 bg-white border-2 border-black rounded-full peer peer-checked:bg-red-600 transition-all relative">
      <div class="absolute top-1 left-1 w-5 h-5 bg-white border-2 border-black rounded-full transition-transform peer-checked:translate-x-6"></div>
    </div>
  </label>
</div>`,
};
switchDestructiveSnippet.next = toNext(switchDestructiveSnippet.react);

export const switchCardSnippet: ComponentCode = {
  react: `import { Switch } from "@/components/ui/switch";
import { Shield } from "lucide-react";

export const SwitchCard = () => (
  <div className="w-full border-4 border-black p-1 bg-black rounded-[3rem] shadow-2xl">
    <div className="bg-white rounded-[2.8rem] p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="p-4 bg-purple-600 rounded-3xl border-2 border-black text-white shadow-[4px_4px_0_0_#000]">
          <Shield size={24} />
        </div>
        <Switch defaultChecked className="border-2 border-black data-[state=checked]:bg-purple-600 h-8 w-14" />
      </div>
      <div className="space-y-2">
        <h5 className="font-black text-3xl uppercase italic tracking-tighter">Hardened Core</h5>
        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">RSA-4096 ACTIVE</p>
      </div>
    </div>
  </div>
);`,
  next: ``,
  html: `<div class="border-4 border-black bg-black rounded-[3rem] p-1">
  <div class="bg-white rounded-[2.8rem] p-8">
    <div class="flex items-center justify-between mb-8">
      <div class="p-4 bg-purple-600 border-2 border-black rounded-3xl shadow-[4px_4px_0_0_#000]">
        <!-- Shield icon -->
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked class="sr-only peer">
        <div class="w-14 h-8 bg-zinc-200 border-2 border-black rounded-full peer peer-checked:bg-purple-600 relative">
          <div class="absolute top-1 left-1 w-5 h-5 bg-white border-2 border-black rounded-full transition-all peer-checked:translate-x-6"></div>
        </div>
      </label>
    </div>
    <h5 class="text-3xl font-black uppercase italic">Hardened Core</h5>
  </div>
</div>`,
};
switchCardSnippet.next = toNext(switchCardSnippet.react);

// ═══════════════════════════════════════════════
//  ACCORDION
// ═══════════════════════════════════════════════
export const accordionSimpleSnippet: ComponentCode = {
  react: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const AccordionSimple = () => (
  <Accordion type="single" collapsible className="w-full border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0_0_#000]">
    <AccordionItem value="item-1" className="border-b-2 border-black">
      <AccordionTrigger className="px-4 font-black uppercase tracking-tight hover:no-underline hover:bg-yellow-400 transition-colors">
        Is it accessible?
      </AccordionTrigger>
      <AccordionContent className="px-4 border-t-2 border-black font-medium">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);`,
  next: ``,
  html: `<div class="w-full border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0_0_#000]">
  <details class="border-b-2 border-black">
    <summary class="px-4 py-3 font-black uppercase tracking-tight cursor-pointer hover:bg-yellow-400 transition-colors">
      Is it accessible?
    </summary>
    <div class="px-4 py-3 border-t-2 border-black font-medium">
      Yes. It adheres to the WAI-ARIA design pattern.
    </div>
  </details>
</div>`,
};
accordionSimpleSnippet.next = toNext(accordionSimpleSnippet.react);

// ═══════════════════════════════════════════════
//  ALERT
// ═══════════════════════════════════════════════
export const alertDefaultSnippet: ComponentCode = {
  react: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const AlertDefault = () => (
  <Alert className="border-2 border-black shadow-[4px_4px_0_0_#000] bg-white">
    <Info className="h-4 w-4" />
    <AlertTitle className="font-black uppercase tracking-tighter">Heads up!</AlertTitle>
    <AlertDescription className="font-medium">
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
);`,
  next: ``,
  html: `<div role="alert" class="flex gap-3 p-4 border-2 border-black shadow-[4px_4px_0_0_#000] bg-white rounded-xl">
  <!-- info icon -->
  <div>
    <h5 class="font-black uppercase tracking-tighter mb-1">Heads up!</h5>
    <p class="font-medium text-sm">You can add components using the cli.</p>
  </div>
</div>`,
};
alertDefaultSnippet.next = toNext(alertDefaultSnippet.react);

export const alertDestructiveSnippet: ComponentCode = {
  react: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const AlertDestructive = () => (
  <Alert className="border-2 border-red-600 bg-red-50 shadow-[4px_4px_0_0_#dc2626]">
    <AlertCircle className="h-4 w-4 text-red-600" />
    <AlertTitle className="font-black uppercase text-red-900">Error</AlertTitle>
    <AlertDescription className="text-red-700 font-medium">
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
);`,
  next: ``,
  html: `<div role="alert" class="flex gap-3 p-4 border-2 border-red-600 bg-red-50 shadow-[4px_4px_0_0_#dc2626] rounded-xl">
  <div>
    <h5 class="font-black uppercase text-red-900 mb-1">Error</h5>
    <p class="font-medium text-sm text-red-700">Your session has expired. Please log in again.</p>
  </div>
</div>`,
};
alertDestructiveSnippet.next = toNext(alertDestructiveSnippet.react);

// ═══════════════════════════════════════════════
//  AVATAR
// ═══════════════════════════════════════════════
export const avatarDefaultSnippet: ComponentCode = {
  react: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarDefault = () => (
  <Avatar className="border-2 border-black shadow-[3px_3px_0_0_#000] w-14 h-14">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="font-black bg-yellow-400">SC</AvatarFallback>
  </Avatar>
);`,
  next: ``,
  html: `<div class="relative w-14 h-14 border-2 border-black shadow-[3px_3px_0_0_#000] rounded-full overflow-hidden">
  <img src="https://github.com/shadcn.png" alt="avatar" class="w-full h-full object-cover" />
</div>`,
};
avatarDefaultSnippet.next = toNext(avatarDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  BADGE
// ═══════════════════════════════════════════════
export const badgeDefaultSnippet: ComponentCode = {
  react: `import { Badge } from "@/components/ui/badge";

export const BadgeDefault = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="border-2 border-black bg-yellow-400 text-black font-black uppercase shadow-[2px_2px_0_0_#000]">Default</Badge>
    <Badge variant="outline" className="border-2 border-black font-black uppercase shadow-[2px_2px_0_0_#000]">Outline</Badge>
    <Badge className="border-2 border-black bg-black text-white font-black uppercase shadow-[2px_2px_0_0_#ffe135]">Dark</Badge>
  </div>
);`,
  next: ``,
  html: `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center px-3 py-1 border-2 border-black bg-yellow-400 text-black font-black uppercase text-xs shadow-[2px_2px_0_0_#000]">Default</span>
  <span class="inline-flex items-center px-3 py-1 border-2 border-black font-black uppercase text-xs shadow-[2px_2px_0_0_#000]">Outline</span>
  <span class="inline-flex items-center px-3 py-1 border-2 border-black bg-black text-white font-black uppercase text-xs">Dark</span>
</div>`,
};
badgeDefaultSnippet.next = toNext(badgeDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  CALENDAR
// ═══════════════════════════════════════════════
export const calendarDefaultSnippet: ComponentCode = {
  react: `"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export const CalendarDefault = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border-2 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-2xl"
    />
  );
};`,
  next: ``,
  html: `<!-- Use a date-picker library or browser native input -->
<input type="date" class="border-2 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-2xl px-4 py-3 font-black" />`,
};
calendarDefaultSnippet.next = `"use client";\n\n${calendarDefaultSnippet.react.replace('"use client";\n', "")}`;

// ═══════════════════════════════════════════════
//  DIALOG
// ═══════════════════════════════════════════════
export const dialogDefaultSnippet: ComponentCode = {
  react: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const DialogDefault = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent className="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white sm:rounded-3xl">
      <DialogHeader>
        <DialogTitle className="font-black uppercase text-2xl tracking-tighter">Dialog Title</DialogTitle>
      </DialogHeader>
      <p className="font-medium text-zinc-600">Your dialog content goes here.</p>
    </DialogContent>
  </Dialog>
);`,
  next: ``,
  html: `<!-- HTML modal with open/close via checkbox hack -->
<input type="checkbox" id="dialog-toggle" class="sr-only peer">
<div class="fixed inset-0 bg-black/50 hidden peer-checked:flex items-center justify-center z-50">
  <div class="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white p-8 max-w-lg w-full mx-4 rounded-3xl">
    <h2 class="font-black uppercase text-2xl tracking-tighter mb-4">Dialog Title</h2>
    <p class="font-medium text-zinc-600">Your dialog content here.</p>
    <label for="dialog-toggle" class="mt-6 block w-full text-center py-3 border-2 border-black font-black uppercase cursor-pointer hover:bg-yellow-400">Close</label>
  </div>
</div>
<label for="dialog-toggle" class="px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase cursor-pointer inline-block">Open Dialog</label>`,
};
dialogDefaultSnippet.next = toNext(dialogDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  DRAWER / SHEET
// ═══════════════════════════════════════════════
export const drawerDefaultSnippet: ComponentCode = {
  react: `import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export const DrawerDefault = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button className="border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent className="border-t-4 border-black bg-white shadow-[0_-8px_0_0_#000]">
      <div className="mx-auto w-full max-w-sm p-8">
        <DrawerHeader>
          <DrawerTitle className="font-black uppercase text-2xl tracking-tighter">Drawer Title</DrawerTitle>
        </DrawerHeader>
        <p className="font-medium text-zinc-600">Drawer content goes here.</p>
      </div>
    </DrawerContent>
  </Drawer>
);`,
  next: ``,
  html: `<!-- Sliding panel using CSS transition -->
<input type="checkbox" id="drawer-toggle" class="sr-only peer">
<div class="fixed inset-x-0 bottom-0 translate-y-full peer-checked:translate-y-0 transition-transform z-50 border-t-4 border-black bg-white shadow-[0_-8px_0_0_#000] p-8">
  <h2 class="font-black uppercase text-2xl tracking-tighter mb-4">Drawer Title</h2>
  <p class="font-medium text-zinc-600">Drawer content here.</p>
  <label for="drawer-toggle" class="mt-6 block w-full text-center py-3 border-2 border-black font-black uppercase cursor-pointer">Close</label>
</div>
<label for="drawer-toggle" class="px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase cursor-pointer inline-block">Open Drawer</label>`,
};
drawerDefaultSnippet.next = toNext(drawerDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  PAGINATION
// ═══════════════════════════════════════════════
export const paginationDefaultSnippet: ComponentCode = {
  react: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export const PaginationDefault = () => (
  <Pagination>
    <PaginationContent className="gap-1">
      <PaginationItem>
        <PaginationPrevious href="#" className="border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors" />
      </PaginationItem>
      {[1, 2, 3].map(p => (
        <PaginationItem key={p}>
          <PaginationLink href="#" isActive={p === 1} className="border-2 border-black font-black shadow-[2px_2px_0_0_#000] data-[active]:bg-black data-[active]:text-white">
            {p}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext href="#" className="border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);`,
  next: ``,
  html: `<nav class="flex items-center gap-1">
  <a href="#" class="px-4 py-2 border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors">← Prev</a>
  <a href="#" class="px-4 py-2 border-2 border-black font-black bg-black text-white shadow-[2px_2px_0_0_#ffe135]">1</a>
  <a href="#" class="px-4 py-2 border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors">2</a>
  <a href="#" class="px-4 py-2 border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors">3</a>
  <a href="#" class="px-4 py-2 border-2 border-black font-black shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 transition-colors">Next →</a>
</nav>`,
};
paginationDefaultSnippet.next = toNext(paginationDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  TABLE
// ═══════════════════════════════════════════════
export const tableDefaultSnippet: ComponentCode = {
  react: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const data = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
];

export const TableDefault = () => (
  <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0_0_#000]">
    <Table>
      <TableHeader className="bg-zinc-950">
        <TableRow className="border-b-2 border-black hover:bg-zinc-950">
          <TableHead className="text-white font-black uppercase text-xs tracking-widest">Invoice</TableHead>
          <TableHead className="text-white font-black uppercase text-xs tracking-widest">Status</TableHead>
          <TableHead className="text-white font-black uppercase text-xs tracking-widest text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id} className="border-b border-zinc-100 hover:bg-yellow-50 transition-colors">
            <TableCell className="font-black">{row.id}</TableCell>
            <TableCell className="font-medium">{row.status}</TableCell>
            <TableCell className="text-right font-black">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);`,
  next: ``,
  html: `<div class="border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0_0_#000]">
  <table class="w-full text-sm">
    <thead class="bg-zinc-950 text-white">
      <tr class="border-b-2 border-black">
        <th class="px-4 py-3 font-black uppercase text-xs tracking-widest text-left">Invoice</th>
        <th class="px-4 py-3 font-black uppercase text-xs tracking-widest text-left">Status</th>
        <th class="px-4 py-3 font-black uppercase text-xs tracking-widest text-right">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-zinc-100 hover:bg-yellow-50 transition-colors">
        <td class="px-4 py-3 font-black">INV001</td>
        <td class="px-4 py-3 font-medium">Paid</td>
        <td class="px-4 py-3 font-black text-right">$250.00</td>
      </tr>
    </tbody>
  </table>
</div>`,
};
tableDefaultSnippet.next = toNext(tableDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  PROGRESS
// ═══════════════════════════════════════════════
export const progressDefaultSnippet: ComponentCode = {
  react: `import { Progress } from "@/components/ui/progress";

export const ProgressDefault = () => (
  <div className="w-full space-y-2">
    <div className="flex justify-between">
      <span className="text-xs font-black uppercase tracking-widest">Upload Progress</span>
      <span className="text-xs font-black bg-black text-yellow-400 px-2 py-0.5 italic">67%</span>
    </div>
    <Progress value={67} className="h-6 border-2 border-black shadow-[4px_4px_0_0_#000] bg-zinc-100 [&>div]:bg-black" />
  </div>
);`,
  next: ``,
  html: `<div class="w-full space-y-2">
  <div class="flex justify-between">
    <span class="text-xs font-black uppercase tracking-widest">Upload Progress</span>
    <span class="text-xs font-black bg-black text-yellow-400 px-2 py-0.5 italic">67%</span>
  </div>
  <div class="h-6 border-2 border-black shadow-[4px_4px_0_0_#000] bg-zinc-100 overflow-hidden">
    <div class="h-full bg-black transition-all" style="width: 67%"></div>
  </div>
</div>`,
};
progressDefaultSnippet.next = toNext(progressDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  TOOLTIP
// ═══════════════════════════════════════════════
export const tooltipDefaultSnippet: ComponentCode = {
  react: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const TooltipDefault = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="border-2 border-black font-black uppercase shadow-[4px_4px_0_0_#000]">Hover Me</Button>
      </TooltipTrigger>
      <TooltipContent className="border-2 border-black bg-black text-yellow-400 font-black uppercase shadow-[2px_2px_0_0_#ffe135]">
        Tooltip Content
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);`,
  next: ``,
  html: `<!-- CSS-only tooltip -->
<div class="relative inline-block group">
  <button class="px-4 py-2 border-2 border-black font-black uppercase shadow-[4px_4px_0_0_#000]">Hover Me</button>
  <div class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-yellow-400 font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#ffe135] invisible group-hover:visible transition-all">
    Tooltip Content
  </div>
</div>`,
};
tooltipDefaultSnippet.next = toNext(tooltipDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  SKELETON
// ═══════════════════════════════════════════════
export const skeletonDefaultSnippet: ComponentCode = {
  react: `import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonDefault = () => (
  <div className="space-y-3 w-full max-w-sm p-6 border-4 border-black shadow-[8px_8px_0_0_#000] bg-white rounded-2xl">
    <div className="flex items-center gap-4">
      <Skeleton className="w-12 h-12 rounded-2xl border-2 border-black/10" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-2/3 border-2 border-black/10" />
        <Skeleton className="h-3 w-1/3 border-2 border-black/10" />
      </div>
    </div>
    <Skeleton className="h-32 w-full rounded-xl border-2 border-black/10" />
  </div>
);`,
  next: ``,
  html: `<div class="space-y-3 w-full max-w-sm p-6 border-4 border-black shadow-[8px_8px_0_0_#000] bg-white rounded-2xl">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-2xl bg-zinc-200 animate-pulse"></div>
    <div class="space-y-2 flex-1">
      <div class="h-4 w-2/3 bg-zinc-200 animate-pulse rounded"></div>
      <div class="h-3 w-1/3 bg-zinc-200 animate-pulse rounded"></div>
    </div>
  </div>
  <div class="h-32 w-full bg-zinc-200 animate-pulse rounded-xl"></div>
</div>`,
};
skeletonDefaultSnippet.next = toNext(skeletonDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  INPUT OTP
// ═══════════════════════════════════════════════
export const inputOtpDefaultSnippet: ComponentCode = {
  react: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const InputOtpDefault = () => (
  <InputOTP maxLength={6}>
    <InputOTPGroup className="gap-2">
      {[...Array(6)].map((_, i) => (
        <InputOTPSlot key={i} index={i} className="border-2 border-black w-12 h-14 text-xl font-black shadow-[3px_3px_0_0_#000] rounded-xl focus-visible:border-yellow-400 focus-visible:shadow-[3px_3px_0_0_#ffe135]" />
      ))}
    </InputOTPGroup>
  </InputOTP>
);`,
  next: ``,
  html: `<div class="flex gap-2">
  <input maxlength="1" type="text" inputmode="numeric" 
    class="w-12 h-14 text-center text-xl font-black border-2 border-black shadow-[3px_3px_0_0_#000] rounded-xl focus:border-yellow-400 focus:shadow-[3px_3px_0_0_#ffe135] focus:outline-none" />
  <!-- repeat for each slot -->
</div>`,
};
inputOtpDefaultSnippet.next = toNext(inputOtpDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  FORM
// ═══════════════════════════════════════════════
export const formDefaultSnippet: ComponentCode = {
  react: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const FormDefault = () => (
  <form className="w-full space-y-4">
    <div className="space-y-1.5">
      <Label className="font-black uppercase text-xs tracking-widest">Email</Label>
      <Input placeholder="operator@moup.io" className="border-2 border-black shadow-[3px_3px_0_0_#000] h-12 font-black focus-visible:ring-0 focus-visible:border-yellow-400" />
    </div>
    <div className="space-y-1.5">
      <Label className="font-black uppercase text-xs tracking-widest">Password</Label>
      <Input type="password" placeholder="••••••••" className="border-2 border-black shadow-[3px_3px_0_0_#000] h-12 font-black focus-visible:ring-0 focus-visible:border-yellow-400" />
    </div>
    <Button type="submit" className="w-full h-14 border-2 border-black bg-black text-yellow-400 font-black uppercase shadow-[4px_4px_0_0_#ffe135] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
      SUBMIT
    </Button>
  </form>
);`,
  next: ``,
  html: `<form class="space-y-4">
  <div class="space-y-1.5">
    <label class="font-black uppercase text-xs tracking-widest">Email</label>
    <input type="email" placeholder="operator@moup.io" class="w-full border-2 border-black shadow-[3px_3px_0_0_#000] h-12 px-4 font-black focus:border-yellow-400 focus:outline-none" />
  </div>
  <div class="space-y-1.5">
    <label class="font-black uppercase text-xs tracking-widest">Password</label>
    <input type="password" placeholder="••••••••" class="w-full border-2 border-black shadow-[3px_3px_0_0_#000] h-12 px-4 font-black focus:border-yellow-400 focus:outline-none" />
  </div>
  <button type="submit" class="w-full h-14 border-2 border-black bg-black text-yellow-400 font-black uppercase shadow-[4px_4px_0_0_#ffe135] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
    SUBMIT
  </button>
</form>`,
};
formDefaultSnippet.next = toNext(formDefaultSnippet.react);

// ═══════════════════════════════════════════════
//  CHARTS
// ═══════════════════════════════════════════════
export const chartDefaultSnippet: ComponentCode = {
  react: `"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
];

export const ChartLine = () => (
  <div className="w-full border-2 border-black shadow-[4px_4px_0_0_#000] bg-white rounded-2xl p-4">
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" tick={{ fontWeight: 900, fontSize: 11 }} />
        <YAxis tick={{ fontWeight: 900, fontSize: 11 }} />
        <Tooltip contentStyle={{ border: "2px solid black", borderRadius: 8, fontWeight: 700 }} />
        <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={3} dot={{ r: 5, fill: "#ffe135", stroke: "#000", strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);`,
  next: ``,
  html: `<div class="border-2 border-black shadow-[4px_4px_0_0_#000] bg-white rounded-2xl p-4">
  <!-- Use a chart library like Chart.js or ApexCharts -->
  <canvas id="myChart"></canvas>
  <script>
    // Initialize chart with your preferred library
    // Example: new Chart(document.getElementById('myChart'), { type: 'line', data: {...} });
  </script>
</div>`,
};
chartDefaultSnippet.next = toNext(chartDefaultSnippet.react);
