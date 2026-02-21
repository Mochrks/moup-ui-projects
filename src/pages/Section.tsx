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

import MainLayout from "@/layout/MainLayout";

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
