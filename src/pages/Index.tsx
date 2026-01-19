import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import WhoSection from "@/components/WhoSection";
import JourneySection from "@/components/JourneySection";
import RequirementsSection from "@/components/RequirementsSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhySection />
      <WhoSection />
      <JourneySection />
      <RequirementsSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default Index;
