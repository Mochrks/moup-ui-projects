"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  AvatarSimple,
  AvatarSquare,
  AvatarSizes,
  AvatarInitials,
  AvatarIcons,
  AvatarBordered,
  AvatarGroup,
  AvatarStatus,
  AvatarGradient,
  AvatarRichLink,
} from "@/code/avatar-demo";
import { avatarDefaultSnippet } from "@/data/code/all-snippets";
import { User } from "lucide-react";

export const Avatar = () => (
  <ContentLayout>
    <SectionDoc
      icon={<User className="w-5 h-5" />}
      iconBg="bg-blue-100"
      title="Avatar"
      componentCount={10}
      description="An image element with a fallback for representing the user. Highly customizable sizes, shapes, and group layouts."
      features={[
        "Automatic image error handling with fallback states",
        "Multiple shape support (Circle, Rounded Square)",
        "Predefined and custom sizing from XS to XL",
        "Initial-based and Icon-based fallbacks",
        "Avatar grouping with stacked alignment",
        "Built-in slot for status indicators (Online/Offline)",
      ]}
      dependencies={["@radix-ui/react-avatar", "lucide-react"]}
      shadcnDeps={["avatar"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Simple Avatar" subtitle="Basic image with fallback text">
          <CodePreview
            preview={<AvatarSimple />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Simple"
            language="tsx"
            nameFile="avatar-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Square Variant" subtitle="Rounded square for a modern look">
          <CodePreview
            preview={<AvatarSquare />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Square"
            language="tsx"
            nameFile="avatar-square.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Range of Sizes"
          subtitle="Scalable from tiny avatars to large previews"
        >
          <CodePreview
            preview={<AvatarSizes />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Sizes"
            language="tsx"
            nameFile="avatar-sizes.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Initial Fallbacks"
          subtitle="Colored backgrounds for unique identifiers"
        >
          <CodePreview
            preview={<AvatarInitials />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Initials"
            language="tsx"
            nameFile="avatar-initials.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Iconic Fallbacks" subtitle="Generic placeholders using Lucide icons">
          <CodePreview
            preview={<AvatarIcons />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Icons"
            language="tsx"
            nameFile="avatar-icons.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Bordered & Rings" subtitle="Highlighted with primary borders">
          <CodePreview
            preview={<AvatarBordered />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Bordered"
            language="tsx"
            nameFile="avatar-bordered.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Avatar Stacks" subtitle="Common grouped pattern for team members">
          <CodePreview
            preview={<AvatarGroup />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Grouped"
            language="tsx"
            nameFile="avatar-group.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Status Indicators"
          subtitle="Real-time presence dots on top of avatars"
        >
          <CodePreview
            preview={<AvatarStatus />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Status"
            language="tsx"
            nameFile="avatar-status.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Premium Gradient"
          subtitle="Colorful rings for featured or story-line items"
        >
          <CodePreview
            preview={<AvatarGradient />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Gradient"
            language="tsx"
            nameFile="avatar-gradient.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Rich Data Link"
          subtitle="Integrated avatar with contextual information"
        >
          <CodePreview
            preview={<AvatarRichLink />}
            code={avatarDefaultSnippet.react}
            codeNext={avatarDefaultSnippet.next}
            codeHtml={avatarDefaultSnippet.html}
            title="Rich Link"
            language="tsx"
            nameFile="avatar-rich.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
