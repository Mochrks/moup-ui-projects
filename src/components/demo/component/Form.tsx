"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  FormLogin,
  FormProfile,
  FormSecurity,
  FormBilling,
  FormAgreement,
  FormSettings,
  FormFeedback,
  FormContact,
  FormCredit,
  FormHorizontal,
} from "@/code/form-demo";
import { formDefaultSnippet } from "@/data/code/all-snippets";
import { FormInput } from "lucide-react";

export const Form = () => (
  <ContentLayout>
    <SectionDoc
      icon={<FormInput className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Form"
      componentCount={10}
      description="Building forms with React Hook Form and Zod. Provides a consistent layout for labels, inputs, and validation messages."
      features={[
        "First-class integration with React Hook Form",
        "Schema validation support via Zod",
        "Accessible form field wrappers and labels",
        "Semantic validation states using FormMessage",
        "Flexible grid and flex based layouts",
        "Rich UI components: Checkboxes, Switches, and Textareas",
      ]}
      dependencies={["react-hook-form", "@hookform/resolvers", "zod", "lucide-react"]}
      shadcnDeps={["form", "input", "button", "checkbox", "switch", "textarea", "label"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Login Interface" subtitle="Standard entry point for authentication">
          <CodePreview
            preview={<FormLogin />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Login"
            language="tsx"
            nameFile="form-login.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="User Profile"
          subtitle="Grid layout for name and custom username fields"
        >
          <CodePreview
            preview={<FormProfile />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Profile"
            language="tsx"
            nameFile="form-profile.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Security Settings" subtitle="Stacked pattern for password updates">
          <CodePreview
            preview={<FormSecurity />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Security"
            language="tsx"
            nameFile="form-security.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Detailed Billing"
          subtitle="Complex grid for addresses and regional info"
        >
          <CodePreview
            preview={<FormBilling />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Billing"
            language="tsx"
            nameFile="form-billing.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Policy Agreement"
          subtitle="Clean checkbox pattern for legal consents"
        >
          <CodePreview
            preview={<FormAgreement />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Agreement"
            language="tsx"
            nameFile="form-agreement.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Preference Switches"
          subtitle="Icon-rich group for notification settings"
        >
          <CodePreview
            preview={<FormSettings />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Settings"
            language="tsx"
            nameFile="form-settings.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Feedback Message" subtitle="Textarea based support or review module">
          <CodePreview
            preview={<FormFeedback />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Feedback"
            language="tsx"
            nameFile="form-feedback.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Work Contact"
          subtitle="Professional context fields in a compact row"
        >
          <CodePreview
            preview={<FormContact />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Contact"
            language="tsx"
            nameFile="form-contact.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Dark Payment Card"
          subtitle="Visual representation of credit card entry"
        >
          <CodePreview
            preview={<FormCredit />}
            code={formDefaultSnippet.react}
            codeNext={formDefaultSnippet.next}
            codeHtml={formDefaultSnippet.html}
            title="Payment"
            language="tsx"
            nameFile="form-credit.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Horizontal Sidebar"
          subtitle="Settings-style layout with labels on the left"
        >
          <div className="md:col-span-2">
            <CodePreview
              preview={<FormHorizontal />}
              code={formDefaultSnippet.react}
              codeNext={formDefaultSnippet.next}
              codeHtml={formDefaultSnippet.html}
              title="Horizontal"
              language="tsx"
              nameFile="form-horizontal.tsx"
            />
          </div>
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
