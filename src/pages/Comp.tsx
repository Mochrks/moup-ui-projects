import React from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "@/components/demo/component/Loading";
import { Alert } from "@/components/demo/component/Alert";
import { Accordion } from "@/components/demo/component/Accordion";
import { AllComponents } from "@/components/demo/component/AllComponents";
import { DrawerDemo } from "@/components/demo/component/DrawerContent";
import { Dialog } from "@/components/demo/component/Dialog";
import { Pagination } from "@/components/demo/component/Pagination";
import { Table } from "@/components/demo/component/Table";
import { Avatar } from "@/components/demo/component/Avatar";
import { Badge } from "@/components/demo/component/Badge";
import { Calendar } from "@/components/demo/component/Calendar";
import { Switch } from "@/components/demo/component/Switch";
import { Tooltip } from "@/components/demo/component/Tooltip";
import { Progress } from "@/components/demo/component/Progress";
import { Skeleton } from "@/components/demo/component/Skeleton";
import { InputOtp } from "@/components/demo/component/InputOtp";
import { Form } from "@/components/demo/component/Form";
import { Charts } from "@/components/demo/component/Charts";
import MainLayout from "@/layout/MainLayout";

const CompRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="all-components" element={<AllComponents />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="alert" element={<Alert />} />
      <Route path="avatar" element={<Avatar />} />
      <Route path="badge" element={<Badge />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="charts" element={<Charts />} />
      <Route path="switch" element={<Switch />} />
      <Route path="tooltip" element={<Tooltip />} />
      <Route path="progress" element={<Progress />} />
      <Route path="skeleton" element={<Skeleton />} />
      <Route path="input-otp" element={<InputOtp />} />
      <Route path="form" element={<Form />} />
      <Route path="drawer" element={<DrawerDemo />} />
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
