const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="text-center md:text-left">
              <div className="text-lg font-bold text-foreground mb-1">9XAI Fellows</div>
              <div className="text-sm text-muted-foreground">
                Jordan's National Fellowship for Applied AI
              </div>
            </div>

            {/* Center - Partners */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Hosted by <span className="font-semibold text-foreground">Al Hussein Technical University</span></span>
              <span className="hidden md:inline">•</span>
              <span>Supervised by <span className="font-semibold text-foreground">NCFT</span></span>
            </div>

            {/* Right */}
            <div className="text-center md:text-right text-sm text-muted-foreground">
              © 2025 9XAI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
