import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Emmanuel Ayodeji Adedeji";
  const subtitle = "Data Scientist & AI Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const dataPoints = [
    { top: "25%", left: "25%", delay: 0 },
    { top: "33%", right: "25%", delay: 1 },
    { bottom: "33%", left: "33%", delay: 2 },
    { bottom: "25%", right: "33%", delay: 3 },
    { top: "50%", left: "16%", delay: 4 },
    { bottom: "50%", right: "16%", delay: 5 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {dataPoints.map((point, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-primary/40 rounded-full absolute"
            style={point}
            animate={{
              y: [0, -20, 10, 0],
              rotate: [0, 5, -5, 0]
            }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: point.delay * 0.2,
              opacity: { delay: point.delay * 0.2, duration: 0.5 },
              scale: { delay: point.delay * 0.2, duration: 0.5 }
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated border rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-primary/20"
              animate={{ rotate: -360, scale: [1, 1.03, 1] }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            />

            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden bg-surface border-4 border-background shadow-2xl"
              animate={{
                boxShadow: [
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 15px -5px rgba(0, 0, 0, 0.1)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/emmanuel.jpg"
                alt="Emmanuel Ayodeji Adedeji - Data Scientist & AI Engineer"
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating particles around image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${15 + (i * 12)}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4">
            <span className={`${isTyping ? 'border-r-2 border-foreground' : ''}`}>
              {displayText}
            </span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            Computer Science graduate passionate about transforming data into insights
            and building AI solutions that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{
            opacity: { delay: 3.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-foreground rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;