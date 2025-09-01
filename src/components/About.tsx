import { Card } from "@/components/ui/card";
import cafeInterior from "@/assets/cafe-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={cafeInterior} 
              alt="Cozy interior of Velka Koffie" 
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-primary p-4 rounded-full shadow-lg">
              <span className="text-3xl">☕🐱</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Welcome to Velka Koffie
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in the heart of Antwerp, Velka Koffie is more than just a coffee shop – 
              it's a warm embrace in a cup. Our passion for exceptional coffee meets the cozy 
              charm that makes every visit feel like coming home.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From carefully selected beans to the perfect brewing techniques, every detail 
              is crafted with love. Whether you're starting your morning or taking an afternoon 
              break, our little corner cat mascot is always ready to welcome you.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 bg-card border-accent">
                <h3 className="font-semibold text-foreground mb-2">Artisanal Coffee</h3>
                <p className="text-muted-foreground">Ethically sourced beans, expertly roasted</p>
              </Card>
              
              <Card className="p-6 bg-card border-accent">
                <h3 className="font-semibold text-foreground mb-2">Cozy Atmosphere</h3>
                <p className="text-muted-foreground">Your perfect spot for work or relaxation</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;