import React from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { MdArrowOutward } from "react-icons/md";
import { Navbar } from '@/components/demo/Navbar';
import { Footer } from '@/components/demo/Footer';
// import TextEditor from '@/components/demo/TextEditor';
import CodePreview from '@/components/demo/CodePriview';
import ScrollToTopButton from '@/components/demo/ScrollToTopButton';

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
}

const PulseButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(59,130,246,0.5)", "0px 0px 0px rgba(0,0,0,0)"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const BorderButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-transparent text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-lg relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        <motion.div
            className="absolute inset-0 bg-purple-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
        />
        <motion.span className="relative z-10" whileHover={{ color: "text-purple-600" }}>
            {children}
        </motion.span>
    </motion.button>
)

const JellyButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
        }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const GlowButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        <motion.div
            className="absolute inset-0 bg-white rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative z-10">{children}</span>
    </motion.button>
)

const MorphButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg"
        whileHover={{
            scale: 1.05,
            borderRadius: "16px",
            backgroundColor: "#FCD34D",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const SampleComponent = () => {

    return (
        <div className=" bg-gray-100 flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 p-4">
            <PulseButton>Pulse Button</PulseButton>
            <BorderButton>Border Button</BorderButton>
            <JellyButton>Jelly Button</JellyButton>
            <GlowButton>Glow Button</GlowButton>
            <MorphButton>Morph Button</MorphButton>
        </div>
    )
}
export const Home = () => {

    // code text editor
    const sampleCode = `

import React from "react"
import { motion } from "framer-motion"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const PulseButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
        boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(59,130,246,0.5)", "0px 0px 0px rgba(0,0,0,0)"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const BorderButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-transparent text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-lg relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        <motion.div
        className="absolute inset-0 bg-purple-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
        />
        <motion.span className="relative z-10" whileHover={{ color: "#ffffff" }}>
        {children}
        </motion.span>
    </motion.button>
)

const JellyButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        }}
        transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
        }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const GlowButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        <motion.div
        className="absolute inset-0 bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative z-10">{children}</span>
    </motion.button>
)

const MorphButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <motion.button
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg"
        whileHover={{
        scale: 1.05,
        borderRadius: "16px",
        backgroundColor: "#FCD34D",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

export default function AnimatedButtons() {
    return (
        <div className= bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
        <h1 className="text-3xl font-bold mb-8">Animated Buttons</h1>
        <PulseButton>Pulse Button</PulseButton>
        <BorderButton>Border Button</BorderButton>
        <JellyButton>Jelly Button</JellyButton>
        <GlowButton>Glow Button</GlowButton>
        <MorphButton>Morph Button</MorphButton>
        </div>
    )
}
`.trim()


    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow">
                    <div className=' flex flex-col items-center justify-center space-y-10 py-20'>
                        <div className='flex flex-col text-start md:text-center space-y-5 md:space-y-10 '>
                            <h1 className="max-w-2xl  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-20 md:pt-1 2xl:pt-6 px-5">
                                Animated UI Components for Tailwind With Shadcn
                            </h1>
                            <p className="max-w-2xl  text-xl  leading-7 [&:not(:first-child)]:mt-3 px-5">
                                Boost your React apps with MoupUI – a sleek set of animated UI components integrated with Tailwind CSS, ShadCN UI, and Framer Motion, ready to use and easy to add with just a simple copy and paste
                            </p>
                        </div>
                        <Button className='px-5 py-6 text-xl'>
                            <a href="/docs/introduction" className="hover:underline">
                                Read the docs
                            </a>
                            < MdArrowOutward className='m-2 w-5 h-5' />
                        </Button>
                        <div className='flex items-center justify-center w-full max-w-6xl px-5 pt-20'>
                            <CodePreview
                                title="Button"
                                code={sampleCode}
                                language="javascript"
                                nameFile='Button.tsx'
                                preview={<SampleComponent />}
                            />
                        </div>
                    </div>
                </main>
                <div className='mt-20'>
                    <Footer />
                </div>
            </div>
            <ScrollToTopButton />
        </>
    )
}
