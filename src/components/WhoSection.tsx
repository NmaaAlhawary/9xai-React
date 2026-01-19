import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Users, MapPin, Briefcase } from "lucide-react";

const qualities = [
  "Strong AI-native reasoning and structured problem-solving ability",
  "Comfort working with ambiguity and real-world constraints",
  "High learning agility and adaptability",
  "Ownership mindset and execution discipline",
  "Ability to collaborate across disciplines and institutions"
];

const fellowshipDetails = [
  { icon: Calendar, label: "Duration", value: "8 months (full-time)" },
  { icon: Briefcase, label: "Status", value: "Salaried professional fellowship" },
  { icon: Users, label: "Intake", value: "20 fellows (highly selective)" },
  { icon: MapPin, label: "Location", value: "Jordan (Embedded in partner institutions)" },
];

const WhoSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Who should apply */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold mb-4 text-sm tracking-wider uppercase">
              Eligibility
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              Who Should <span className="text-gradient">Apply</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              This fellowship is designed for high-performing bachelor-level graduates who demonstrate:
            </p>

            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {quality}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20 text-muted-foreground"
            >
              <span className="text-accent font-semibold">Looking for:</span> Early responsibility, real exposure, and accelerated professional growth? 9XAI is designed for you.
            </motion.p>
          </motion.div>

          {/* Right - Fellowship details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Fellowship Details
              </h3>
              
              <div className="space-y-6">
                {fellowshipDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{detail.label}</div>
                      <div className="font-semibold text-foreground">{detail.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#apply"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 accent-gradient px-8 py-4 rounded-xl font-semibold text-accent-foreground"
              >
                Start Your Application
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
