"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { CourseCard, LMSCourseModules, LessonCard } from "@/code/learning-steps";
import { sampleCodeLMS, sampleCodeLMSModules, sampleCodeLessonCard } from "@/data/code/learning";

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
      componentCount={3}
      description="Build modern educational platforms with dedicated LMS components. This section provides high-quality course cards with integrated progress tracking, difficulty badges, and session tracking features. Optimized for visual clarity and student engagement."
      features={[
        "Interactive Course Cards with visual progress indicators",
        "Difficulty and Level badges (Beginner, Intermediate, Advanced)",
        "Lesson count and Duration tracking metadata",
        "Responsive grid support for course catalogs",
        "Clean Shadcn UI hover effects and premium typography",
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

      {/* Curriculum Module List */}
      <ComponentBlock
        title="Curriculum Module List"
        subtitle="Detailed list of lessons with status indicators"
        features={["Status Icons", "Progress Tracking", "Duration Labels", "Chevron Group"]}
      >
        <div className="w-full flex justify-center">
          <CodePreview
            title="Course Modules"
            code={sampleCodeLMSModules}
            codeNext={sampleCodeLMSModules}
            codeHtml={sampleCodeLMSModules}
            language="javascript"
            nameFile="course-modules.tsx"
            preview={<LMSCourseModules />}
          />
        </div>
      </ComponentBlock>

      {/* Lesson Details Card */}
      <ComponentBlock
        title="Lesson Details Card"
        subtitle="Individual lesson preview with play button and stats"
        features={["Play Button", "Rating Support", "Student Count", "Category Badges"]}
      >
        <div className="w-full flex justify-center">
          <CodePreview
            title="Lesson Card"
            code={sampleCodeLessonCard}
            codeNext={sampleCodeLessonCard}
            codeHtml={sampleCodeLessonCard}
            language="javascript"
            nameFile="lesson-card.tsx"
            preview={<LessonCard />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
