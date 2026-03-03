import HeroSection from "@/components/HeroSection";
import DestinationCards from "@/components/DestinationCards";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DestinationCards />
      <ChatBot />
    </div>
  );
};

export default Index;
