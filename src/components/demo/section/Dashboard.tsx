'use client'

import CodePreview from '@/components/ui-other/CodePriview'
import { DashboardPage } from '@/code/dashboard'

export const Dashboard = () => {

    const sampleCode = `sample code`.trim()

    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-3 '>
            <div className="p-6 text-start w-full">
                <h2 className="text-2xl font-bold mb-4">Dashboard </h2>
                <p className="mb-4">
                    Streamline your project management and data visualization with our customizable dashboard templates. MoupUI provides responsive, modern dashboard layouts that integrate seamlessly with React, Tailwind CSS, and ShadCN UI.
                </p>

                <h3 className="text-xl font-semibold mb-4">Powerful Features</h3>
                <p className="mb-4">
                    Our dashboard templates come equipped with interactive charts, tables, and widgets that are ready to use out of the box. Whether you're building an admin panel or a data-driven application, these templates will help you visualize your data clearly and efficiently.
                </p>

                <p className="mb-4">
                    Simply copy the template into your project and customize the components to match your brand and requirements. Get your dashboard up and running in no time with MoupUI.
                </p>

                <div className='mt-10'>
                    <CodePreview
                        title="Dashboard"
                        code={sampleCode}
                        language="javascript"
                        nameFile='dashboard.tsx'
                        preview={<DashboardPage />}
                    />
                </div>
            </div>

        </div>
    )
}