import { Button } from "@/components/ui/button";
import velkaLogo from "@/assets/velka-logo.png";
import catMascot from "@/assets/cat-mascot-real.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Professional Logo */}
          <div className="relative">
            <img 
              src={velkaLogo} 
              alt="Velka Koffie Logo" 
              className="w-16 h-16 rounded-xl object-cover shadow-md"
            />
          </div>
          {/* Professional Cat Mascot */}
          <div className="w-10 h-10">
            <img 
              src={catMascot} 
              alt="Coffee Cat Mascot" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-inter">About</a>
          <a href="#coffee" className="text-foreground hover:text-primary transition-colors font-inter">Coffee</a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-inter">Gallery</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-inter">Contact</a>
        </nav>

        <Button variant="outline" className="hidden md:block font-inter">
          Visit Us
        </Button>
      </div>
    </header>
  );
};

export default Header;