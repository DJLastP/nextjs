"use client";
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon, faBars} from '@fortawesome/free-solid-svg-icons';
import useDarkMode from "../hooks/UseDarkMode.js";
import Sidebar from "./Sidebar.jsx";

const Header = () => {

    const [isDark, setIsDark] = useDarkMode();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDarkMode = () => setIsDark(!isDark);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);



    return (
        <>
            <header className={'sticky top-0 bg-opacity-90 backdrop-blur-lg bg-opacity-60 z-10'}>
                <nav className={'container max-w-4xl mx-auto px-6 py-4 flex justify-between items-center'}>
                    <div className={'flex items-center space-x-4'}>
                        <h1 className={'text-2xl font-bold'}>윤지수</h1>
                        <p className={'text-sm text-gray-500'}>풀스택 개발자</p>
                    </div>
                    <div className={'hidden md:flex items-center gap-x-6'}>
                        <a href={'#Home'} className={'hover:text-blue-500 transition-colors'}>Home</a>
                        <a href={'#About'} className={'hover:text-blue-500 transition-colors'}>About</a>
                        <a href={'#Skill'} className={'hover:text-blue-500 transition-colors'}>Skill</a>
                        <a href={'#Project'} className={'hover:text-blue-500 transition-colors'}>Project</a>
                        <a href={'#Contact'} className={'hover:text-blue-500 transition-colors'}>Contact</a>
                        <button
                            className={'p-2 h-10 w-10 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700'}
                            onClick={toggleDarkMode}
                        >
                            {isDark ? (
                                <FontAwesomeIcon icon={faSun} className="text-yellow-300"/>
                            ) : (
                                <FontAwesomeIcon icon={faMoon} className="text-gray-700"/>
                            )}
                        </button>
                    </div>
                    <button
                        id="menuToggle"
                        className="md:hidden p-2 text-gray-700 dark:text-white"
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </button>
                </nav>
            </header>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />
        </>
    );
};

export default Header;
