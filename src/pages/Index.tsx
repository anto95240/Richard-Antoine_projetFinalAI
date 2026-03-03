import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationCards from "@/components/DestinationCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationCards />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
