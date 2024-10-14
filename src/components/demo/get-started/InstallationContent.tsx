
import { Button } from '@/components/ui/button'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const InstallationContent = () => {
    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-0 md:px-3 '>
            <div className="p-6 text-start w-full">
                <h2 className="text-2xl font-bold mb-4">Getting Started with ShadCN Installation</h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    To kick off your journey with ShadCN, the first step is installing the framework into your project. Head over to the{' '}
                    <a
                        href="https://ui.shadcn.com/docs/installation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        ShadCN website
                    </a>{' '}
                    where you'll find a comprehensive guide on how to install and configure ShadCN in your React app. The documentation provides a detailed breakdown, ensuring that you have a smooth setup experience.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    Each component in ShadCN comes with its own set of installation instructions, which can be accessed directly from the documentation. For instance, if you need to implement the button component, simply navigate to the button's page, follow the link to the official ShadCN docs, and complete the installation steps tailored for that specific component.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    Once ShadCN is installed, it's essential to ensure that Tailwind CSS is also set up correctly, as it powers the styling framework behind ShadCN components. Visit the{' '}
                    <a
                        href="https://tailwindcss.com/docs/installation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Tailwind CSS installation guide
                    </a>{' '}
                    to configure Tailwind in your project. Tailwind’s utility-first classes seamlessly integrate with ShadCN, allowing you to create responsive and well-designed UI components.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    After both ShadCN and Tailwind CSS are properly installed, you’ll be able to start building beautifully animated, functional components for your application. From buttons to modals, each ShadCN component is easy to implement, empowering you to craft highly interactive interfaces with minimal effort.
                </p>
            </div>

            <div className="flex px-4 py-2 justify-between w-full">
                <Button className='px-2 md:px-4 py-2 text-md'>
                    <FaArrowLeft className='m-2 w-4 h-4' />
                    <a href="/docs/introduction" className="hover:underline">
                        introduction
                    </a>
                </Button>
                <Button className='px-2 md:px-4 py-2 text-md'>
                    <a href="/docs/templates" className="hover:underline">
                        templates
                    </a>
                    < FaArrowRight className='m-2 w-4 h-4' />
                </Button>
            </div>
        </div>
    )
}
