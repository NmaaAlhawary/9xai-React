const phases = [
  {
    number: "01",
    title: "Application & Selection",
    description: "Submit your application through our multi-step process including assessments, video introduction, and technical checks.",
    duration: "2-3 weeks",
  },
  {
    number: "02",
    title: "AI Bootcamp",
    description: "Intensive foundational training to align all fellows on core AI concepts, tools, and methodologies.",
    duration: "4-6 weeks",
  },
  {
    number: "03",
    title: "Rotations & Embedded Work",
    description: "Work directly inside partner institutions on live AI challenges, rotating to gain diverse experience.",
    duration: "4-5 months",
  },
  {
    number: "04",
    title: "Capstone Project",
    description: "Complete a significant AI project demonstrating your capabilities and contributing to national priorities.",
    duration: "6-8 weeks",
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-accent uppercase tracking-wider">
            Your Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            The 9XAI Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A structured 8-month path designed to transform talented graduates into 
            capable AI professionals.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-border -translate-x-1/2" />

            {/* Timeline items */}
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center shadow-lg">
                    <span className="text-xl font-black text-accent-foreground">{phase.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-2xl border border-border card-gradient card-shadow ${index % 2 === 0 ? '' : ''}`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
