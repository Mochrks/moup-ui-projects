"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { StepIndicator } from "@/code/learning-steps";
import { sampleCodeMultiSteps } from "@/data/code/learning";

const StepsIcon = () => (
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
    <path d="M11 15h2a2 2 0 1 0 0-4h-2a2 2 0 1 1 0-4h2" />
    <path d="M12 5v14" />
  </svg>
);

export const MultiSteps = () => (
  <ContentLayout>
    <SectionDoc
      icon={<StepsIcon />}
      iconBg="bg-[#fef3c7]"
      title="Multi Steps"
      componentCount={1}
      description="Guide your users through complex flows with clear, sequential step indicators. This section provides high-visibility horizontal trackers with status states (Complete, Current, Pending), perfect for onboarding, checkouts, or long form submissions."
      features={[
        "Status-aware indicators (Complete, Current, Pending)",
        "Premium neobrutalist elevation and colored states",
        "Responsive horizontal connector systems",
        "Label support for step names and descriptions",
        "Flexible grid arrangement for mobile devices",
        "Integrated SVG icons for completed states",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["button"]}
    >
      <ComponentBlock
        title="Horizontal Step Tracker"
        subtitle="Sequential progress indicator for complex flows"
        features={["Status Colors", "Icon Support", "Clean Typography", "Minimal Connectors"]}
      >
        <div className="w-full flex justify-center py-6">
          <CodePreview
            title="Step Indicator"
            code={sampleCodeMultiSteps}
            codeNext={sampleCodeMultiSteps}
            codeHtml={sampleCodeMultiSteps}
            language="javascript"
            nameFile="step-indicator.tsx"
            preview={<StepIndicator />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
