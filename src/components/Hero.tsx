import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          {/* Large Logo */}
          <div className="mb-8 inline-block">
            <div className="bg-primary p-8 rounded-2xl shadow-lg">
              <h1 className="text-6xl md:text-8xl font-bold text-foreground">VELKA</h1>
              <div className="text-xl md:text-2xl text-foreground/80 -mt-2 tracking-wider">KOFFIE</div>
            </div>
          </div>
          
          {/* Cat mascot and tagline */}
          <div className="mb-8 flex items-center justify-center md:justify-start space-x-4">
            <div className="text-4xl">☕🐱</div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Your cozy coffee corner in Antwerp
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
            Where every cup tells a story and every moment feels like home. 
            Discover artisanal coffee in the heart of Antwerp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Find Us
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;