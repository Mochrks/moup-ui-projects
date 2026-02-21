"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { DashboardPage } from "@/code/dashboard";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  sampleCodeDashboard,
  sampleCodeDashboardNext,
  sampleCodeDashboardHtml,
} from "@/data/code/dashboard";

const DashboardIcon = () => (
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
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

export const Dashboard = () => (
  <ContentLayout>
    <SectionDoc
      icon={<DashboardIcon />}
      iconBg="bg-[#ffe135]"
      title="Dashboard"
      componentCount={1}
      description="A full-featured admin dashboard template designed for SaaS and enterprise applications. It includes a multi-level sidebar, responsive navigation, KPI stat cards with trend indicators, and highly customizable Recharts for data visualization. This template is a perfect starting point for building sophisticated control panels with a clean, neobrutalist aesthetic."
      features={[
        "Responsive sidebar with active state tracking and logo space",
        "Top navigation bar with search input, notifications, and user dropdown",
        "KPI cards with trend percentages (up/down) and custom icons",
        "Interactive BarChart for revenue overview using Recharts",
        "Interactive PieChart for traffic source analysis",
        "Clean grid layout using Tailwind's grid system",
      ]}
      dependencies={["recharts", "lucide-react"]}
      shadcnDeps={["card", "button", "input", "avatar", "badge"]}
    >
      <ComponentBlock
        title="Admin Dashboard Template"
        subtitle="Complete layout with sidebar, header, and charts"
        features={[
          "Side Navigation",
          "Global Search",
          "KPI Stats Grid",
          "Bar & Pie Charts",
          "User Profile Hook",
        ]}
      >
        <div className="w-full px-0">
          <CodePreview
            title="Full Admin Dashboard"
            code={sampleCodeDashboard}
            codeNext={sampleCodeDashboardNext}
            codeHtml={sampleCodeDashboardHtml}
            language="javascript"
            nameFile="dashboard.tsx"
            preview={<DashboardPage />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
