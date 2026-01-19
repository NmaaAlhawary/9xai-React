import { CheckCircle2 } from "lucide-react";

const qualities = [
  "Strong AI-native reasoning and structured problem-solving ability",
  "Comfort working with ambiguity and real-world constraints",
  "High learning agility and adaptability",
  "Ownership mindset and execution discipline",
  "Ability to collaborate across disciplines and institutions",
];

const WhoSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold text-accent uppercase tracking-wider">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
                Who Should Apply?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                This fellowship is designed for high-performing bachelor-level graduates who demonstrate:
              </p>

              {/* Qualities list */}
              <ul className="space-y-4">
                {qualities.map((quality, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Call to action card */}
            <div className="relative">
              <div className="relative p-10 rounded-3xl hero-gradient overflow-hidden">
                {/* Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 border border-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border border-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Looking for Early Responsibility?
                  </h3>
                  <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                    If you want real exposure, accelerated professional growth, and the 
                    opportunity to work on challenges that matter—9XAI is designed for you.
                  </p>

                  {/* Fellowship details */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Duration", value: "8 Months" },
                      { label: "Status", value: "Salaried" },
                      { label: "Intake", value: "20 Fellows" },
                      { label: "Location", value: "Jordan" },
                    ].map((detail, index) => (
                      <div key={index} className="bg-primary-foreground/10 rounded-lg p-4">
                        <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">
                          {detail.label}
                        </div>
                        <div className="text-lg font-bold text-accent">
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#apply" 
                    className="inline-flex items-center gap-2 accent-gradient px-6 py-3 rounded-lg font-semibold text-accent-foreground button-shadow hover:opacity-90 transition-all duration-300"
                  >
                    Start Your Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
