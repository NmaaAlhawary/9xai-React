import { Briefcase, Brain, Rocket, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Real Work, Not Coursework",
    description: "Work full-time on live AI challenges with partner institutions. This is not a training program—it's real applied work.",
  },
  {
    icon: Brain,
    title: "Complex Problem Solving",
    description: "Apply AI to complex, ambiguous, real-world problems that matter to Jordan's future.",
  },
  {
    icon: Rocket,
    title: "Build & Deploy",
    description: "Create solutions that are designed, deployed, and validated—not just theoretical projects.",
  },
  {
    icon: Users,
    title: "Rotations & Exposure",
    description: "Develop professional depth through rotation across institutions, exposure to diverse challenges, and ownership of outcomes.",
  },
  {
    icon: Award,
    title: "National Portfolio",
    description: "Graduate with a national-level applied AI portfolio that demonstrates real impact and professional capability.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-accent uppercase tracking-wider">
            The Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Why <span className="text-gradient">9XAI</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            9XAI is not a course. It's an immersive applied AI fellowship built around 
            real problems, real institutions, and real outcomes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border card-gradient card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl accent-gradient">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 accent-gradient rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
