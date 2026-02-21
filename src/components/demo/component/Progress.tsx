"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  ProgressSimple,
  ProgressSuccess,
  ProgressWarning,
  ProgressError,
  ProgressLabeled,
  ProgressThin,
  ProgressThick,
  ProgressDynamic,
  ProgressIndeterminate,
  ProgressGradient,
} from "@/code/progress-demo";
import { progressDefaultSnippet } from "@/data/code/all-snippets";
import { SlidersHorizontal } from "lucide-react";

export const Progress = () => (
  <ContentLayout>
    <SectionDoc
      icon={<SlidersHorizontal className="w-5 h-5" />}
      iconBg="bg-blue-100"
      title="Progress"
      componentCount={10}
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      features={[
        "Smooth state transitions with CSS animations",
        "Semantic color support (Success, Warning, Error)",
        "Multiple height options (Thin, Standard, Large)",
        "External percentage labels for quantitative data",
        "Indeterminate state for unknown durations",
        "Support for custom gradient and image fills",
      ]}
      dependencies={["@radix-ui/react-progress"]}
      shadcnDeps={["progress"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Default Progress" subtitle="Standard primary color bar at 33%">
          <CodePreview
            preview={<ProgressSimple />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Default"
            language="tsx"
            nameFile="progress-default.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success State" subtitle="Green bar indicating 100% completion">
          <CodePreview
            preview={<ProgressSuccess />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="progress-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Warning State" subtitle="Amber bar for cautionary thresholds">
          <CodePreview
            preview={<ProgressWarning />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Warning"
            language="tsx"
            nameFile="progress-warning.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Error State" subtitle="Red bar for failing or critical limits">
          <CodePreview
            preview={<ProgressError />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Error"
            language="tsx"
            nameFile="progress-error.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Quantitative Label"
          subtitle="Displays percentage text above the bar"
        >
          <CodePreview
            preview={<ProgressLabeled />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Labeled"
            language="tsx"
            nameFile="progress-labeled.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Thin Minimalist" subtitle="Space-saving 4px height variation">
          <CodePreview
            preview={<ProgressThin />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Thin"
            language="tsx"
            nameFile="progress-thin.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Thick Heavy" subtitle="Highly visible 16px height variation">
          <CodePreview
            preview={<ProgressThick />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Thick"
            language="tsx"
            nameFile="progress-thick.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Dynamic Updatable" subtitle="Showcases value transitions (Animated)">
          <CodePreview
            preview={<ProgressDynamic />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Dynamic"
            language="tsx"
            nameFile="progress-dynamic.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Indeterminate Loop"
          subtitle="Continuous motion for unknown task length"
        >
          <CodePreview
            preview={<ProgressIndeterminate />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Indeterminate"
            language="tsx"
            nameFile="progress-loop.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Premium Gradient"
          subtitle="Smooth transition between branding colors"
        >
          <CodePreview
            preview={<ProgressGradient />}
            code={progressDefaultSnippet.react}
            codeNext={progressDefaultSnippet.next}
            codeHtml={progressDefaultSnippet.html}
            title="Gradient"
            language="tsx"
            nameFile="progress-gradient.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
