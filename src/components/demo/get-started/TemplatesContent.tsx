import { Button } from '@/components/ui/button'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const TemplatesContent = () => {
    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-1 md:px-3 '>
            <div className='p-6 text-start'>
                <h2 className="text-2xl font-bold mb-4">Templates</h2>
                <p className="mb-4 ">
                    Explore our collection of pre-built templates designed to streamline your development process. From landing pages to fully functional applications, MoupUI offers ready-made solutions.
                </p>
                <div className="flex px-1 py-2 justify-between w-full">
                    <Button className='px-2 md:px-4 py-2 text-md'>
                        <FaArrowLeft className='m-2 w-4 h-4' />
                        <a href="/docs/installation" className="hover:underline">
                            installation
                        </a>
                    </Button>
                    <Button className='px-2 md:px-4 py-2 text-md'>
                        <a href="/components/all-components" className="hover:underline">
                            components
                        </a>
                        < FaArrowRight className='m-2 w-4 h-4' />
                    </Button>
                </div>


            </div>
            <div className=' p-6 w-full py-5'>
                <h3 className="text-xl font-semibold mb-4">E-Commerce Template</h3>
                <p className="mb-4">
                    Need to build an online store quickly? Our e-commerce template comes with all the essential components you need to set up a beautiful, responsive store. With smooth animations, integrated with Tailwind CSS and ShadCN UI, this template offers both functionality and aesthetic appeal.
                </p>

                <p className="mb-4">
                    Simply copy and paste the template into your project, customize it to fit your brand, and you're ready to launch your e-commerce site with minimal effort.
                </p>
            </div>
        </div>

    )
}
