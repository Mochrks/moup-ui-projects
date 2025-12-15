import { Button } from "@/components/ui-neobrutalism/button";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";
import { ContentLayout } from "@/layout/ContentLayout";
import { FaArrowRight } from "react-icons/fa6";

export const IntroductionContent = () => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleInstallationClick = () => {
    smoothNavigate("/docs/installation");
  };
  return (
    <ContentLayout>
      <div className="p-6  text-start  w-full ">
        <h2 className="mt-10 scroll-m-20 border-b text-start  text-3xl font-semibold tracking-tight transition-colors first:mt-0 ">
          Introduction
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
          MoupUI is an innovative web UI component designed to enhance the development of React
          applications with stylish, functional elements. Seamlessly integrated with Tailwind CSS,
          ShadCN UI, and Framer Motion, MoupUI delivers a range of elegant, interactive animated
          components. Each component is meticulously crafted for high responsiveness and ease of
          use, ensuring a seamless user experience across all devices.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
          Flexibility is at the heart of MoupUI. It allows developers to quickly integrate visually
          engaging components without compromising performance or design quality. With simple
          copy-and-paste implementation, adding polished UI elements becomes effortless, enabling
          you to focus on innovation and creating a refined user interface.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
          MoupUI empowers developers to build dynamic and visually compelling UIs with speed and
          efficiency. By streamlining the development process, it ensures your applications maintain
          a modern and professional look, while keeping design standards high and minimizing
          complexity.
        </p>
      </div>

      <div className="flex px-10 py-10 justify-end w-full">
        <Button className="px-4 py-2 text-md cursor-pointer" onClick={handleInstallationClick}>
          Installation
          <FaArrowRight className="m-2 w-4 h-4" />
        </Button>
      </div>
    </ContentLayout>
  );
};
