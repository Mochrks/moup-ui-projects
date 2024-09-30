

export const InstallationContent = () => {
    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-3 '>
            <div className="p-6  text-start">
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

                <p className="mb-4">
                    After installing, return to the NeoBrutalism button page and copy the button component into your project at{' '}
                    <code>components/ui/button.tsx</code> or your custom path.
                </p>

                <p className="mb-4">
                    Keep in mind that NeoBrutalism components might have different variants from the default ShadCN components.
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

        </div>
    )
}
