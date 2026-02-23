"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { SimpleFooter, CenteredFooter } from "@/code/essentials";
import { sampleCodeFooter } from "@/data/code/essentials";

const FooterIcon = () => (
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
    <rect width="20" height="8" x="2" y="14" rx="2" />
    <path d="M6 14v4" />
    <path d="M10 14v4" />
    <path d="M14 14v4" />
    <path d="M18 14v4" />
  </svg>
);

export const Footer = () => (
  <ContentLayout>
    <SectionDoc
      icon={<FooterIcon />}
      iconBg="bg-[#e0e7ff]"
      title="Footer Sections"
      componentCount={2}
      description="Modern footer templates for any website or application. This section provides high-quality footer layouts including simple copyright bars, multi-column mega footers with social links, and newsletter-integrated call-to-actions. Designed with strong borders and premium neobrutalist typography."
      features={[
        "Multi-column layouts for complex navigation links",
        "Social media icon integration with neobrutalist hover states",
        "Streamlined newsletter subscription forms built with Shadcn Input",
        "Clean copyright and policy links bar with top-border highlight",
        "Responsive grid support (1 / 2 / 4 columns) for different devices",
        "Premium font-stack for high readability and professional feel",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["button", "input"]}
    >
      <ComponentBlock
        title="Modern Mega Footer"
        subtitle="Complete layout with links, socials, and newsletter"
        features={["Social Media Grid", "Newsletter Form", "Privacy Links", "Brand Area"]}
      >
        <div className="w-full">
          <CodePreview
            title="Mega Footer"
            code={sampleCodeFooter}
            codeNext={sampleCodeFooter}
            codeHtml={sampleCodeFooter}
            language="javascript"
            nameFile="mega-footer.tsx"
            preview={<SimpleFooter />}
          />
        </div>
      </ComponentBlock>

      <ComponentBlock
        title="Sleek Centered Footer"
        subtitle="High-impact layout with vibrant background"
        features={[
          "Centered Navigation",
          "Bold Social Icons",
          "Vibrant yellow Branding",
          "Clean Typography",
        ]}
      >
        <div className="w-full">
          <CodePreview
            title="Centered Footer"
            code={sampleCodeFooter}
            codeNext={sampleCodeFooter}
            codeHtml={sampleCodeFooter}
            language="javascript"
            nameFile="centered-footer.tsx"
            preview={<CenteredFooter />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
