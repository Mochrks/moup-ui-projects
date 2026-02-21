import { ContentLayoutProps } from "@/types/content-layout";

export const ContentLayout = ({ children, className = "" }: ContentLayoutProps) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start py-32 px-0 md:px-3 ${className}`}
    >
      {children}
    </div>
  );
};
