const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-accent/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full" />
      </div>

      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-black text-primary-foreground md:text-5xl lg:text-6xl">
            Jordan's National Initiative for{" "}
            <span className="text-gradient">Next-Level Expertise in Artificial Intelligence</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/70 md:text-xl">
            The inaugural implementation of Jordan's National Initiative for Next-Level 
            Expertise in Artificial Intelligence. Hosted by Al Hussein Technical University (HTU), 
            under the supervision of NCFT.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 accent-gradient px-8 py-4 rounded-lg font-semibold text-accent-foreground button-shadow hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Apply Now
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#why" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground/80 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "8", label: "Months Duration" },
              { value: "20", label: "Selected Fellows" },
              { value: "4", label: "Phases" },
              { value: "100%", label: "Hands-on Work" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-accent">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
