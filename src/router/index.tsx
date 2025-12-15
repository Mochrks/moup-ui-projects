import ErrorBoundary from "@/components/ui-main/ErrorBoundary";
import TopLoadingBar from "@/components/ui-main/TopLoadingBar";
import { useLoadingRoute } from "@/hooks/useLoadingRoute";
import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Docs = lazy(() => import("@/pages/Docs"));
const Comp = lazy(() => import("@/pages/Comp"));
const Color = lazy(() => import("@/pages/Colors"));
const Section = lazy(() => import("@/pages/Section"));
const NotFound = lazy(() => import("@/components/ui-main/NotFound"));

const AppRoutes: React.FC = () => {
  const isLoading = useLoadingRoute();
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    if (!isLoading) {
      startTransition(() => {
        setDisplayLocation(location);
      });
    }
  }, [location, isLoading]);

  return (
    <ErrorBoundary>
      {(isLoading || isPending) && <TopLoadingBar />}

      <Suspense fallback={null}>
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            opacity: isLoading || isPending ? 0.99 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/components/*" element={<Comp />} />
            <Route path="/section/*" element={<Section />} />
            <Route path="/colors" element={<Color />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
