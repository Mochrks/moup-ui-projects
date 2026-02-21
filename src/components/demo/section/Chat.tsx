"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { AIPoweredChatbot, RenderChatLayoutOne, RenderChatLayoutTwo } from "@/code/chat";
import { ContentLayout } from "@/layout/ContentLayout";
import { sampleCodeAIChat, sampleCodeChatNext, sampleCodeChatHtml } from "@/data/code/chat";

const ChatIcon = () => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Chat = () => (
  <ContentLayout>
    <SectionDoc
      icon={<ChatIcon />}
      iconBg="bg-[#d1fae5]"
      title="Chat Interfaces"
      componentCount={3}
      description="Modern chat UI kits ready for production. This section features interactive AI-powered chatbots with typing simulations, a professional two-panel chat application layout with contact lists, and a responsive full-width messaging interface. All interfaces are optimized for readability, mobile responsiveness, and easy integration with WebSocket or LLM backends."
      features={[
        "AI Chatbot with random bot replies and typing '...' indicators",
        "Two-panel layout with searchable contact list and message window",
        "Full-page responsive chat layout for web applications",
        "Auto-scrolling message area using Radix ScrollArea",
        "Rich message bubbles with Avatars and Badge status indicators",
        "Neobrutalist shadow effects and clean Shadcn UI typography",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "avatar", "badge", "input", "scroll-area", "button"]}
    >
      {/* AI Chatbot */}
      <ComponentBlock
        title="AI Chat Assistant"
        subtitle="Typing simulation + interactive bot replies"
        features={[
          "Shared AI context",
          "Simulated typing state",
          "Auto-scroll to bottom",
          "Lucide icons (Bot, User, Sparkles)",
        ]}
      >
        <div className="w-full lg:w-[70%] mx-auto">
          <CodePreview
            title="AI Chat Assistant"
            code={sampleCodeAIChat}
            codeNext={sampleCodeChatNext}
            codeHtml={sampleCodeChatHtml}
            language="javascript"
            nameFile="ai-chatbot.tsx"
            preview={<AIPoweredChatbot />}
          />
        </div>
      </ComponentBlock>

      {/* Chat Layout One */}
      <ComponentBlock
        title="Two-Panel Chat App"
        subtitle="Contact list + active message window"
        features={[
          "Active conversation tracking",
          "Sidebar contact items",
          "Searchable contacts",
          "Shared state between panels",
        ]}
      >
        <CodePreview
          title="Two-Panel Chat App"
          code={sampleCodeAIChat}
          codeNext={sampleCodeChatNext}
          codeHtml={sampleCodeChatHtml}
          language="javascript"
          nameFile="chat-two-panel.tsx"
          preview={<RenderChatLayoutOne />}
        />
      </ComponentBlock>

      {/* Chat Layout Two */}
      <ComponentBlock
        title="Full-Width Chat Layout"
        subtitle="Responsive single-column messaging viewport"
        features={[
          "Max-width container style",
          "Floating send area",
          "Top navigation bar",
          "Mobile-optimized spacing",
        ]}
      >
        <CodePreview
          title="Full-Width Chat Layout"
          code={sampleCodeAIChat}
          codeNext={sampleCodeChatNext}
          codeHtml={sampleCodeChatHtml}
          language="javascript"
          nameFile="chat-full-layout.tsx"
          preview={<RenderChatLayoutTwo />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
