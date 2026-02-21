export const sampleCodeAccordion = `
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`.trim();

export const sampleCodeAccordionMultiple = `
<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Multiple Open</AccordionTrigger>
    <AccordionContent>You can open more than one item at a time.</AccordionContent>
  </AccordionItem>
</Accordion>
`.trim();

export const sampleCodeAccordionIconic = `
import { Settings, Shield } from "lucide-react"

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger className="gap-2">
      <Settings className="w-4 h-4" /> Account Settings
    </AccordionTrigger>
    <AccordionContent>Manage your profile and security settings.</AccordionContent>
  </AccordionItem>
</Accordion>
`.trim();

export const sampleCodeAccordionCard = `
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1" className="bg-white border rounded-lg px-4 mb-2">
    <AccordionTrigger className="hover:no-underline">Card Style</AccordionTrigger>
    <AccordionContent>Items are separate cards with borders and rounding.</AccordionContent>
  </AccordionItem>
</Accordion>
`.trim();

export const sampleCodeAccordionStatus = `
<Accordion type="single" collapsible className="w-full gap-2 flex flex-col">
  <AccordionItem value="item-1" className="border-blue-200 bg-blue-50/30 rounded-lg px-4 border">
    <AccordionTrigger className="hover:no-underline text-blue-900 font-semibold">Notice</AccordionTrigger>
    <AccordionContent className="text-blue-800/70">Styled specifically for informational status.</AccordionContent>
  </AccordionItem>
</Accordion>
`.trim();
