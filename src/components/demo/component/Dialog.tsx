"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  DialogSimple,
  DialogForm,
  DialogDelete,
  DialogSuccess,
  DialogShare,
  DialogLarge,
  DialogMini,
  DialogWarning,
  DialogAuth,
  DialogMedia,
} from "@/code/dialog-demo";
import { dialogDefaultSnippet } from "@/data/code/all-snippets";
import { MessageSquareText } from "lucide-react";

export const Dialog = () => (
  <ContentLayout>
    <SectionDoc
      icon={<MessageSquareText className="w-5 h-5" />}
      iconBg="bg-indigo-100"
      title="Dialog"
      componentCount={10}
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. Perfect for confirmations, forms, and secondary views."
      features={[
        "Accessible modal behavior powered by Radix UI",
        "Multiple sizes and layout patterns",
        "Form integration with focus management",
        "Semantic states: Success, Warning, Destructive",
        "Support for scrollable long content",
        "Transitions and animations optimized for modern browsers",
      ]}
      dependencies={["@radix-ui/react-dialog", "lucide-react"]}
      shadcnDeps={["dialog", "button", "input"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Simple Standard" subtitle="Standard modal for quick messages">
          <CodePreview
            preview={<DialogSimple />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Simple"
            language="tsx"
            nameFile="dialog-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Data Entry Form"
          subtitle="Dialog containing input fields for editing"
        >
          <CodePreview
            preview={<DialogForm />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Form"
            language="tsx"
            nameFile="dialog-form.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Destructive Action"
          subtitle="Warning modal for irreversible operations"
        >
          <CodePreview
            preview={<DialogDelete />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Delete"
            language="tsx"
            nameFile="dialog-delete.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success State" subtitle="Celebratory confirmation after completion">
          <CodePreview
            preview={<DialogSuccess />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="dialog-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Share Interface" subtitle="Includes copy-to-clipboard functionality">
          <CodePreview
            preview={<DialogShare />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Share"
            language="tsx"
            nameFile="dialog-share.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Scrollable Long Content"
          subtitle="Handles extensive text with internal scrolling"
        >
          <CodePreview
            preview={<DialogLarge />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Scrollable"
            language="tsx"
            nameFile="dialog-large.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Mini Quick-Settings"
          subtitle="Compact overlay for secondary controls"
        >
          <CodePreview
            preview={<DialogMini />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Mini"
            language="tsx"
            nameFile="dialog-mini.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Amber Warning" subtitle="Cautionary alerts for system performance">
          <CodePreview
            preview={<DialogWarning />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Warning"
            language="tsx"
            nameFile="dialog-warning.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Secure Auth View" subtitle="Branded login interface in a modal">
          <CodePreview
            preview={<DialogAuth />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Auth"
            language="tsx"
            nameFile="dialog-auth.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Media Explorer" subtitle="Rich image/video preview with actions">
          <CodePreview
            preview={<DialogMedia />}
            code={dialogDefaultSnippet.react}
            codeNext={dialogDefaultSnippet.next}
            codeHtml={dialogDefaultSnippet.html}
            title="Media"
            language="tsx"
            nameFile="dialog-media.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
