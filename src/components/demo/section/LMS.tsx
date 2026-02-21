"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { CourseCard } from "@/code/learning-steps";
import { sampleCodeLMS } from "@/data/code/learning";

const LMSIcon = () => (
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
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const LMS = () => (
  <ContentLayout>
    <SectionDoc
      icon={<LMSIcon />}
      iconBg="bg-[#d1fae5]"
      title="Learning Management"
      componentCount={1}
      description="Build modern educational platforms with dedicated LMS components. This section provides high-quality course cards with integrated progress tracking, difficulty badges, and session tracking features. Optimized for visual clarity and student engagement."
      features={[
        "Interactive Course Cards with visual progress indicators",
        "Difficulty and Level badges (Beginner, Intermediate, Advanced)",
        "Lesson count and Duration tracking metadata",
        "Responsive grid support for course catalogs",
        "Neobrutalist hover effects and premium typography",
        "Accessible progress bar components powered by Radix UI",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "progress", "badge", "button"]}
    >
      <ComponentBlock
        title="Course Catalog Card"
        subtitle="Standard preview with progress and difficulty level"
        features={["Progress Bar", "Difficulty Badge", "Duration Info", "CTA Button"]}
      >
        <div className="w-full flex justify-center">
          <CodePreview
            title="Course Card"
            code={sampleCodeLMS}
            codeNext={sampleCodeLMS}
            codeHtml={sampleCodeLMS}
            language="javascript"
            nameFile="course-card.tsx"
            preview={<CourseCard />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
