import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "@/components/demo/section/Dashboard";
import { Authentification } from "@/components/demo/section/Authentification";
import { Heros } from "@/components/demo/section/Heros";
import { Chat } from "@/components/demo/section/Chat";
import { UserProfile } from "@/components/demo/section/UserProfile";
import { FeedbackRating } from "@/components/demo/section/FeedbackRating";
import { Carousel } from "@/components/demo/section/Carousel";
import { Ecommerce } from "@/components/demo/section/Ecommerce";
import { FAQ } from "@/components/demo/section/FAQ";
import { CMS } from "@/components/demo/section/CMS";
import { Pricing } from "@/components/demo/section/Pricing";
import { Testimonials } from "@/components/demo/section/Testimonials";
import { LMS } from "@/components/demo/section/LMS";
import { MultiSteps } from "@/components/demo/section/MultiSteps";
import { Roadmap } from "@/components/demo/section/Roadmap";
import { Footer } from "@/components/demo/section/Footer";
import { HelpCenter } from "@/components/demo/section/HelpCenters";
import { Notification } from "@/components/demo/section/Notification";
import { Animation } from "@/components/demo/section/Animation";
import { AnimText } from "@/components/demo/anim/AnimText";
import { AnimLoading } from "@/components/demo/anim/AnimLoading";
import { AnimBackground } from "@/components/demo/anim/AnimBackground";
import { AnimCard } from "@/components/demo/anim/AnimCard";
import { AnimMicro } from "@/components/demo/anim/AnimMicro";
import { AnimCounter } from "@/components/demo/anim/AnimCounter";
import { AnimReveal } from "@/components/demo/anim/AnimReveal";
import { AnimHero } from "@/components/demo/anim/AnimHero";
import { AnimParticle } from "@/components/demo/anim/AnimParticle";
import { AnimHover } from "@/components/demo/anim/AnimHover";
import { AnimButton } from "@/components/demo/anim/AnimButton";
import { AnimModal } from "@/components/demo/anim/AnimModal";
import { AnimNav } from "@/components/demo/anim/AnimNav";
import { AnimScroll } from "@/components/demo/anim/AnimScroll";
import { AnimChart } from "@/components/demo/anim/AnimChart";
import { AnimTransition } from "@/components/demo/anim/AnimTransition";

import MainLayout from "@/layout/MainLayout";

/**
 * AnimationRoutes — nested router for /section/animation/*
 *
 * React Router v6 requires that any path with multiple segments (e.g. "animation/text")
 * be handled by a dedicated wildcard Route + nested <Routes>, because the parent
 * SectionRoutes only strips one segment at a time. Without this, "animation/text"
 * never matches and only the index route ("animation") renders.
 */
const AnimationRoutes: React.FC = () => (
  <Routes>
    <Route index element={<Animation />} />
    <Route path="text" element={<AnimText />} />
    <Route path="loading" element={<AnimLoading />} />
    <Route path="background" element={<AnimBackground />} />
    <Route path="card" element={<AnimCard />} />
    <Route path="micro" element={<AnimMicro />} />
    <Route path="counter" element={<AnimCounter />} />
    <Route path="reveal" element={<AnimReveal />} />
    <Route path="hero" element={<AnimHero />} />
    <Route path="particle" element={<AnimParticle />} />
    <Route path="hover" element={<AnimHover />} />
    <Route path="button" element={<AnimButton />} />
    <Route path="modal" element={<AnimModal />} />
    <Route path="nav" element={<AnimNav />} />
    <Route path="scroll" element={<AnimScroll />} />
    <Route path="chart" element={<AnimChart />} />
    <Route path="transition" element={<AnimTransition />} />
  </Routes>
);

const SectionRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="heros" element={<Heros />} />
      <Route path="sign-in" element={<Authentification />} />
      <Route path="chat" element={<Chat />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="user-feedback-rating" element={<FeedbackRating />} />
      <Route path="user-profiles" element={<UserProfile />} />
      <Route path="e-commerce" element={<Ecommerce />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="cms" element={<CMS />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="lms" element={<LMS />} />
      <Route path="multi-steps" element={<MultiSteps />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="footer" element={<Footer />} />
      <Route path="help-centers" element={<HelpCenter />} />
      <Route path="notification" element={<Notification />} />
      {/* animation/* delegates to AnimationRoutes so nested paths work */}
      <Route path="animation/*" element={<AnimationRoutes />} />
    </Routes>
  );
};

const Section = () => {
  return (
    <MainLayout>
      <SectionRoutes />
    </MainLayout>
  );
};

export default Section;
