import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Engine } from "@tsparticles/engine";
import CodePreview from '../CodePriview';

const ParticleBackground: React.FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: any): Promise<void> => {
        console.log(container);
    };

    if (init) {
        return (
            <div className="relative w-full h-[400px] overflow-hidden"> {/* Wrapper with fixed size */}
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#0d47a1",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}

                />
            </div>
        );
    }

    return <></>;
};

const SampleComponent: React.FC = () => {
    const [currentAnimation, setCurrentAnimation] = useState<number>(0);

    const animations = [
        { component: <ParticleBackground />, name: "Particle Network" },
    ];

    const nextAnimation = () => {
        setCurrentAnimation((prev) => (prev + 1) % animations.length);
    };

    return (
        <div className="relative w-full  mx-auto overflow-hidden bg-gray-800 z-30">
            {animations[currentAnimation].component}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 30,
                }}
            >
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Animated Hero Sections</h1>
                <button
                    onClick={nextAnimation}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                >
                    Click me 🚀
                </button>
            </div>
        </div>
    );
};








export const Heros = () => {

    const sampleCode = `
"use client"

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
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-3 '>
            <div className="p-6 text-start w-full">
                <h2 className="text-2xl font-bold mb-4">Animated Hero Sections</h2>
                <p className="mb-4">
                    Capture attention instantly with stunning animated hero sections. MoupUI provides dynamic, fully customizable hero components that bring your landing pages to life, seamlessly integrating with React, Tailwind CSS, and ShadCN UI.
                </p>

                <h3 className="text-xl font-semibold mb-4">Engaging and Interactive</h3>
                <p className="mb-4">
                    Our animated hero sections feature smooth transitions and captivating animations powered by Framer Motion. Whether you're showcasing a product or delivering a message, these hero components create an immersive user experience.
                </p>

                <p className="mb-4">
                    Simply copy and paste the hero template into your project, adjust the animations and content to suit your needs, and make a bold first impression with minimal effort.
                </p>
            </div>


            <div className='flex items-center justify-center max-w-2xl px-5'>
                <CodePreview
                    title="Animation Hero Section"
                    code={sampleCode}
                    language="hero-animation.tsx"
                    preview={<SampleComponent />}
                />
            </div>

        </div>
    )
}
