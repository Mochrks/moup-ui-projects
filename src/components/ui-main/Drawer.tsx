import { useNavigate } from "react-router-dom";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { TbSection } from "react-icons/tb";
import { RxComponent1 } from "react-icons/rx";
import { Zap, Sparkles } from "lucide-react";
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
  {
    label: "Animation",
    logo: Sparkles,
    items: [
      { name: "Overview", route: "section/animation" },
      { name: "Text Animations", route: "section/animation/text" },
      { name: "Loading Animations", route: "section/animation/loading" },
      { name: "Background Anim", route: "section/animation/background" },
      { name: "Card Animations", route: "section/animation/card" },
      { name: "Micro Interactions", route: "section/animation/micro" },
      { name: "Counter Animations", route: "section/animation/counter" },
      { name: "Reveal Animations", route: "section/animation/reveal" },
      { name: "Hero Animations", route: "section/animation/hero" },
      { name: "Particle Effects", route: "section/animation/particle" },
      { name: "Hover Effects", route: "section/animation/hover" },
      { name: "Button Animations", route: "section/animation/button" },
      { name: "Modal Transitions", route: "section/animation/modal" },
      { name: "Nav Animations", route: "section/animation/nav" },
      { name: "Scroll Animations", route: "section/animation/scroll" },
      { name: "Chart Animations", route: "section/animation/chart" },
      { name: "Transition Effects", route: "section/animation/transition" },
    ],
  },
];

export const Drawer = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <ScrollArea data-lenis-prevent className="h-full w-full bg-white">
      <div className="p-4 w-full">
        <div className="flex flex-col gap-8 mt-5">
          {menuData.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="px-2 flex items-center gap-3 group/header">
                <div
                  className={`p-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-colors ${
                    index === 0
                      ? "bg-indigo-400"
                      : index === 1
                        ? "bg-pink-400"
                        : index === 2
                          ? "bg-green-400"
                          : "bg-[#ffe135]"
                  }`}
                >
                  <section.logo className="h-4 w-4 text-black" />
                </div>
                <h6 className="text-[11px] font-black uppercase tracking-[0.15em] text-black">
                  {section.label}
                </h6>
                <div className="h-[2px] flex-1 bg-black/5 rounded-full" />
              </div>

              <div className="flex flex-col gap-1.5">
                {section.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigation(item.route)}
                    className="group relative flex items-center justify-between w-full text-start px-4 py-2.5 rounded-xl border-2 border-transparent hover:border-black hover:bg-zinc-50 transition-all active:translate-y-[1px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-[#ffe135] group-hover:scale-125 transition-all" />
                      <span className="text-[13.5px] font-black tracking-tight text-zinc-600 group-hover:text-black">
                        {item.name}
                      </span>
                    </div>
                    {idx === 0 && index === 2 && (
                      <div className="px-1.5 py-0.5 bg-black text-white text-[9px] font-black rounded border-1 border-black shadow-[1px_1px_0_0_#ffe135] uppercase">
                        New
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Free Forever Badge */}
        <div className="mt-12 px-2 pb-8">
          <div className="relative p-5 border-4 border-black bg-[#ffe135] rounded-2xl shadow-[6px_6px_0_0_#000] overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-black border-4 border-black rounded-full flex items-center justify-center rotate-12 group-hover:rotate-45 transition-transform">
              <Zap className="h-6 w-6 text-[#ffe135]" />
            </div>
            <p className="text-[10px] font-black text-black uppercase tracking-[0.2em] mb-1">
              moup ui
            </p>
            <h3 className="text-black font-black italic text-lg leading-tight mb-3">
              ANIMATED <br /> COMPONENTS
            </h3>
            <div className="w-full py-2 bg-black text-white rounded-lg font-black text-[10px] uppercase text-center border-2 border-black">
              <p className="text-[10px] font-bold text-white uppercase">System v1.2</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
