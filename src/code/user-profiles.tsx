import { useState } from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import { Textarea } from "@/components/ui-shadcn/textarea";
import { Switch } from "@/components/ui-shadcn/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback } from "@/components/ui-shadcn/avatar";
import { Badge } from "@/components/ui-shadcn/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn/select";

// ─── User Profile Page ────────────────────────────────────────────────────────
export const UserProfilePage = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="overflow-hidden">
        {/* Cover */}
        <div className="h-24 bg-gradient-to-r from-slate-700 to-slate-900 relative">
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs">
              Pro Member
            </Badge>
          </div>
        </div>

        {/* Avatar + Info */}
        <div className="px-6 pb-4">
          <div className="flex items-end justify-between -mt-10 mb-4">
            <Avatar className="w-20 h-20 border-4 border-card ring-2 ring-border">
              <AvatarFallback className="text-2xl font-semibold text-muted-foreground">
                AJ
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" onClick={() => setEditing(!editing)}>
              {editing ? "Cancel" : "✏️ Edit Profile"}
            </Button>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-semibold">Alex Johnson</h2>
            <p className="text-muted-foreground text-sm">
              Senior UI/UX Designer at PixelCraft Studio
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Tailwind", "Figma", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {editing ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>First Name</Label>
                  <Input defaultValue="Alex" />
                </div>
                <div className="space-y-1.5">
                  <Label>Last Name</Label>
                  <Input defaultValue="Johnson" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Email</Label>
                <Input defaultValue="alex@pixelcraft.io" type="email" />
              </div>
              <div className="space-y-1.5">
                <Label>Job Title</Label>
                <Input defaultValue="Senior UI/UX Designer" />
              </div>
              <div className="space-y-1.5">
                <Label>Bio</Label>
                <Textarea
                  defaultValue="Passionate about building beautiful, accessible interfaces. 7 years in product design."
                  className="resize-none"
                  rows={3}
                />
              </div>
              <Button>Save Changes</Button>
            </form>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Projects", value: "48" },
                { label: "Followers", value: "2.4K" },
                { label: "Following", value: "183" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/40">
                  <p className="text-xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
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
    <div className="w-full max-w-xl mx-auto space-y-4">
      {/* Security */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Security</CardTitle>
          <CardDescription>Manage your password and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Current Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>New Password</Label>
              <Input type="password" placeholder="New password" />
            </div>
            <div className="space-y-1.5">
              <Label>Confirm</Label>
              <Input type="password" placeholder="Confirm" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Notifications</CardTitle>
          <CardDescription>Control how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              key: "email" as const,
              label: "Email Notifications",
              desc: "Updates, activity, and weekly digest",
            },
            { key: "push" as const, label: "Push Notifications", desc: "Real-time browser alerts" },
            {
              key: "marketing" as const,
              label: "Marketing Emails",
              desc: "Product news and special offers",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
            >
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch
                checked={notifications[item.key]}
                onCheckedChange={(v) => setNotifications((prev) => ({ ...prev, [item.key]: v }))}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1.5">
            <Label>Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["English", "Spanish", "French", "German", "Japanese"].map((lang, i) => (
                  <SelectItem key={lang} value={["en", "es", "fr", "de", "ja"][i]}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Timezone</Label>
            <Select defaultValue="utc7">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">UTC-8 Pacific</SelectItem>
                <SelectItem value="utc-5">UTC-5 Eastern</SelectItem>
                <SelectItem value="utc0">UTC+0 London</SelectItem>
                <SelectItem value="utc7">UTC+7 Jakarta</SelectItem>
                <SelectItem value="utc9">UTC+9 Tokyo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <button className="text-sm text-muted-foreground hover:text-destructive underline transition-colors">
            Delete Account
          </button>
          <Button>Save Settings</Button>
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
      status: "Completed",
      variant: "bg-green-50 text-green-700",
    },
    {
      id: "#ORD-8820",
      date: "Feb 15, 2025",
      amount: "$79",
      status: "Processing",
      variant: "bg-blue-50 text-blue-700",
    },
    {
      id: "#ORD-8818",
      date: "Feb 10, 2025",
      amount: "$249",
      status: "Shipped",
      variant: "bg-yellow-50 text-yellow-800",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Welcome banner */}
      <Card className="bg-slate-900 text-white border-0">
        <CardContent className="pt-5 pb-5 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Welcome back
            </p>
            <h2 className="text-xl font-semibold mt-1 text-white">Alex Johnson 👋</h2>
            <p className="text-slate-400 text-sm mt-1">Member since Jan 2024 · Pro Plan</p>
          </div>
          <Avatar className="w-14 h-14">
            <AvatarFallback className="bg-slate-700 text-white font-semibold text-lg">
              AJ
            </AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Orders", value: "24", icon: "📦" },
          { label: "Total Spent", value: "$1.2K", icon: "💳" },
          { label: "Saved Items", value: "17", icon: "❤️" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-4 pb-4">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-xl font-semibold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Recent Orders</CardTitle>
          <Button variant="outline" size="sm" className="text-xs h-7">
            View all
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
            >
              <div>
                <p className="font-medium text-sm">{order.id}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-sm">{order.amount}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.variant}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
