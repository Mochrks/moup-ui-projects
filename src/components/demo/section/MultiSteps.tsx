"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { StepIndicator, VerticalStepper } from "@/code/learning-steps";
import { sampleCodeMultiSteps, sampleCodeVerticalSteps } from "@/data/code/learning";

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
      componentCount={2}
      description="Guide your users through complex flows with clear, sequential step indicators. This section provides high-visibility horizontal trackers and vertical sequential flows with status states (Complete, Current, Pending)."
      features={[
        "Status-aware indicators (Complete, Current, Pending)",
        "Premium neobrutalist elevation and colored states",
        "Responsive horizontal connector systems",
        "Vertical flow support with side descriptions",
        "Label support for step names and descriptions",
        "Icon support for completed and current states",
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

      <ComponentBlock
        title="Vertical Sequential Flow"
        subtitle="Detailed step list with descriptive text sidebars"
        features={[
          "Vertical Timeline",
          "Status Badges",
          "Nested Content Support",
          "Compact Mobile View",
        ]}
      >
        <div className="w-full flex justify-center py-6">
          <CodePreview
            title="Vertical Stepper"
            code={sampleCodeVerticalSteps}
            codeNext={sampleCodeVerticalSteps}
            codeHtml={sampleCodeVerticalSteps}
            language="javascript"
            nameFile="vertical-stepper.tsx"
            preview={<VerticalStepper />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
