import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 80 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Deep Learning", level: 82 },
        { name: "Data Analysis", level: 92 },
        { name: "Statistical Analysis", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Big Data", level: 80 },
        { name: "Data Mining", level: 85 },
        { name: "AI/Robotics", level: 78 },
        { name: "Data Management", level: 88 }
      ]
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
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsVisible(true)}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={cardVariants}>
              <motion.div 
                className="bg-surface-elevated p-6 rounded-2xl border border-border h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 font-mono text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <motion.span 
                          className="text-xs text-muted-foreground font-mono"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isVisible ? 1 : 0 }}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: isVisible ? `${skill.level}%` : "0%" }}
                          transition={{ 
                            duration: 1,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative element */}
                <motion.div 
                  className="mt-6 flex justify-center"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="w-8 h-1 bg-primary/30 rounded-full"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Focus */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="bg-background p-8 rounded-2xl border border-border max-w-2xl mx-auto"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-mono">Currently Learning</h3>
            <p className="text-muted-foreground mb-4">
              Advancing my expertise through hands-on projects and continuous learning
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
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
              {["Customer Segmentation", "MLOps", "Advanced AI", "Cloud Computing"].map((item, index) => (
                <motion.span 
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    scale: { repeat: Infinity, duration: 2, delay: index * 0.5 }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;