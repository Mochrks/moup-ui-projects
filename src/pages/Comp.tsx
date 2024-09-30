
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';

import { Drawer } from '@/components/demo/Drawer';
import { Loading } from '@/components/demo/component/Loading';
import { Alert } from '@/components/demo/component/Alert';
import { Accordion } from '@/components/demo/component/Accordion';
import { AllComponents } from '@/components/demo/component/AllComponents';


export const Comp = () => {
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
                        <Route path="all-components" element={<AllComponents />} />
                        <Route path="loading" element={<Loading />} />
                        <Route path="alert" element={<Alert />} />
                        <Route path="accordion" element={<Accordion />} />
                    </Routes>
                </div>
            </main>
        </>
    )
}
