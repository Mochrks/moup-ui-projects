import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '@/components/demo/section/Dashboard';
import { Authentification } from '@/components/demo/section/Authentification';
import { Heros } from '@/components/demo/section/Heros';
import { Chat } from '@/components/demo/section/Chat';
import { UserProfile } from '@/components/demo/section/UserProfile';
import { FeedbackRating } from '@/components/demo/section/FeedbackRating';
import { Carousel } from '@/components/demo/section/Carousel';
import MainLayout from '@/layout/MainLayout';

const SectionRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="heros" element={<Heros />} />
            <Route path="sign-in" element={<Authentification />} />
            <Route path="chat" element={<Chat />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="user-feedback-rating" element={<FeedbackRating />} />
            <Route path="user-profiles" element={<UserProfile />} />
        </Routes>
    );
};

const Section = () => {
    return (
        <MainLayout>
            <SectionRoutes />
        </MainLayout>
    );
};

export default Section;