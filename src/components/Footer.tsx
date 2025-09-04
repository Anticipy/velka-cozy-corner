import velkaLogo from "@/assets/velka-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={velkaLogo} 
                alt="Velka Koffie Logo" 
                className="w-12 h-12 rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Your cozy coffee corner in the heart of Antwerp. Where every cup tells a story 
              and every moment feels like home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/velkakoffie/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
          {/* Location & Hours */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Visit Us</h3>
            <div className="space-y-3 text-secondary-foreground/80">
              <p>Somewhere Cozy Street<br />Antwerp, Belgium</p>
              <p>+32 3 XXX XXXX</p>
              <p>hello@velkakoffie.be</p>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Opening Hours</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>Monday - Friday<br />7:00 - 18:00</p>
              <p>Saturday<br />8:00 - 18:00</p>
              <p>Sunday<br />9:00 - 17:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Velka Koffie. Made with love in Antwerp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;