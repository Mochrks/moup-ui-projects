import { useNavigate } from "react-router-dom";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { TbSection } from "react-icons/tb";
import { RxComponent1 } from "react-icons/rx";
import { ScrollArea } from "../ui-neobrutalism/scroll-area";

const menuData = [
  {
    label: "Get Started",
    logo: RiMenuUnfold4Line2,
    items: [
      { name: "Installation", route: "docs/installation" },
      { name: "Introduction", route: "docs/introduction" },
      { name: "Templates", route: "docs/templates" },
    ],
  },
  {
    label: "Section",
    logo: TbSection,
    items: [
      { name: "Authentication", route: "section/sign-in" },
      { name: "Carousel", route: "section/carousel" },
      { name: "Chat", route: "section/chat" },
      { name: "CMS", route: "section/cms" },
      { name: "Dashboard", route: "section/dashboard" },
      { name: "E-commerce", route: "section/e-commerce" },
      { name: "FAQ", route: "section/faq" },
      { name: "Feedback & Rating", route: "section/user-feedback-rating" },
      { name: "Footer", route: "section/footer" },
      { name: "Help Center", route: "section/help-centers" },
      { name: "Hero", route: "section/heros" },
      { name: "LMS", route: "section/lms" },
      { name: "Multi Steps", route: "section/multi-steps" },
      { name: "Notification", route: "section/notification" },
      { name: "Pricing", route: "section/pricing" },
      { name: "Roadmap", route: "section/roadmap" },
      { name: "Testimonials", route: "section/testimonials" },
      { name: "User Profiles", route: "section/user-profiles" },
    ],
  },
  {
    label: "Components",
    logo: RxComponent1,
    items: [
      { name: "All components", route: "components/all-components" },
      { name: "Accordion", route: "components/accordion" },
      { name: "Alert", route: "components/alert" },
      { name: "Avatar", route: "components/avatar" },
      { name: "Badge", route: "components/badge" },
      { name: "Calendar", route: "components/calendar" },
      { name: "Charts", route: "components/charts" },
      { name: "Dialog", route: "components/dialog" },
      { name: "Drawer", route: "components/drawer" },
      { name: "Form", route: "components/form" },
      { name: "Input Otp", route: "components/input-otp" },
      { name: "Loading", route: "components/loading" },
      { name: "Pagination", route: "components/pagination" },
      { name: "Progress", route: "components/progress" },
      { name: "Skeleton", route: "components/skeleton" },
      { name: "Switch", route: "components/switch" },
      { name: "Table", route: "components/table" },
      { name: "Tooltip", route: "components/tooltip" },
    ],
  },
];

export const Drawer = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <ScrollArea className="h-full w-full">
      <div className="pt-2 w-full h-full transition-all duration-300">
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
                  className="cursor-pointer block w-full text-text border-b-2 text-start border-border dark:border-darkBorder bg-white px-5 py-4 hover:bg-main transition-colors duration-200"
                >
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};
