import { ArrowRight } from "lucide-react";
import logo from "@/assets/9xai-logo.png";

const ApplySection = () => {
  return (
    <section id="apply" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/30 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/20 rounded-full" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="9XAI Logo" 
              className="h-16 w-auto brightness-0 invert opacity-80"
            />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Ready to Shape Jordan's AI Future?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Join the Lighthouse Cohort and become part of the first generation of 
            AI professionals trained to solve real national challenges.
          </p>

          {/* CTA */}
          <a 
            href="#" 
            className="group inline-flex items-center gap-3 accent-gradient px-10 py-5 rounded-xl font-bold text-lg text-accent-foreground button-shadow hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Apply Now
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Additional info */}
          <p className="mt-8 text-primary-foreground/50 text-sm">
            Applications are reviewed on a rolling basis. Limited to 20 fellows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
