import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactMethods = [
    {
      icon: "@",
      title: "Email",
      description: "Ready for professional opportunities",
      url: "mailto:emmydeji001@gmail.com",
    },
    {
      icon: "in",
      title: "LinkedIn",
      description: "Connect for professional networking",
      url: "https://www.linkedin.com/in/emmanuel-adedeji-1a5429317/",
    },
    {
      icon: "{}",
      title: "GitHub",
      description: "Explore my code and projects",
      url: "https://github.com/Emmy-coded",
    },
  ];

  const handleCardClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm excited to connect with professionals in data science, machine learning,
          and protocol management to learn, collaborate, and grow. Let's build the future together!
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.div key={method.title} variants={itemVariants} className="flex-1 h-full cursor-pointer" onClick={() => handleCardClick(method.url)}>
              <motion.div
                className="bg-surface-elevated h-full p-6 rounded-2xl border border-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary font-mono text-xl">{method.icon}</span>
                </motion.div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="bg-background p-8 rounded-2xl border border-border max-w-2xl mx-auto"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-mono">Open to Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              Currently seeking roles in data science, machine learning, and AI.
              Available for freelance projects and collaborations.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 40px hsl(var(--primary) / 0.6)",
                    "0 0 20px hsl(var(--primary) / 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: { repeat: Infinity, duration: 3 }
                }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Emmanuel Ayodeji Adedeji.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="relative mt-12">
          <motion.div
            className="absolute top-0 left-1/4 w-3 h-3 bg-primary/30 rounded-full"
            animate={{
              y: [0, -10, 5, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-8 right-1/4 w-2 h-2 bg-accent/40 rounded-full"
            animate={{
              y: [0, 10, -5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -1 }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-4 h-4 border border-primary/30 rotate-45"
            animate={{
              y: [0, -15, 8, 0],
              rotate: [45, 90, 135, 45]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
          />
        </div>
        <motion.div
          className="mt-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {new Date().getFullYear()} © Emmanuel Ayodeji Adedeji, All rights reserved
        </motion.div>
        <motion.div
          className="mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Created by{' '}
          <a
            href="https://abdul-quayyum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {" "} Abdul-Quayyum Alao
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
