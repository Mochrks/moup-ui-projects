"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  TooltipTop,
  TooltipBottom,
  TooltipLeft,
  TooltipRight,
  TooltipRich,
  TooltipColored,
  TooltipSuccess,
  TooltipDelayed,
  TooltipActions,
  TooltipPill,
} from "@/code/tooltip-demo";
import { tooltipDefaultSnippet } from "@/data/code/all-snippets";
import { MessageSquarePlus } from "lucide-react";

export const Tooltip = () => (
  <ContentLayout>
    <SectionDoc
      icon={<MessageSquarePlus className="w-5 h-5" />}
      iconBg="bg-blue-100"
      title="Tooltip"
      componentCount={10}
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      features={[
        "Automatic and manual side positioning",
        "Rich content support with typography and icons",
        "Custom show/hide delay and duration settings",
        "Multiple semantic and branded color themes",
        "Keyboard accessible (Esc to close, Focus-triggered)",
        "Zero-runtime positioning powered by Radix UI",
      ]}
      dependencies={["@radix-ui/react-tooltip", "lucide-react"]}
      shadcnDeps={["tooltip", "button"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Top Positioned" subtitle="Standard hint appearing above the trigger">
          <CodePreview
            preview={<TooltipTop />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Top"
            language="tsx"
            nameFile="tooltip-top.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Bottom Positioned"
          subtitle="Hint appearing below for clear visibility"
        >
          <CodePreview
            preview={<TooltipBottom />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Bottom"
            language="tsx"
            nameFile="tooltip-bottom.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Left Positioned"
          subtitle="Sideways hint for space-constrained layouts"
        >
          <CodePreview
            preview={<TooltipLeft />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Left"
            language="tsx"
            nameFile="tooltip-left.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Right Positioned" subtitle="Classic right-aligned popup for buttons">
          <CodePreview
            preview={<TooltipRight />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Right"
            language="tsx"
            nameFile="tooltip-right.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Rich Content Block"
          subtitle="Includes headers, bold text, and keyboard hints"
        >
          <CodePreview
            preview={<TooltipRich />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Rich"
            language="tsx"
            nameFile="tooltip-rich.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Branded Primary"
          subtitle="High-contrast dark theme for focal points"
        >
          <CodePreview
            preview={<TooltipColored />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Colored"
            language="tsx"
            nameFile="tooltip-colored.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success State" subtitle="Green themed hints for verified items">
          <CodePreview
            preview={<TooltipSuccess />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="tooltip-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Delayed Activation" subtitle="Custom 1-second delay for cleaner UIs">
          <CodePreview
            preview={<TooltipDelayed />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Delayed"
            language="tsx"
            nameFile="tooltip-delayed.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Action Toolbar Hints"
          subtitle="Integrated tooltip group for icon menus"
        >
          <CodePreview
            preview={<TooltipActions />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Actions"
            language="tsx"
            nameFile="tooltip-actions.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Notification Pill" subtitle="Minimalist status hint on top of icons">
          <CodePreview
            preview={<TooltipPill />}
            code={tooltipDefaultSnippet.react}
            codeNext={tooltipDefaultSnippet.next}
            codeHtml={tooltipDefaultSnippet.html}
            title="Pill"
            language="tsx"
            nameFile="tooltip-pill.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
