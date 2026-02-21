"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { SimpleFAQ, FAQWithSearch, CategoryFAQ } from "@/code/faq";
import { sampleCodeFAQ } from "@/data/code/marketing";

const FAQIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const FAQ = () => (
  <ContentLayout>
    <SectionDoc
      icon={<FAQIcon />}
      iconBg="bg-[#dbeafe]"
      title="FAQ"
      componentCount={3}
      description="Help your users find answers quickly with flexible FAQ layouts. This section provides multiple patterns including simple clean accordions, search-integrated help systems for larger knowledge bases, and multi-category layouts for complex service explanations. All built with focus on accessibility and motion."
      features={[
        "Keyboard-accessible Accordion systems powered by Radix UI",
        "Search filtering for large knowledge bases",
        "Category grouping for complex products",
        "Subtle Framer Motion expand/collapse animations",
        "Contact CTA integration for unresolved queries",
        "Responsive grid support for multi-column layouts",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["accordion", "input", "button"]}
    >
      {/* Simple Accordion */}
      <ComponentBlock
        title="Simple Accordion"
        subtitle="Clean, minimal expand/collapse list"
        features={["Single active item", "Smooth transition", "Fully accessible"]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Simple Accordion"
            code={sampleCodeFAQ}
            codeNext={sampleCodeFAQ}
            codeHtml={sampleCodeFAQ}
            language="javascript"
            nameFile="simple-faq.tsx"
            preview={<SimpleFAQ />}
          />
        </div>
      </ComponentBlock>

      {/* FAQ with Search */}
      <ComponentBlock
        title="Knowledge Base (Search Mode)"
        subtitle="Search bar integrated with FAQ list"
        features={["Real-time search", "Contact support footer", "High visibility icons"]}
      >
        <div className="w-full lg:w-[80%] mx-auto">
          <CodePreview
            title="FAQ with Search"
            code={sampleCodeFAQ}
            codeNext={sampleCodeFAQ}
            codeHtml={sampleCodeFAQ}
            language="javascript"
            nameFile="faq-search.tsx"
            preview={<FAQWithSearch />}
          />
        </div>
      </ComponentBlock>

      {/* Category Layout */}
      <ComponentBlock
        title="Category Grid"
        subtitle="Grouped topics in a responsive grid"
        features={["Topic-specific cards", "Grid arrangement", "Neobrutalist headers"]}
      >
        <CodePreview
          title="Category Grid"
          code={sampleCodeFAQ}
          codeNext={sampleCodeFAQ}
          codeHtml={sampleCodeFAQ}
          language="javascript"
          nameFile="category-faq.tsx"
          preview={<CategoryFAQ />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
