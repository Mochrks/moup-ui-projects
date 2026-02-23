import React from "react";
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
    <div
      role="button"
      onClick={handleClick}
      className="group relative h-48 sm:h-56 w-full cursor-pointer overflow-hidden rounded-xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1"
    >
      {/* Visual Background / Mock Preview */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-30" />

      <div className="relative h-full flex flex-col p-5">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-main shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#ffe135] transition-colors">
          <Icon className="h-6 w-6 text-black" />
        </div>

        <div className="mt-auto">
          <h3 className="text-xl font-black text-black leading-tight group-hover:underline underline-offset-4 decoration-4">
            {name}
          </h3>
          <p className="mt-1 text-xs font-bold text-gray-500 uppercase tracking-widest">
            {route.includes("section") ? "Section Layout" : "UI Component"}
          </p>
        </div>

        {/* Floating Decorative Elements for UX */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <div className="h-8 w-8 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-sm">→</span>
          </div>
        </div>

        {/* Mock content lines to look like a preview */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 space-y-2 opacity-5">
          <div className="h-2 w-full bg-black rounded-full" />
          <div className="h-2 w-2/3 bg-black rounded-full" />
          <div className="h-2 w-3/4 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const AllComponents: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 mt-10 max-w-7xl">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black">
          Browse Library
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-2xl">
          Explore our collection of neobrutalist components and layout sections. Each one is
          designed with accessibility and performance in mind.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black px-4 py-2 bg-black text-white rounded-lg transform -skew-x-2">
              {section.title}
            </h2>
            <div className="h-1 flex-1 bg-black rounded-full opacity-10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
