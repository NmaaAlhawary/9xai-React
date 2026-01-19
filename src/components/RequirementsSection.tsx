import { motion } from "framer-motion";
import { UserCircle, Video, Languages, Code2, Lightbulb, Calculator } from "lucide-react";

const requirements = [
  {
    icon: UserCircle,
    title: "General Information",
    description: "Submit basic background and eligibility information to confirm alignment with the program's scope.",
    step: "01"
  },
  {
    icon: Video,
    title: "Introductory Video",
    description: "Record a short video introduction expressing your motivation and approach to problem-solving.",
    step: "02"
  },
  {
    icon: Languages,
    title: "English Exam",
    description: "A short assessment evaluating your ability to communicate effectively in professional contexts.",
    step: "03"
  },
  {
    icon: Code2,
    title: "Technical Check",
    description: "Assesses technical reasoning and foundational readiness, focusing on structured thinking.",
    step: "04"
  },
  {
    icon: Lightbulb,
    title: "Aptitude Assessment",
    description: "Evaluate analytical thinking, problem decomposition, and decision-making under constraints.",
    step: "05"
  },
  {
    icon: Calculator,
    title: "Math Placement Test",
    description: "Measures mathematical reasoning and quantitative comfort for applied AI contexts.",
    step: "06"
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold mb-4 text-sm tracking-wider uppercase">
            Application Process
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Application <span className="text-gradient">Requirements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Complete these steps to submit your application. Each component helps us understand 
            your potential as a future AI professional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shadow-lg">
                  {req.step}
                </div>

                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <req.icon className="w-7 h-7 text-accent" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {req.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {req.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
