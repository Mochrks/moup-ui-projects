import React from 'react'

import { Button } from '@/components/ui/button'
import { MdArrowOutward } from "react-icons/md";
import { Navbar } from '@/components/demo/Navbar';
import { Footer } from '@/components/demo/Footer';
export const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className='h-screen flex flex-col items-center justify-center space-y-10 '>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        MoupUI Components
                    </h1>
                    <p className="max-w-2xl text-xl  leading-7 [&:not(:first-child)]:mt-6 px-5">
                        Once upon a time, in a far-off land, there was a very lazy king who
                        spent all day lounging on his throne. One day, his advisors came to him
                        with a problem: the kingdom was running out of money.
                    </p>
                    <Button className='px-5 py-6 text-xl'>
                        Read the docs
                        < MdArrowOutward className='m-2 w-5 h-5' />
                    </Button>
                </div>
            </main>
            <Footer />
        </>
    )
}
