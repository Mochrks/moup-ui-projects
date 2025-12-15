import React from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "@/components/demo/component/Loading";
import { Alert } from "@/components/demo/component/Alert";
import { Accordion } from "@/components/demo/component/Accordion";
import { AllComponents } from "@/components/demo/component/AllComponents";
import { DrawerContent } from "@/components/demo/component/DrawerContent";
import { Dialog } from "@/components/demo/component/Dialog";
import { Pagination } from "@/components/demo/component/Pagination";
import { Table } from "@/components/demo/component/Table";
import MainLayout from "@/layout/MainLayout";

const CompRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="all-components" element={<AllComponents />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="alert" element={<Alert />} />
      <Route path="drawer" element={<DrawerContent />} />
      <Route path="dialog" element={<Dialog />} />
      <Route path="loading" element={<Loading />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="table" element={<Table />} />
    </Routes>
  );
};

const Comp = () => {
  return (
    <MainLayout>
      <CompRoutes />
    </MainLayout>
  );
};

export default Comp;
