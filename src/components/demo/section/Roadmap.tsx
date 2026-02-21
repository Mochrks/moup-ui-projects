"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { RoadmapTimeline } from "@/code/learning-steps";
import { sampleCodeRoadmap } from "@/data/code/learning";

const RoadmapIcon = () => (
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
    <path d="M12 2v10" />
    <path d="M18 9l-6 6-6-6" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

export const Roadmap = () => (
  <ContentLayout>
    <SectionDoc
      icon={<RoadmapIcon />}
      iconBg="bg-[#fce7f3]"
      title="Product Roadmap"
      componentCount={1}
      description="Communicate your product's future vision with a professional roadmap timeline. This section features vertical timelines with status indicators, task checklists, and quarterly badges. Perfect for building transparency and excitement for upcoming features."
      features={[
        "Vertical timeline structure with continuous connector lines",
        "Quarterly badges (Q1, Q2, Q3, Q4) with neobrutalist styling",
        "Status colors for Done, Active, and Upcoming milestones",
        "Nested task checklists within milestone cards",
        "High-performance design that handles many roadmap items",
        "Responsive vertical flow optimized for mobile reading",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "badge"]}
    >
      <ComponentBlock
        title="Vertical Timeline Roadmap"
        subtitle="Chronological flow with status-based cards"
        features={["Status Indicators", "Task Lists", "Quarterly Badges", "Vertical Connector"]}
      >
        <div className="w-full py-6">
          <CodePreview
            title="Roadmap Timeline"
            code={sampleCodeRoadmap}
            codeNext={sampleCodeRoadmap}
            codeHtml={sampleCodeRoadmap}
            language="javascript"
            nameFile="roadmap-timeline.tsx"
            preview={<RoadmapTimeline />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
