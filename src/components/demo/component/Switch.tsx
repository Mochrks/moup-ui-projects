"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  SwitchDefault,
  SwitchDestructive,
  SwitchSuccess,
  SwitchLarge,
  SwitchSmall,
  SwitchTheme,
  SwitchLabeled,
  SwitchCard,
  SwitchStatus,
  SwitchIconic,
} from "@/code/switch-demo";
import {
  switchDefaultSnippet,
  switchDestructiveSnippet,
  switchCardSnippet,
} from "@/data/code/all-snippets";
import { ToggleLeft } from "lucide-react";
import { Switch as BaseSwitch } from "@/components/ui-shadcn/switch";

export const Switch = () => (
  <ContentLayout>
    <SectionDoc
      icon={<ToggleLeft className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Switch"
      componentCount={10}
      description="A control that allows the user to toggle between checked and unchecked states. Perfect for binary settings and preference management."
      features={[
        "Modern iOS-style toggle animation",
        "Semantic color variants (Error, Success, Branding)",
        "Range of sizes for different UI contexts",
        "Rich integration with labels and description text",
        "Accessible ARIA checkbox roles supported",
        "Hover and Focus states optimized for clarity",
      ]}
      dependencies={["@radix-ui/react-switch", "lucide-react"]}
      shadcnDeps={["switch", "label"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock
          title="Default Switch"
          subtitle="Standard primary toggle for basic settings"
        >
          <CodePreview
            preview={<SwitchDefault />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Default"
            language="tsx"
            nameFile="switch-default.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Destructive State"
          subtitle="Red highlights for disabling security features"
        >
          <CodePreview
            preview={<SwitchDestructive />}
            code={switchDestructiveSnippet.react}
            codeNext={switchDestructiveSnippet.next}
            codeHtml={switchDestructiveSnippet.html}
            title="Destructive"
            language="tsx"
            nameFile="switch-destructive.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Success State"
          subtitle="Green highlights for active or positive status"
        >
          <CodePreview
            preview={<SwitchSuccess />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="switch-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Size Variations"
          subtitle="Large and Small scales for various layouts"
        >
          <div className="space-y-4">
            <SwitchLarge />
            <SwitchSmall />
          </div>
        </ComponentBlock>

        <ComponentBlock
          title="Theme Controller"
          subtitle="Specialized layout for Sun/Moon toggling"
        >
          <CodePreview
            preview={<SwitchTheme />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Theme"
            language="tsx"
            nameFile="switch-theme.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Labeled Collection"
          subtitle="Clean list pattern for preference menus"
        >
          <CodePreview
            preview={<SwitchLabeled />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Labeled"
            language="tsx"
            nameFile="switch-list.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Card Integrated"
          subtitle="Interactive card block with a trailing toggle"
        >
          <CodePreview
            preview={<SwitchCard />}
            code={switchCardSnippet.react}
            codeNext={switchCardSnippet.next}
            codeHtml={switchCardSnippet.html}
            title="Card"
            language="tsx"
            nameFile="switch-card.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Status Indicators"
          subtitle="Displays ON/OFF text explicitly for clarity"
        >
          <CodePreview
            preview={<SwitchStatus />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Status"
            language="tsx"
            nameFile="switch-status.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Iconic Minimalism"
          subtitle="Paired with small icons for visual context"
        >
          <CodePreview
            preview={<SwitchIconic />}
            code={switchDefaultSnippet.react}
            codeNext={switchDefaultSnippet.next}
            codeHtml={switchDefaultSnippet.html}
            title="Iconic"
            language="tsx"
            nameFile="switch-icon.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Action Group"
          subtitle="Multiple switches in a dense horizontal group"
        >
          <div className="flex gap-4 p-4 border-2 border-black rounded-xl bg-zinc-50/30 shadow-[3px_3px_0_0_#000]">
            <BaseSwitch defaultChecked />
            <BaseSwitch />
            <BaseSwitch defaultChecked />
          </div>
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
