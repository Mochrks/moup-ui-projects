"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  PaginationSimple,
  PaginationIconic,
  PaginationWithEllipsis,
  PaginationPill,
  PaginationMinimal,
  PaginationSolid,
  PaginationJump,
  PaginationLarge,
  PaginationCompact,
  PaginationDashboard,
} from "@/code/pagination-demo";
import { paginationDefaultSnippet } from "@/data/code/all-snippets";
import { LayoutPanelTop } from "lucide-react";

export const Pagination = () => (
  <ContentLayout>
    <SectionDoc
      icon={<LayoutPanelTop className="w-5 h-5" />}
      iconBg="bg-blue-100"
      title="Pagination"
      componentCount={10}
      description="Interactive navigation to transition between multi-page content. Versatile styles ranging from standard number lists to compact dashboard controllers."
      features={[
        "Standard numeric navigation with active states",
        "Ellipsis support for long page lists",
        "Custom shapes: Square, Rounded, and Full Pill",
        "Integration with Jump-to-Page input modules",
        "Compact slider-style indicators for touch interfaces",
        "Dashboard-ready controllers with 'items per page' context",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["pagination", "button"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock
          title="Standard Pagination"
          subtitle="Classic numbers with Prev/Next buttons"
        >
          <CodePreview
            preview={<PaginationSimple />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Standard"
            language="tsx"
            nameFile="pagination-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Iconic Controls" subtitle="Minimal text, focuses on arrow buttons">
          <CodePreview
            preview={<PaginationIconic />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Iconic"
            language="tsx"
            nameFile="pagination-iconic.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="With Smart Ellipsis"
          subtitle="Handles large datasets by hiding middle pages"
        >
          <CodePreview
            preview={<PaginationWithEllipsis />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Ellipsis"
            language="tsx"
            nameFile="pagination-ellipsis.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Rounded Pill Shape" subtitle="Modern friendly UI with full circles">
          <CodePreview
            preview={<PaginationPill />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Pill"
            language="tsx"
            nameFile="pagination-pill.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Minimalist Ghost"
          subtitle="Clean text-based links without heavy boxes"
        >
          <CodePreview
            preview={<PaginationMinimal />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Minimal"
            language="tsx"
            nameFile="pagination-minimal.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Solid Block Indicator"
          subtitle="High contrast buttons for dashboard menus"
        >
          <CodePreview
            preview={<PaginationSolid />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Solid"
            language="tsx"
            nameFile="pagination-solid.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Jump to Specific Page"
          subtitle="Includes input for direct navigation"
        >
          <CodePreview
            preview={<PaginationJump />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Jump"
            language="tsx"
            nameFile="pagination-jump.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Large Touch-Friendly"
          subtitle="Oversized buttons for better accessibility"
        >
          <CodePreview
            preview={<PaginationLarge />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Large"
            language="tsx"
            nameFile="pagination-large.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Compact Progress Slider"
          subtitle="Visual bar for step-by-step navigation"
        >
          <CodePreview
            preview={<PaginationCompact />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Compact"
            language="tsx"
            nameFile="pagination-compact.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Standard Dashboard Footer"
          subtitle="Full context with item counts and nav"
        >
          <CodePreview
            preview={<PaginationDashboard />}
            code={paginationDefaultSnippet.react}
            codeNext={paginationDefaultSnippet.next}
            codeHtml={paginationDefaultSnippet.html}
            title="Dashboard"
            language="tsx"
            nameFile="pagination-dashboard.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
