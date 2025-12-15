"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import {
  BasicCarousel,
  CircularCarousel,
  CubeCarousel,
  ElasticCarousel,
  FadeCarousel,
  InfiniteCarousel,
  ParallaxCarousel,
  PerspectiveCarousel,
  StackedCarousel,
  ZoomCarousel,
} from "@/code/carousel";
import { ContentLayout } from "@/layout/ContentLayout";

export const Carousel = () => {
  const sampleCode = `sample code`.trim();
  return (
    <ContentLayout>
      <div className="p-6 text-start w-full">
        <h2 className="text-2xl font-bold mb-4">Carousel </h2>
        <p className="mb-4">
          Add dynamic and interactive carousels to your application with our versatile and
          customizable carousel components. MoupUI offers responsive, modern carousel interfaces
          that integrate seamlessly with React, Tailwind CSS, and ShadCN UI.
        </p>

        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <p className="mb-4">
          Our carousel components come with autoplay, manual navigation, touch support, and
          customizable transitions. Whether you're showcasing images, products, or content slides,
          these components will help you create a visually appealing and user-friendly carousel
          experience.
        </p>

        <p className="mb-4">
          Simply copy the carousel components into your project and customize them to match your
          brand and requirements. With MoupUI, you can have a fully functional carousel up and
          running in no time.
        </p>

        <div className="mt-10">
          <CodePreview
            title="Basic Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="basic-carousel.tsx"
            preview={<BasicCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Zoom Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="zoom-carousel.tsx"
            preview={<ZoomCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Cube Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="cube-carousel.tsx"
            preview={<CubeCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Infinite Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Infinite-carousel.tsx"
            preview={<InfiniteCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Fade Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Fade-carousel.tsx"
            preview={<FadeCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Parallax Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Parallax-carousel.tsx"
            preview={<ParallaxCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Elastic Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Elastic-carousel.tsx"
            preview={<ElasticCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Perspective Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Perspective-carousel.tsx"
            preview={<PerspectiveCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Circular Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Circular-carousel.tsx"
            preview={<CircularCarousel />}
          />
        </div>
        <div className="mt-10">
          <CodePreview
            title="Stack Carousel"
            code={sampleCode}
            language="javascript"
            nameFile="Stack-carousel.tsx"
            preview={<StackedCarousel />}
          />
        </div>
      </div>
    </ContentLayout>
  );
};
