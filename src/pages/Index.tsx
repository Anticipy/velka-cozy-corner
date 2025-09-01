import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoffeeShowcase from "@/components/CoffeeShowcase";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CoffeeShowcase />
      <InstagramGallery />
      <Footer />
    </div>
  );
};

export default Index;
