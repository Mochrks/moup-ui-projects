'use client'

import CodePreview from '@/components/ui-main/CodePriview'
import { AnimatedStarRating, EmojiFeedback, InteractiveReviewCard, RenderFeedbackPage, RenderReviewsPage } from '@/code/feedback-rating'
import { ContentLayout } from '@/layout/ContentLayout'

export const FeedbackRating = () => {

    const sampleCode = `sample code`.trim()
    return (
        <ContentLayout>
            <div className="p-6 text-start w-full">
                <h2 className="text-2xl font-bold mb-4">Feedback & Rating </h2>
                <p className="mb-4">
                    Improve user engagement and gather valuable insights with our intuitive and customizable feedback and rating components. MoupUI provides responsive, modern interfaces for collecting user feedback and ratings, seamlessly integrated with React, Tailwind CSS, and ShadCN UI.
                </p>

                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <p className="mb-4">
                    Our feedback and rating components include star ratings, review forms, and sentiment analysis tools. Whether you're building an e-commerce platform, a service review system, or a customer feedback portal, these components will help you collect and display user opinions effectively.
                </p>

                <p className="mb-4">
                    Simply copy the feedback and rating components into your project and customize them to match your brand and requirements. With MoupUI, you can easily implement a robust feedback system to enhance user satisfaction and improve your product or service.
                </p>

                <div className='mt-10'>
                    <CodePreview
                        title="Riview Pages"
                        code={sampleCode}
                        language="javascript"
                        nameFile='riview-page.tsx'
                        preview={<RenderReviewsPage />}
                    />
                </div>
                <div className='mt-10'>
                    <CodePreview
                        title="Feedback Pages"
                        code={sampleCode}
                        language="javascript"
                        nameFile='feedback-page.tsx'
                        preview={<RenderFeedbackPage />}
                    />
                </div>
                <div className='mt-10'>
                    <CodePreview
                        title="Animated Star Rating"
                        code={sampleCode}
                        language="javascript"
                        nameFile='star-ratings-page.tsx'
                        preview={<AnimatedStarRating />}
                    />
                </div>
                <div className='mt-10'>
                    <CodePreview
                        title="Emoji Feedback"
                        code={sampleCode}
                        language="javascript"
                        nameFile='emoji-page.tsx'
                        preview={<EmojiFeedback />}
                    />
                </div>
                <div className='mt-10'>
                    <CodePreview
                        title="Interactive Riview"
                        code={sampleCode}
                        language="javascript"
                        nameFile='interactive-riview-page.tsx'
                        preview={<InteractiveReviewCard />}
                    />
                </div>

            </div>

        </ContentLayout>
    )
}