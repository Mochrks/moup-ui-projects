export const sampleCodeDashboard = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import {
  LayoutDashboard, TrendingUp, Users, ShoppingCart, DollarSign,
  Bell, Settings, Search, ArrowUpRight, ArrowDownRight, Activity
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 4200 }, { month: "Feb", revenue: 3800 },
  { month: "Mar", revenue: 5100 }, { month: "Apr", revenue: 4700 },
  { month: "May", revenue: 6200 }, { month: "Jun", revenue: 5800 },
  { month: "Jul", revenue: 7100 },
];
const pieData = [
  { name: "Direct", value: 400 }, { name: "Social", value: 300 },
  { name: "Email", value: 200 }, { name: "Organic", value: 100 },
];
const COLORS = ["#ffe135", "#000000", "#6366f1", "#10b981"];

const stats = [
  { title: "Total Revenue", value: "$48,295", change: "+12.5%", up: true, icon: DollarSign, bg: "bg-[#ffe135]" },
  { title: "Active Users", value: "8,472", change: "+8.2%", up: true, icon: Users, bg: "bg-[#dbeafe]" },
  { title: "New Orders", value: "1,293", change: "-3.1%", up: false, icon: ShoppingCart, bg: "bg-[#d1fae5]" },
  { title: "Growth Rate", value: "23.4%", change: "+5.7%", up: true, icon: TrendingUp, bg: "bg-[#fce7f3]" },
];

export const DashboardPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 bg-black text-white flex flex-col border-r-2 border-black flex-shrink-0">
        <div className="p-4 border-b-2 border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#ffe135] rounded-lg flex items-center justify-center font-black text-black text-sm">M</div>
            <span className="font-black text-white">MoupUI</span>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "Users" },
            { icon: ShoppingCart, label: "Orders" },
            { icon: TrendingUp, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button key={item.label} className={\`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all \${item.active ? "bg-[#ffe135] text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}\`}>
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b-2 border-black px-6 py-3 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9 border-2 border-black h-9" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative w-9 h-9 border-2 border-black rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
            </button>
            <Avatar className="w-9 h-9 border-2 border-black">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-[#ffe135] text-black font-black text-xs">AJ</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-5 space-y-5">
          <div>
            <h1 className="text-2xl font-black">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Wednesday, February 21, 2025</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-2 border-black shadow-[3px_3px_0_0_#000]">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={\`w-10 h-10 rounded-xl \${stat.bg} border-2 border-black flex items-center justify-center\`}>
                      <stat.icon size={18} />
                    </div>
                    <div className={\`flex items-center gap-0.5 text-xs font-bold \${stat.up ? "text-green-600" : "text-red-500"}\`}>
                      {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-2 border-2 border-black shadow-[3px_3px_0_0_#000]">
              <CardHeader className="pb-2"><CardTitle className="text-base font-black">Revenue Overview</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={revenueData}><CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /><XAxis dataKey="month" tick={{ fontSize: 12 }} /><YAxis tick={{ fontSize: 12 }} /><Tooltip /><Bar dataKey="revenue" fill="#ffe135" stroke="#000" strokeWidth={2} radius={[4,4,0,0]} /></BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="border-2 border-black shadow-[3px_3px_0_0_#000]">
              <CardHeader className="pb-2"><CardTitle className="text-base font-black">Traffic Sources</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">{pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="#000" strokeWidth={2} />)}</Pie><Tooltip /></PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};`.trim();

export const sampleCodeDashboardNext = `"use client";

${sampleCodeDashboard}`;

export const sampleCodeDashboardHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard — MoupUI</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,sans-serif}
    body{display:flex;height:100vh;overflow:hidden;background:#f9fafb}
    .sidebar{width:200px;background:#000;color:#fff;flex-shrink:0;padding:16px}
    .logo{display:flex;align-items:center;gap:8px;margin-bottom:20px;font-weight:900;font-size:1.1rem}
    .logo-icon{width:28px;height:28px;background:#ffe135;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#000;font-size:.9rem}
    nav a{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;color:rgba(255,255,255,.7);font-size:.875rem;font-weight:600;text-decoration:none;margin-bottom:4px}
    nav a.active{background:#ffe135;color:#000}
    .main{flex:1;overflow:auto;display:flex;flex-direction:column}
    .header{background:#fff;border-bottom:2px solid #000;padding:12px 24px;display:flex;align-items:center;gap:12px}
    .content{padding:20px;space-y:20px}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:16px}
    .stat{background:#fff;border:2px solid #000;border-radius:12px;padding:16px;box-shadow:3px 3px 0 0 #000}
    .stat-icon{width:40px;height:40px;border-radius:10px;border:2px solid #000;display:flex;align-items:center;justify-content:center;font-size:1.2rem;margin-bottom:8px}
    .stat-value{font-size:1.5rem;font-weight:900}
    .stat-label{font-size:.75rem;color:#6b7280;font-weight:500}
    .stat-change{font-size:.75rem;font-weight:700;color:#16a34a}
    .heading{font-size:1.5rem;font-weight:900}
    .sub{font-size:.875rem;color:#6b7280;margin-top:2px}
  </style>
</head>
<body>
  <div class="sidebar">
    <div class="logo"><div class="logo-icon">M</div>MoupUI</div>
    <nav>
      <a href="#" class="active">📊 Dashboard</a>
      <a href="#">👥 Users</a>
      <a href="#">🛒 Orders</a>
      <a href="#">📈 Analytics</a>
      <a href="#">⚙️ Settings</a>
    </nav>
  </div>
  <div class="main">
    <div class="header">
      <input placeholder="Search..." style="padding:6px 12px;border:2px solid #000;border-radius:8px;font-size:.875rem;outline:none;" />
      <span style="margin-left:auto;font-size:1.5rem;cursor:pointer;">🔔</span>
      <div style="width:36px;height:36px;background:#ffe135;border:2px solid #000;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.75rem;">AJ</div>
    </div>
    <div class="content">
      <div class="heading">Dashboard</div>
      <div class="sub">Wednesday, February 21, 2025</div>
      <div class="stats">
        <div class="stat"><div class="stat-icon" style="background:#ffe135">💵</div><div class="stat-value">$48,295</div><div style="display:flex;justify-content:space-between;align-items:center"><div class="stat-label">Total Revenue</div><div class="stat-change">+12.5%</div></div></div>
        <div class="stat"><div class="stat-icon" style="background:#dbeafe">👥</div><div class="stat-value">8,472</div><div style="display:flex;justify-content:space-between;align-items:center"><div class="stat-label">Active Users</div><div class="stat-change">+8.2%</div></div></div>
        <div class="stat"><div class="stat-icon" style="background:#d1fae5">🛒</div><div class="stat-value">1,293</div><div style="display:flex;justify-content:space-between;align-items:center"><div class="stat-label">New Orders</div><div class="stat-change" style="color:#dc2626">-3.1%</div></div></div>
        <div class="stat"><div class="stat-icon" style="background:#fce7f3">📈</div><div class="stat-value">23.4%</div><div style="display:flex;justify-content:space-between;align-items:center"><div class="stat-label">Growth Rate</div><div class="stat-change">+5.7%</div></div></div>
      </div>
    </div>
  </div>
</body>
</html>`.trim();
