
import { Navbar } from '@/components/ui-other/Navbar';
import { Routes, Route } from 'react-router-dom';

import { IntroductionContent } from '@/components/demo/get-started/IntroductionContent';
import { InstallationContent } from '@/components/demo/get-started/InstallationContent';
import { TemplatesContent } from '@/components/demo/get-started/TemplatesContent';
import { Drawer } from '@/components/ui-other/Drawer';
import ScrollToTopButton from '@/components/ui-other/ScrollToTopButton';


const Docs = () => {


    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <div className="flex flex-1 pt-2 ">
                {/* Drawer */}
                <aside className="fixed left-0 top-16 bottom-0 w-64 max-h-screen overflow-y-auto overflow-x-hidden">
                    <Drawer />
                </aside>
                {/* Content */}
                <main className="flex-1 ml-1 md:ml-64 py-4 px-7 pt-20 overflow-auto ">
                    <Routes>
                        <Route path="introduction" element={<IntroductionContent />} />
                        <Route path="installation" element={<InstallationContent />} />
                        <Route path="templates" element={<TemplatesContent />} />
                    </Routes>
                </main>
            </div>
            <ScrollToTopButton />
        </div>
    );
};


export default Docs;