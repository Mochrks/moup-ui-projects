"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { SimplePricing, ComparisonPricing, PricingWithToggle } from "@/code/pricing";
import { sampleCodePricing } from "@/data/code/marketing";

const PricingIcon = () => (
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
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const Pricing = () => (
  <ContentLayout>
    <SectionDoc
      icon={<PricingIcon />}
      iconBg="bg-[#fef3c7]"
      title="Pricing Sections"
      componentCount={3}
      description="Convert visitors into customers with high-converting pricing tables. This section offers a variety of layouts, from standard tiered pricing cards with 'Popular' badges and hover effects, to detailed feature comparison matrices. Every component is designed to be clear, responsive, and trustworthy."
      features={[
        "Tiered pricing cards with distinct 'Popular' highlights",
        "Interactive hover states and neobrutalist elevation",
        "Comprehensive feature comparison matrix for detailed plans",
        "Responsive grid support (1 / 2 / 3 columns)",
        "Trust badges integration (SLA, Support, Security icons)",
        "Toggle-ready structures (Monthly vs Yearly)",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "button", "badge", "table"]}
    >
      {/* Simple Pricing Cards */}
      <ComponentBlock
        title="Tiered Pricing Cards"
        subtitle="Standard 3-column layout with popular highlight"
        features={[
          "Popular Ribbon",
          "Feature Checklist",
          "Neobrutalist Elevation",
          "Responsive Grid",
        ]}
      >
        <CodePreview
          title="Tiered Pricing"
          code={sampleCodePricing}
          codeNext={sampleCodePricing}
          codeHtml={sampleCodePricing}
          language="javascript"
          nameFile="tiered-pricing.tsx"
          preview={<SimplePricing />}
        />
      </ComponentBlock>

      {/* Pricing with Toggle */}
      <ComponentBlock
        title="Toggle Billing"
        subtitle="Interactive switcher for Monthly/Yearly plans"
        features={["Pill Switcher", "Animated State", "Discount Badges", "Clean Layout"]}
      >
        <CodePreview
          title="Toggle Pricing"
          code={sampleCodePricing}
          codeNext={sampleCodePricing}
          codeHtml={sampleCodePricing}
          language="javascript"
          nameFile="toggle-pricing.tsx"
          preview={<PricingWithToggle />}
        />
      </ComponentBlock>

      {/* Comparison Table */}
      <ComponentBlock
        title="Feature Matrix"
        subtitle="Detailed side-by-side comparison of all features"
        features={[
          "Checkmark Indicators",
          "Highlighted Column",
          "Sticky Header Support",
          "Responsive Scroll",
        ]}
      >
        <CodePreview
          title="Feature Matrix"
          code={sampleCodePricing}
          codeNext={sampleCodePricing}
          codeHtml={sampleCodePricing}
          language="javascript"
          nameFile="feature-matrix.tsx"
          preview={<ComparisonPricing />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
