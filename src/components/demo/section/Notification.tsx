"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { NotificationCenterMock } from "@/code/essentials";
import { sampleCodeNotification } from "@/data/code/essentials";

const NotifIcon = () => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const Notification = () => (
  <ContentLayout>
    <SectionDoc
      icon={<NotifIcon />}
      iconBg="bg-[#fee2e2]"
      title="Notification UI"
      componentCount={1}
      description="Keep your users informed with interactive notification centers. This section provides high-quality notification cards including status tracking, type-based icons (Success, Error, Info), and scrollable lists. Optimized for high visibility and quick scanning."
      features={[
        "Type-based status indicators and dedicated neobrutalist icons",
        "Interactive notification list with hover highlights",
        "Integrated 'Mark All Read' and 'See All' action buttons",
        "Red-dot badge support for unread counts",
        "Responsive card layouts optimized for headers and sidebars",
        "Premium shadow effects and clean border-based dividers",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "badge", "button"]}
    >
      <ComponentBlock
        title="Notification Center Card"
        subtitle="Complete menu component with list items and actions"
        features={["Status Badges", "Interactive List", "Action Group", "Type Icons"]}
      >
        <div className="w-full flex justify-center py-6">
          <CodePreview
            title="Notification Center"
            code={sampleCodeNotification}
            codeNext={sampleCodeNotification}
            codeHtml={sampleCodeNotification}
            language="javascript"
            nameFile="notification-center.tsx"
            preview={<NotificationCenterMock />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
