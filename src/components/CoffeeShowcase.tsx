import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coffeePour from "@/assets/coffee-pour.jpg";
import espressoShot from "@/assets/espresso-shot.jpg";
import heroImage from "@/assets/hero-coffee.jpg";

const CoffeeShowcase = () => {
  const coffeeTypes = [
    {
      name: "Signature Latte",
      description: "Smooth espresso with perfectly steamed milk and beautiful latte art",
      image: heroImage,
      price: "€4.50",
      popular: true
    },
    {
      name: "Artisan Pour Over",
      description: "Single-origin beans brewed to perfection with precision and care",
      image: coffeePour,
      price: "€5.00",
      popular: false
    },
    {
      name: "Rich Espresso",
      description: "Bold, full-bodied espresso shot with a perfect golden crema",
      image: espressoShot,
      price: "€2.50",
      popular: true
    }
  ];

  return (
    <section id="coffee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Coffee Selection
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cup is crafted with passion and precision. Discover our signature blends 
            that make Velka Koffie a destination for coffee lovers in Antwerp.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeTypes.map((coffee, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-accent">
              <div className="relative">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {coffee.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-semibold text-foreground">{coffee.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {coffee.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {coffee.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see our full menu? Visit us in store!
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <span className="text-2xl">☕🐱</span>
            <span className="font-medium">Fresh daily selections available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeShowcase;