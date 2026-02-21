"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { CMSPostList, CMSEditorLayout } from "@/code/cms";

const CMSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const sampleCodeCMS = `
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function CMSDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Hello World</TableCell>
          <TableCell><Badge>Published</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`;

export const CMS = () => (
  <ContentLayout>
    <SectionDoc
      icon={<CMSIcon />}
      iconBg="bg-[#fce7f3]"
      title="CMS Interfaces"
      componentCount={2}
      description="Streamlined Content Management System interfaces for creators and administrators. This section includes powerful post management tables with status tracking and a distraction-free editor layout with integrated publishing settings. Perfect for blogs, news portals, or documentation platforms."
      features={[
        "Interactive Post Management Table with status badges",
        "Distraction-free Editor Layout with split-view settings",
        "Responsive sidebar for metadata and publishing controls",
        "Neobrutalist shadow effects on interactive elements",
        "Status tracking for Drafts, Reviews, and Published content",
        "Quick action buttons for editing, viewing, and deleting",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["table", "badge", "button", "input", "tabs"]}
    >
      {/* Post List */}
      <ComponentBlock
        title="Post Management"
        subtitle="Full-width table with status tracking and actions"
        features={["Status Badges", "Action Group", "Responsive Table", "Filterable List"]}
      >
        <CodePreview
          title="Post Management"
          code={sampleCodeCMS}
          codeNext={sampleCodeCMS}
          codeHtml={sampleCodeCMS}
          language="javascript"
          nameFile="cms-post-list.tsx"
          preview={<CMSPostList />}
        />
      </ComponentBlock>

      {/* Editor Layout */}
      <ComponentBlock
        title="Article Editor"
        subtitle="Split layout: Writing area + Settings sidebar"
        features={[
          "Distraction-free Editor",
          "Publishing Sidebar",
          "Metadata Controls",
          "Tabbed Settings",
        ]}
      >
        <CodePreview
          title="Article Editor"
          code={sampleCodeCMS}
          codeNext={sampleCodeCMS}
          codeHtml={sampleCodeCMS}
          language="javascript"
          nameFile="cms-editor.tsx"
          preview={<CMSEditorLayout />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
