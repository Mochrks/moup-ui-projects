import React from "react";
import { Routes, Route } from "react-router-dom";

import { IntroductionContent } from "@/components/demo/get-started/IntroductionContent";
import { InstallationContent } from "@/components/demo/get-started/InstallationContent";
import { TemplatesContent } from "@/components/demo/get-started/TemplatesContent";
import MainLayout from "@/layout/MainLayout";

const DocsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="introduction" element={<IntroductionContent />} />
      <Route path="installation" element={<InstallationContent />} />
      <Route path="templates" element={<TemplatesContent />} />
    </Routes>
  );
};

const Docs = () => {
  return (
    <MainLayout>
      <DocsRoutes />
    </MainLayout>
  );
};

export default Docs;
