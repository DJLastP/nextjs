"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hooks/UseDarkMode.js";

const Sidebar = ({ isOpen, onClose }) => {
    const [isDark, setIsDark] = useDarkMode();
    const toggleDarkMode = () => setIsDark(!isDark);

    // 열리지 않았으면 아무것도 렌더링 안 함
    if (!isOpen) return null;

    return (
        <>
            {/* ✅ 오버레이 배경 */}
            <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={onClose}
            />

            {/* ✅ 사이드바 패널 */}
            <aside
                className={`
          fixed right-0 inset-y-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <button
                    onClick={onClose}
                    className="p-2 m-4 text-gray-700 dark:text-white"
                >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>

                <nav className="flex flex-col space-y-4 mt-10 px-6">
                    <a href="#Home" className="hover:text-blue-500 transition-colors">Home</a>
                    <a href="#About" className="hover:text-blue-500 transition-colors">About</a>
                    <a href="#Skill" className="hover:text-blue-500 transition-colors">Skill</a>
                    <a href="#Project" className="hover:text-blue-500 transition-colors">Project</a>
                    <a href="#Contact" className="hover:text-blue-500 transition-colors">Contact</a>
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 h-10 w-full rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                        {isDark ? (
                            <FontAwesomeIcon icon={faSun} className="text-yellow-300" />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} className="text-gray-700" />
                        )}
                    </button>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
