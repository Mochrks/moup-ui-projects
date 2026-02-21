"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  SkeletonCircle,
  SkeletonHeading,
  SkeletonPara,
  SkeletonSquare,
  SkeletonHero,
  SkeletonNav,
  SkeletonProfile,
  SkeletonGrid,
  SkeletonTable,
  SkeletonDash,
} from "@/code/skeleton-demo";
import { skeletonDefaultSnippet } from "@/data/code/all-snippets";
import { Menu } from "lucide-react";

export const Skeleton = () => (
  <ContentLayout>
    <SectionDoc
      icon={<Menu className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Skeleton"
      componentCount={10}
      description="Use to show a placeholder while content is loading. Smoothly animates to indicate activity and improve perceived speed."
      features={[
        "Subtle pulsing animation by default",
        "Full control over border-radius (Square to Circle)",
        "Responsive sizing based on parent container",
        "Infinite combinations for building complex UI layouts",
        "Light/Dark mode compatibility built-in",
        "Low performance overhead (CSS-only animation)",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["skeleton"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock title="Avatar Circle" subtitle="Placeholder for user profile images">
          <CodePreview
            preview={<SkeletonCircle />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Circle"
            language="tsx"
            nameFile="skeleton-circle.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Page Heading" subtitle="Thick block for title placeholders">
          <CodePreview
            preview={<SkeletonHeading />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Heading"
            language="tsx"
            nameFile="skeleton-heading.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Paragraph Body" subtitle="Multiple lines for text-heavy content">
          <CodePreview
            preview={<SkeletonPara />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Paragraph"
            language="tsx"
            nameFile="skeleton-para.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Square Component" subtitle="Generic block for icons or small images">
          <CodePreview
            preview={<SkeletonSquare />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Square"
            language="tsx"
            nameFile="skeleton-square.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Hero Banner" subtitle="Large surface for primary visuals">
          <CodePreview
            preview={<SkeletonHero />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Hero"
            language="tsx"
            nameFile="skeleton-hero.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Navigation Menu"
          subtitle="Row of small interactive element skeletons"
        >
          <CodePreview
            preview={<SkeletonNav />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Navigation"
            language="tsx"
            nameFile="skeleton-nav.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Profile Header" subtitle="Combined avatar and metadata block">
          <CodePreview
            preview={<SkeletonProfile />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Profile"
            language="tsx"
            nameFile="skeleton-profile.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Compact Grid" subtitle="Layout for file explorers or small cards">
          <CodePreview
            preview={<SkeletonGrid />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Grid"
            language="tsx"
            nameFile="skeleton-grid.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Data Table Row"
          subtitle="Pattern for loading individual spreadsheet rows"
        >
          <CodePreview
            preview={<SkeletonTable />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Table"
            language="tsx"
            nameFile="skeleton-table.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Dashboard Widget"
          subtitle="Complete composite card for stats loading"
        >
          <CodePreview
            preview={<SkeletonDash />}
            code={skeletonDefaultSnippet.react}
            codeNext={skeletonDefaultSnippet.next}
            codeHtml={skeletonDefaultSnippet.html}
            title="Dashboard"
            language="tsx"
            nameFile="skeleton-dash.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
