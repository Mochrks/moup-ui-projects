"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
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
import {
  sampleCodeBasicCarousel,
  sampleCodeCarouselNext,
  sampleCodeCarouselHtml,
  sampleCodeZoomCarousel,
  sampleCodeCubeCarousel,
  sampleCodeInfiniteCarousel,
  sampleCodeFadeCarousel,
  sampleCodeParallaxCarousel,
} from "@/data/code/carousel";

const CarouselIcon = () => (
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
    <path d="m15 18 6-6-6-6" />
    <path d="m9 18-6-6 6-6" />
  </svg>
);

const ITEMS = [
  {
    title: "Basic Carousel",
    subtitle: "Slide transition with arrows & dot pagination",
    file: "basic-carousel.tsx",
    code: sampleCodeBasicCarousel,
    component: <BasicCarousel />,
    features: [
      "Left/right arrow buttons",
      "Dot indicators",
      "Slide transition",
      "Keyboard nav ready",
    ],
  },
  {
    title: "Zoom Carousel",
    subtitle: "Scale-in transition — items zoom from centre",
    file: "zoom-carousel.tsx",
    code: sampleCodeZoomCarousel,
    component: <ZoomCarousel />,
    features: ["Scale + fade transition", "Centered active slide", "Framer Motion spring"],
  },
  {
    title: "Cube Carousel",
    subtitle: "3D CSS rotateY cube flip between slides",
    file: "cube-carousel.tsx",
    code: sampleCodeCubeCarousel,
    component: <CubeCarousel />,
    features: ["CSS perspective + rotateY", "3D face setup", "Smooth 0.5s transition"],
  },
  {
    title: "Infinite Carousel",
    subtitle: "Auto-scroll loop that never stops",
    file: "infinite-carousel.tsx",
    code: sampleCodeInfiniteCarousel,
    component: <InfiniteCarousel />,
    features: [
      "useEffect auto-play",
      "Configurable interval",
      "Pause on hover",
      "Wraps seamlessly",
    ],
  },
  {
    title: "Fade Carousel",
    subtitle: "Cross-fade opacity transition between slides",
    file: "fade-carousel.tsx",
    code: sampleCodeFadeCarousel,
    component: <FadeCarousel />,
    features: ["Opacity cross-fade", "position: absolute stacking", "Framer AnimatePresence"],
  },
  {
    title: "Parallax Carousel",
    subtitle: "Layered depth parallax on background vs content",
    file: "parallax-carousel.tsx",
    code: sampleCodeParallaxCarousel,
    component: <ParallaxCarousel />,
    features: [
      "Framer useMotionValue",
      "Background translateX offset",
      "Content layer offset",
      "Drag to swipe",
    ],
  },
  {
    title: "Elastic Carousel",
    subtitle: "Spring physics bounce on slide change",
    file: "elastic-carousel.tsx",
    code: sampleCodeBasicCarousel,
    component: <ElasticCarousel />,
    features: ["Framer spring config", "Overshoot bounce", "Stiffness + damping control"],
  },
  {
    title: "Perspective Carousel",
    subtitle: "Tilted 3D perspective — side slides appear angled",
    file: "perspective-carousel.tsx",
    code: sampleCodeBasicCarousel,
    component: <PerspectiveCarousel />,
    features: [
      "rotateY on side slides",
      "Scale down for depth",
      "Active slide highlight",
      "Smooth CSS transition",
    ],
  },
  {
    title: "Circular Carousel",
    subtitle: "Items arranged in an orbit / ring layout",
    file: "circular-carousel.tsx",
    code: sampleCodeBasicCarousel,
    component: <CircularCarousel />,
    features: [
      "Polar coordinate positioning",
      "Rotation on arrow click",
      "CSS transform origin center",
    ],
  },
  {
    title: "Stacked Carousel",
    subtitle: "Card deck stack — top card slides away on advance",
    file: "stacked-carousel.tsx",
    code: sampleCodeBasicCarousel,
    component: <StackedCarousel />,
    features: [
      "z-index deck order",
      "Drag to dismiss top card",
      "Slide-off exit animation",
      "Scale + translateY on back cards",
    ],
  },
];

export const Carousel = () => (
  <ContentLayout>
    <SectionDoc
      icon={<CarouselIcon />}
      iconBg="bg-[#dbeafe]"
      title="Carousel"
      componentCount={10}
      description="10 unique carousel animation patterns — from a simple slide carousel all the way to a 3D cube flip, CSS parallax depth, spring-physics elastic bounce, perspective tilt, circular orbit, and a swipeable card deck. Every variant is built with Framer Motion, supports touch/drag, and is fully customizable. Copy any variant into your project in seconds."
      features={[
        "Basic Slide — arrows, dot pagination, keyboard-nav ready",
        "Zoom — center-scale spring animation",
        "Cube 3D — CSS perspective rotateY face flip",
        "Infinite Auto-Scroll — pause on hover, configurable interval",
        "Fade — opacity cross-fade with AnimatePresence mode sync",
        "Parallax Depth — two-layer translateX at different speeds",
        "Elastic Spring — overshoot bounce with configurable stiffness",
        "Perspective Tilt — adjacent slides rotateY + scale for depth",
        "Circular Orbit — polar-coordinate ring layout",
        "Stacked Deck — drag-to-dismiss card stack",
      ]}
      dependencies={["framer-motion"]}
      shadcnDeps={["card", "badge", "button"]}
    >
      {ITEMS.map((item) => (
        <ComponentBlock
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          features={item.features}
        >
          <CodePreview
            title={item.title}
            code={item.code}
            codeNext={sampleCodeCarouselNext}
            codeHtml={sampleCodeCarouselHtml}
            language="javascript"
            nameFile={item.file}
            preview={item.component}
          />
        </ComponentBlock>
      ))}
    </SectionDoc>
  </ContentLayout>
);
