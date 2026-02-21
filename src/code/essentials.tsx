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
  Info,
  ArrowRight,
  Book,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";

// ─── Footer Components ───
export const SimpleFooter = () => (
  <footer className="w-full bg-white border-t py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1 space-y-4">
        <h3 className="text-xl font-bold tracking-tight">MoupUI.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Premium UI components for the modern web. Built with focus on accessibility and
          performance.
        </p>
        <div className="flex gap-4 pt-2">
          {[Twitter, Github, Mail].map((Icon, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-zinc-100 transition-colors"
            >
              <Icon size={18} />
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer transition-colors">Components</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Templates</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Design Kit</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer transition-colors">Docs</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Community</li>
            <li className="hover:text-foreground cursor-pointer transition-colors">Changelog</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1 space-y-4">
        <h4 className="font-semibold text-sm text-foreground">Subscribe</h4>
        <div className="flex gap-2">
          <Input
            placeholder="email@example.com"
            className="h-9 bg-zinc-50 border-none focus-visible:ring-1"
          />
          <Button size="sm">Join</Button>
        </div>
        <p className="text-[10px] text-muted-foreground">Monthly updates on new components.</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t flex flex-col md:flex-row justify-between gap-4">
      <span className="text-xs text-muted-foreground">© 2024 MoupUI. All rights reserved.</span>
      <div className="flex gap-6 text-xs text-muted-foreground">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

export const CenteredFooter = () => (
  <footer className="w-full bg-zinc-50 border-t py-16 px-6">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h3 className="text-2xl font-bold tracking-tight">MoupUI.</h3>
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground font-medium">
        <a href="#" className="hover:text-foreground transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Components
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Showcase
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Github
        </a>
      </nav>
      <div className="flex justify-center gap-2">
        {[Twitter, Github, Mail].map((Icon, i) => (
          <Button
            key={i}
            variant="outline"
            className="h-10 w-10 border rounded-full bg-white text-muted-foreground hover:text-foreground"
          >
            <Icon size={18} />
          </Button>
        ))}
      </div>
      <div className="pt-8 border-t border-zinc-200">
        <p className="text-xs text-muted-foreground">
          © 2024 UI Library. Built by professionals for developers.
        </p>
      </div>
    </div>
  </footer>
);

// ─── Help Center Components ───
export const HelpSearchHero = () => (
  <div className="w-full bg-primary py-12 md:py-20 px-8 rounded-3xl text-center space-y-8 relative overflow-hidden text-primary-foreground border shadow-lg">
    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How can we help?</h2>
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
        <Input
          placeholder="Search documentation..."
          className="h-14 pl-12 pr-4 text-lg border-none rounded-2xl bg-white text-zinc-900 focus-visible:ring-offset-2 ring-primary"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {["Account", "Billing", "Components", "Security"].map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 cursor-pointer border-transparent"
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
    { title: "Getting Started", icon: Book, items: 12 },
    { title: "Account & Billing", icon: ArrowRight, items: 8 },
    { title: "Technical Support", icon: LifeBuoy, items: 15 },
    { title: "Community Help", icon: MessageCircle, items: 23 },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
      {categories.map((cat, i) => (
        <Card
          key={i}
          className="group cursor-pointer hover:border-primary transition-all bg-white border shadow-sm"
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 border flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <cat.icon size={20} />
            </div>
            <h4 className="text-base font-semibold mb-1">{cat.title}</h4>
            <p className="text-xs text-muted-foreground font-medium">{cat.items} Articles</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ─── Notification Components ───
export const NotificationCenterMock = () => (
  <Card className="w-full max-w-md border bg-white shadow-sm overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between border-b py-3 px-4">
      <div className="flex items-center gap-2">
        <Bell size={18} className="text-primary" />
        <CardTitle className="text-sm font-semibold">Notifications</CardTitle>
        <Badge className="bg-destructive text-destructive-foreground border-none text-[10px] h-4 min-w-[16px] flex items-center justify-center p-0 rounded-full">
          3
        </Badge>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 text-[10px] font-medium text-muted-foreground hover:bg-zinc-100"
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
          status: "success",
          icon: CheckCircle2,
        },
        {
          title: "Billing Update",
          text: "Your Pro subscription has been renewed.",
          time: "1h ago",
          status: "info",
          icon: Info,
        },
      ].map((n, i) => (
        <div
          key={i}
          className="p-4 border-b last:border-0 h flex gap-4 hover:bg-zinc-50 transition-colors cursor-pointer group"
        >
          <div
            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${
              n.status === "success"
                ? "bg-green-50 text-green-600 border-green-100"
                : "bg-blue-50 text-blue-600 border-blue-100"
            }`}
          >
            <n.icon size={18} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {n.title}
              </h4>
              <span className="text-[10px] text-muted-foreground">{n.time}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{n.text}</p>
          </div>
        </div>
      ))}
    </CardContent>
    <div className="p-2 border-t text-center">
      <Button variant="ghost" className="w-full text-xs font-medium gap-2">
        View all <ArrowRight size={14} />
      </Button>
    </div>
  </Card>
);
