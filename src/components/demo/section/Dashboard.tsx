"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { DashboardPage } from "@/code/dashboard";
import { ContentLayout } from "@/layout/ContentLayout";
import { sampleCodeDashboard } from "@/data/code/dashboard";
import {
  DashboardStatsGrid,
  DashboardKanban,
  DashboardActivity,
  DashboardServerMonitor,
  DashboardUsers,
  DashboardBilling,
  DashboardNotifications,
  DashboardAPI,
  DashboardTeam,
  DashboardInbox,
} from "@/code/dashboard-variants";

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
      componentCount={11}
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
      <div className="flex flex-col gap-20">
        <ComponentBlock
          title="Admin Dashboard Template"
          subtitle="Complete layout with sidebar, header, and charts"
          features={["Side Navigation", "Global Search", "KPI Stats Grid", "Bar & Pie Charts"]}
        >
          <div className="w-full px-0">
            <CodePreview
              title="Full Admin Dashboard"
              code={sampleCodeDashboard}
              language="javascript"
              nameFile="dashboard.tsx"
              preview={<DashboardPage />}
            />
          </div>
        </ComponentBlock>

        <div className="grid grid-cols-1 gap-12">
          <ComponentBlock title="Stats Overview" subtitle="High-impact KPI summary cards">
            <CodePreview
              title="KPI Cards"
              code={sampleCodeDashboard}
              preview={<DashboardStatsGrid />}
              nameFile="dashboard-stats.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Inbox & Messages" subtitle="Split view messaging interface">
            <CodePreview
              title="Inbox UI"
              code={sampleCodeDashboard}
              preview={<DashboardInbox />}
              nameFile="dashboard-inbox.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Server Infrastructure"
            subtitle="Dark mode monitoring with pulse indicators"
          >
            <CodePreview
              title="Server Monitor"
              code={sampleCodeDashboard}
              preview={<DashboardServerMonitor />}
              nameFile="dashboard-monitor.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Billing & Finance"
            subtitle="Financial overview with wallet support"
          >
            <CodePreview
              title="Finance Dashboard"
              code={sampleCodeDashboard}
              preview={<DashboardBilling />}
              nameFile="dashboard-billing.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="API Security" subtitle="Key management and security scoring">
            <CodePreview
              title="API Manager"
              code={sampleCodeDashboard}
              preview={<DashboardAPI />}
              nameFile="dashboard-api.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Activity Stream"
            subtitle="Interactive vertical timeline of events"
          >
            <CodePreview
              title="Activity Feed"
              code={sampleCodeDashboard}
              preview={<DashboardActivity />}
              nameFile="dashboard-activity.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Kanban Workflow"
            subtitle="Task management with column organization"
          >
            <CodePreview
              title="Project Kanban"
              code={sampleCodeDashboard}
              preview={<DashboardKanban />}
              nameFile="dashboard-kanban.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="User Directory" subtitle="Modern profile cards with status badges">
            <CodePreview
              title="User Grid"
              code={sampleCodeDashboard}
              preview={<DashboardUsers />}
              nameFile="dashboard-users.tsx"
            />
          </ComponentBlock>

          <ComponentBlock
            title="Team Management"
            subtitle="Department tracking with capacity metrics"
          >
            <CodePreview
              title="Team Overview"
              code={sampleCodeDashboard}
              preview={<DashboardTeam />}
              nameFile="dashboard-team.tsx"
            />
          </ComponentBlock>

          <ComponentBlock title="Notification Hub" subtitle="Centralized alerts and message center">
            <CodePreview
              title="Notifications"
              code={sampleCodeDashboard}
              preview={<DashboardNotifications />}
              nameFile="dashboard-notifications.tsx"
            />
          </ComponentBlock>
        </div>
      </div>
    </SectionDoc>
  </ContentLayout>
);
