"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { AccountSettingsPage, UserDashboard, UserProfilePage } from "@/code/user-profiles";
import { ContentLayout } from "@/layout/ContentLayout";

export const UserProfile = () => {
  const sampleCode = `sample code`.trim();
  return (
    <ContentLayout>
      <div className="p-6 text-start w-full">
        <h2 className="text-2xl font-bold mb-4">User Profile </h2>
        <p className="mb-4">
          Create personalized and interactive user profiles with our versatile and customizable
          profile components. MoupUI offers responsive, modern profile interfaces that integrate
          seamlessly with React, Tailwind CSS, and ShadCN UI.
        </p>

        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <p className="mb-4">
          Our user profile components include profile cards, avatar uploads, bio sections, and
          social media integrations. Whether you're building a social networking platform, a
          professional portfolio, or a community-driven app, these components will help you showcase
          user information in a clean and engaging way.
        </p>

        <p className="mb-4">
          Simply copy the user profile components into your project and customize them to match your
          brand and requirements. With MoupUI, you can easily implement a dynamic and user-friendly
          profile system to enhance your application's user experience.
        </p>

        <div className="flex mt-10 w-full items-center justify-center">
          <div className="md: w-full lg:w-[80%]">
            <CodePreview
              title="Profile"
              code={sampleCode}
              language="javascript"
              nameFile="profile.tsx"
              preview={<UserProfilePage />}
            />
          </div>
        </div>
        <div className="flex mt-10 w-full items-center justify-center">
          <div className="md: w-full lg:w-[80%]">
            <CodePreview
              title="Account Settings"
              code={sampleCode}
              language="javascript"
              nameFile="account-setting.tsx"
              preview={<AccountSettingsPage />}
            />
          </div>
        </div>
        <div className="flex mt-10 w-full items-center justify-center">
          <div className="md: w-full lg:w-[80%]">
            <CodePreview
              title="User Dashboard"
              code={sampleCode}
              language="javascript"
              nameFile="user-dashboard.tsx"
              preview={<UserDashboard />}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
