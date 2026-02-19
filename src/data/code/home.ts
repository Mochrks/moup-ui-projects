export const sampleCodeButtonHome = `
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
        <div className="bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
        <h1 className="text-3xl font-bold mb-8">Animated Buttons</h1>
        <PulseButton>Pulse Button</PulseButton>
        <BorderButton>Border Button</BorderButton>
        <JellyButton>Jelly Button</JellyButton>
        <GlowButton>Glow Button</GlowButton>
        <MorphButton>Morph Button</MorphButton>
        </div>
    )
}
`.trim();

export const sampleCodeButtonHomeNext = `
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

// ... other buttons (JellyButton, GlowButton, MorphButton) are same as React version

export default function AnimatedButtons() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
        <h1 className="text-3xl font-bold mb-8">Animated Buttons</h1>
        <PulseButton>Pulse Button</PulseButton>
        <BorderButton>Border Button</BorderButton>
        {/* Render other buttons */}
        </div>
    )
}
`.trim();

export const sampleCodeButtonHomeHtml = `
<!-- Pulse Button -->
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 animate-pulse-shadow">
  Pulse Button
</button>

<!-- Border Button -->
<button class="group relative bg-transparent text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-lg overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-200">
  <div class="absolute inset-0 bg-purple-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
  <span class="relative z-10 group-hover:text-white transition-colors duration-300">Border Button</span>
</button>

<!-- Jelly Button -->
<button class="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-transform duration-200 animate-jelly">
  Jelly Button
</button>

<!-- Glow Button -->
<button class="relative bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 overflow-hidden">
  <div class="absolute inset-0 bg-white rounded-lg opacity-0 animate-glow"></div>
  <span class="relative z-10">Glow Button</span>
</button>

<!-- Morph Button -->
<button class="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:rounded-2xl hover:bg-[#FCD34D] active:scale-95 transition-all duration-300">
  Morph Button
</button>

<style>
/* Custom Animations defined in Tailwind config or CSS */
@keyframes pulse-shadow {
  0%, 100% { box-shadow: 0px 0px 0px rgba(0,0,0,0); }
  50% { box-shadow: 0px 0px 20px rgba(59,130,246,0.5); }
}
.animate-pulse-shadow {
  animation: pulse-shadow 2s infinite;
}

@keyframes jelly {
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
}
.animate-jelly:hover {
  animation: jelly 0.5s;
}

@keyframes glow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.5; }
}
.animate-glow {
  animation: glow 2s infinite;
}
</style>
`.trim();
