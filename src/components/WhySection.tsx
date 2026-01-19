import { motion } from "framer-motion";
import { Briefcase, Brain, Rocket, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Real Work, Real Impact",
    description: "Work full-time on live AI challenges with partner institutions across Jordan."
  },
  {
    icon: Brain,
    title: "Applied Problem Solving",
    description: "Apply AI to complex, ambiguous, real-world problems that matter."
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description: "Build solutions that are designed, deployed, and validated in production."
  },
  {
    icon: Users,
    title: "Professional Growth",
    description: "Develop depth through rotation, exposure, and ownership of projects."
  },
  {
    icon: Award,
    title: "National Portfolio",
    description: "Graduate with a national-level applied AI portfolio that sets you apart."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WhySection = () => {
  return (
    <section id="why" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-accent font-semibold mb-4 text-sm tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Join Us
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Why <span className="text-gradient">9XAI</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            9XAI is not a course. It is not a training program. It is an immersive applied AI 
            fellowship built around real problems, real institutions, and real outcomes.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <benefit.icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
