import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui-neobrutalism/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui-neobrutalism/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui-neobrutalism/sheet";
import { logos } from "@/assets";
import AlertInformation from "./AlertInformation";
import { Badge } from "../ui-neobrutalism/badge";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";

const SmoothListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    title: string;
    href: string;
  }
>(({ className, title, children, href, ...props }, ref) => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothNavigate(href);
  };

  return (
    <li>
      <div
        ref={ref}
        role="button"
        onClick={handleClick}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none bg-mainBg transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
          className
        )}
        {...props}
      >
        <div className="text-md font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </div>
    </li>
  );
});
SmoothListItem.displayName = "SmoothListItem";

const SmoothNavigationLink = ({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothNavigate(href);
  };

  return (
    <div
      role="button"
      onClick={handleClick}
      className={cn(navigationMenuTriggerStyle(), "cursor-pointer", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const MobileMenu = () => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleMobileNavClick = (href: string) => {
    smoothNavigate(href);
  };

  return (
    <div className="flex flex-col space-y-4 h-full">
      <div className="flex-grow ">
        <NavigationMenu orientation="vertical">
          <NavigationMenuList className=" flex-col items-start space-y-2 ">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="ml-1">Docs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[250px]">
                  <SmoothListItem
                    href="/docs/introduction"
                    title="Introduction"
                    className="font-normal"
                  >
                    Re-usable components built using React and Tailwind CSS.
                  </SmoothListItem>
                  <SmoothListItem
                    href="/docs/installation"
                    title="Installation"
                    className="font-normal"
                  >
                    How to install dependencies and structure your app.
                  </SmoothListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[250px] bg-white">
                  <div className="mb-2 mt-4 text-lg font-medium">All components</div>
                  <p className="text-sm font-normal">
                    A collection of beautifully designed web components with animations, ready to be
                    copied and pasted into your web applications. Accessible, customizable, and open
                    source.
                  </p>
                  <div
                    role="button"
                    onClick={() => handleMobileNavClick("/components/all-components")}
                    className="mt-4 p-3 bg-mainBg rounded-md cursor-pointer hover:bg-accent transition-colors"
                  >
                    <div className="text-md font-medium">View all components →</div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SmoothNavigationLink href="/colors">Color</SmoothNavigationLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SmoothNavigationLink href="/faq">FAQ</SmoothNavigationLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex space-x-4 text-lg px-5 ">
        <Button variant="neutral" size="icon">
          <a
            href="https://www.github.com/mochrks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </Button>
        <Button variant="neutral" size="icon">
          <a
            href="https://www.youtube.com/@gdvisuel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <PiYoutubeLogo className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const { smoothNavigate } = useSmoothNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothNavigate("/");
  };

  return (
    <div className="fixed w-full z-50">
      <AlertInformation />

      <nav
        className={cn(
          " fixed bg-white px-5 lg:px-10 py-4 border-b-4 border-black w-full z-50 transition-all duration-300"
        )}
      >
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <img
                  src={logos}
                  alt="logo"
                  className="w-7 h-7 cursor-pointer"
                  onClick={handleLogoClick}
                />
              </div>
              <div className="flex items-center space-x-2">
                <div role="button" onClick={handleLogoClick} className="cursor-pointer">
                  <span className="text-xl font-bold">MoupUI</span>
                </div>
                <Badge variant="secondary" className="ml-2 bg-orange-300">
                  Beta
                </Badge>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-4 px-10 ">
                <NavigationMenu>
                  <NavigationMenuList>
                    {/* Docs Menu */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <div
                              role="button"
                              onClick={() => smoothNavigate("/docs/introduction")}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-mainBg hover:bg-accent transition-colors cursor-pointer"
                            >
                              <img src={logos} alt="logo" className="w-7 h-7" />
                              <div className="mb-2 mt-4 text-lg font-medium">MoupUI</div>
                              <p className="text-sm font-normal">
                                Beautifully designed components that you can copy and paste into
                                your apps. Accessible. Customizable. Open Source.
                              </p>
                            </div>
                          </li>
                          <SmoothListItem
                            href="/docs/introduction"
                            title="Introduction"
                            className="font-normal"
                          >
                            Re-usable components built using Reacts and Tailwind CSS.
                          </SmoothListItem>
                          <SmoothListItem
                            href="/docs/installation"
                            title="Installation"
                            className="font-normal"
                          >
                            How to install dependencies and structure your app.
                          </SmoothListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Components Menu */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                          <li className="row-span-3">
                            <div
                              role="button"
                              onClick={() => smoothNavigate("/components/all-components")}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-mainBg hover:bg-accent transition-colors cursor-pointer"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">All components</div>
                              <p className="text-sm font-normal">
                                A collection of beautifully designed web components with animations,
                                ready to be copied and pasted into your web applications.
                                Accessible, customizable, and open source.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Color Link */}
                    <NavigationMenuItem>
                      <SmoothNavigationLink href="/colors">Color</SmoothNavigationLink>
                    </NavigationMenuItem>

                    {/* FAQ Link */}
                    <NavigationMenuItem>
                      <SmoothNavigationLink href="/faq">FAQ</SmoothNavigationLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex space-x-4 text-lg">
              <Button variant="neutral" size="icon">
                <a
                  href="https://www.github.com/mochrks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="neutral" size="icon">
                <a
                  href="https://www.youtube.com/@gdvisuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <PiYoutubeLogo className="h-6 w-6" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="neutral" size="icon">
                    <FiMenu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <MobileMenu />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
