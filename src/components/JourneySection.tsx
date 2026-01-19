import { useEffect, useRef, useState } from "react";

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
  const [visiblePhases, setVisiblePhases] = useState<number[]>([]);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    phaseRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisiblePhases((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          },
          { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
            {/* Vertical line - animated fill */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            <div 
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent to-accent/50 -translate-x-1/2 transition-all duration-1000 ease-out"
              style={{ 
                height: `${Math.min(100, (visiblePhases.length / phases.length) * 100)}%` 
              }}
            />

            {/* Timeline items */}
            {phases.map((phase, index) => (
              <div 
                key={index}
                ref={(el) => (phaseRefs.current[index] = el)}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  opacity: visiblePhases.includes(index) ? 1 : 0,
                  transform: visiblePhases.includes(index) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Number circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                      visiblePhases.includes(index) 
                        ? 'accent-gradient scale-100' 
                        : 'bg-muted scale-75'
                    }`}
                  >
                    <span className={`text-xl font-black transition-colors duration-500 ${
                      visiblePhases.includes(index) ? 'text-accent-foreground' : 'text-muted-foreground'
                    }`}>
                      {phase.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div 
                    className={`p-6 rounded-2xl border card-gradient card-shadow transition-all duration-500 ${
                      visiblePhases.includes(index) 
                        ? 'border-accent/30 card-shadow-hover' 
                        : 'border-border'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-500 ${
                        visiblePhases.includes(index)
                          ? 'bg-accent/20 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}>
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
