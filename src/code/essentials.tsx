import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-shadcn/card";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Badge } from "@/components/ui-shadcn/badge";
import {
  Github,
  Twitter,
  Mail,
  Search,
  Bell,
  CheckCircle2,
  AlertCircle,
  Info,
  ArrowRight,
  Book,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";

// ─── Footer Components ───
export const SimpleFooter = () => (
  <footer className="w-full bg-white border-t-4 border-black py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1 space-y-4">
        <h3 className="text-2xl font-black italic tracking-tighter">MoupUI.</h3>
        <p className="text-sm font-bold text-muted-foreground leading-relaxed">
          Premium neobrutalist UI components for the modern web. Built by designers for developers.
        </p>
        <div className="flex gap-4 pt-2">
          {[Twitter, Github, Mail].map((Icon, i) => (
            <Button
              key={i}
              variant="outline"
              size="icon"
              className="h-10 w-10 border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-y-[-2px] transition-all"
            >
              <Icon size={18} />
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-black text-xs uppercase tracking-widest text-[#6366F1]">Product</h4>
          <ul className="space-y-2 text-sm font-bold text-muted-foreground">
            <li className="hover:text-black cursor-pointer transition-colors">Components</li>
            <li className="hover:text-black cursor-pointer transition-colors">Templates</li>
            <li className="hover:text-black cursor-pointer transition-colors">Design Kit</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-black text-xs uppercase tracking-widest text-[#6366F1]">Resources</h4>
          <ul className="space-y-2 text-sm font-bold text-muted-foreground">
            <li className="hover:text-black cursor-pointer transition-colors">Docs</li>
            <li className="hover:text-black cursor-pointer transition-colors">Community</li>
            <li className="hover:text-black cursor-pointer transition-colors">Changelog</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1 space-y-4">
        <h4 className="font-black text-sm uppercase">Join our newsletter</h4>
        <div className="flex gap-2">
          <Input
            placeholder="email@example.com"
            className="border-2 border-black shadow-[2px_2px_0_0_#000]"
          />
          <Button className="bg-black text-[#ffe135] border-2 border-black shadow-[2px_2px_0_0_#000] font-black hover:bg-zinc-800 uppercase text-xs">
            Join
          </Button>
        </div>
        <p className="text-[10px] font-medium text-muted-foreground">
          No spam. Only updates on new components.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-zinc-100 flex flex-col md:flex-row justify-between gap-4">
      <span className="text-xs font-bold text-muted-foreground">
        © 2024 MoupUI. All rights reserved.
      </span>
      <div className="flex gap-6 text-xs font-bold text-muted-foreground">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Security</span>
      </div>
    </div>
  </footer>
);

export const CenteredFooter = () => (
  <footer className="w-full bg-[#ffe135] border-t-4 border-black py-16 px-6">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h3 className="text-4xl font-black uppercase tracking-tighter">MoupUI.</h3>
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-black uppercase tracking-widest">
        <a href="#" className="hover:underline decoration-4">
          Home
        </a>
        <a href="#" className="hover:underline decoration-4">
          Components
        </a>
        <a href="#" className="hover:underline decoration-4">
          Showcase
        </a>
        <a href="#" className="hover:underline decoration-4">
          Github
        </a>
        <a href="#" className="hover:underline decoration-4">
          Discord
        </a>
      </nav>
      <div className="flex justify-center gap-4">
        {[Twitter, Github, Mail].map((Icon, i) => (
          <Button
            key={i}
            className="h-12 w-12 bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-y-[-2px] transition-all"
          >
            <Icon size={20} />
          </Button>
        ))}
      </div>
      <div className="pt-8 border-t-2 border-black/10">
        <p className="text-xs font-black uppercase tracking-widest text-black/60">
          © 2024 Neobrutalist Design. Built with passion and black borders.
        </p>
      </div>
    </div>
  </footer>
);

// ─── Help Center Components ───
export const HelpSearchHero = () => (
  <div className="w-full bg-[#6366F1] border-4 border-black p-8 md:p-16 rounded-3xl shadow-[8px_8px_0_0_#000] text-center space-y-8 relative overflow-hidden">
    <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white/10 rounded-full blur-3xl" />
    <div className="relative z-10 max-w-2xl mx-auto space-y-4">
      <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">How can we help?</h2>
      <div className="relative max-w-xl mx-auto pt-4">
        <Search className="absolute left-4 top-[50%] -translate-y-[2px] h-5 w-5 text-zinc-400" />
        <Input
          placeholder="Search documentation, guides, and tutorials..."
          className="h-14 pl-12 pr-4 border-4 border-black shadow-[6px_6px_0_0_#000] text-lg font-bold rounded-2xl bg-white"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 pt-4">
        {["Account", "Billing", "Components", "Security"].map((tag) => (
          <Badge
            key={tag}
            className="bg-black/20 text-white border-2 border-white/30 px-3 py-1 font-bold text-xs hover:bg-black/40 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

export const SupportGrid = () => {
  const categories = [
    { title: "Getting Started", icon: Book, items: 12, color: "bg-green-400" },
    { title: "Account & Billing", icon: ArrowRight, items: 8, color: "bg-[#ffe135]" },
    { title: "Technical Support", icon: LifeBuoy, items: 15, color: "bg-blue-400" },
    { title: "Community Help", icon: MessageCircle, items: 23, color: "bg-purple-400" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
      {categories.map((cat, i) => (
        <Card
          key={i}
          className="border-2 border-black shadow-[4px_4px_0_0_#000] group cursor-pointer hover:translate-y-[-4px] transition-transform bg-white overflow-hidden"
        >
          <div className={`h-2 ${cat.color} border-b-2 border-black`} />
          <CardContent className="p-6">
            <div
              className={`w-12 h-12 rounded-xl border-2 border-black ${cat.color} flex items-center justify-center mb-4 shadow-[2px_2px_0_0_#000]`}
            >
              <cat.icon size={20} className="text-black" />
            </div>
            <h4 className="text-lg font-black mb-1">{cat.title}</h4>
            <p className="text-xs font-bold text-muted-foreground uppercase">
              {cat.items} Articles
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ─── Notification Components ───
export const NotificationCenterMock = () => (
  <Card className="w-full max-w-md border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between border-b-2 border-zinc-100 py-3">
      <div className="flex items-center gap-2">
        <Bell size={18} className="text-[#6366F1]" />
        <CardTitle className="text-sm font-black uppercase tracking-widest">
          Notifications
        </CardTitle>
        <Badge className="bg-red-500 text-white border-none text-[9px] h-4 min-w-[16px] flex items-center justify-center p-0">
          3
        </Badge>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 text-[10px] font-black uppercase text-muted-foreground hover:bg-zinc-50"
      >
        Mark All Read
      </Button>
    </CardHeader>
    <CardContent className="p-0 max-h-[400px] overflow-y-auto">
      {[
        {
          title: "Project Deployment",
          text: "Successfully deployed 'MyPortfolio' to production.",
          time: "2m ago",
          type: "success",
          icon: CheckCircle2,
        },
        {
          title: "Billing Update",
          text: "Your Pro subscription has been renewed.",
          time: "1h ago",
          type: "info",
          icon: Info,
        },
        {
          title: "Security Alert",
          text: "A new login was detected from a new device.",
          time: "5h ago",
          type: "error",
          icon: AlertCircle,
        },
      ].map((n, i) => (
        <div
          key={i}
          className="p-4 border-b border-zinc-100 flex gap-4 hover:bg-[#6366F1]/5 transition-colors group cursor-pointer"
        >
          <div
            className={`shrink-0 w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000] ${
              n.type === "success"
                ? "bg-green-400"
                : n.type === "error"
                  ? "bg-red-400"
                  : "bg-blue-400"
            }`}
          >
            <n.icon size={18} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-black group-hover:text-[#6366F1] transition-colors">
                {n.title}
              </h4>
              <span className="text-[10px] font-bold text-muted-foreground uppercase">
                {n.time}
              </span>
            </div>
            <p className="text-xs font-medium text-muted-foreground line-clamp-2 leading-relaxed">
              {n.text}
            </p>
          </div>
        </div>
      ))}
    </CardContent>
    <div className="p-3 bg-zinc-50 text-center border-t border-zinc-100">
      <Button variant="ghost" className="w-full text-xs font-black uppercase tracking-widest gap-2">
        See All Notifications <ArrowRight size={14} />
      </Button>
    </div>
  </Card>
);
