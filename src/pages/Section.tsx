
import { Navbar } from '@/components/ui-other/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Drawer } from '@/components/ui-other/Drawer';
import { Dashboard } from '@/components/demo/section/Dashboard';
import { Authentification } from '@/components/demo/section/Authentification';
import { Heros } from '@/components/demo/section/Heros';
import { Chat } from '@/components/demo/section/Chat';
import { UserProfile } from '@/components/demo/section/UserProfile';
import { FeedbackRating } from '@/components/demo/section/FeedbackRating';
import ScrollToTopButton from '@/components/ui-other/ScrollToTopButton';
import { Carousel } from '@/components/demo/section/Carousel';


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
                        <Route path="sign-in" element={<Authentification />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="carousel" element={<Carousel />} />
                        <Route path="user-feedback-rating" element={<FeedbackRating />} />
                        <Route path="user-profiles" element={<UserProfile />} />

                    </Routes>
                </main>
            </div>
            <ScrollToTopButton />
        </div>
    )
}


export default Section;