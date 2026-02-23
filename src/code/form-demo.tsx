import { Input } from "@/components/ui-shadcn/input";
import { Button } from "@/components/ui-shadcn/button";
import { Checkbox } from "@/components/ui-shadcn/checkbox";
import { Switch } from "@/components/ui-shadcn/switch";
import { Textarea } from "@/components/ui-shadcn/textarea";
import { Label } from "@/components/ui-shadcn/label";
import {
  User,
  Mail,
  Lock,
  Globe,
  CreditCard,
  Bell,
  MessageSquare,
  MapPin,
  ChevronRight,
  Shield,
  Smartphone,
  AtSign,
  Briefcase,
  Building2,
  CheckCircle2,
} from "lucide-react";

// Using base components instead of Form wrappers to avoid Context errors in layouts
// and improving the visual appeal as requested.

// 1. Login with Social
export const FormLogin = () => (
  <div className="space-y-6 w-full max-w-sm p-8 border-2 border-black rounded-3xl bg-white shadow-[8px_8px_0_0_#000]">
    <div className="space-y-2 text-center">
      <div className="w-12 h-12 bg-main border-2 border-black rounded-xl mx-auto flex items-center justify-center shadow-[4px_4px_0_0_#000]">
        <Lock className="text-white" size={24} />
      </div>
      <h3 className="font-heading text-2xl uppercase tracking-tighter">Secure Login</h3>
      <p className="text-xs text-muted-foreground font-medium">
        Connect with your professional account
      </p>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="font-bold flex items-center gap-2">
          <Mail size={14} /> Email Address
        </Label>
        <Input
          placeholder="name@moupui.com"
          className="border-2 border-black focus-visible:ring-0 focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] transition-transform"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="font-bold flex items-center gap-2">
            <Lock size={14} /> Password
          </Label>
          <button className="text-[10px] font-bold hover:underline">Forgot?</button>
        </div>
        <Input
          type="password"
          placeholder="••••••••"
          className="border-2 border-black focus-visible:ring-0"
        />
      </div>
      <Button className="w-full border-2 border-black bg-main hover:bg-mainAccent text-white shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-heading uppercase h-12">
        Enter Dashboard
      </Button>
    </div>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t-2 border-black"></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-white px-2 font-bold">Or continue with</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="border-2 border-black font-bold h-11">
        Google
      </Button>
      <Button variant="outline" className="border-2 border-black font-bold h-11">
        GitHub
      </Button>
    </div>
  </div>
);

// 2. Profile Details with Avatar Placeholder
export const FormProfile = () => (
  <div className="space-y-6 w-full p-6 border-2 border-black rounded-3xl bg-zinc-50 tracking-tight">
    <div className="flex items-center gap-4 border-b-2 border-black pb-6 mb-2">
      <div className="w-16 h-16 rounded-2xl border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0_0_#000]">
        <User size={32} className="text-main" />
      </div>
      <div>
        <h4 className="font-heading text-lg leading-none">Public Identity</h4>
        <p className="text-xs text-muted-foreground">Manage your visibility across platforms</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-5">
      <div className="space-y-2 col-span-1">
        <Label className="font-bold">First Name</Label>
        <Input placeholder="John" className="bg-white border-2 border-black rounded-xl" />
      </div>
      <div className="space-y-2 col-span-1">
        <Label className="font-bold">Last Name</Label>
        <Input placeholder="Doe" className="bg-white border-2 border-black rounded-xl" />
      </div>
      <div className="space-y-2 col-span-2">
        <Label className="font-bold">Username</Label>
        <div className="flex border-2 border-black rounded-xl overflow-hidden bg-white">
          <div className="bg-black text-white px-4 flex items-center text-xs font-bold tracking-tighter">
            sh.ui/
          </div>
          <Input
            placeholder="johndoe"
            className="border-0 rounded-none focus-visible:ring-0 flex-1 px-4"
          />
          <div className="px-3 flex items-center bg-white">
            <CheckCircle2 className="text-green-500" size={16} />
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground italic">
          Members will find you using this handle.
        </p>
      </div>
    </div>
    <Button className="w-full border-2 border-black rounded-xl font-bold bg-white text-black hover:bg-zinc-100">
      Save Identity
    </Button>
  </div>
);

// 3. Security & 2FA
export const FormSecurity = () => (
  <div className="space-y-6 w-full max-w-sm">
    <div className="p-5 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0_0_#000] space-y-4">
      <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
        <Shield className="text-main" size={20} />
        <span className="font-heading uppercase text-sm tracking-wider">Access Control</span>
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-bold text-muted-foreground uppercase">
          Current Password
        </Label>
        <Input type="password" placeholder="••••••••" className="border-2 border-black" />
      </div>
      <div className="space-y-2 pt-2 border-t border-dashed">
        <Label className="text-xs font-bold text-muted-foreground uppercase">
          New Secure Password
        </Label>
        <Input type="password" className="border-2 border-black" />
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${i <= 2 ? "bg-yellow-400" : "bg-zinc-100"}`}
            ></div>
          ))}
        </div>
        <p className="text-[9px] text-muted-foreground font-medium">
          Include symbols like (!@#) for maximum safety.
        </p>
      </div>
    </div>
    <Button
      variant={"secondary"}
      className="w-full border-2 border-black rounded-xl h-12 shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      Enable 2FA Protection
    </Button>
  </div>
);

// 4. Billing & Contact info
export const FormBilling = () => (
  <div className="space-y-6 w-full p-6 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#88aaee]">
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center text-main">
        <Smartphone size={20} />
        <span className="font-heading uppercase text-sm">Billing Details</span>
      </div>
      <Building2 size={18} className="text-zinc-300" />
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="font-bold flex items-center gap-2">
          <MapPin size={14} /> Business Address
        </Label>
        <Input placeholder="Suite 405, Moonside Ave" className="border-2 border-black" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-2 col-span-1">
          <Label className="text-[10px] font-bold uppercase text-muted-foreground">City</Label>
          <Input placeholder="Jakarta" className="border-2 border-black" />
        </div>
        <div className="space-y-2 col-span-1">
          <Label className="text-[10px] font-bold uppercase text-muted-foreground">Region</Label>
          <Input placeholder="DKI" className="border-2 border-black" />
        </div>
        <div className="space-y-2 col-span-1">
          <Label className="text-[10px] font-bold uppercase text-muted-foreground">Zip</Label>
          <Input placeholder="12345" className="border-2 border-black" />
        </div>
      </div>
      <div className="p-3 bg-main/5 border-2 border-dashed border-main/30 rounded-xl flex items-center gap-3 text-xs text-mainAccent font-medium">
        <Globe size={16} /> VAT Registration automatically applied based on region.
      </div>
    </div>
  </div>
);

// 5. Checkbox Group with Cards
export const FormAgreement = () => (
  <div className="space-y-4 w-full max-w-sm">
    <h5 className="font-heading text-sm uppercase px-1">Legal Declarations</h5>
    <div className="space-y-3">
      {[
        { id: "t1", title: "Terms of Service", desc: "Accept our usage guidelines and policy." },
        { id: "t2", title: "Data Processing", desc: "Allow us to handle data for analytics." },
        { id: "t3", title: "Newsletter", desc: "Receive weekly product updates." },
      ].map((item) => (
        <div
          key={item.id}
          className="p-4 border-2 border-black rounded-2xl bg-white flex items-start gap-4 hover:bg-zinc-50 transition-colors cursor-pointer group"
        >
          <Checkbox
            id={item.id}
            className="mt-1 border-2 border-black data-[state=checked]:bg-main data-[state=checked]:border-black"
          />
          <label htmlFor={item.id} className="grid gap-0.5 leading-none cursor-pointer">
            <span className="text-sm font-bold group-hover:text-main transition-colors">
              {item.title}
            </span>
            <span className="text-[10px] text-muted-foreground font-medium">{item.desc}</span>
          </label>
        </div>
      ))}
    </div>
    <Button className="w-full bg-black text-white rounded-2xl h-12 hover:bg-main hover:text-black transition-all border-2 border-black font-heading uppercase">
      Proceed to Workspace
    </Button>
  </div>
);

// 6. Modern Settings Panel
export const FormSettings = () => (
  <div className="w-full border-2 border-black rounded-[2rem] p-6 bg-white overflow-hidden relative">
    <div className="absolute top-0 right-0 p-4 opacity-5">
      <Bell size={80} />
    </div>
    <div className="mb-6">
      <h4 className="font-heading text-xl uppercase tracking-tighter">Notification Hub</h4>
      <p className="text-xs text-muted-foreground font-bold">Configure how we talk to you</p>
    </div>
    <div className="space-y-2">
      {[
        { label: "Product Updates", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
        { label: "Security Logs", icon: Shield, color: "bg-yellow-100 text-yellow-600" },
        { label: "Critical Alerts", icon: Bell, color: "bg-red-100 text-red-600" },
        { label: "Team Messages", icon: MessageSquare, color: "bg-main/20 text-mainAccent" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between p-3 hover:bg-zinc-50 rounded-2xl transition-all border border-transparent hover:border-black/5"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border-2 border-black ${item.color}`}>
              <item.icon size={16} />
            </div>
            <span className="text-sm font-bold tracking-tight">{item.label}</span>
          </div>
          <Switch className="data-[state=checked]:bg-main border-2 border-black" />
        </div>
      ))}
    </div>
  </div>
);

// 7. Interactive Feedback
export const FormFeedback = () => (
  <div className="space-y-5 w-full bg-main p-8 border-2 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
    <div className="space-y-1 text-white">
      <h4 className="font-heading text-xl uppercase italic">Drop a Note!</h4>
      <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">
        We value your brilliant ideas
      </p>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[140px] border-2 border-black bg-white rounded-2xl p-4 font-medium focus-visible:ring-0 placeholder:text-zinc-400 shadow-[4px_4px_0_0_#000]"
        />
        <div className="flex justify-between items-center px-1">
          <span className="text-[10px] text-white font-black">STRIKE: 0/500</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full bg-white opacity-40 hover:opacity-100"
              ></button>
            ))}
          </div>
        </div>
      </div>
      <Button className="w-full bg-white text-black border-2 border-black hover:bg-black hover:text-white rounded-2xl font-heading h-12 uppercase flex justify-between px-6 transition-all group">
        Send Dispatch{" "}
        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
      </Button>
    </div>
  </div>
);

