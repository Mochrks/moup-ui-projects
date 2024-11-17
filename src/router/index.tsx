import ErrorBoundary from '@/components/demo/ErrorBoundary';
import Loader from '@/components/demo/Loader';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('@/pages/Home'));
const Docs = lazy(() => import('@/pages/Docs'));
const Comp = lazy(() => import('@/pages/Comp'));
const Section = lazy(() => import('@/pages/Section'));
const NotFound = lazy(() => import('@/components/demo/NotFound'));

const AppRoutes: React.FC = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs/*" element={<Docs />} />
                    <Route path="/components/*" element={<Comp />} />
                    <Route path="/section/*" element={<Section />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRoutes;