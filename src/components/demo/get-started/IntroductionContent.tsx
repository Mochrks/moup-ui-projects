import React from 'react'

export const IntroductionContent = () => {
    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-3 '>
            <div className="p-6  text-start">
                <h2 className="mt-10 scroll-m-20 border-b text-start pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ">
                    Introduction
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full 2xl:max-w-6xl">
                    MoupUI is a modern UI library designed to accelerate the development of React interfaces. Seamlessly integrated with Tailwind CSS, ShadCN UI, and Framer Motion, MoupUI offers elegant and interactive animated components. Each component is responsive, user-friendly, and can be easily implemented with a simple copy and paste. With MoupUI, building dynamic and visually appealing user interfaces becomes faster and more efficient without compromising design quality.
                </p>
            </div>
        </div>
    )
}
