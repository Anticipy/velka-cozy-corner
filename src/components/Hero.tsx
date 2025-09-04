import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";
import velkaLogo from "@/assets/velka-logo.png";
import catMascot from "@/assets/cat-mascot-real.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Less Faded Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          {/* Professional Large Logo */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <img 
                src={velkaLogo} 
                alt="Velka Koffie" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
          
          {/* Professional mascot and tagline */}
          <div className="mb-8 flex items-center justify-center md:justify-start space-x-4">
            <div className="w-16 h-16">
              <img 
                src={catMascot} 
                alt="Coffee Cat Mascot" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-playfair font-medium">
              Your cozy coffee corner in Antwerp
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0 font-inter">
            Where every cup tells a story and every moment feels like home. 
            Discover artisanal coffee in the heart of Antwerp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-inter">
              Find Us
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-inter">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;