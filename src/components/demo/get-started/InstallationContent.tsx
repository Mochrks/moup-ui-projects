
import { Button } from '@/components/ui/button'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const InstallationContent = () => {
    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-1 md:px-3 '>
            <div className="p-6  text-start w-full">
                <h2 className="text-2xl font-bold mb-4">ShadCN Installation</h2>
                <p className="mb-2">
                    Visit the{' '}
                    <a
                        href="https://shadcn.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        ShadCN
                    </a>{' '}
                    for detailed instructions on how to install ShadCN.
                </p>

                <p className="mb-4">
                    Below each ShadCN component's name, you'll find a link to the ShadCN documentation for that component.
                </p>

                <p className="mb-4">
                    For example, to install the ShadCN button component, navigate to the button page, click on the ShadCN docs link, and follow the installation steps.
                </p>


                <h3 className="text-xl font-semibold mb-2">Styling</h3>
                <p>
                    Don't forget to copy the necessary styling to your{' '}
                    <a
                        href="https://tailwindcss.com/docs/installation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Tailwind CSS configuration
                    </a>.
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
