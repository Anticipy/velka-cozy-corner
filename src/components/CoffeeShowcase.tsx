import coffeePour from "@/assets/coffee-pour.jpg";
import espressoShot from "@/assets/espresso-shot.jpg";
import heroImage from "@/assets/hero-coffee.jpg";

const CoffeeShowcase = () => {
  const coffeeTypes = [
    {
      name: "Signature Latte",
      description: "Smooth espresso with perfectly steamed milk and beautiful latte art",
      image: heroImage,
      price: "€4.50"
    },
    {
      name: "Artisan Pour Over",
      description: "Single-origin beans brewed to perfection with precision and care",
      image: coffeePour,
      price: "€5.00"
    },
    {
      name: "Rich Espresso",
      description: "Bold, full-bodied espresso shot with a perfect golden crema",
      image: espressoShot,
      price: "€2.50"
    }
  ];

  return (
    <section id="coffee" className="py-24 bg-muted/20 relative overflow-hidden border-t border-muted/30">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border border-foreground/20 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 border border-foreground/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-playfair font-light text-foreground mb-6">
            Our Coffee
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Every cup is crafted with passion and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {coffeeTypes.map((coffee, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-playfair font-medium text-foreground mb-3">
                {coffee.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {coffee.description}
              </p>
              <p className="text-lg font-medium text-foreground">
                {coffee.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeShowcase;