import React from 'react'
import { Button } from '@/components/ui/button'
import { ListCollapse, MessageCircleWarning, User, Star, PanelBottom, MessageCircleCode, LogIn, LayoutDashboard, GalleryHorizontalEnd, Sheet, PanelLeftOpen, MessageSquareText, Loader, LayoutPanelTop } from 'lucide-react'
import ScrollToTopButton from '../../ui-other/ScrollToTopButton'
import { ButtonInfo, Section } from '@/types/all-component'


const sections: Section[] = [
    {
        title: 'Components',
        buttons: [
            { name: 'Accordion', route: '/components/accordion', icon: ListCollapse },
            { name: 'Alert', route: '/components/alert', icon: MessageCircleWarning },
            { name: 'Carousel', route: '/components/carousel', icon: GalleryHorizontalEnd },
            { name: 'Drawer', route: '/components/drawer', icon: PanelLeftOpen },
            { name: 'Dialog', route: '/components/dialog', icon: MessageSquareText },
            { name: 'Loading', route: '/components/loading', icon: Loader },
            { name: 'Pagination', route: '/components/pagination', icon: LayoutPanelTop },
            { name: 'Table', route: '/components/table', icon: Sheet },
        ],

    },
    {
        title: 'Section',
        buttons: [
            { name: 'Chat', route: '/section/chat', icon: MessageCircleCode },
            { name: 'Authentication', route: '/section/sign-in', icon: LogIn },
            { name: 'Dashboard', route: '/section/dashboard', icon: LayoutDashboard },
            // { name: 'Heros', route: '/section/heros', icon: RectangleEllipsis },
            { name: 'Footer', route: '/section/footer', icon: PanelBottom },
            { name: 'Feedback & Rating', route: '/section/user-feedback-rating', icon: Star },
            { name: 'User Profiles', route: '/section/user-profiles', icon: User },
        ],

    },

]

const ButtonCard: React.FC<ButtonInfo> = ({ name, route, icon: Icon }) => {
    return (
        <div>
            <Button
                variant="default"
                className="w-full h-20  bg-gradient-to-r from-indigo-500 to-mainAccent text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 flex items-center justify-between px-4"
                asChild
            >
                <a href={route} className="flex items-center justify-between w-full ">
                    <span className="text-lg font-medium z-10">{name}</span>
                    <Icon className="w-6 h-6 text-white z-10" />
                </a>
            </Button>
        </div>
    )
}

export const AllComponents: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8 pt-6">All Components</h1>
            {sections.map((section) => (
                <div key={section.title} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {section.buttons.map((button) => (
                            <ButtonCard key={button.name} {...button} />
                        ))}
                    </div>
                </div>
            ))}
            <ScrollToTopButton />
        </div>

    )
}