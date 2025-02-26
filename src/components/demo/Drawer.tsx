
import { useNavigate } from 'react-router-dom';
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { TbSection } from "react-icons/tb";
import { RxComponent1 } from "react-icons/rx";
import { ScrollArea } from '../ui/scroll-area';


// Menu Data
const menuData = [
    {
        label: 'Get Started',
        logo: RiMenuUnfold4Line2,
        items: [
            { name: 'Introduction', route: 'docs/introduction' },
            { name: 'Installation', route: 'docs/installation' },
            { name: 'Templates', route: 'docs/templates' },
        ],
    },
    {
        label: 'Section',
        logo: TbSection,
        items: [
            { name: 'Authentication', route: 'section/sign-in' },
            { name: 'Carousel', route: 'section/carousel' },
            { name: 'Chat', route: 'section/chat' },
            { name: 'Dashboard', route: 'section/dashboard' },
            { name: 'Navbar', route: 'section/navbar' },
            { name: 'Hero', route: 'section/heros' },
            { name: 'Footer', route: 'section/footer' },
            { name: 'Feedback & Rating', route: 'section/user-feedback-rating' },
            { name: 'User Profiles', route: 'section/user-profiles' },
            { name: 'Other', route: 'section/other' },
        ],
    },
    {
        label: 'Components',
        logo: RxComponent1,
        items: [
            { name: 'All components', route: 'components/all-components' },
            { name: 'Accordion', route: 'components/accordion' },
            { name: 'Alert', route: 'components/alert' },
            { name: 'Drawer', route: 'components/drawer' },
            { name: 'Dialog', route: 'components/dialog' },
            { name: 'Loading', route: 'components/loading' },
            { name: 'Pagination', route: 'components/pagination' },
            { name: 'Table', route: 'components/table' },
        ],
    },
];

export const Drawer = () => {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(`/${route}`);
    };
    return (
        <ScrollArea className="h-full w-full md:bg-white ">
            <div className="hidden md:block pt-14 left-0 w-full h-s transition-all duration-300">
                <div className="h-full w-full border-2 border-border dark:border-darkBorder font-base">
                    {menuData.map((section, index) => (
                        <div key={index}>

                            <h6 className="flex items-center w-full text-lg font-bold text-text border-b-2 border-border dark:border-darkBorder bg-white px-5 py-4">
                                <section.logo className="h-5 w-5 mr-2" />
                                {section.label}
                            </h6>
                            {section.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    role="button"
                                    onClick={() => handleNavigation(item.route)}
                                    className="cursor-pointer block w-full text-text border-b-2 text-start border-border dark:border-darkBorder bg-white px-5 py-4 hover:bg-main"
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    )

}
