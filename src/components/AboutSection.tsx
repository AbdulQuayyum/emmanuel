import { motion, Variants } from "framer-motion";

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 font-mono">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p variants={itemVariants}>
                I'm a Computer Science Graduate from the University of Ilorin, Nigeria,
                My journey has been shaped by a
                passion for data science, artificial intelligence, and innovative technology solutions.
              </motion.p>
              <motion.p variants={itemVariants}>
                During my Students Industrial Work Experience Scheme (SIWES) at the
                National Centre for Artificial Intelligence and Robotics (NCAIR),
                a National Information Technology Development Agency (NITDA) Nigeria subdivision, I explored how AI and data-driven innovations
                can address real-world problems.
              </motion.p>
              <motion.p variants={itemVariants}>
                My final year project on "Comparative Analysis of Machine Learning
                Approaches to Fraud Detection in Nigerian Financial Transactions"
                allowed me to apply advanced techniques in data preprocessing,
                feature engineering, and model evaluation.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="bg-surface-elevated p-8 rounded-2xl border border-border"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6 font-mono">Vision</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full mt-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <p className="text-muted-foreground">
                    Develop expertise as a skilled data scientist, delivering impactful
                    tech solutions and changing the world
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full mt-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <p className="text-muted-foreground">
                    Establish a protocol/close protection firm rooted in
                    excellence and safety
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/30 rounded rotate-45"
              animate={{
                y: [0, -10, 5, 0],
                rotate: [45, 50, 40, 45]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"
              animate={{
                y: [0, 10, -5, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;