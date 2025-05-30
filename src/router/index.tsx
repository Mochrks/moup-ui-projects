import ErrorBoundary from '@/components/ui-other/ErrorBoundary';
import TopLoadingBar from '@/components/ui-other/TopLoadingBar';
import { useLoadingRoute } from '@/hooks/useLoadingRoute';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Docs = lazy(() => import('@/pages/Docs'));
const Comp = lazy(() => import('@/pages/Comp'));
const Color = lazy(() => import('@/pages/Colors'));
const Section = lazy(() => import('@/pages/Section'));
const NotFound = lazy(() => import('@/components/ui-other/NotFound'));

const AppRoutes: React.FC = () => {
    const isLoading = useLoadingRoute();

    return (
        <ErrorBoundary>
            {isLoading && <TopLoadingBar />}
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs/*" element={<Docs />} />
                    <Route path="/components/*" element={<Comp />} />
                    <Route path="/section/*" element={<Section />} />
                    <Route path="/colors" element={<Color />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRoutes;