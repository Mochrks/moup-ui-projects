import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-shadcn/accordion";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Search, MessageCircle, Mail } from "lucide-react";

export const SimpleFAQ = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-left font-bold">What is MoupUI?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        MoupUI is a comprehensive library of Neobrutalist UI components built with React, Tailwind
        CSS, and Shadcn UI. It focuses on accessibility, performance, and a unique premium
        aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="text-left font-bold">Is it free to use?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes, MoupUI is open-source and free to use for both personal and commercial projects.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="text-left font-bold">How do I get started?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Check out our installation guide in the Get Started section for a step-by-step walkthrough
        on setting up MoupUI in your project.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const FAQWithSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for answers..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <SimpleFAQ />
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t">
        <p className="text-sm font-medium text-muted-foreground">Still have questions?</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Mail size={14} /> Email Us
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <MessageCircle size={14} /> Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export const CategoryFAQ = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="font-black text-lg border-b-4 border-[#ffe135] w-fit mb-6">
        General Questions
      </h3>
      <SimpleFAQ />
    </div>
    <div className="space-y-4">
      <h3 className="font-black text-lg border-b-4 border-[#ffe135] w-fit mb-6">
        Billing & Payments
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-bold">Do you offer refunds?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            We offer a 30-day money-back guarantee for all our premium templates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-bold">
            Which payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            We accept all major credit cards, PayPal, and Apple Pay.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);
