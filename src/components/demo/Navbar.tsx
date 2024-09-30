import React, { useState } from 'react'
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { PiYoutubeLogo, PiOpenAiLogoFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { logos } from '@/assets';


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none bg-mainBg transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-md font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate();
    const handleSeeMore = () => {
        navigate('/components/all-components');
    }
    return (
        <nav className="bg-white dark:bg-gray-800 px-5 lg:px-10 py-4 border-b-4 border-black">
            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center space-x-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={logos} alt="logo" className='w-7 h-7' />
                        </motion.div>
                        <a
                            href="/"
                        >
                            <motion.span
                                className="text-xl font-bold cursor-pointer"
                                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                MoupUI
                            </motion.span>
                        </a>
                        <div className='hidden md:flex space-x-4 px-10 '>
                            <NavigationMenu>
                                <NavigationMenuList>

                                    {/* docs */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <div className='bg-mainBg rounded-sm'>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                href="/docs/introduction"
                                                            >
                                                                <PiOpenAiLogoFill className="h-6 w-6" />
                                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                                    MoupUI
                                                                </div>
                                                                <p className="text-sm font-normal">
                                                                    Beautifully designed components that you can copy and
                                                                    paste into your apps. Accessible. Customizable. Open
                                                                    Source.
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem href="/docs/introduction" title="Introduction" className='font-normal'>
                                                    Re-usable components built using Reacts and Tailwind CSS.
                                                </ListItem>
                                                <ListItem href="/docs/installation" title="Installation" className='font-normal'>
                                                    How to install dependencies and structure your app.
                                                </ListItem>

                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>


                                    {/* components */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                                                <ListItem href="/components/alert" title="Alert" className='font-normal'>
                                                    Alert component
                                                </ListItem>
                                                <ListItem href="/components/loading" title="Loading" className='font-normal'>
                                                    Create many loading components
                                                </ListItem>
                                            </ul>
                                            <div className='mx-5 mb-5 w-full'>
                                                <Button variant="noShadow" onClick={handleSeeMore}>See More</Button>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Color
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            FAQ
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 text-lg">
                        <Button variant="neutral" size="icon">
                            <a href="https://www.github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <FaGithub className="h-6 w-6" />
                            </a>
                        </Button>
                        <Button variant="neutral" size="icon">
                            <a href="https://www.youtube.com/@gdvisuel" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <PiYoutubeLogo className="h-6 w-6" />
                            </a>

                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Button variant="neutral" size="icon">
                            <FiMenu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div >
        </nav >
    )
}