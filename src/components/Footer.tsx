import velkaLogo from "@/assets/velka-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-coffee-warm to-secondary py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={velkaLogo} 
                alt="Velka Koffie Logo" 
                className="w-12 h-12 rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-sm text-sm">
              Your cozy coffee corner in the heart of Antwerp. Where every cup tells a story 
              and every moment feels like home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="https://www.instagram.com/velkakoffie/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-3 text-sm">Visit Us</h3>
            <div className="space-y-2 text-secondary-foreground/80 text-sm">
              <p>Sint-Jacobsmarkt 1<br />Antwerp, Belgium</p>
              <p><a href="mailto:hello@velkakoffie.be" className="hover:text-primary transition-colors">hello@velkakoffie.be</a></p>
            </div>
          </div>
          
          {/* Opening Hours - Compact Grid */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-3 text-sm">Opening Hours</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-secondary-foreground/80 text-sm">
              <div>
                <p className="font-medium">Thu</p>
                <p>8 am–4 pm</p>
              </div>
              <div>
                <p className="font-medium">Fri</p>
                <p>8 am–4 pm</p>
              </div>
              <div>
                <p className="font-medium">Sat</p>
                <p className="text-secondary-foreground/60">Closed</p>
              </div>
              <div>
                <p className="font-medium">Sun</p>
                <p className="text-secondary-foreground/60">Closed</p>
              </div>
              <div>
                <p className="font-medium">Mon</p>
                <p>8 am–4 pm</p>
              </div>
              <div>
                <p className="font-medium">Tue</p>
                <p className="text-secondary-foreground/60">Closed</p>
              </div>
              <div>
                <p className="font-medium">Wed</p>
                <p>8 am–4 pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-xs">
              © 2024 Velka Koffie. Made with love in Antwerp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;