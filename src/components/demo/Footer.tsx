import React from 'react';
import { PiOpenAiLogoFill } from 'react-icons/pi';

export const Footer = () => {
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

    return (
        <footer className="bg-white py-10 px-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center justify-center space-x-2 mb-4 md:mb-0">
                        <PiOpenAiLogoFill className="h-8 w-8" />
                        <a href="/docs" className="text-lg font-bold">
                            MoupUI
                        </a>
                    </div>
                    <nav className="flex space-x-4">
                        <a href="/about" className="text-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            About
                        </a>
                        <a href="/docs" className="text-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Docs
                        </a>
                        <a href="/docs.templates" className="text-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Templates
                        </a>
                    </nav>
                </div>
                <div className="mt-4 text-center text-lg text-gray-500 dark:text-gray-400">
                    © {currentYear} Created by <a href="https://www.github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:underline">@mochrks</a>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
