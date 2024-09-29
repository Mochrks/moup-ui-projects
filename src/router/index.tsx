import React from 'react';
import { NotFound } from '@/components/demo/NotFound';
import { Home } from '@/pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Docs } from '@/pages/Docs';
import { Comp } from '@/pages/Comp';
import { Section } from '@/pages/Section';



const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/components/*" element={<Comp />} />
            <Route path="/section/*" element={<Section />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
