import React from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import {
  MessageCircleWarning,
  User,
  Star,
  PanelBottom,
  MessageCircleCode,
  LogIn,
  LayoutDashboard,
  GalleryHorizontalEnd,
  PanelLeftOpen,
  MessageSquareText,
  Loader,
  LayoutPanelTop,
  RectangleEllipsis,
  Badge,
  CalendarDays,
  BarChart3,
  SlidersHorizontal,
  KeySquare,
  Table,
  FormInput,
  Bell,
  HelpCircle,
  CreditCard,
  MessagesSquare,
  BookOpen,
  FileText,
  Map,
  ChevronsUpDown,
  Menu,
  MessageSquarePlus,
  ToggleLeft,
} from "lucide-react";
import ScrollToTopButton from "../../ui-main/ScrollToTopButton";
import { ButtonInfo, Section } from "@/types/all-component";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";

const sections: Section[] = [
  {
    title: "Section",
    buttons: [
      { name: "Authentication", route: "/section/sign-in", icon: LogIn },
      { name: "Carousel", route: "/section/carousel", icon: GalleryHorizontalEnd },
      { name: "Chat", route: "/section/chat", icon: MessageCircleCode },
      { name: "CMS", route: "/section/cms", icon: FileText },
      { name: "Dashboard", route: "/section/dashboard", icon: LayoutDashboard },
      { name: "E-commerce", route: "/section/e-commerce", icon: CreditCard },
      { name: "FAQ", route: "/section/faq", icon: HelpCircle },
      { name: "Feedback & Rating", route: "/section/user-feedback-rating", icon: Star },
      { name: "Footer", route: "/section/footer", icon: PanelBottom },
      { name: "Help Center", route: "/section/help-centers", icon: HelpCircle },
      { name: "Hero", route: "/section/heros", icon: RectangleEllipsis },
      { name: "LMS", route: "/section/lms", icon: BookOpen },
      { name: "Multi Steps", route: "/section/multi-steps", icon: SlidersHorizontal },
      { name: "Notification", route: "/section/notification", icon: Bell },
      { name: "Pricing", route: "/section/pricing", icon: CreditCard },
      { name: "Roadmap", route: "/section/roadmap", icon: Map },
      { name: "Testimonials", route: "/section/testimonials", icon: MessagesSquare },
      { name: "User Profiles", route: "/section/user-profiles", icon: User },
    ],
  },
  {
    title: "Components",
    buttons: [
      { name: "Accordion", route: "/components/accordion", icon: ChevronsUpDown },
      { name: "Alert", route: "/components/alert", icon: MessageCircleWarning },
      { name: "All components", route: "/components/all-components", icon: LayoutDashboard },
      { name: "Avatar", route: "/components/avatar", icon: User },
      { name: "Badge", route: "/components/badge", icon: Badge },
      { name: "Calendar", route: "/components/calendar", icon: CalendarDays },
      { name: "Charts", route: "/components/charts", icon: BarChart3 },
      { name: "Dialog", route: "/components/dialog", icon: MessageSquareText },
      { name: "Drawer", route: "/components/drawer", icon: PanelLeftOpen },
      { name: "Form", route: "/components/form", icon: FormInput },
      { name: "Input Otp", route: "/components/input-otp", icon: KeySquare },
      { name: "Loading", route: "/components/loading", icon: Loader },
      { name: "Pagination", route: "/components/pagination", icon: LayoutPanelTop },
      { name: "Progress", route: "/components/progress", icon: SlidersHorizontal },
      { name: "Skeleton", route: "/components/skeleton", icon: Menu },
      { name: "Switch", route: "/components/switch", icon: ToggleLeft },
      { name: "Table", route: "/components/table", icon: Table },
      { name: "Tooltip", route: "/components/tooltip", icon: MessageSquarePlus },
    ],
  },
];

const ButtonCard: React.FC<ButtonInfo> = ({ name, route, icon: Icon }) => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothNavigate(route);
  };

  return (
    <div>
      <Button
        variant="default"
        className="w-full h-20 bg-gradient-to-r from-indigo-500 to-mainAccent text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 flex items-center justify-between px-4 hover:opacity-90"
        asChild
        onClick={handleClick}
      >
        <a href={route} className="flex items-center justify-between w-full cursor-pointer">
          <span className="text-lg font-medium z-10">{name}</span>
          <Icon className="w-6 h-6 text-white z-10" />
        </a>
      </Button>
    </div>
  );
};

export const AllComponents: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 mt-10">
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
  );
};
