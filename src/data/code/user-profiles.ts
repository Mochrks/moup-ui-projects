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
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-black to-gray-800 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,225,53,0.3),transparent)]" />
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#ffe135] text-black border-2 border-black font-black text-xs">Pro Member</Badge>
          </div>
        </div>
        <div className="px-6 pb-4">
          <div className="flex items-end justify-between -mt-10 mb-4">
            <Avatar className="w-20 h-20 border-4 border-white shadow-[3px_3px_0_0_#000]">
              <AvatarFallback className="bg-[#ffe135] text-black font-black text-2xl">AJ</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              onClick={() => setEditing(!editing)}
              className="border-2 border-black font-bold shadow-[2px_2px_0_0_#000] hover:shadow-none transition-all text-sm"
            >
              {editing ? "Cancel" : "✏️ Edit Profile"}
            </Button>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-black">Alex Johnson</h2>
            <p className="text-muted-foreground text-sm">Senior UI/UX Designer at PixelCraft Studio</p>
          </div>
          {editing ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs font-black uppercase tracking-wide">First Name</Label>
                  <Input defaultValue="Alex" className="border-2 border-black" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-black uppercase tracking-wide">Last Name</Label>
                  <Input defaultValue="Johnson" className="border-2 border-black" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-black uppercase tracking-wide">Bio</Label>
                <Textarea className="border-2 border-black resize-none" rows={3} />
              </div>
              <Button className="font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-[#ffe135] text-black">
                Save Changes →
              </Button>
            </form>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {[{ label: "Projects", value: "48" }, { label: "Followers", value: "2.4K" }, { label: "Following", value: "183" }].map((s) => (
                <div key={s.label} className="text-center p-3 rounded-xl border-2 border-black bg-gray-50 shadow-[2px_2px_0_0_#000]">
                  <p className="text-2xl font-black">{s.value}</p>
                  <p className="text-xs text-muted-foreground font-bold">{s.label}</p>
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const AccountSettingsPage = () => {
  const [notifications, setNotifications] = useState({ email: true, push: false, marketing: true });

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
        <CardHeader className="pb-3">
          <CardTitle className="font-black text-lg">🔒 Security</CardTitle>
          <CardDescription>Manage your password and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-black uppercase">Current Password</Label>
            <Input type="password" placeholder="••••••••" className="border-2 border-black" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-black uppercase">New Password</Label>
              <Input type="password" placeholder="New password" className="border-2 border-black" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-black uppercase">Confirm</Label>
              <Input type="password" placeholder="Confirm" className="border-2 border-black" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="font-black border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none transition-all bg-black text-white">
            Update Password →
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};`.trim();

export const sampleCodeUserDashboard = `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  { id: "#MUI-8821", date: "Feb 18, 2025", amount: "$149", status: "Completed", color: "bg-[#d1fae5] text-green-700" },
  { id: "#MUI-8820", date: "Feb 15, 2025", amount: "$79", status: "Processing", color: "bg-[#dbeafe] text-blue-700" },
  { id: "#MUI-8818", date: "Feb 10, 2025", amount: "$249", status: "Shipped", color: "bg-[#fef3c7] text-yellow-800" },
];

export const UserDashboard = () => (
  <div className="w-full max-w-2xl mx-auto space-y-4">
    <div className="bg-black text-white rounded-xl border-2 border-black p-5 flex items-center justify-between">
      <div>
        <p className="text-white/60 text-xs font-bold uppercase">Welcome back</p>
        <h2 className="text-xl font-black mt-1">Alex Johnson 👋</h2>
        <p className="text-white/60 text-sm mt-1">Member since Jan 2024 · Pro Plan</p>
      </div>
      <div className="w-14 h-14 rounded-xl bg-[#ffe135] flex items-center justify-center">
        <span className="text-black font-black text-2xl">AJ</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "Total Orders", value: "24", icon: "📦", color: "bg-[#dbeafe]" },
        { label: "Total Spent", value: "$1.2K", icon: "💳", color: "bg-[#fef3c7]" },
        { label: "Saved Items", value: "17", icon: "❤️", color: "bg-[#fce7f3]" },
      ].map((s) => (
        <div key={s.label} className={\`\${s.color} border-2 border-black rounded-xl p-4 shadow-[3px_3px_0_0_#000]\`}>
          <p className="text-2xl mb-1">{s.icon}</p>
          <p className="text-2xl font-black">{s.value}</p>
          <p className="text-xs font-bold text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="font-black text-lg">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-3 rounded-xl border-2 border-black bg-gray-50">
            <div>
              <p className="font-black text-sm">{order.id}</p>
              <p className="text-xs text-muted-foreground">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-black text-sm">{order.amount}</p>
              <span className={\`text-xs font-black px-2 py-0.5 rounded-full border border-black \${order.color}\`}>{order.status}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);`.trim();

export const sampleCodeProfileHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>User Profile — MoupUI</title></head>
<body style="background:#f9fafb;min-height:100vh;display:flex;align-items:center;justify-content:center;margin:0;padding:16px;">
  <div style="width:100%;max-width:600px;border:2px solid black;border-radius:12px;box-shadow:4px 4px 0 0 #000;overflow:hidden;background:white;">
    <div style="height:96px;background:linear-gradient(to right,#000,#1f2937);position:relative;"></div>
    <div style="padding:0 24px 24px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:-40px;margin-bottom:16px;">
        <div style="width:80px;height:80px;border-radius:50%;background:#ffe135;border:4px solid white;box-shadow:3px 3px 0 0 #000;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:24px;">AJ</div>
        <button style="padding:8px 16px;border:2px solid black;border-radius:8px;font-weight:700;background:white;cursor:pointer;box-shadow:2px 2px 0 0 #000;">✏️ Edit Profile</button>
      </div>
      <h2 style="font-weight:900;font-size:1.5rem;margin:0 0 4px;">Alex Johnson</h2>
      <p style="color:#6b7280;font-size:.875rem;margin:0;">Senior UI/UX Designer at PixelCraft Studio</p>
    </div>
  </div>
</body>
</html>`.trim();
