import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoffeeShowcase from "@/components/CoffeeShowcase";
import SectionSeparator from "@/components/SectionSeparator";
import InstagramEmbeds from "@/components/InstagramEmbeds";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CoffeeShowcase />
      <SectionSeparator />
      <InstagramEmbeds />
      <Footer />
    </div>
  );
};

export default Index;
