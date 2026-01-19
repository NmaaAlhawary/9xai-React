import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    title: "Application & Selection",
    description: "Submit your application and go through our rigorous selection process designed to identify high-potential candidates.",
    duration: "2 weeks",
    icon: "📝"
  },
  {
    number: "02",
    title: "AI Bootcamp",
    description: "Intensive foundational training in AI concepts, tools, and methodologies to prepare you for real-world challenges.",
    duration: "4 weeks",
    icon: "🚀"
  },
  {
    number: "03",
    title: "Rotations & Embedded Work",
    description: "Work embedded within partner institutions, rotating through different AI challenges and building practical experience.",
    duration: "5 months",
    icon: "💼"
  },
  {
    number: "04",
    title: "Capstone Project",
    description: "Design and deliver a significant AI project that demonstrates your capabilities and creates real impact.",
    duration: "6 weeks",
    icon: "🎯"
  }
];

const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-semibold mb-4 text-sm tracking-wider uppercase">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            The <span className="text-gradient">9XAI</span> Journey
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Your path from applicant to AI professional, designed for maximum growth and impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div 
              className="w-full bg-gradient-to-b from-accent via-accent to-accent/50"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-card border-2 border-accent flex items-center justify-center text-2xl shadow-lg shadow-accent/20">
                    {phase.icon}
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div 
                  className={`ml-24 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">
                        {phase.number}
                      </span>
                      <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {phase.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
