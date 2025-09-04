import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";
import catMascot from "@/assets/cat-mascot-real.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content - Centered and minimal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Prominent cat mascot */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/15 backdrop-blur-sm rounded-full p-4 sm:p-6 border-2 border-white/30 shadow-lg">
              <img 
                src={catMascot} 
                alt="Coffee Cat Mascot" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Clean, minimal title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-light text-white mb-4 sm:mb-6 tracking-wide">
            Velka Koffie
          </h1>
          
          {/* Simple tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Your cozy coffee corner in Antwerp
          </p>
          
          {/* Single, elegant CTA */}
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-medium px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
            onClick={() => {
              const coffeeSection = document.getElementById('coffee');
              coffeeSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discover Our Coffee
          </Button>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;