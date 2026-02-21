export const sampleCodeFooter = `
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Mail } from "lucide-react"

export function FooterDemo() {
  return (
    <footer className="w-full bg-white border-t-4 border-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-black">
        <div className="space-y-4">
          <h3 className="text-2xl font-black italic tracking-tighter">MoupUI.</h3>
          <p className="text-sm font-bold text-muted-foreground leading-relaxed">
            Premium neobrutalist UI components for the modern web. Built by designers for developers.
          </p>
          <div className="flex gap-4 pt-2">
            {[Twitter, Github, Mail].map((Icon, i) => (
              <Button key={i} variant="outline" size="icon" className="h-10 w-10 border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-y-[-2px] transition-all">
                <Icon size={18} />
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 col-span-2 gap-8">
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

        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase text-black">Join our newsletter</h4>
          <div className="flex gap-2">
            <Input placeholder="email@example.com" className="border-2 border-black shadow-[2px_2px_0_0_#000]" />
            <Button className="bg-black text-[#ffe135] border-2 border-black shadow-[2px_2px_0_0_#000] font-black hover:bg-zinc-800 uppercase text-xs">Join</Button>
          </div>
          <p className="text-[10px] font-medium text-muted-foreground">No spam. Only updates on new components.</p>
        </div>
      </div>
    </footer>
  )
}
`.trim();

export const sampleCodeHelpHero = `
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function HelpSearchHero() {
  return (
    <div className="w-full bg-[#6366F1] border-4 border-black p-8 md:p-16 rounded-3xl shadow-[8px_8px_0_0_#000] text-center space-y-8 relative overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">How can we help?</h2>
        <div className="relative max-w-xl mx-auto pt-4 text-black">
          <Search className="absolute left-4 top-[50%] -translate-y-[2px] h-5 w-5 text-zinc-400" />
          <Input 
            placeholder="Search documentation, guides, and tutorials..." 
            className="h-14 pl-12 pr-4 border-4 border-black shadow-[6px_6px_0_0_#000] text-lg font-bold rounded-2xl bg-white" 
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {["Account", "Billing", "Components", "Security"].map((tag) => (
            <Badge key={tag} className="bg-black/20 text-white border-2 border-white/30 px-3 py-1 font-bold text-xs hover:bg-black/40 cursor-pointer">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
`.trim();

export const sampleCodeSupportGrid = `
import { Card, CardContent } from "@/components/ui/card"
import { Book, LifeBuoy, MessageCircle, ArrowRight } from "lucide-react"

export function SupportGrid() {
  const categories = [
    { title: "Getting Started", icon: Book, items: 12, color: "bg-green-400" },
    { title: "Technical Support", icon: LifeBuoy, items: 15, color: "bg-blue-400" },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {categories.map((cat, i) => (
        <Card key={i} className="border-2 border-black shadow-[4px_4px_0_0_#000] group cursor-pointer hover:translate-y-[-4px] transition-transform bg-white overflow-hidden">
           <div className={\`h-2 \${cat.color} border-b-2 border-black\`} />
           <CardContent className="p-6">
              <div className={\`w-12 h-12 rounded-xl border-2 border-black \${cat.color} flex items-center justify-center mb-4 shadow-[2px_2px_0_0_#000]\`}>
                 <cat.icon size={20} className="text-black" />
              </div>
              <h4 className="text-lg font-black mb-1">{cat.title}</h4>
              <p className="text-xs font-bold text-muted-foreground uppercase">{cat.items} Articles</p>
           </CardContent>
        </Card>
      ))}
    </div>
  )
}
`.trim();

export const sampleCodeNotification = `
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle2, Info, AlertCircle, ArrowRight } from "lucide-react"

export function NotificationCenter() {
  const notifications = [
    { title: "Project Deployment", text: "Successfully deployed to production.", type: "success", icon: CheckCircle2, color: "bg-green-400" },
    { title: "Security Alert", text: "New login from unknown device.", type: "error", icon: AlertCircle, color: "bg-red-400" },
  ];

  return (
    <Card className="w-full max-w-md border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden text-black">
      <CardHeader className="flex flex-row items-center justify-between border-b-2 border-zinc-100 py-3">
         <div className="flex items-center gap-2">
            <Bell size={18} className="text-[#6366F1]" />
            <CardTitle className="text-sm font-black uppercase tracking-widest text-black">Notifications</CardTitle>
            <Badge className="bg-red-500 text-white border-none text-[9px] h-4 min-w-[16px] flex items-center justify-center p-0">3</Badge>
         </div>
         <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase text-muted-foreground hover:bg-zinc-50">Mark All Read</Button>
      </CardHeader>
      <CardContent className="p-0">
        {notifications.map((n, i) => (
          <div key={i} className="p-4 border-b border-zinc-100 flex gap-4 hover:bg-[#6366F1]/5 transition-colors group cursor-pointer text-black">
             <div className={\`shrink-0 w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000] \${n.color}\`}>
                <n.icon size={18} />
             </div>
             <div className="flex-1 space-y-1 text-black">
                <div className="flex justify-between items-start">
                   <h4 className="text-sm font-black text-black">{n.title}</h4>
                   <span className="text-[10px] font-bold text-muted-foreground uppercase text-black">2m ago</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground line-clamp-2 leading-relaxed text-black/60">{n.text}</p>
             </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
`.trim();
