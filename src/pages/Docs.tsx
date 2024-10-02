
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';

import { IntroductionContent } from '@/components/demo/get-started/IntroductionContent';
import { InstallationContent } from '@/components/demo/get-started/InstallationContent';
import { TemplatesContent } from '@/components/demo/get-started/TemplatesContent';
import { Drawer } from '@/components/demo/Drawer';


export const Docs = () => {


    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <div className="flex flex-1 pt-2 ">
                {/* Drawer */}
                <aside className="fixed left-0 top-16 bottom-0 w-64 overflow-y-auto overflow-x-hidden">
                    <Drawer />
                </aside>
                {/* Content */}
                <main className="flex-1 ml-1 md:ml-64 p-4 overflow-auto">
                    <Routes>
                        <Route path="introduction" element={<IntroductionContent />} />
                        <Route path="installation" element={<InstallationContent />} />
                        <Route path="templates" element={<TemplatesContent />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
