"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  AlertDefault,
  AlertDestructive,
  AlertSuccess,
  AlertWarning,
  AlertInfo,
  AlertFilled,
  AlertLeftBar,
  AlertAction,
  AlertMinimal,
  AlertSecurity,
} from "@/code/alert-demo";
import { alertDefaultSnippet, alertDestructiveSnippet } from "@/data/code/all-snippets";
import { MessageCircleWarning } from "lucide-react";

export const Alert = () => (
  <ContentLayout>
    <SectionDoc
      icon={<MessageCircleWarning className="w-5 h-5" />}
      iconBg="bg-yellow-100"
      title="Alert"
      componentCount={10}
      description="Provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages."
      features={[
        "Standard and Destructive variants",
        "Custom semantic colors (Success, Warning, Info)",
        "Support for icons and multi-line descriptions",
        "Flexbox-ready for inline action buttons",
        "Clean border and high-contrast filled styles",
        "Accessible ARIA alert roles integrated",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["alert", "button"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Default Style" subtitle="Standard outline with icon">
          <CodePreview
            preview={<AlertDefault />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Default"
            language="tsx"
            nameFile="alert-default.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Destructive State"
          subtitle="Alert used for errors and critical info"
        >
          <CodePreview
            preview={<AlertDestructive />}
            code={alertDestructiveSnippet.react}
            codeNext={alertDestructiveSnippet.next}
            codeHtml={alertDestructiveSnippet.html}
            title="Destructive"
            language="tsx"
            nameFile="alert-destructive.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success Feedback" subtitle="Green themed for positive confirmations">
          <CodePreview
            preview={<AlertSuccess />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="alert-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Warning Notification"
          subtitle="yellow themed for cautionary messages"
        >
          <CodePreview
            preview={<AlertWarning />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Warning"
            language="tsx"
            nameFile="alert-warning.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Information Message"
          subtitle="Blue themed for helpful tips and news"
        >
          <CodePreview
            preview={<AlertInfo />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Info"
            language="tsx"
            nameFile="alert-info.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Filled High Contrast"
          subtitle="Dark background for secondary announcements"
        >
          <CodePreview
            preview={<AlertFilled />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Filled"
            language="tsx"
            nameFile="alert-filled.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Left Border Accents"
          subtitle="Styled with thick side borders for clarity"
        >
          <CodePreview
            preview={<AlertLeftBar />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Left Bar"
            language="tsx"
            nameFile="alert-left-bar.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="With Inline Action"
          subtitle="Includes practical call-to-action buttons"
        >
          <CodePreview
            preview={<AlertAction />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Action"
            language="tsx"
            nameFile="alert-action.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Minimalist Pill" subtitle="Slim design for simple notifications">
          <CodePreview
            preview={<AlertMinimal />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Minimal"
            language="tsx"
            nameFile="alert-minimal.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Interactive Security"
          subtitle="Rich content with multiple action paths"
        >
          <CodePreview
            preview={<AlertSecurity />}
            code={alertDefaultSnippet.react}
            codeNext={alertDefaultSnippet.next}
            codeHtml={alertDefaultSnippet.html}
            title="Security"
            language="tsx"
            nameFile="alert-security.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
