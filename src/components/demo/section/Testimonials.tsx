"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  TestimonialGrid,
  SingleFeaturedTestimonial,
  MasonryTestimonials,
} from "@/code/testimonials";
import { sampleCodeTestimonials } from "@/data/code/marketing";

const UserIcon = () => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Testimonials = () => (
  <ContentLayout>
    <SectionDoc
      icon={<UserIcon />}
      iconBg="bg-[#fce7f3]"
      title="Testimonials"
      componentCount={3}
      description="Social proof is the most powerful tool in your landing page. This section provides stunning layouts to showcase user feedback, from a responsive masonry-style grid of review cards to large-scale featured blocks for key quotes. Built to build trust instantly with premium typography and neobrutalist touches."
      features={[
        "Responsive masonry/grid layouts for multiple reviews",
        "Featured testimonial blocks with large impact typography",
        "Avatar support with neobrutalist ring borders and shadows",
        "Star rating system integrated into review cards",
        "Clean quote icons and background decorative elements",
        "Hover transitions and smooth entrance animations",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "avatar"]}
    >
      {/* Testimonial Grid */}
      <ComponentBlock
        title="Review Masonry Grid"
        subtitle="Multi-column card layout for social proof"
        features={["Star Ratings", "Neobrutalist Cards", "Avatar Groups", "Interactive Hover"]}
      >
        <CodePreview
          title="Review Grid"
          code={sampleCodeTestimonials}
          codeNext={sampleCodeTestimonials}
          codeHtml={sampleCodeTestimonials}
          language="javascript"
          nameFile="testimonial-grid.tsx"
          preview={<TestimonialGrid />}
        />
      </ComponentBlock>

      {/* Featured Testimonial */}
      <ComponentBlock
        title="Hero Testimonial"
        subtitle="Large impact block for key user quotes"
        features={[
          "Background Decorative Quote",
          "Large Scale",
          "Black & Yellow Theme",
          "High Visibility",
        ]}
      >
        <CodePreview
          title="Hero Testimonial"
          code={sampleCodeTestimonials}
          codeNext={sampleCodeTestimonials}
          codeHtml={sampleCodeTestimonials}
          language="javascript"
          nameFile="hero-testimonial.tsx"
          preview={<SingleFeaturedTestimonial />}
        />
      </ComponentBlock>

      {/* Masonry Layout */}
      <ComponentBlock
        title="Dynamic Masonry"
        subtitle="Asymmetric grid with mixed background colors"
        features={["Varied Column Spans", "Vibrant Colors", "Bold Iconography", "Clean Borders"]}
      >
        <CodePreview
          title="Masonry Testimonials"
          code={sampleCodeTestimonials}
          codeNext={sampleCodeTestimonials}
          codeHtml={sampleCodeTestimonials}
          language="javascript"
          nameFile="masonry-testimonials.tsx"
          preview={<MasonryTestimonials />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
