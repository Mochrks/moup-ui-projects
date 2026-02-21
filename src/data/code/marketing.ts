export const sampleCodePricing = `
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingDemo() {
  return (
    <Card className="relative border shadow-sm overflow-hidden bg-white">
      <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl font-bold">Pro Plan</CardTitle>
          <CardDescription>Everything you need for growth</CardDescription>
          <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground text-sm">/mo</span>
          </div>
      </CardHeader>
      <CardContent className="pt-6">
          <ul className="space-y-3">
              {["Unlimited projects", "Advanced stats", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary" />
                      {f}
                  </li>
              ))}
          </ul>
      </CardContent>
      <CardFooter className="pt-8">
          <Button className="w-full">Get Started</Button>
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
    <Card className="border shadow-sm bg-white">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-0.5 text-yellow-500">
            {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" strokeWidth={0} />)}
        </div>
        <p className="text-sm italic text-muted-foreground leading-relaxed">
            "MoupUI transformed our development workflow. The components are easy to use and well-documented."
        </p>
        <div className="flex items-center gap-3 pt-4 border-t">
            <Avatar className="h-9 w-9">
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
                <h4 className="font-semibold text-sm">John Doe</h4>
                <p className="text-[10px] text-muted-foreground uppercase">CEO at TechFlow</p>
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left font-medium">How do I customize it?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Everything is built with Tailwind CSS. Just change the utility classes to match your brand style.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`.trim();
