
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';

import { Drawer } from '@/components/demo/Drawer';
import { Loading } from '@/components/demo/component/Loading';
import { Alert } from '@/components/demo/component/Alert';
import { Accordion } from '@/components/demo/component/Accordion';
import { AllComponents } from '@/components/demo/component/AllComponents';
import { DrawerContent } from '@/components/demo/component/DrawerContent';
import { Dialog } from '@/components/demo/component/Dialog';
import { Pagination } from '@/components/demo/component/Pagination';
import { Table } from '@/components/demo/component/Table';
import ScrollToTopButton from '@/components/demo/ScrollToTopButton';


const Comp = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <div className="flex flex-1 pt-2">
                {/* Drawer */}
                <aside className="fixed left-0 top-16 bottom-0 w-64 overflow-y-auto overflow-x-hidden">
                    <Drawer />
                </aside>

                {/* Content */}
                <main className="flex-1 ml-1 md:ml-64 py-4 px-7 overflow-auto">

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
                </main>
            </div>
            <ScrollToTopButton />
        </div>
    )
}


export default Comp;