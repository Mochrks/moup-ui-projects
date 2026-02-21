// ─── User Profile Code Strings ────────────────────────────────────────────────

export const sampleCodeUserProfile = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const UserProfilePage = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border shadow-sm rounded-xl overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-zinc-800 to-zinc-950 relative">
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs">Pro Member</Badge>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex items-end justify-between -mt-10 mb-6">
            <Avatar className="w-20 h-20 border-4 border-white shadow-sm transition-transform hover:scale-105">
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-2xl">AJ</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditing(!editing)}
              className="rounded-full px-4"
            >
              {editing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Alex Johnson</h2>
            <p className="text-muted-foreground text-sm">Senior UI/UX Designer at PixelCraft Studio</p>
          </div>
          {editing ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Johnson" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea className="resize-none" rows={3} />
              </div>
              <Button>Save Changes</Button>
            </form>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {[{ label: "Projects", value: "48" }, { label: "Followers", value: "2.4K" }, { label: "Following", value: "183" }].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl border bg-zinc-50 hover:bg-zinc-100/50 transition-colors">
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};`.trim();

export const sampleCodeAccountSettings = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const AccountSettingsPage = () => {
  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <Card className="border shadow-sm overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Security</CardTitle>
          <CardDescription>Manage your authentication settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Current Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>Confirm</Label>
              <Input type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-zinc-50 border-t py-3">
          <Button size="sm">Update Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
};`.trim();

export const sampleCodeUserDashboard = `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "#ORD-8821", date: "Feb 18, 2025", amount: "$149", status: "Delivered" },
  { id: "#ORD-8820", date: "Feb 15, 2025", amount: "$79", status: "In Transit" },
];

export const UserDashboard = () => (
  <div className="w-full max-w-2xl mx-auto space-y-6">
    <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex items-center justify-between shadow-lg">
      <div>
        <p className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider">Welcome back</p>
        <h2 className="text-2xl font-bold mt-1">Alex Johnson 👋</h2>
        <p className="text-primary-foreground/70 text-sm mt-1">Premium Member · Since 2024</p>
      </div>
      <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
        <span className="font-bold text-xl">AJ</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[{ label: "Total Orders", value: "24" }, { label: "Total Spent", value: "$3.5K" }, { label: "Saved Items", value: "12" }].map((s) => (
        <Card key={s.label} className="border shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-muted-foreground mb-1">{s.label}</p>
            <h3 className="text-2xl font-bold">{s.value}</h3>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="border shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="ghost" size="sm" className="h-8">View all</Button>
      </CardHeader>
      <CardContent className="p-0">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 border-t hover:bg-zinc-50 transition-colors">
            <div>
              <p className="font-semibold text-sm">{order.id}</p>
              <p className="text-xs text-muted-foreground">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm">{order.amount}</p>
              <Badge variant="outline" className="text-[10px] uppercase font-bold">{order.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);`.trim();

export const sampleCodeProfileHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Profile — MoupUI</title></head>
<body style="background:#fafafa;font-family:system-ui;margin:0;padding:2rem;display:flex;justify-content:center;">
  <div style="width:100%;max-width:600px;background:white;border:1px solid #e5e7eb;border-radius:1rem;box-shadow:0 1px 3px rgba(0,0,0,0.1);overflow:hidden;">
    <div style="height:120px;background:#18181b;"></div>
    <div style="padding:0 1.5rem 1.5rem;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:-2.5rem;margin-bottom:1.5rem;">
        <div style="width:5rem;height:5rem;border-radius:50%;background:#18181b;border:4px solid white;color:white;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1.5rem;">AJ</div>
        <button style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:9999px;font-weight:500;background:white;cursor:pointer;font-size:0.875rem;">Edit Profile</button>
      </div>
      <h2 style="font-weight:700;font-size:1.5rem;margin:0;">Alex Johnson</h2>
      <p style="color:#71717a;font-size:0.875rem;margin:0.25rem 0 1.5rem;">Senior Software Engineer</p>
    </div>
  </div>
</body>
</html>`;
