"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  TableSimple,
  TableStriped,
  TableBordered,
  TableHoverable,
  TableStatus,
  TableRich,
  TableCompact,
  TableSorting,
  TableCaptionDemo,
  TableActions,
} from "@/code/table-demo";
import { tableDefaultSnippet } from "@/data/code/all-snippets";
import { Table as TableIcon } from "lucide-react";

export const Table = () => (
  <ContentLayout>
    <SectionDoc
      icon={<TableIcon className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Table"
      componentCount={10}
      description="Modern data tables for displaying sets of information in a clean, structured way. Built with accessibility and responsive layouts in mind."
      features={[
        "Standard and Striped (Zebra) row patterns",
        "Hoverable rows for better focus tracking",
        "Rich content support: Avatars, Badges, and Multiple buttons",
        "Integrated sorting indicators and header patterns",
        "Caption and Footer support for summaries",
        "Responsive border options (Full border vs Outer only)",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["table", "avatar", "badge", "button"]}
    >
      <div className="grid grid-cols-1 gap-8">
        <ComponentBlock
          title="Simple Standard Table"
          subtitle="Clean data presentation with basic headers"
        >
          <CodePreview
            preview={<TableSimple />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Simple"
            language="tsx"
            nameFile="table-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Striped (Zebra) Pattern"
          subtitle="Alternating row colors for better readability"
        >
          <CodePreview
            preview={<TableStriped />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Striped"
            language="tsx"
            nameFile="table-striped.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Fully Bordered Interface"
          subtitle="Strong separation between columns and rows"
        >
          <CodePreview
            preview={<TableBordered />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Bordered"
            language="tsx"
            nameFile="table-bordered.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Interactive Hover State"
          subtitle="Highlights the active row for focus"
        >
          <CodePreview
            preview={<TableHoverable />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Hoverable"
            language="tsx"
            nameFile="table-hover.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Status Enrichment"
          subtitle="Uses badges and indicators for data health"
        >
          <CodePreview
            preview={<TableStatus />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Status"
            language="tsx"
            nameFile="table-status.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Rich Member List"
          subtitle="Integrates avatars and secondary meta info"
        >
          <CodePreview
            preview={<TableRich />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Rich"
            language="tsx"
            nameFile="table-rich.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Compact Data View"
          subtitle="Reduced padding for high-density information"
        >
          <CodePreview
            preview={<TableCompact />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Compact"
            language="tsx"
            nameFile="table-compact.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Sorting Interface" subtitle="Header patterns for sortable columns">
          <CodePreview
            preview={<TableSorting />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Sorting"
            language="tsx"
            nameFile="table-sort.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Caption & Footers"
          subtitle="Includes descriptive text and total summaries"
        >
          <CodePreview
            preview={<TableCaptionDemo />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Caption"
            language="tsx"
            nameFile="table-caption.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Cell Actions" subtitle="Contextual buttons within specific rows">
          <CodePreview
            preview={<TableActions />}
            code={tableDefaultSnippet.react}
            codeNext={tableDefaultSnippet.next}
            codeHtml={tableDefaultSnippet.html}
            title="Actions"
            language="tsx"
            nameFile="table-actions.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
