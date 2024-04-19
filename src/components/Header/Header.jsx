import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';


const Header = () => {
    return (
        <header className="text-white">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Logo */}
                    <img src="assets/ExpressoNewsLogo.png" alt="ExpressoNews" className="h-14 mr-4 w-15 bg-slate-800" />
                </div>
                {/* Search Bar */}
                <div className="relative w-2/5">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="border w-full text-black border-gray-300 px-8 py-1 rounded-t-lg focus:outline-none focus:border-gray-500 w-200 h-8"
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center pl-3">
                        <FaSearch className="text-gray-800" /> {/* Render the search icon */}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500"></div>
                </div>
                <div className="flex items-center">
                    {/* Language Switcher */}
                    <div className="mr-4">
                        <select className="border text-gray-400 border-gray-300 rounded-lg px-3 py-2 focus:outline-none">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                    {/* Sign Up Button */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none">Sign Up</button>
                    {/* Icons */}
                    <div className="ml-4 ">
                        <FaBell className="text-xl text-black" />
                    </div>
                    <div className="ml-4">
                        <FaUserCircle className="text-xl" />
                    </div>
                </div>
            </div>
            <nav className="bg-blue-900 text-white">
                <div className="flex items-center justify-between mx-auto px-3">
                    <div>
                        <ul className="flex justify-center py-4">
                            <li className="mr-6">
                                <Link to="/" className="hover:text-gray-300 font-bold">Home</Link>
                            </li>
                           
                            <li className="mr-6">
                                <Link to="/politics" className="hover:text-gray-300 font-bold">Politics</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/health" className="hover:text-gray-300 font-bold">Health</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/categories" className="hover:text-gray-300 font-bold">Categories</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/about" className="hover:text-gray-300 font-bold">About</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/contact" className="hover:text-gray-300 font-bold">Contact</Link>
                            </li>
                            <li className="relative">
                                <a href="#" className="hover:text-gray-300 font-bold" id="moreLink">
                                    More
                                </a>
                                {/* Dropdown menu */}
                                <ul className="absolute hidden bg-blue-900 text-gray-400 pt-1 top-full left-0" id="dropdownMenu">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-800">Dropdown Item 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-800">Dropdown Item 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-800">Dropdown Item 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mr-6 h-10 ">
                        <Link to="/">
                            <img src="assets/live-removebg-preview.png" alt="ExpressoNews" className="h-12 mt-0 " />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
