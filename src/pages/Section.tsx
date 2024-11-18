
import { Navbar } from '@/components/demo/Navbar';
import { Routes, Route } from 'react-router-dom';


import { Drawer } from '@/components/demo/Drawer';
import { Dashboard } from '@/components/demo/section/Dashboard';
import { SignIn } from '@/components/demo/section/SignIn';
import { Heros } from '@/components/demo/section/Heros';
import { Chat } from '@/components/demo/section/Chat';
import { NavbarContent } from '@/components/demo/section/NavbarContent';
import { FooterContent } from '@/components/demo/section/FooterContent';
import { UserProfile } from '@/components/demo/section/UserProfile';
import { FeedbackRating } from '@/components/demo/section/FeedbackRating';
import { Other } from '@/components/demo/section/Other';
import ScrollToTopButton from '@/components/demo/ScrollToTopButton';
import { Carousel } from '@/components/demo/component/Carousel';
const Section = () => {
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
                <main className="flex-1 ml-1 md:ml-64 py-4 px-7 pt-20 overflow-auto">
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="heros" element={<Heros />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="navbar" element={<NavbarContent />} />
                        <Route path="footer" element={<FooterContent />} />
                        <Route path="carousel" element={<Carousel />} />
                        <Route path="feedback-rating" element={<FeedbackRating />} />
                        <Route path="user-profiles" element={<UserProfile />} />
                        <Route path="other" element={<Other />} />
                    </Routes>
                </main>
            </div>
            <ScrollToTopButton />
        </div>
    )
}


export default Section;