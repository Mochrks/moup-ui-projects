
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';


import { Drawer } from '@/components/demo/Drawer';
import { Dashboard } from '@/components/demo/section/Dashboard';
import { SignIn } from '@/components/demo/section/SignIn';
import { Heros } from '@/components/demo/section/Heros';

export const Section = () => {
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

                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="heros" element={<Heros />} />
                        <Route path="sign-in" element={<SignIn />} />
                    </Routes>
                </div>
            </main>
        </>
    )
}
