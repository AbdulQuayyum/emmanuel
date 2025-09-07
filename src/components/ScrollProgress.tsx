import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion"

export const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-border z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0.01 ? 1 : 0 }}
        >
            <motion.div
                className="h-full bg-primary"
                style={{
                    scaleX: scrollProgress,
                    transformOrigin: "0%"
                }}
            />
        </motion.div>
    );
};