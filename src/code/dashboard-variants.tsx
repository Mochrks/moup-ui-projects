import {
  Users,
  ShoppingCart,
  DollarSign,
  BarChart2,
  Mail,
  CheckCircle,
  Bell,
  Shield,
  Cpu,
  Globe,
  MoreVertical,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-neobrutalism/card";

// 1. Stats Grid Dashboard
export const DashboardStatsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
    {[
      { label: "Total Users", value: "12,482", icon: Users, color: "bg-blue-100", trend: "+12%" },
      { label: "Revenue", value: "$45,210", icon: DollarSign, color: "bg-green-100", trend: "+8%" },
      { label: "Orders", value: "842", icon: ShoppingCart, color: "bg-purple-100", trend: "+24%" },
      { label: "Growth", value: "18.2%", icon: BarChart2, color: "bg-yellow-100", trend: "+4%" },
    ].map((item, i) => (
      <div
        key={i}
        className="p-6 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0_0_#000] flex items-center gap-4"
      >
        <div
          className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center ${item.color}`}
        >
          <item.icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-black uppercase text-zinc-400">{item.label}</p>
          <h3 className="text-2xl font-black">{item.value}</h3>
          <p className="text-[10px] font-bold text-green-600">{item.trend} today</p>
        </div>
      </div>
    ))}
  </div>
);

// 2. Project Kanban Board (Simplified)
export const DashboardKanban = () => (
  <div className="flex flex-col md:flex-row gap-6 w-full min-h-[400px]">
    {["To Do", "In Progress", "Done"].map((col, i) => (
      <div key={i} className="flex-1 bg-zinc-50 border-2 border-black rounded-3xl p-4">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-black text-sm uppercase tracking-widest">{col}</h3>
          <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full">2</span>
        </div>
        <div className="space-y-3">
          {[1, 2].map((j) => (
            <div
              key={j}
              className="p-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] space-y-2"
            >
              <div className="h-1.5 w-1/2 bg-indigo-200 rounded-full" />
              <p className="text-sm font-bold">Fix responsive bug in header section</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex -space-x-2">
                  {[1, 2].map((k) => (
                    <div key={k} className="w-6 h-6 rounded-full border border-black bg-zinc-200" />
                  ))}
                </div>
                <MoreVertical className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
          ))}
          <button className="w-full py-2 border-2 border-dashed border-zinc-300 rounded-xl text-zinc-400 font-bold text-xs hover:border-black hover:text-black transition-colors">
            + Add Task
          </button>
        </div>
      </div>
    ))}
  </div>
);

// 3. Activity Feed
export const DashboardActivity = () => (
  <Card className="w-full border-4 border-black shadow-[8px_8px_0_0_#000] rounded-3xl">
    <CardHeader className="border-b-4 border-black">
      <CardTitle className="text-xl font-black">Recent Activity</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      {[
        {
          user: "Aulia",
          action: "pushed to",
          Target: "main branch",
          time: "2m ago",
          color: "bg-blue-400",
        },
        {
          user: "Rizal",
          action: "commented on",
          Target: "PR #42",
          time: "15m ago",
          color: "bg-[#ffe135]",
        },
        {
          user: "Sarah",
          action: "merged",
          Target: "hotfix/auth",
          time: "1h ago",
          color: "bg-green-400",
        },
        {
          user: "Mark",
          action: "deleted",
          Target: "temp-storage",
          time: "3h ago",
          color: "bg-red-400",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 border-b-2 border-black last:border-b-0 group hover:bg-zinc-50 transition-colors"
        >
          <div
            className={`w-10 h-10 rounded-full border-2 border-black ${item.color} flex items-center justify-center font-black text-xs`}
          >
            {item.user[0]}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">
              <span className="font-black">{item.user}</span> {item.action}{" "}
              <span className="font-bold underline">{item.Target}</span>
            </p>
            <p className="text-xs text-zinc-400 font-bold">{item.time}</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center cursor-pointer hover:bg-white">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

// 4. Server Monitoring
export const DashboardServerMonitor = () => (
  <div className="w-full bg-zinc-900 border-4 border-black rounded-3xl p-6 text-white shadow-[8px_8px_0_0_#ffe135]">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
        <Cpu className="w-6 h-6 text-[#ffe135]" /> Core Cluster-01
      </h2>
      <div className="flex items-center gap-2 px-3 py-1 bg-[#34A853]/20 text-[#34A853] border border-[#34A853] rounded-full text-[10px] font-black">
        <div className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" /> ONLINE
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { label: "CPU Usage", val: "42%", sub: "8 Cores active", color: "text-blue-400" },
        { label: "Memory", val: "12Gb", sub: "Out of 32Gb", color: "text-purple-400" },
        { label: "Network", val: "2.4Gb/s", sub: "Peak 5.0Gb/s", color: "text-yellow-400" },
        { label: "Uptime", val: "32d", sub: "Since last patch", color: "text-green-400" },
      ].map((item, i) => (
        <div key={i} className="space-y-1">
          <p className="text-[10px] font-black text-zinc-500 uppercase">{item.label}</p>
          <p className={`text-3xl font-black ${item.color}`}>{item.val}</p>
          <p className="text-[10px] text-zinc-400 font-medium">{item.sub}</p>
        </div>
      ))}
    </div>
    <div className="mt-8 h-24 w-full border-t border-zinc-800 pt-4">
      <div className="flex items-end gap-1 h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-white/10 rounded-t-sm hover:bg-[#ffe135] transition-colors"
            style={{ height: `${Math.random() * 80 + 20}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

// 5. User Profiles Grid
export const DashboardUsers = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="p-6 bg-white border-2 border-black rounded-3xl relative overflow-hidden group shadow-[6px_6px_0_0_#000]"
      >
        <div className="absolute top-0 right-0 p-4">
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center cursor-pointer border border-black group-hover:bg-[#ffe135] transition-colors">
            <Mail className="w-4 h-4" />
          </div>
        </div>
        <div className="w-16 h-16 rounded-2xl border-4 border-black bg-indigo-100 flex items-center justify-center mb-4 text-2xl font-black overflow-hidden relative">
          <span className="relative z-10">U{i}</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-transparent opacity-20" />
        </div>
        <h3 className="text-lg font-black leading-tight">User Number {i}</h3>
        <p className="text-xs font-bold text-zinc-400 mb-4">Product Designer @ MoupUI</p>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-zinc-100 border border-black rounded text-[10px] font-black tracking-widest uppercase">
            Admin
          </span>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 border border-green-700 rounded text-[10px] font-black tracking-widest uppercase">
            Active
          </span>
        </div>
      </div>
    ))}
  </div>
);

// 6. Billing/Financial Tracking
export const DashboardBilling = () => (
  <div className="w-full space-y-6">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 p-8 bg-indigo-600 border-4 border-black rounded-3xl text-white shadow-[8px_8px_0_0_#000]">
        <p className="text-xs font-black uppercase opacity-60 mb-2">Total Balance</p>
        <h2 className="text-5xl font-black">$124,502.20</h2>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 bg-white text-black font-black rounded-xl border-2 border-black">
            Withdraw
          </button>
          <button className="px-6 py-2 bg-black text-white font-black rounded-xl border-2 border-white">
            Statement
          </button>
        </div>
      </div>
      <div className="w-full md:w-80 p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
        <h3 className="font-black text-xl mb-4">Quick Stats</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b-2 border-dashed border-zinc-100 pb-2">
            <span className="text-sm font-bold text-zinc-400">Monthly Expenses</span>
            <span className="font-black text-red-500">-$2,400</span>
          </div>
          <div className="flex justify-between items-end border-b-2 border-dashed border-zinc-100 pb-2">
            <span className="text-sm font-bold text-zinc-400">Total Savings</span>
            <span className="font-black text-green-500">+$12,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 7. Notification Center
export const DashboardNotifications = () => (
  <div className="w-full max-w-xl mx-auto border-4 border-black rounded-3xl bg-white overflow-hidden shadow-[12px_12px_0_0_#000]">
    <div className="p-6 border-b-4 border-black flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bell className="w-6 h-6" />
        <h2 className="text-xl font-black">Messages</h2>
      </div>
      <span className="px-2 py-1 bg-[#ffe135] border-2 border-black rounded-lg text-xs font-black">
        4 NEW
      </span>
    </div>
    <div className="divide-y-2 divide-black">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="p-4 hover:bg-zinc-50 cursor-pointer transition-colors flex items-start gap-4"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
          <div className="flex-1">
            <h4 className="font-black text-sm">Update on Project X</h4>
            <p className="text-xs text-zinc-500 line-clamp-1">
              Hey team, just wanted to share the latest designs for the landing page...
            </p>
            <p className="text-[10px] font-black text-zinc-400 mt-2">10:30 AM</p>
          </div>
        </div>
      ))}
    </div>
    <div className="p-4 border-t-4 border-black text-center">
      <button className="text-sm font-black underline underline-offset-4 decoration-4 decoration-[#ffe135]">
        View All Notifications
      </button>
    </div>
  </div>
);

