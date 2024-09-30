
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';

import { IntroductionContent } from '@/components/demo/get-started/IntroductionContent';
import { InstallationContent } from '@/components/demo/get-started/InstallationContent';
import { TemplatesContent } from '@/components/demo/get-started/TemplatesContent';
import { Drawer } from '@/components/demo/Drawer';


export const Docs = () => {


    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="flex">
                {/* Drawer */}
                <Drawer />
                {/* Content */}
                <div className="flex-1 p-4 overflow-auto">
                    <Routes>
                        <Route path="introduction" element={<IntroductionContent />} />
                        <Route path="installation" element={<InstallationContent />} />
                        <Route path="templates" element={<TemplatesContent />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};
