import { useState } from "react";
import { ContentLayout } from "@/layout/ContentLayout";
import MainLayout from "@/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-neobrutalism/accordion";
import { Input } from "@/components/ui-neobrutalism/input";
import { Button } from "@/components/ui-neobrutalism/button";
import { Search, Github } from "lucide-react";
import { Badge } from "@/components/ui-neobrutalism/badge";

type Category = "All" | "General" | "Components" | "Technical" | "Licensing";

const FAQData = [
  {
    category: "General",
    question: "What is MoupUI?",
    answer:
      "MoupUI is a collection of re-usable components built using React and Tailwind CSS. It is designed to be copied and pasted into your apps, with a focus on Neobrutalism design aesthetics. It's not a component library you install via npm, but rather a set of patterns you can adopt.",
  },
  {
    category: "General",
    question: "Is it free to use?",
    answer:
      "Yes, MoupUI is completely open source and free to use for both personal and commercial projects. You don't need to pay anything.",
  },
  {
    category: "Components",
    question: "How do I install a component?",
    answer:
      "You don't 'install' components in the traditional sense. Instead, you navigate to the component page you want, select the code tab, and copy the code into your project. Make sure you have the necessary dependencies installed (like framer-motion or lucide-react) as mentioned in the docs.",
  },
  {
    category: "Components",
    question: "Can I customize the components?",
    answer:
      "Absolutely! Since you are copying the source code directly into your project, you have full control over the component. You can modify the Tailwind classes, change the logic, or adapt it to your specific needs.",
  },
  {
    category: "Technical",
    question: "Does it support TypeScript?",
    answer:
      "Yes, all components are written in TypeScript by default. If you are using JavaScript, you can simply remove the type definitions.",
  },
  {
    category: "Technical",
    question: "What frameworks are supported?",
    answer:
      "MoupUI is designed for React. It works great with Next.js, Vite, Remix, or any other React-based framework. Styling is done with Tailwind CSS.",
  },
  {
    category: "Technical",
    question: "Do I need ShadCN UI?",
    answer:
      "Some components might leverage primitives from Radix UI or patterns from ShadCN UI, but many are standalone. Check the specific component documentation for requirements.",
  },
  {
    category: "Licensing",
    question: "What license is MoupUI under?",
    answer:
      "MoupUI is MIT licensed. This means you can do almost anything with it, including using it in commercial applications.",
  },
  {
    category: "Licensing",
    question: "Do I need to provide attribution?",
    answer:
      "Attribution is not required, but it is always appreciated! If you build something cool with MoupUI, let us know.",
  },
];

const categories: Category[] = ["All", "General", "Components", "Technical", "Licensing"];

const SectionDetailPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredFAQs = FAQData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout showDrawer={false}>
      <ContentLayout>
        <div className="w-full max-w-4xl mx-auto py-12 px-5">
          {/* Header Section */}
          <div className="mb-12 text-center space-y-4">
            <Badge className="bg-main text-black border-2 border-black mb-4 hover:bg-main/80 text-sm font-bold px-4 py-1">
              SUPPORT CLIENT
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black text-black">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Everything you need to know about MoupUI. Can't find the answer you're looking for?
              Feel free to ask our support team.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-10 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 text-lg rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:ring-0 focus-visible:border-black transition-all bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md font-bold text-sm border-2 border-black transition-all ${
                    activeCategory === category
                      ? "bg-main text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white rounded-xl overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.question}
                      value={faq.question}
                      className="border-b-2 border-black last:border-b-0"
                    >
                      <AccordionTrigger className="text-lg px-6 py-4 hover:bg-main/10 text-left font-bold transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 px-6 py-4 bg-gray-50/50 leading-relaxed border-t-2 border-black">
                        <div className="flex flex-col gap-2">
                          <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1 block">
                            {faq.category}
                          </span>
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                <p className="text-xl text-gray-500 font-medium">
                  No results found matching "{searchQuery}"
                </p>
                <Button
                  className="mt-4"
                  variant="neutral"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-20 border-4 border-black bg-main p-8 md:p-12 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-3xl font-black mb-4">Still have questions?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Please check our GitHub repository or join
              our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/mochrks" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto h-12 text-md px-8">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default SectionDetailPage;
