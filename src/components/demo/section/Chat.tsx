'use client'

import CodePreview from '@/components/ui-main/CodePriview'
import { AIPoweredChatbot, RenderChatLayoutOne, RenderChatLayoutTwo } from '@/code/chat'
import { ContentLayout } from '@/layout/ContentLayout'

export const Chat = () => {

    const sampleCode = `sample code`.trim()
    return (
        <ContentLayout>
            <div className="p-6 text-start w-full">
                <h2 className="text-2xl font-bold mb-4">Chat</h2>
                <p className="mb-4">
                    Enhance your application's communication features with our versatile and customizable chat components. MoupUI offers responsive, modern chat interfaces that integrate seamlessly with React, Tailwind CSS, and ShadCN UI.
                </p>

                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <p className="mb-4">
                    Our chat components come with real-time messaging, message bubbles, typing indicators, and file-sharing capabilities. Whether you're building a customer support system, a team collaboration tool, or a social messaging app, these components will help you create a smooth and engaging chat experience.
                </p>

                <p className="mb-4">
                    Simply copy the chat components into your project and customize them to match your brand and requirements. With MoupUI, you can have a fully functional chat system up and running in no time.
                </p>

                <div className='flex mt-10 w-full items-center justify-center'>
                    <div className='md: w-full lg:w-[80%]'>
                        <CodePreview
                            title="AI chat"
                            code={sampleCode}
                            language="javascript"
                            nameFile='AI-chats.tsx'
                            preview={<AIPoweredChatbot />}
                        />
                    </div>
                </div>
                <div className='flex mt-10 w-full items-center justify-center'>
                    <div className='md: w-full lg:w-[80%]'>
                        <CodePreview
                            title="Dynamic Chat"
                            code={sampleCode}
                            language="javascript"
                            nameFile='dynamic-chats.tsx'
                            preview={<RenderChatLayoutOne />}
                        />
                    </div>
                </div>
                <div className='flex mt-10 w-full items-center justify-center'>
                    <div className='md: w-full lg:w-[80%]'>
                        <CodePreview
                            title="Grid chat"
                            code={sampleCode}
                            language="javascript"
                            nameFile='grid-chats.tsx'
                            preview={<RenderChatLayoutTwo />}
                        />
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}