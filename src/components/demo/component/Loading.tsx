"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  LoaderSimple,
  LoaderButton,
  LoaderTextSkeleton,
  LoaderBranded,
  LoaderDots,
  LoaderRing,
  LoaderBar,
  LoaderPulseCard,
  LoaderMechanical,
  LoaderTerminal,
} from "@/code/loading-demo";
import {
  loaderSimpleCode,
  loaderBarCode,
  loaderButtonCode,
  loaderTextSkeletonCode,
  loaderBrandedCode,
  loaderDotsCode,
  loaderRingCode,
  loaderPulseCardCode,
  loaderMechanicalCode,
  loaderTerminalCode,
} from "@/data/code/component-snippets";
import { Loader } from "lucide-react";

export const Loading = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Loader className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Loading & Skeletons"
      componentCount={10}
      description="Visual indicators for data fetching and processing states. Includes traditional spinners, modern indeterminate bars, and advanced shimmer-effect skeletons for better perceived performance."
      features={[
        "Clean CSS-based spinners and Lucide icons",
        "Responsive Skeleton components for all layouts",
        "Indeterminate progress bars with smooth animations",
        "Branded pulsing loaders for high-identity states",
        "Integrated loading button patterns",
        "Shimmer-effect card placeholders (Perceived Performance)",
      ]}
      dependencies={["lucide-react", "framer-motion"]}
      shadcnDeps={["skeleton", "button"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Simple Spinner" subtitle="Classic rotating icon for general loading">
          <CodePreview
            preview={<LoaderSimple />}
            code={loaderSimpleCode.react}
            codeNext={loaderSimpleCode.next}
            codeHtml={loaderSimpleCode.html}
            title="Simple"
            language="tsx"
            nameFile="loader-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Loading Buttons" subtitle="Inline feedback for form submissions">
          <CodePreview
            preview={<LoaderButton />}
            code={loaderButtonCode.react}
            codeNext={loaderButtonCode.next}
            codeHtml={loaderButtonCode.html}
            title="Button"
            language="tsx"
            nameFile="loader-button.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Text Line Skeleton"
          subtitle="Placeholder for multi-line text blocks"
        >
          <CodePreview
            preview={<LoaderTextSkeleton />}
            code={loaderTextSkeletonCode.react}
            codeNext={loaderTextSkeletonCode.next}
            codeHtml={loaderTextSkeletonCode.html}
            title="Text Skeleton"
            language="tsx"
            nameFile="skeleton-text.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Branded Logo Pulse"
          subtitle="High-identity loader for initial app boot"
        >
          <CodePreview
            preview={<LoaderBranded />}
            code={loaderBrandedCode.react}
            codeNext={loaderBrandedCode.next}
            codeHtml={loaderBrandedCode.html}
            title="Branded"
            language="tsx"
            nameFile="loader-branded.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Data Matrix Dots" subtitle="Minimalist horizontal loading animation">
          <CodePreview
            preview={<LoaderDots />}
            code={loaderDotsCode.react}
            codeNext={loaderDotsCode.next}
            codeHtml={loaderDotsCode.html}
            title="Dots"
            language="tsx"
            nameFile="loader-dots.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Rotating Gear Ring"
          subtitle="Clean SVG ring for modern dashboard UIs"
        >
          <CodePreview
            preview={<LoaderRing />}
            code={loaderRingCode.react}
            codeNext={loaderRingCode.next}
            codeHtml={loaderRingCode.html}
            title="Ring"
            language="tsx"
            nameFile="loader-ring.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="System Progress Bar" subtitle="Indeterminate top-bar style progress">
          <CodePreview
            preview={<LoaderBar />}
            code={loaderBarCode.react}
            codeNext={loaderBarCode.next}
            codeHtml={loaderBarCode.html}
            title="Bar"
            language="tsx"
            nameFile="loader-bar.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Premium Shimmer Card"
          subtitle="Combined skeletal pattern with shimmer animation"
        >
          <CodePreview
            preview={<LoaderPulseCard />}
            code={loaderPulseCardCode.react}
            codeNext={loaderPulseCardCode.next}
            codeHtml={loaderPulseCardCode.html}
            title="Pulse"
            language="tsx"
            nameFile="loader-pulse.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Mechanical Synchronization"
          subtitle="Gear-based mechanical loading feedback"
        >
          <CodePreview
            preview={<LoaderMechanical />}
            code={loaderMechanicalCode.react}
            codeNext={loaderMechanicalCode.next}
            codeHtml={loaderMechanicalCode.html}
            title="Mechanical"
            language="tsx"
            nameFile="loader-mechanical.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Terminal Boot Simulation"
          subtitle="Retro-tech console loading experience"
        >
          <CodePreview
            preview={<LoaderTerminal />}
            code={loaderTerminalCode.react}
            codeNext={loaderTerminalCode.next}
            codeHtml={loaderTerminalCode.html}
            title="Terminal"
            language="tsx"
            nameFile="loader-terminal.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
