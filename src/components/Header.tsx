import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo recreation */}
          <div className="bg-primary px-4 py-2 rounded-lg">
            <span className="font-bold text-2xl text-foreground">VELKA</span>
            <div className="text-xs text-foreground/80 -mt-1">KOFFIE</div>
          </div>
          {/* Cat mascot */}
          <div className="text-2xl">☕🐱</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#coffee" className="text-foreground hover:text-primary transition-colors">Coffee</a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="outline" className="hidden md:block">
          Visit Us
        </Button>
      </div>
    </header>
  );
};

export default Header;