"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { CMSPostList, CMSEditorLayout, CMSSiteStats, CMSMediaGrid } from "@/code/cms";
import { sampleCodeCMS, sampleCodeCMSStats, sampleCodeCMSMedia } from "@/data/code/cms";

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

export const CMS = () => (
  <ContentLayout>
    <SectionDoc
      icon={<CMSIcon />}
      iconBg="bg-[#fce7f3]"
      title="CMS Interfaces"
      componentCount={4}
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

      {/* Analytics */}
      <ComponentBlock
        title="Site Analytics"
        subtitle="Visual performance metrics and user growth tracking"
        features={["Metric Cards", "Growth Indicators", "Icon Support", "Shadow Depth"]}
      >
        <CodePreview
          title="CMS Stats"
          code={sampleCodeCMSStats}
          codeNext={sampleCodeCMSStats}
          codeHtml={sampleCodeCMSStats}
          language="javascript"
          nameFile="cms-stats.tsx"
          preview={<CMSSiteStats />}
        />
      </ComponentBlock>

      {/* Media Library */}
      <ComponentBlock
        title="Media Library"
        subtitle="Grid-based asset management with filtering"
        features={["File Grid", "Upload Button", "Asset Metadata", "Search Bar"]}
      >
        <CodePreview
          title="Media Library"
          code={sampleCodeCMSMedia}
          codeNext={sampleCodeCMSMedia}
          codeHtml={sampleCodeCMSMedia}
          language="javascript"
          nameFile="cms-media.tsx"
          preview={<CMSMediaGrid />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
