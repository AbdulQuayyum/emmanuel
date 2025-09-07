
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center">
                {/* Animated Logo/Brand */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        className="w-16 h-16 border-4 border-primary/20 rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <motion.div
                            className="w-8 h-8 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    className="text-lg font-medium text-foreground mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Loading...
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    className="w-48 h-1 bg-border rounded-full overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 192, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        style={{
                            top: `${30 + (i * 8)}%`,
                            left: `${25 + (i * 8)}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 2 + (i * 0.3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};