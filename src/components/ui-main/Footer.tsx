
import { Button } from '../ui-neobrutalism/button';
import { FaGithub } from 'react-icons/fa';
import { logos } from '@/assets';

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-mainAccent text-white py-12 px-10">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className='space-y-7 text-center md:text-start'>
                        <div className="flex space-x-5 mb-4 md:mb-0 justify-center md:justify-start">
                            <Button variant="neutral" size="icon">

                                <img src={logos} alt="logo" className='w-7 h-7' />
                            </Button>
                            <Button variant="neutral" size="icon">
                                <a href="https://www.github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <FaGithub className="h-6 w-6" />
                                </a>
                            </Button>
                        </div>
                        <p>Made with🚀 <a href="https://mochrks.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">@mochrks</a>.</p>
                        <p className='max-w-md'>These components are protected by copyright and cannot be redistributed without written permission </p>
                    </div>
                    <div >
                        <div className='hidden md:block'>
                            <h3 className="text-lg font-semibold mb-4">Site</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/docs/introduction" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Docs
                                    </a>
                                </li>
                                <li>
                                    <a href="/components/all-components" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Components
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Color
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:blocks grid grid-cols-2 md:hidden '>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Site</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/docs/introduction" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            Docs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            Components
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            Color
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            License
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                            Terms
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='hidden md:block'>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    License
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="text-center ">
                    <div className="mt-4  text-center md:text-start text-md text-white">
                        © 2024 MoupUI . All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}