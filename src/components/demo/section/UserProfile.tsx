"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { AccountSettingsPage, UserDashboard, UserProfilePage } from "@/code/user-profiles";
import {
  sampleCodeUserProfile,
  sampleCodeAccountSettings,
  sampleCodeUserDashboard,
  sampleCodeProfileHtml,
} from "@/data/code/user-profiles";

const PersonIcon = () => (
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
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
  </svg>
);

export const UserProfile = () => (
  <ContentLayout>
    <SectionDoc
      icon={<PersonIcon />}
      iconBg="bg-[#fce7f3]"
      title="User Profile"
      componentCount={3}
      description="Beautiful user profile layouts ready to drop into any application. Covers the three most common profile screens — an editable public profile with cover photo, a settings panel for security and notification preferences, and a personal dashboard with key stats and recent activity. All built with Shadcn UI for instant theme compatibility."
      features={[
        "Editable profile with cover photo gradient and skill tags",
        "Avatar overlapping the cover with ring border and Badge",
        "Edit/Cancel toggle mode with inline form fields",
        "Account settings with password, notification switches, language & timezone selects",
        "Danger zone section for account deletion",
        "Dashboard with welcome banner, stat cards, streak, and orders table",
      ]}
      dependencies={[]}
      shadcnDeps={["card", "avatar", "badge", "input", "label", "switch", "select", "separator"]}
    >
      {/* User Profile Page */}
      <ComponentBlock
        title="User Profile Page"
        subtitle="Cover photo, editable fields, skills & stats"
        features={[
          "Cover gradient header",
          "Avatar with ring border",
          "Edit/Cancel toggle",
          "Bio + location fields",
          "Skills badge list",
          "Stats row (posts, followers, repos)",
        ]}
      >
        <div className="w-full lg:w-[80%] mx-auto">
          <CodePreview
            title="User Profile Page"
            code={sampleCodeUserProfile}
            codeNext={`"use client";\n\n${sampleCodeUserProfile}`}
            codeHtml={sampleCodeProfileHtml}
            language="javascript"
            nameFile="user-profile.tsx"
            preview={<UserProfilePage />}
          />
        </div>
      </ComponentBlock>

      {/* Account Settings */}
      <ComponentBlock
        title="Account Settings"
        subtitle="Security, notifications, language & danger zone"
        features={[
          "Change password section",
          "Email + marketing notification switches",
          "Language & timezone selects",
          "Danger zone with delete account button",
        ]}
      >
        <div className="w-full lg:w-[80%] mx-auto">
          <CodePreview
            title="Account Settings"
            code={sampleCodeAccountSettings}
            codeNext={`"use client";\n\n${sampleCodeAccountSettings}`}
            codeHtml={sampleCodeProfileHtml}
            language="javascript"
            nameFile="account-settings.tsx"
            preview={<AccountSettingsPage />}
          />
        </div>
      </ComponentBlock>

      {/* User Dashboard */}
      <ComponentBlock
        title="User Dashboard"
        subtitle="Welcome banner, stat grid & recent orders table"
        features={[
          "Personalized welcome banner with avatar",
          "4-cell stat grid (posts, followers, streak, repos)",
          "Achievement badges row",
          "Recent orders table with status Badge",
        ]}
      >
        <div className="w-full lg:w-[80%] mx-auto">
          <CodePreview
            title="User Dashboard"
            code={sampleCodeUserDashboard}
            codeNext={`"use client";\n\n${sampleCodeUserDashboard}`}
            codeHtml={sampleCodeProfileHtml}
            language="javascript"
            nameFile="user-dashboard.tsx"
            preview={<UserDashboard />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
