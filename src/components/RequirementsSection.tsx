import { UserCircle, Video, Languages, Code2, Lightbulb, Calculator } from "lucide-react";

const requirements = [
  {
    icon: UserCircle,
    title: "General Information",
    description: "Submit basic background and eligibility information to confirm alignment with the program's scope and expectations.",
  },
  {
    icon: Video,
    title: "Introductory Video",
    description: "Record a short video introduction expressing your motivation, communication clarity, and approach to problem-solving.",
  },
  {
    icon: Languages,
    title: "English Exam",
    description: "A short English assessment to evaluate your ability to communicate effectively in professional and technical environments.",
  },
  {
    icon: Code2,
    title: "Technical Check",
    description: "Assessment of technical reasoning and foundational readiness for AI work, focusing on structured thinking.",
  },
  {
    icon: Lightbulb,
    title: "Aptitude Assessment",
    description: "Evaluate analytical thinking, problem decomposition, and decision-making under real-world constraints.",
  },
  {
    icon: Calculator,
    title: "Math Placement Test",
    description: "A brief placement test measuring mathematical reasoning and quantitative comfort for applied AI contexts.",
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-accent uppercase tracking-wider">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Application Requirements
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our selection process is designed to identify candidates with the right 
            mindset, capabilities, and potential for applied AI work.
          </p>
        </div>

        {/* Requirements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-background border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl border border-accent/30 bg-accent/5">
                <req.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 pr-10">
                {req.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
