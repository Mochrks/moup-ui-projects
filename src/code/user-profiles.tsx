import { useState } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Label } from "@/components/ui-neobrutalism/label";
import { Textarea } from "@/components/ui-shadcn/textarea";
import { Switch } from "@/components/ui-neobrutalism/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui-neobrutalism/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-neobrutalism/avatar";
import { Badge } from "@/components/ui-neobrutalism/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-neobrutalism/select";
import { Zap, Shield, Globe, Terminal, Trash2, Activity, Server } from "lucide-react";

// ─── User Profile Page ────────────────────────────────────────────────────────
export const UserProfilePage = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className="overflow-hidden border-4 border-black shadow-[12px_12px_0_0_#000] rounded-[32px] bg-white">
        {/* Cover */}
        <div className="h-32 bg-indigo-400 border-b-4 border-black relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 right-4 animate-bounce">
            <Badge className="bg-black text-white border-2 border-white font-black uppercase italic text-[10px] shadow-[4px_4px_0_0_#000]">
              APEX_OPERATOR
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black" />
              <div className="w-3 h-3 rounded-full bg-[#ffe135] border-2 border-black" />
              <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black" />
            </div>
          </div>
        </div>

        {/* Avatar + Info */}
        <div className="px-8 pb-8">
          <div className="flex items-end justify-between -mt-12 mb-6">
            <div className="relative">
              <Avatar className="w-28 h-28 border-8 border-black shadow-[8px_8px_0_0_#000] rotate-3 transition-transform hover:rotate-0">
                <AvatarImage src="https://i.pravatar.cc/150?u=aj" />
                <AvatarFallback className="text-3xl font-black text-black bg-[#ffe135]">
                  AJ
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black text-white rounded-xl border-4 border-white flex items-center justify-center shadow-[4px_4px_0_0_#000]">
                <Zap size={18} fill="white" />
              </div>
            </div>
            <Button
              variant="neutral"
              className="h-12 border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "ABORT_REWRITE" : "REWRITE_ID_CARD"}
            </Button>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">
              ALEX_JOHNSON_CORE
            </h2>
            <p className="text-black/40 font-black uppercase italic text-xs tracking-widest flex items-center gap-2">
              <Terminal size={14} /> SENIOR_ARCHITECT @ PIXEL_CRAFT_GRID
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["REACT_PROTO", "TAILWIND_SYNC", "FIGMA_LEVEL", "TS_LOGIC"].map((t) => (
                <Badge
                  key={t}
                  className="px-4 py-1 bg-black text-white border-2 border-black font-black uppercase italic text-[10px] tracking-widest shadow-[3px_3px_0_0_#ffe135]"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {editing ? (
            <form
              className="space-y-6 pt-6 border-t-4 border-black/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1">
                    IDENT_NAME
                  </Label>
                  <Input
                    defaultValue="Alex"
                    className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1">
                    IDENT_SURNAME
                  </Label>
                  <Input
                    defaultValue="Johnson"
                    className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1">
                  RELAY_EMAIL
                </Label>
                <Input
                  defaultValue="alex@pixelcraft.io"
                  type="email"
                  className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1">
                  MANIFEST_MANIFEST_DESC
                </Label>
                <Textarea
                  defaultValue="Passionate about building beautiful, accessible interfaces. 7 years in product design."
                  className="resize-none border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0 min-h-[100px]"
                />
              </div>
              <Button className="w-full h-16 bg-black text-white border-2 border-black font-black uppercase italic text-xl shadow-[6px_6px_0_0_#ffe135] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                SYNCHRONIZE_DATA
              </Button>
            </form>
          ) : (
            <div className="grid grid-cols-3 gap-6 pt-6 border-t-4 border-black/5">
              {[
                { label: "NODES_DEPLOYED", value: "48", color: "bg-pink-400" },
                { label: "GRID_FOLLOWERS", value: "2.4K", color: "bg-[#ffe135]" },
                { label: "PULSE_NETWORK", value: "183", color: "bg-indigo-400" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`text-center p-6 border-4 border-black shadow-[6px_6px_0_0_#000] rounded-2xl ${stat.color} hover:-translate-y-1 transition-transform`}
                >
                  <p className="text-3xl font-black italic tracking-tighter leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-black uppercase italic text-black leading-tight tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// ─── Account Settings ─────────────────────────────────────────────────────────
export const AccountSettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });

  return (
    <div className="w-full max-w-xl mx-auto space-y-10 p-4">
      <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 border-b-8 border-black pb-4 inline-block">
        SYSTEM_CONFIG
      </h2>

      {/* Security */}
      <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-[32px] bg-white overflow-hidden">
        <CardHeader className="bg-zinc-50 border-b-4 border-black p-8">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <Shield className="text-indigo-600" /> SEC_PROTOCOL
          </CardTitle>
          <CardDescription className="font-bold uppercase italic text-[10px] tracking-widest mt-1">
            Manage encryption and auth vectors
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1 text-black/40">
              CURRENT_CIPHER
            </Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] focus-visible:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1 text-black/40">
                GENERATE_NEW_CIPHER
              </Label>
              <Input
                type="password"
                placeholder="IDENT_KEY"
                className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1 text-black/40">
                VERIFY_KEY
              </Label>
              <Input
                type="password"
                placeholder="RE_IDENT"
                className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] focus-visible:ring-0"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-8 pt-0">
          <Button className="w-full h-14 bg-black text-white border-2 border-black font-black uppercase italic text-lg shadow-[4px_4px_0_0_#ffe135] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            UPDATE_CIPHER_CORE
          </Button>
        </CardFooter>
      </Card>

      {/* Notifications */}
      <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-[32px] bg-white overflow-hidden">
        <CardHeader className="bg-zinc-50 border-b-4 border-black p-8">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <Activity className="text-pink-400" /> PULSE_REPORTS
          </CardTitle>
          <CardDescription className="font-bold uppercase italic text-[10px] tracking-widest mt-1">
            Manage synchronization frequency
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          {[
            {
              key: "email" as const,
              label: "RELAY_NOTIFICATIONS",
              desc: "ACTIVITY_LOGS AND WEEKLY_DELTA_REPORTS",
              color: "bg-indigo-400",
            },
            {
              key: "push" as const,
              label: "TERMINAL_ALERTS",
              desc: "REAL_TIME_NODE_ALERTS",
              color: "bg-[#ffe135]",
            },
            {
              key: "marketing" as const,
              label: "PROTOCOL_UPDATES",
              desc: "NEW_CORE_MODULES AND SECURITY_BULLETINS",
              color: "bg-pink-400",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-6 rounded-2xl border-4 border-black bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-1 transition-transform"
            >
              <div>
                <p className="font-black italic uppercase tracking-tighter text-sm leading-none">
                  {item.label}
                </p>
                <p className="text-[10px] font-black uppercase italic text-black/40 tracking-[0.05em] mt-2">
                  {item.desc}
                </p>
              </div>
              <Switch
                checked={notifications[item.key]}
                onCheckedChange={(v) => setNotifications((prev) => ({ ...prev, [item.key]: v }))}
                className="scale-125 border-4 border-black data-[state=checked]:bg-green-400"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-[32px] bg-white overflow-hidden">
        <CardHeader className="p-8 border-b-4 border-black">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <Globe className="text-[#ffe135]" /> REGION_LOGS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1 text-black/40">
              LANGUAGE_MODULE
            </Label>
            <Select defaultValue="en">
              <SelectTrigger className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] focus-visible:ring-0 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl overflow-hidden font-black uppercase italic">
                {["English_EN", "Spanish_ES", "French_FR", "German_DE", "Japanese_JA"].map(
                  (lang, i) => (
                    <SelectItem
                      key={lang}
                      value={["en", "es", "fr", "de", "ja"][i]}
                      className="hover:bg-[#ffe135] transition-colors py-3"
                    >
                      {lang}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="font-black uppercase italic text-[10px] tracking-widest ml-1 text-black/40">
              TIME_SECTOR
            </Label>
            <Select defaultValue="utc7">
              <SelectTrigger className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] focus-visible:ring-0 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl overflow-hidden font-black uppercase italic">
                <SelectItem value="utc-8" className="hover:bg-indigo-400 py-3">
                  UTC_8_PACIFIC
                </SelectItem>
                <SelectItem value="utc-5" className="hover:bg-indigo-400 py-3">
                  UTC_5_EASTERN
                </SelectItem>
                <SelectItem value="utc0" className="hover:bg-indigo-400 py-3">
                  UTC_0_LONDON
                </SelectItem>
                <SelectItem value="utc7" className="hover:bg-indigo-400 py-3">
                  UTC_7_JAKARTA
                </SelectItem>
                <SelectItem value="utc9" className="hover:bg-indigo-400 py-3">
                  UTC_9_TOKYO
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="p-8 bg-zinc-50 border-t-2 border-dashed border-black flex flex-col md:flex-row gap-6 justify-between items-center">
          <button className="flex items-center gap-2 font-black uppercase italic text-xs text-red-500 hover:bg-red-50 px-4 py-2 border-2 border-transparent hover:border-black rounded-lg transition-all group">
            <Trash2 size={16} /> WIPE_NODE_DATA
          </button>
          <Button className="h-14 px-8 bg-black text-white border-2 border-black font-black uppercase italic text-lg shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            SYNC_SETTINGS_CORE
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── User Dashboard ───────────────────────────────────────────────────────────
export const UserDashboard = () => {
  const orders = [
    {
      id: "#ORD-8821",
      date: "Feb 18, 2025",
      amount: "$149",
      status: "COMPLETED",
      variant: "bg-green-400 border-green-500",
    },
    {
      id: "#ORD-8820",
      date: "Feb 15, 2025",
      amount: "$79",
      status: "PROCESSING",
      variant: "bg-indigo-400 border-indigo-500",
    },
    {
      id: "#ORD-8818",
      date: "Feb 10, 2025",
      amount: "$249",
      status: "SHIPPED",
      variant: "bg-pink-400 border-pink-500",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-4">
      {/* Welcome banner */}
      <Card className="bg-black text-white border-4 border-black shadow-[12px_12px_0_0_#FFE135] rounded-[32px] overflow-hidden group">
        <CardContent className="p-10 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
            <Zap
              size={140}
              fill="white"
              className="rotate-12 group-hover:rotate-0 transition-transform"
            />
          </div>
          <div className="relative z-10">
            <p className="text-indigo-400 font-black uppercase italic text-[10px] tracking-[0.2em] mb-2">
              UNIT_PULSE_ACTIVE
            </p>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none text-white">
              HI_ALEX_JOHNSON_CORE 👋
            </h2>
            <p className="text-white/40 font-black uppercase italic text-xs mt-3 bg-white/5 border border-white/10 px-4 py-1 inline-block rounded-full">
              PRO_ENTITY // SINCE_JAN_2024
            </p>
          </div>
          <Avatar className="w-20 h-20 border-4 border-white shadow-[6px_6px_0_0_#FFE135] relative z-20">
            <AvatarImage src="https://i.pravatar.cc/150?u=aj" />
            <AvatarFallback className="bg-slate-700 text-white font-black text-2xl">
              AJ
            </AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { label: "LOGISTICS_SYNC", value: "24", icon: <Server size={24} />, color: "bg-white" },
          {
            label: "TOTAL_DEP_VAL",
            value: "$1.2K",
            icon: <Zap size={24} />,
            color: "bg-[#ffe135]",
          },
          {
            label: "SECURE_NODES",
            value: "17",
            icon: <Shield size={24} />,
            color: "bg-indigo-400",
          },
        ].map((s) => (
          <Card
            key={s.label}
            className={`border-4 border-black shadow-[8px_8px_0_0_#000] rounded-3xl ${s.color} hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group`}
          >
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-black text-white rounded-xl border-2 border-white flex items-center justify-center shadow-[4px_4px_0_0_#000] mb-4 group-hover:rotate-12 transition-transform">
                {s.icon}
              </div>
              <p className="text-3xl font-black italic tracking-tighter leading-none mb-1">
                {s.value}
              </p>
              <p className="text-[9px] font-black uppercase italic text-black/50 tracking-widest">
                {s.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-[32px] bg-white overflow-hidden">
        <CardHeader className="p-8 border-b-4 border-black bg-zinc-50 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
              DATA_TRANSMISSIONS
            </CardTitle>
            <p className="text-[10px] font-black uppercase italic text-black/40 mt-1 tracking-widest">
              Recent node deployments
            </p>
          </div>
          <Button
            variant="neutral"
            className="border-2 border-black font-black uppercase italic text-[10px] h-10 px-4 shadow-[4px_4px_0_0_#000] hover:shadow-none transition-all"
          >
            VIEW_LOGS
          </Button>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-6 rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0_0_#000] hover:translate-x-1 transition-transform group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center font-black italic text-xs shadow-[2px_2px_0_0_#000] ${order.variant.split(" ")[0]}`}
                >
                  <Activity size={20} className="text-black" />
                </div>
                <div>
                  <p className="font-black italic uppercase tracking-tighter text-base leading-none group-hover:text-indigo-600 transition-colors">
                    {order.id}
                  </p>
                  <p className="text-[10px] font-black uppercase italic text-black/40 tracking-widest mt-1">
                    {order.date}_TIMESTAMP
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-black italic tracking-tighter underline decoration-2 decoration-[#ffe135] underline-offset-4 mb-2">
                  {order.amount}
                </p>
                <Badge
                  className={`${order.variant} border-2 border-black text-black font-black uppercase italic text-[9px] px-3 shadow-[2px_2px_0_0_#000]`}
                >
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