// 8. API Management
export const DashboardAPI = () => (
  <div className="w-full p-6 bg-white border-2 border-black rounded-3xl flex flex-col md:flex-row gap-8 items-center border-b-8">
    <div className="flex-1 space-y-4">
      <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 border border-purple-700 rounded-full w-fit text-[10px] font-black">
        PUBLIC API ACCESS
      </div>
      <h2 className="text-3xl font-black leading-tight">Manage your API credentials securely.</h2>
      <p className="text-sm text-zinc-500 font-medium leading-relaxed">
        Generated API keys allow you to integrate MoupUI components directly into your custom
        applications and workflows.
      </p>
      <div className="flex items-center gap-4 pt-4">
        <div className="bg-zinc-100 border-2 border-black px-4 py-3 rounded-xl font-mono text-sm flex-1">
          pk_live_M0uPU1_v1_xxxxxxxxxx
        </div>
        <button className="p-3 bg-black text-white rounded-xl border-2 border-black active:scale-95 transition-transform">
          <CheckCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
    <div className="w-full md:w-64 bg-zinc-50 border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0_0_#000]">
      <h4 className="font-black text-xs uppercase mb-4 text-center">Security Level</h4>
      <div className="flex items-center justify-center relative mb-4">
        <div className="w-32 h-32 rounded-full border-8 border-black flex items-center justify-center">
          <Shield className="w-12 h-12 text-green-500" />
        </div>
        <div className="absolute inset-0 border-8 border-transparent border-t-green-500 rounded-full rotate-45" />
      </div>
      <p className="text-center text-[10px] font-black text-green-600">HIGH PROTECTION</p>
    </div>
  </div>
);

