"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  AccordionSimple,
  AccordionMultiple,
  AccordionColored,
  AccordionIconic,
  AccordionCard,
  AccordionSubtle,
  AccordionCompact,
  AccordionBadged,
  AccordionStatus,
  AccordionGlass,
} from "@/code/accordion-demo";
import { accordionSimpleSnippet } from "@/data/code/all-snippets";
import { ChevronsUpDown } from "lucide-react";

export const Accordion = () => (
  <ContentLayout>
    <SectionDoc
      icon={<ChevronsUpDown className="w-5 h-5" />}
      iconBg="bg-indigo-100"
      title="Accordion"
      componentCount={10}
      description="A vertically stacked set of interactive headings that each reveal a section of content. Built with Radix UI for superior accessibility and smooth animations."
      features={[
        "Single & Multiple items open modes",
        "Fully keyboard accessible (Space, Enter, Arrows)",
        "Smooth height animations powered by Framer Motion",
        "Customizable triggers with icons and badges",
        "Multiple styles: Bordered, Card-like, Flush, and Glassmorphism",
        "Responsive design for all device types",
      ]}
      dependencies={["@radix-ui/react-accordion", "lucide-react"]}
      shadcnDeps={["accordion"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Simple Accordion" subtitle="Standard single-open pattern">
          <CodePreview
            preview={<AccordionSimple />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Simple"
            language="tsx"
            nameFile="accordion-simple.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Multiple Sections" subtitle="Keep multiple items open at once">
          <CodePreview
            preview={<AccordionMultiple />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Multiple"
            language="tsx"
            nameFile="accordion-multiple.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Colored Accents" subtitle="Primary color branding for triggers">
          <CodePreview
            preview={<AccordionColored />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Colored"
            language="tsx"
            nameFile="accordion-colored.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Iconic Triggers" subtitle="Enhanced visual cues with Lucide icons">
          <CodePreview
            preview={<AccordionIconic />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Iconic"
            language="tsx"
            nameFile="accordion-iconic.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Card Style" subtitle="Rounded containers for distinct separation">
          <CodePreview
            preview={<AccordionCard />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Card Style"
            language="tsx"
            nameFile="accordion-card.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Subtle Background" subtitle="Gray background for expanded content">
          <CodePreview
            preview={<AccordionSubtle />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Subtle"
            language="tsx"
            nameFile="accordion-subtle.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Compact Flush" subtitle="Minimalist padding for sidebars or lists">
          <CodePreview
            preview={<AccordionCompact />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Compact"
            language="tsx"
            nameFile="accordion-compact.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Status Badges" subtitle="Information-rich headers with indicators">
          <CodePreview
            preview={<AccordionBadged />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Badged"
            language="tsx"
            nameFile="accordion-badged.tsx"
          />
        </ComponentBlock>
        <ComponentBlock
          title="Status Context"
          subtitle="Color-coded for Informational/Actionable items"
        >
          <CodePreview
            preview={<AccordionStatus />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Status"
            language="tsx"
            nameFile="accordion-status.tsx"
          />
        </ComponentBlock>
        <ComponentBlock
          title="Glassmorphism"
          subtitle="Translucent premium look with backdrop blur"
        >
          <CodePreview
            preview={<AccordionGlass />}
            code={accordionSimpleSnippet.react}
            codeNext={accordionSimpleSnippet.next}
            codeHtml={accordionSimpleSnippet.html}
            title="Glass"
            language="tsx"
            nameFile="accordion-glass.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
