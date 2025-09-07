import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fraud Detection Model",
      description: "Comparative Analysis of Machine Learning Approaches to Fraud Detection in Nigerian Financial Transactions",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      type: "Final Year Project",
      status: "Completed"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Data-driven customer segmentation using advanced clustering algorithms and behavioral analytics",
      technologies: ["Python", "K-Means", "Data Visualization", "Statistical Analysis"],
      type: "Personal Project",
      status: "In Progress"
    },
    {
      title: "AI Research at NCAIR",
      description: "Exploring AI and robotics applications for solving real-world problems in Nigeria",
      technologies: ["AI/ML", "Robotics", "Data Science", "Research"],
      type: "Research",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants}>
              <motion.div 
                className="bg-surface p-6 rounded-2xl border border-border h-full flex flex-col relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Status indicator */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {project.status}
                  </span>
                </motion.div>

                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                    {project.type}
                  </span>
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="space-y-4">
                  <motion.div 
                    className="flex flex-wrap gap-2"
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
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech}
                        className="px-2 py-1 bg-surface-elevated text-xs rounded border border-border"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.button 
                    className="w-full py-2 text-sm border border-border rounded-lg hover:bg-surface-elevated transition-colors group-hover:border-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on data science projects?
          </p>
          <motion.button 
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;