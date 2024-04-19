import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 mt-3 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Logo */}
                <div className="mb-4 lg:mb-0">
                    <img src="assets/ExpressoNewsLogo-removebg-preview.png" alt="Logo" className="h-10" />
                </div>
                <div className="flex">
                    <div>
                        <ul className="">
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Latest News</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Features</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Contact us</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Categories</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="">
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li className="mb-2 lg:mb-0"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Social Icons */}
                    <div className="mb-4">
                        <a href="#" className="text-blue-800 hover:text-gray-400 mr-4"><FaFacebook /></a>
                        <a href="#" className="text-blue-500 hover:text-gray-400 mr-4"><FaTwitter /></a>
                        <a href="#" className="text-white hover:text-gray-400 mr-4"><FaInstagram /></a>
                        <a href="#" className="text-red-600 hover:text-gray-400 mr-4"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
