import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const BackToTopButton = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 100 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }}
                    whileHover={{
                        scale: 1.1,
                        y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ChevronUp size={20} />
                    </motion.div>

                    {/* Ripple effect on hover */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};