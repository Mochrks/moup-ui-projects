export const sampleCodeDashboard = `
import { useState } from "react";
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
];

const COLORS = ["#3b82f6", "#10b981", "#6366f1", "#f59e0b"];

const stats = [
  { title: "Total Revenue", value: "$48,295", change: "+12.5%", up: true, icon: DollarSign },
  { title: "Active Users", value: "8,472", change: "+8.2%", up: true, icon: Users },
  { title: "New Orders", value: "1,293", change: "-3.1%", up: false, icon: ShoppingCart },
  { title: "Growth Rate", value: "23.4%", change: "+5.7%", up: true, icon: TrendingUp },
];

export function Dashboard() {
  return (
    <div className="flex h-screen bg-zinc-50/50 overflow-hidden border rounded-xl">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm">M</div>
            <span className="font-bold text-foreground">MoupUI</span>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "Users" },
            { icon: ShoppingCart, label: "Orders" },
            { icon: TrendingUp, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <Button key={item.label} variant={item.active ? "secondary" : "ghost"} className="w-full justify-start gap-3">
              <item.icon size={18} />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search metrics..." className="pl-9 h-10 border-none bg-zinc-100 focus-visible:ring-1" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Avatar className="w-9 h-9 border">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
              <p className="text-sm text-muted-foreground">Detailed view of your platform performance.</p>
            </div>
            <Button>Download Report</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="shadow-sm border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 border flex items-center justify-center text-primary">
                      <stat.icon size={20} />
                    </div>
                    <Badge variant={stat.up ? "default" : "destructive"} className="text-[10px] h-5">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 shadow-sm border">
              <CardHeader><CardTitle className="text-base font-semibold">Revenue Trend</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dx={-4} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                    <Tooltip cursor={{ fill: '#f9f9f9' }} />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="shadow-sm border">
              <CardHeader><CardTitle className="text-base font-semibold">User Activity</CardTitle></CardHeader>
              <CardContent>
                 <div className="space-y-6">
                    { [1,2,3].map(i => (
                        <div key={i} className="flex items-center gap-4">
                           <Avatar className="w-8 h-8"><AvatarFallback>U{i}</AvatarFallback></Avatar>
                           <div className="flex-1">
                              <p className="text-sm font-medium">New user project created</p>
                              <p className="text-[10px] text-muted-foreground">2 hours ago</p>
                           </div>
                        </div>
                    ))}
                 </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
`.trim();

export const sampleCodeDashboardNext = '"use client"\n\n' + sampleCodeDashboard;

export const sampleCodeDashboardHtml = `<div class="flex h-screen bg-zinc-50 font-sans">
  <div class="w-64 bg-white border-r p-6 flex flex-col gap-6">
    <div class="flex items-center gap-2 font-bold"><div class="w-7 h-7 bg-black text-white rounded flex items-center justify-center">M</div>MoupUI</div>
    <nav class="flex flex-col gap-1">
      <div class="px-3 py-2 bg-zinc-100 rounded-md font-medium text-sm">Dashboard</div>
      <div class="px-3 py-2 text-sm text-zinc-500">Users</div>
    </nav>
  </div>
  <div class="flex-1 p-8 overflow-auto">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold">Analytics</h1>
      <button class="bg-black text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm">New Report</button>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <div class="bg-white border p-6 rounded-xl shadow-sm">
        <p class="text-sm text-zinc-500 font-medium mb-1">Total Revenue</p>
        <h3 class="text-3xl font-bold">$42,300</h3>
      </div>
    </div>
  </div>
</div>`;
