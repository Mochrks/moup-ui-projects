import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-shadcn/table";
import { Badge } from "@/components/ui-shadcn/badge";
import { Avatar, AvatarFallback } from "@/components/ui-shadcn/avatar";
import { Button } from "@/components/ui-shadcn/button";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  Download,
  ArrowUpDown,
  Search,
  ArrowRight,
  UserPlus,
  Filter,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];

// 1. Industrial Primary
export const TableSimple = () => (
  <div className="border-2 border-black rounded-3xl overflow-hidden bg-white shadow-[6px_6px_0_0_#000]">
    <Table>
      <TableHeader className="bg-zinc-950">
        <TableRow className="hover:bg-zinc-950 border-b-2 border-black">
          <TableHead className="w-[120px] text-white font-black uppercase italic">
            Protocol
          </TableHead>
          <TableHead className="text-white font-black uppercase italic">Status</TableHead>
          <TableHead className="text-right text-white font-black uppercase italic">
            Credit
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow
            key={inv.invoice}
            className="border-b-2 border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors"
          >
            <TableCell className="font-bold font-mono tracking-tighter">{inv.invoice}</TableCell>
            <TableCell>
              <Badge
                className={cn(
                  "border-2 border-black font-black uppercase text-[10px] italic shadow-[2px_2px_0_0_#000]",
                  inv.paymentStatus === "Paid" ? "bg-main text-white" : "bg-white text-black"
                )}
              >
                {inv.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell className="text-right font-black italic">{inv.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 2. Striped High-Contrast
export const TableStriped = () => (
  <div className="border-4 border-black rounded-[2rem] overflow-hidden bg-white shadow-[12px_12px_0_0_#fbbf24]">
    <Table>
      <TableHeader className="bg-white border-b-4 border-black">
        <TableRow className="hover:bg-white">
          <TableHead className="font-heading uppercase italic text-lg text-black">
            Client Node
          </TableHead>
          <TableHead className="font-heading uppercase italic text-lg text-black">Uplink</TableHead>
          <TableHead className="text-right font-heading uppercase italic text-lg text-black">
            Cost
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4].map((i) => (
          <TableRow
            key={i}
            className={cn(
              "border-b-2 border-black last:border-0",
              i % 2 === 0 ? "bg-zinc-50" : "bg-white"
            )}
          >
            <TableCell className="font-black italic text-sm">Company 0x{i}F</TableCell>
            <TableCell className="font-medium text-zinc-500">Core Software Architect</TableCell>
            <TableCell className="text-right">
              <span className="bg-black text-white px-3 py-1 rounded-full font-bold text-xs">
                $1,200.00
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 3. Blueprint Detailed
export const TableBordered = () => (
  <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_0_#88aaee]">
    <Table className="border-collapse">
      <TableHeader>
        <TableRow className="bg-zinc-100 hover:bg-zinc-100 border-b-2 border-black">
          <TableHead className="border-r-2 border-black font-black uppercase text-xs">
            Infrastructure
          </TableHead>
          <TableHead className="border-r-2 border-black font-black uppercase text-xs text-center">
            Standard
          </TableHead>
          <TableHead className="font-black uppercase text-xs text-center text-mainAccent">
            Premium
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { f: "Data Storage", v1: "1 GB", v2: "100 GB" },
          { f: "Node Clusters", v1: "3 Fixed", v2: "Unlimited" },
          { f: "Encryption", v1: "AES-128", v2: "RSA-4096" },
        ].map((row, idx) => (
          <TableRow
            key={idx}
            className="border-b-2 border-black last:border-0 bg-white hover:bg-zinc-50"
          >
            <TableCell className="border-r-2 border-black font-bold italic">{row.f}</TableCell>
            <TableCell className="border-r-2 border-black text-center text-zinc-400 font-bold">
              {row.v1}
            </TableCell>
            <TableCell className="text-center font-black bg-mainAccent/5">{row.v2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 4. Hoverable Command Center
export const TableHoverable = () => (
  <div className="space-y-2">
    <div className="flex justify-between px-2">
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
        Recent Terminal Activity
      </span>
      <span className="text-[10px] font-black uppercase text-main italic">Active Session</span>
    </div>
    <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
      <Table>
        <TableBody>
          {[1, 2, 3].map((i) => (
            <TableRow
              key={i}
              className="cursor-pointer border-b-2 border-zinc-100 last:border-0 hover:bg-mainAccent hover:text-white group h-16 transition-all duration-300"
            >
              <TableCell className="font-black italic uppercase tracking-tighter text-lg group-hover:translate-x-2 transition-transform">
                Asset_Entry_0{i}
              </TableCell>
              <TableCell className="text-zinc-400 group-hover:text-white/70 font-bold text-xs">
                Last Auth: 12.08.2024 :: UTC+7
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-2 border-transparent group-hover:border-white group-hover:bg-white/10 group-hover:text-white text-black transition-all"
                >
                  <ArrowRight size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

// 5. Health Monitor Status
export const TableStatus = () => (
  <div className="border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#000] p-1">
    <Table>
      <TableHeader>
        <TableRow className="border-b-2 border-black hover:bg-transparent">
          <TableHead className="font-black uppercase text-xs">Project Cluster</TableHead>
          <TableHead className="font-black uppercase text-xs">Telemetry</TableHead>
          <TableHead className="text-right font-black uppercase text-xs">Load</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            p: "Apollo Engine",
            color: "bg-green-500",
            shadow: "shadow-[2px_2px_0_0_#16a34a]",
            s: "Stable",
            load: 24,
          },
          {
            p: "Luna CMS",
            color: "bg-amber-500",
            shadow: "shadow-[2px_2px_0_0_#d97706]",
            s: "Warning",
            load: 88,
          },
          {
            p: "Mars Data",
            color: "bg-red-500",
            shadow: "shadow-[2px_2px_0_0_#dc2626]",
            s: "Critical",
            load: 95,
          },
        ].map((item, i) => (
          <TableRow key={i} className="border-0 hover:bg-zinc-50">
            <TableCell className="font-heading italic uppercase">{item.p}</TableCell>
            <TableCell>
              <div className="flex gap-1.5 items-center">
                {[1, 2, 3, 4, 5].map((b) => (
                  <div
                    key={b}
                    className={cn(
                      "w-2 h-5 rounded-sm border border-black",
                      b <= item.load / 20 ? item.color : "bg-zinc-100"
                    )}
                  />
                ))}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Badge
                className={cn(
                  "border-2 border-black uppercase italic font-black text-[9px]",
                  item.shadow,
                  item.color,
                  "text-white"
                )}
              >
                {item.s}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 6. Member Directory (Rich)
export const TableRich = () => (
  <div className="bg-zinc-950 p-2 rounded-[2.5rem] border-4 border-black shadow-2xl">
    <Table>
      <TableHeader className="border-b border-zinc-800">
        <TableRow className="hover:bg-transparent px-4">
          <TableHead className="text-zinc-500 font-black uppercase text-[10px] tracking-widest pl-10">
            Network Identity
          </TableHead>
          <TableHead className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">
            Access Protocol
          </TableHead>
          <TableHead className="text-right text-zinc-500 font-black uppercase text-[10px] tracking-widest pr-10">
            Operations
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            name: "John Archer",
            role: "Core Architect",
            initial: "JA",
            email: "archer@moup.io",
            color: "bg-mainAccent",
          },
          {
            name: "Sarah Helix",
            role: "Security Ops",
            initial: "SH",
            email: "helix@moup.io",
            color: "bg-main",
          },
          {
            name: "Mike Vault",
            role: "Database Lead",
            initial: "MV",
            email: "vault@moup.io",
            color: "bg-pink-500",
          },
        ].map((user, i) => (
          <TableRow key={i} className="border-0 hover:bg-white/5 transition-colors group">
            <TableCell className="py-6 pl-10">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-black shadow-[3px_3px_0_0_#000] scale-100 group-hover:scale-110 transition-transform">
                  <AvatarFallback className={cn("text-white font-black italic", user.color)}>
                    {user.initial}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-white font-heading italic uppercase text-lg leading-none">
                    {user.name}
                  </span>
                  <span className="text-zinc-600 font-black text-[10px] uppercase tracking-tighter mt-1">
                    {user.email}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-300 font-bold text-xs uppercase italic">
                  {user.role}
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-mainAccent rounded-full"></div>
                  <div className="w-1 h-3 bg-zinc-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-zinc-800 rounded-full"></div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right pr-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-600 hover:text-white hover:bg-white/10 rounded-xl transition-all h-10 w-10 border border-transparent hover:border-zinc-800"
              >
                <MoreHorizontal size={20} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 7. Mini Terminal Logs
export const TableCompact = () => (
  <div className="bg-zinc-900 border-2 border-black rounded-2xl p-4 shadow-inner">
    <Table>
      <TableBody>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <TableRow
            key={i}
            className="h-8 border-b border-white/5 last:border-0 hover:bg-white/5 group"
          >
            <TableCell className="p-0 py-2 font-mono text-[10px] text-zinc-500 w-10 text-center">
              {i}
            </TableCell>
            <TableCell className="p-0 py-2 font-mono text-[10px] text-zinc-300">
              <span className="text-mainAccent font-black mr-2">LOG::AUTH</span>
              Successful handshake for node_0{i}
            </TableCell>
            <TableCell className="p-0 py-2 text-right font-mono text-[10px] text-zinc-500 italic group-hover:text-main transition-colors">
              192.168.1.{i * 12}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// 8. Sorting Data Grid
export const TableSorting = () => (
  <div className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[6px_6px_0_0_#000]">
    <Table>
      <TableHeader className="bg-zinc-50">
        <TableRow className="border-b-2 border-black">
          <TableHead className="cursor-pointer hover:bg-zinc-100 group transition-colors">
            <div className="flex items-center gap-2 font-black uppercase text-xs italic">
              Transaction{" "}
              <ArrowUpDown
                size={14}
                className="text-zinc-300 group-hover:text-black transition-colors"
              />
            </div>
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-zinc-100 group transition-colors">
            <div className="flex items-center gap-2 font-black uppercase text-xs italic">
              Timestamp{" "}
              <ArrowUpDown
                size={14}
                className="text-zinc-300 group-hover:text-black transition-colors"
              />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-b border-zinc-100 hover:bg-zinc-50 group">
          <TableCell className="font-black italic text-lg tracking-tighter group-hover:text-mainAccent transition-colors">
            $1,400.00
          </TableCell>
          <TableCell className="font-bold text-zinc-400">12 AUG 2024 :: 09:42</TableCell>
        </TableRow>
        <TableRow className="border-0 hover:bg-zinc-50 group">
          <TableCell className="font-black italic text-lg tracking-tighter group-hover:text-mainAccent transition-colors">
            $2,650.00
          </TableCell>
          <TableCell className="font-bold text-zinc-400">14 AUG 2024 :: 11:20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

// 9. Structured Summary
export const TableCaptionDemo = () => (
  <div className="border-2 border-black rounded-3xl p-6 bg-white overflow-hidden shadow-[8px_8px_0_0_#ef4444]">
    <Table>
      <TableCaption className="font-black uppercase text-[10px] tracking-widest mt-6 opacity-30">
        Analytical Data Summary v0.4
      </TableCaption>
      <TableHeader>
        <TableRow className="border-b-2 border-black hover:bg-transparent">
          <TableHead className="font-black uppercase italic">Protocol Method</TableHead>
          <TableHead className="text-right font-black uppercase italic">Allocated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="font-bold text-zinc-600 italic">Satellite Uplink</TableCell>
          <TableCell className="text-right font-black">$250.00</TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="font-bold text-zinc-600 italic">Quantum Pipeline</TableCell>
          <TableCell className="text-right font-black">$450.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter className="bg-zinc-950 rounded-2xl">
        <TableRow className="hover:bg-zinc-950">
          <TableCell className="text-white font-heading uppercase italic">Aggregate</TableCell>
          <TableCell className="text-right text-main font-black text-2xl italic tracking-tighter underline underline-offset-4 decoration-main/30">
            $700.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
);

// 10. Operations Matrix
export const TableActions = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between gap-4 p-4 bg-zinc-100 border-2 border-dashed border-black rounded-2xl">
      <div className="flex items-center gap-3">
        <Search size={18} className="text-zinc-400" />
        <span className="text-[10px] font-black uppercase opacity-20">Matrix Search Locked</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-2 border-black font-black uppercase text-[9px] shadow-[2px_2px_0_0_#000]"
        >
          <Filter size={12} className="mr-1" /> Filter
        </Button>
        <Button
          size="sm"
          className="h-8 bg-black text-white border-2 border-black font-black uppercase text-[9px] shadow-[2px_2px_0_0_#88aaee]"
        >
          <UserPlus size={12} className="mr-1" /> Add Node
        </Button>
      </div>
    </div>
    <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
      <Table>
        <TableBody>
          {[1, 2].map((i) => (
            <TableRow
              key={i}
              className="border-b-2 border-zinc-50 last:border-0 hover:bg-zinc-50 transition-all group"
            >
              <TableCell className="py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-50 border-2 border-black rounded-xl flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform">
                    <Database
                      size={20}
                      className="text-zinc-400 group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <span className="block font-black italic uppercase text-lg leading-tight">
                      file-data-0{i}.zip
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      ARCHIVE_TYPE_R2
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right pr-6">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-2 border-black shadow-[2px_2px_0_0_#88aaee] hover:bg-mainAccent hover:text-white transition-all"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-2 border-black shadow-[2px_2px_0_0_#22c55e] hover:bg-green-500 hover:text-white transition-all"
                  >
                    <Download size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-2 border-black shadow-[2px_2px_0_0_#ef4444] hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
