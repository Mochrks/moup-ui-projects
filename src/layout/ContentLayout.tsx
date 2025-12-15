import { ContentLayoutProps } from "@/types/content-layout";

export const ContentLayout = ({ children, className = "" }: ContentLayoutProps) => {
  return (
    <div
      className={`min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 mt-1 md:mt-10 px-0 md:px-3 ${className}`}
    >
      {children}
    </div>
  );
};
