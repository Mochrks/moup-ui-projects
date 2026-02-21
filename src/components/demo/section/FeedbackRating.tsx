"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  AnimatedStarRating,
  EmojiFeedback,
  InteractiveReviewCard,
  RenderFeedbackPage,
  RenderReviewsPage,
} from "@/code/feedback-rating";
import {
  sampleCodeStarRating,
  sampleCodeEmojiFeedback,
  sampleCodeInteractiveReview,
  sampleCodeFeedbackHtml,
} from "@/data/code/feedback-rating";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const FeedbackRating = () => (
  <ContentLayout>
    <SectionDoc
      icon={<StarIcon />}
      iconBg="bg-[#fef3c7]"
      title="Feedback & Rating"
      componentCount={5}
      description="Engage users and gather valuable insights with a complete set of feedback and rating components. From star ratings with hover label tooltips, emoji mood pickers with success animations, full review pages with up/down voting, feedback type selectors, to interactive review cards with tag badges — every pattern your product needs to collect user sentiment."
      features={[
        "Write-review panel + community reviews list with up/down vote counters",
        "Feedback form with type selector (Bug, Suggestion, Praise) and satisfaction slider",
        "Animated star rating with hover labels (Terrible → Excellent) and submit state",
        "Emoji mood picker (4 moods) with Framer Motion animated success screen",
        "Interactive review card with helpful/not helpful voting and tag badge system",
      ]}
      dependencies={["framer-motion"]}
      shadcnDeps={["card", "button", "textarea", "avatar", "badge", "progress", "label"]}
    >
      {/* Review Pages */}
      <ComponentBlock
        title="Review Pages"
        subtitle="Write + display community reviews with voting"
        features={[
          "Write review form",
          "Star rating picker",
          "Reviews list",
          "Up/down vote buttons",
          "Helpful counter badge",
        ]}
      >
        <CodePreview
          title="Review Pages"
          code={sampleCodeStarRating}
          codeNext={`"use client";\n\n${sampleCodeStarRating}`}
          codeHtml={sampleCodeFeedbackHtml}
          language="javascript"
          nameFile="review-pages.tsx"
          preview={<RenderReviewsPage />}
        />
      </ComponentBlock>

      {/* Feedback Form */}
      <ComponentBlock
        title="Feedback Form"
        subtitle="Type selector + satisfaction slider + textarea"
        features={[
          "Bug / Suggestion / Praise type tabs",
          "Satisfaction rating slider",
          "Screenshot attachment button",
          "Priority selector",
          "Submit with loading state",
        ]}
      >
        <CodePreview
          title="Feedback Form"
          code={sampleCodeEmojiFeedback}
          codeNext={`"use client";\n\n${sampleCodeEmojiFeedback}`}
          codeHtml={sampleCodeFeedbackHtml}
          language="javascript"
          nameFile="feedback-form.tsx"
          preview={<RenderFeedbackPage />}
        />
      </ComponentBlock>

      {/* Animated Star Rating */}
      <ComponentBlock
        title="Animated Star Rating"
        subtitle="Hover labels + spring scale animation on submit"
        features={[
          "5-star hover highlight",
          "Label on hover (Terrible → Excellent)",
          "Spring scale animation",
          "Submitted confirmation state",
        ]}
      >
        <div className="w-full lg:w-[70%] mx-auto">
          <CodePreview
            title="Animated Star Rating"
            code={sampleCodeStarRating}
            codeNext={`"use client";\n\n${sampleCodeStarRating}`}
            codeHtml={sampleCodeFeedbackHtml}
            language="javascript"
            nameFile="star-rating.tsx"
            preview={<AnimatedStarRating />}
          />
        </div>
      </ComponentBlock>

      {/* Emoji Feedback */}
      <ComponentBlock
        title="Emoji Feedback"
        subtitle="4-mood emoji grid with animated success screen"
        features={[
          "4 emoji moods (😔 😐 😊 🤩)",
          "Framer Motion scale on select",
          "Animated success confirmation",
          "Auto-reset after 3 seconds",
        ]}
      >
        <div className="w-full lg:w-[70%] mx-auto">
          <CodePreview
            title="Emoji Feedback"
            code={sampleCodeEmojiFeedback}
            codeNext={`"use client";\n\n${sampleCodeEmojiFeedback}`}
            codeHtml={sampleCodeFeedbackHtml}
            language="javascript"
            nameFile="emoji-feedback.tsx"
            preview={<EmojiFeedback />}
          />
        </div>
      </ComponentBlock>

      {/* Interactive Review Card */}
      <ComponentBlock
        title="Interactive Review Card"
        subtitle="Helpful/not-helpful voting + tag badge system"
        features={[
          "Avatar + name + date header",
          "Star rating display row",
          "Review body text",
          "Tag badges (Performance, UI, Support…)",
          "Helpful / Not Helpful vote buttons with counter",
        ]}
      >
        <div className="w-full lg:w-[70%] mx-auto">
          <CodePreview
            title="Interactive Review Card"
            code={sampleCodeInteractiveReview}
            codeNext={`"use client";\n\n${sampleCodeInteractiveReview}`}
            codeHtml={sampleCodeFeedbackHtml}
            language="javascript"
            nameFile="interactive-review.tsx"
            preview={<InteractiveReviewCard />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
