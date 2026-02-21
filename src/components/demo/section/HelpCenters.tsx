"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { HelpSearchHero, SupportGrid } from "@/code/essentials";
import { sampleCodeHelpHero, sampleCodeSupportGrid } from "@/data/code/essentials";

const HelpIcon = () => (
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

export const HelpCenter = () => (
  <ContentLayout>
    <SectionDoc
      icon={<HelpIcon />}
      iconBg="bg-[#fce7f3]"
      title="Help Center"
      componentCount={2}
      description="Create a world-class support experience with these Help Center heros. This section features high-impact search-focused headers with glassmorphism touches and tag filtering. Designed to help users find answers immediately while maintaining a clean, professional aesthetic."
      features={[
        "High-impact search headers with dedicated hero areas",
        "Integrated tag badges for quick category filtering",
        "Neobrutalist shadow depth on primary search inputs",
        "Glassmorphism background patterns for a premium feel",
        "Full responsiveness for mobile and tablet support",
        "High visibility search icons and placeholders",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["input", "badge"]}
    >
      <ComponentBlock
        title="Search Hero Section"
        subtitle="Focused help header with integrated search and tags"
        features={[
          "High Visibility Search",
          "Category Badges",
          "Premium Shadow",
          "Responsive Text",
        ]}
      >
        <div className="w-full py-6 px-0 md:px-10">
          <CodePreview
            title="Help Search Hero"
            code={sampleCodeHelpHero}
            codeNext={sampleCodeHelpHero}
            codeHtml={sampleCodeHelpHero}
            language="javascript"
            nameFile="help-search-hero.tsx"
            preview={<HelpSearchHero />}
          />
        </div>
      </ComponentBlock>

      <ComponentBlock
        title="Support Categories"
        subtitle="Grid of help topics with icon indicators"
        features={["Categorized Cards", "Icon Indicators", "Interactive Hover", "Topic Counts"]}
      >
        <div className="w-full py-6">
          <CodePreview
            title="Support Grid"
            code={sampleCodeSupportGrid}
            codeNext={sampleCodeSupportGrid}
            codeHtml={sampleCodeSupportGrid}
            language="javascript"
            nameFile="support-grid.tsx"
            preview={<SupportGrid />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