// 9. Community/Team Overview
export const DashboardTeam = () => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {["Marketing", "Engineering", "Design", "Sales"].map((team, idx) => (
      <div
        key={team}
        className="p-6 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 border-2 border-black rounded-lg bg-zinc-50 flex items-center justify-center font-black">
            {team[0]}
          </div>
          <Globe className="w-4 h-4 text-zinc-300" />
        </div>
        <h3 className="font-black text-lg">{team} Team</h3>
        <p className="text-xs font-bold text-zinc-400 mb-6">{12 + idx * 3} active members</p>
        <div className="w-full bg-zinc-100 h-2 rounded-full border border-black overflow-hidden flex">
          <div
            className="bg-[#ffe135] h-full border-r border-black"
            style={{ width: `${40 + idx * 15}%` }}
          />
        </div>
        <p className="text-[10px] font-black mt-2 text-right">{40 + idx * 15}% CAPACITY</p>
      </div>
    ))}
  </div>
);

// 10. Simple Inbox Overview
export const DashboardInbox = () => (
  <div className="w-full flex border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[10px_10px_0_0_#000]">
    <div className="w-20 md:w-64 border-r-4 border-black p-4 flex flex-col gap-2 bg-zinc-50">
      {["Inbox", "Sent", "Drafts", "Trash"].map((item, i) => (
        <div
          key={item}
          className={`p-4 rounded-xl border-2 transition-all cursor-pointer font-black text-sm flex items-center gap-3 ${i === 0 ? "bg-[#ffe135] border-black shadow-[2px_2px_0_0_#000]" : "border-transparent text-zinc-400 hover:text-black"}`}
        >
          <Mail className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">{item}</span>
        </div>
      ))}
    </div>
    <div className="flex-1 p-6 space-y-4">
      <div className="flex justify-between items-center pb-4 border-b-2 border-black">
        <h2 className="text-xl font-black">Inbox</h2>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-lg border-2 border-black bg-white" />
          <div className="w-8 h-8 rounded-lg border-2 border-black bg-white" />
        </div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="p-4 border-2 border-black rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-full border border-black bg-zinc-200" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black truncate">
                Customer feedback regarding new release {i}
              </p>
              <p className="text-xs text-zinc-400 truncate">
                I've been using the new library and noticed a small issue with...
              </p>
            </div>
            <span className="text-[10px] font-bold text-zinc-400">12:30 PM</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