// 8. Contact with Badges
export const FormContact = () => (
  <div className="space-y-4 w-full p-6 border-2 border-black rounded-3xl bg-zinc-950 text-zinc-400">
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1.5 flex flex-col">
        <Label className="text-[10px] font-black uppercase text-zinc-600 pl-1 mb-1">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-2.5 text-zinc-700" size={16} />
          <Input
            placeholder="Alex Rivers"
            className="bg-zinc-900 border-zinc-800 text-white pl-10 h-11 focus-visible:border-main focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="space-y-1.5 flex flex-col">
        <Label className="text-[10px] font-black uppercase text-zinc-600 pl-1 mb-1">
          Profession
        </Label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-2.5 text-zinc-700" size={16} />
          <Input
            placeholder="Product Designer"
            className="bg-zinc-900 border-zinc-800 text-white pl-10 h-11 focus-visible:border-main focus-visible:ring-0"
          />
        </div>
      </div>
    </div>
    <div className="space-y-1.5 flex flex-col">
      <Label className="text-[10px] font-black uppercase text-zinc-600 pl-1 mb-1">
        Direct Contact
      </Label>
      <div className="relative">
        <AtSign className="absolute left-3 top-2.5 text-zinc-700" size={16} />
        <Input
          placeholder="alex@creatives.co"
          type="email"
          className="bg-zinc-900 border-zinc-800 text-white pl-10 h-11 focus-visible:border-main focus-visible:ring-0"
        />
      </div>
    </div>
    <div className="pt-2 border-t border-zinc-900">
      <p className="text-[10px] italic">
        By submitting, you agree to our{" "}
        <span className="text-zinc-200 underline cursor-pointer">Encryption Standards</span>.
      </p>
    </div>
  </div>
);

// 9. Premium Payment Card Interaction
export const FormCredit = () => (
  <div className="p-6 bg-zinc-900 text-white rounded-[2rem] border-2 border-black space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
      <div className="space-y-1">
        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">
          Active Plan
        </p>
        <p className="text-sm font-heading italic">ULTIMATE PLUS</p>
      </div>
      <div className="w-12 h-6 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
        <CreditCard size={16} />
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-[10px] font-bold text-white/60">NUMERIC SEQUENCE</Label>
        <Input
          className="bg-transparent border-t-0 border-x-0 border-b-2 border-white/20 rounded-none text-xl tracking-[0.2em] px-0 h-12 focus-visible:ring-0 focus-visible:border-main transition-colors"
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label className="text-[10px] font-bold text-white/60 uppercase">EXPIRATION</Label>
          <Input
            className="bg-transparent border-t-0 border-x-0 border-b-2 border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-main"
            placeholder="MM/YY"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[10px] font-bold text-white/60 uppercase">SECRET CVV</Label>
          <Input
            className="bg-transparent border-t-0 border-x-0 border-b-2 border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-main"
            placeholder="123"
          />
        </div>
      </div>
    </div>
    <Button className="w-full bg-main hover:bg-mainAccent text-white border-2 border-black font-heading rounded-2xl h-14 shadow-[4px_4px_0_0_#000] active:translate-y-1 transition-all">
      Authorize $299.00
    </Button>
  </div>
);

// 10. Settings Table Style
export const FormHorizontal = () => (
  <div className="space-y-0 border-2 border-black rounded-3xl overflow-hidden bg-white">
    <div className="bg-zinc-50 p-6 border-b-2 border-black">
      <h4 className="font-heading text-xl uppercase">Profile Architect</h4>
      <p className="text-xs text-muted-foreground font-bold">
        Configure how you appear in engine searches
      </p>
    </div>
    <div className="p-6 space-y-8">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center group">
        <div className="w-full sm:w-48">
          <Label className="text-sm font-heading group-hover:text-main transition-colors">
            Digital Handle
          </Label>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            Visible to all registered users
          </p>
        </div>
        <Input
          placeholder="Johnathan_X"
          className="flex-1 border-2 border-black bg-zinc-50 rounded-xl h-12"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center opacity-60">
        <div className="w-full sm:w-48">
          <Label className="text-sm font-heading">Primary Link</Label>
          <p className="text-[10px] text-muted-foreground mt-0.5">Cannot be modified for 30 days</p>
        </div>
        <Input
          value="john@metahub.io"
          disabled
          className="flex-1 border-2 border-black bg-zinc-100 rounded-xl h-12"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="w-full sm:w-48">
          <Label className="text-sm font-heading">Regional Presence</Label>
        </div>
        <div className="flex-1 flex gap-2">
          {["South", "West", "Central"].map((r) => (
            <Button
              key={r}
              variant="outline"
              className={`border-2 border-black rounded-xl font-bold flex-1 h-11 ${r === "South" ? "bg-main text-white shadow-[2px_2px_0_0_#000]" : ""}`}
            >
              {r}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
