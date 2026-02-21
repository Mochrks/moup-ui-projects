"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  BadgeDefault,
  BadgeSecondary,
  BadgeDestructive,
  BadgeOutline,
  BadgeSuccess,
  BadgeWarning,
  BadgeIcon,
  BadgeRemovable,
  BadgeDot,
  BadgeSoft,
} from "@/code/badge-demo";
import { badgeDefaultSnippet } from "@/data/code/all-snippets";
import { Badge as BadgeIconLucide } from "lucide-react";

export const Badge = () => (
  <ContentLayout>
    <SectionDoc
      icon={<BadgeIconLucide className="w-5 h-5" />}
      iconBg="bg-pink-100"
      title="Badge"
      componentCount={10}
      description="Small status indicators used to display a numerical value or label for a certain item. Versatile styling for status, tags, and highlights."
      features={[
        "Built-in variants from Shadcn UI core",
        "Semantic color support for business logic",
        "Pill and square corner styles",
        "Icon integration for visual emphasis",
        "Removable action support for tags",
        "Status dot indicators for real-time presence",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["badge"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Default Primary" subtitle="Main emphasis for labels and counts">
          <CodePreview
            preview={<BadgeDefault />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Default"
            language="tsx"
            nameFile="badge-default.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Secondary Styling" subtitle="Subtle gray for less vital information">
          <CodePreview
            preview={<BadgeSecondary />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Secondary"
            language="tsx"
            nameFile="badge-secondary.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Destructive State" subtitle="Alerting users to errors or deletions">
          <CodePreview
            preview={<BadgeDestructive />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Destructive"
            language="tsx"
            nameFile="badge-destructive.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Outline Variant" subtitle="Minimalist border for secondary tags">
          <CodePreview
            preview={<BadgeOutline />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Outline"
            language="tsx"
            nameFile="badge-outline.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Success State" subtitle="Green indicators for completed tasks">
          <CodePreview
            preview={<BadgeSuccess />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Success"
            language="tsx"
            nameFile="badge-success.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Warning State" subtitle="Yellow markers for cautionary data">
          <CodePreview
            preview={<BadgeWarning />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Warning"
            language="tsx"
            nameFile="badge-warning.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="With Visual Icons"
          subtitle="Lucide icons paired with short text for context"
        >
          <CodePreview
            preview={<BadgeIcon />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Iconic"
            language="tsx"
            nameFile="badge-icon.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Interactive Tags"
          subtitle="Includes removable 'X' for input collections"
        >
          <CodePreview
            preview={<BadgeRemovable />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Removable"
            language="tsx"
            nameFile="badge-removable.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Status Indicators"
          subtitle="Combines text with a centered status dot"
        >
          <CodePreview
            preview={<BadgeDot />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Dot"
            language="tsx"
            nameFile="badge-dot.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Soft Palette" subtitle="Modern low-opacity colored labels">
          <CodePreview
            preview={<BadgeSoft />}
            code={badgeDefaultSnippet.react}
            codeNext={badgeDefaultSnippet.next}
            codeHtml={badgeDefaultSnippet.html}
            title="Soft"
            language="tsx"
            nameFile="badge-soft.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
