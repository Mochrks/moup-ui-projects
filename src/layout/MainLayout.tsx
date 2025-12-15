import React from "react";
import { Navbar } from "@/components/ui-main/Navbar";
import { Drawer } from "@/components/ui-main/Drawer";
import ScrollToTopButton from "@/components/ui-main/ScrollToTopButton";
import { MainLayoutProps } from "@/types/main-layout";

const NAVBAR_HEIGHT = "6.5rem";

const MainLayout: React.FC<MainLayoutProps> = ({ children, showDrawer = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 z-50 ${NAVBAR_HEIGHT}`}>
        <Navbar />
      </header>

      <div className={`flex flex-1 pt-[${NAVBAR_HEIGHT}]`}>
        {showDrawer && (
          <div className="hidden md:block">
            <aside
              className={`fixed left-0 w-64 overflow-y-auto overflow-x-hidden border-r-2 border-border bg-white z-40`}
              style={{
                top: NAVBAR_HEIGHT,
                bottom: 0,
                height: `calc(100vh - ${NAVBAR_HEIGHT})`,
              }}
            >
              <Drawer />
            </aside>
          </div>
        )}

        <main
          className={`flex-1 ${showDrawer ? "md:ml-64" : ""} py-4 px-4 md:px-7 overflow-auto`}
          style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT})` }}
        >
          {children}
        </main>
      </div>

      <ScrollToTopButton />

      <footer className="text-black py-1">
        <div className="mx-auto px-4">
          <div className="text-end text-xs">© 2024 MoupUI . All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
