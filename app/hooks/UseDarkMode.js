"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false); // CSR 확인용

    useEffect(() => {
        // 클라이언트에서만 실행
        const theme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const enabled = theme === "dark" || (!theme && prefersDark);

        setIsDark(enabled);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return; // 첫 마운트 전엔 처리하지 않음

        const html = document.documentElement;

        if (isDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark, mounted]);

    return [isDark, setIsDark];
};

export default useDarkMode;
