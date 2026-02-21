"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  InputOtpSimple,
  InputOtpGroups,
  InputOtpFour,
  InputOtpDigits,
  InputOtpSquare,
  InputOtpPill,
  InputOtpPassword,
  InputOtpError,
  InputOtpSuccess,
  InputOtpFull,
} from "@/code/input-otp-demo";
import { inputOtpDefaultSnippet } from "@/data/code/all-snippets";
import { KeySquare } from "lucide-react";

export const InputOtp = () => (
  <ContentLayout>
    <SectionDoc
      icon={<KeySquare className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Input OTP"
      componentCount={10}
      description="Accessible, unstyled, and customizable OTP component for React. Handles focus, keyboard navigation, and copy-paste perfectly."
      features={[
        "Automatic focus management and navigation",
        "Support for any length (4, 6, 8, etc.)",
        "Group and multi-group pattern support",
        "Password mode for secure code entry",
        "Custom validation states (Error, Success)",
        "Fully accessible ARIA implementation",
      ]}
      dependencies={["input-otp", "lucide-react"]}
      shadcnDeps={["input-otp", "button", "label"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Standard 6-Digit" subtitle="Most common pattern for secondary auth">
          <CodePreview
            preview={<InputOtpSimple />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Standard"
            language="tsx"
            nameFile="otp-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Split Groups (3+3)" subtitle="Uses separator for better readability">
          <CodePreview
            preview={<InputOtpGroups />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Groups"
            language="tsx"
            nameFile="otp-groups.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Compact 4-Digit" subtitle="Faster entry for low-security operations">
          <CodePreview
            preview={<InputOtpFour />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="4-Digit"
            language="tsx"
            nameFile="otp-four.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Digit Only Strict"
          subtitle="Prevents any character entry except numbers"
        >
          <CodePreview
            preview={<InputOtpDigits />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Strict"
            language="tsx"
            nameFile="otp-strict.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Large Square Slots" subtitle="High intensity UI with bold numbers">
          <CodePreview
            preview={<InputOtpSquare />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Square"
            language="tsx"
            nameFile="otp-square.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Rounded Pill Slots" subtitle="Friendly aesthetic for consumer apps">
          <CodePreview
            preview={<InputOtpPill />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Pill"
            language="tsx"
            nameFile="otp-pill.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Secure Password Dots" subtitle="Masks input for sensitive entry">
          <CodePreview
            preview={<InputOtpPassword />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Hidden"
            language="tsx"
            nameFile="otp-pass.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Error Validation" subtitle="Visual feedback for incorrect codes">
          <CodePreview
            preview={<InputOtpError />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Error"
            language="tsx"
            nameFile="otp-error.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success State" subtitle="Visual feedback for verified codes">
          <CodePreview
            preview={<InputOtpSuccess />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="otp-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Full Auth Card"
          subtitle="Integrated with labels, help text and verify button"
        >
          <CodePreview
            preview={<InputOtpFull />}
            code={inputOtpDefaultSnippet.react}
            codeNext={inputOtpDefaultSnippet.next}
            codeHtml={inputOtpDefaultSnippet.html}
            title="Full Auth"
            language="tsx"
            nameFile="otp-full.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
