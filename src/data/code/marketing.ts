export const sampleCodePricing = `
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"

export function PricingDemo() {
  return (
    <Card className="relative border-2 border-black shadow-[4px_4px_0_0_#000] overflow-hidden bg-[#ffe135] text-black">
      <div className="absolute top-4 right-[-35px] rotate-45 bg-black text-white px-10 py-1 text-[10px] font-black uppercase tracking-widest">
          Popular
      </div>
      <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0_0_#000] bg-white text-black">
              <Zap size={20} />
          </div>
          <CardTitle className="text-2xl font-black text-black">Pro Plan</CardTitle>
          <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-black">$29</span>
              <span className="text-black/60 font-bold">/mo</span>
          </div>
      </CardHeader>
      <CardContent className="pt-6">
          <ul className="space-y-4">
              {["Unlimited projects", "Advanced stats", "Priority email"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-bold text-black">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                      </div>
                      {f}
                  </li>
              ))}
          </ul>
      </CardContent>
      <CardFooter className="pt-8">
          <Button className="w-full h-11 border-2 border-black bg-black text-white font-black hover:bg-zinc-800 shadow-[2px_2px_0_0_#000]">
              Get Started
          </Button>
      </CardFooter>
    </Card>
  )
}
`.trim();

export const sampleCodeTestimonials = `
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialDemo() {
  return (
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] bg-white text-black">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1 text-[#ffe135]">
            {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" stroke="black" strokeWidth={2} />)}
        </div>
        <p className="font-bold text-sm italic text-zinc-700 leading-relaxed text-black">
            "MoupUI transformed our development workflow. The neobrutalist aesthetic is exactly what we needed to stand out."
        </p>
        <div className="flex items-center gap-3 pt-4 border-t-2 border-zinc-100">
            <Avatar className="h-10 w-10 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
                <h4 className="font-black text-sm text-black">John Doe</h4>
                <p className="text-[10px] uppercase font-black text-muted-foreground uppercase text-black/60">CEO at TechFlow</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
`.trim();

export const sampleCodeFAQ = `
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQDemo() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="bg-white border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl px-4 overflow-hidden">
        <AccordionTrigger className="hover:no-underline font-black text-black">How do I customize it?</AccordionTrigger>
        <AccordionContent className="font-bold text-black/70">
          Everything is built with Tailwind CSS. Just change the utility classes to match your brand.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`.trim();
