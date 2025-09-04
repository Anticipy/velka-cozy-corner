import cafeInterior from "@/assets/cafe-interior-real.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden border-t border-muted/20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-foreground/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-foreground/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Minimal header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-light text-foreground mb-8">
              Our Story
            </h2>
            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>
          </div>
          
          {/* Larger, more prominent image */}
          <div className="mb-20">
            <div className="relative">
              <img 
                src={cafeInterior} 
                alt="Cozy interior of Velka Koffie" 
                className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover shadow-lg"
              />
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-foreground/30 rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-foreground/30 rounded-br-lg"></div>
            </div>
          </div>
          
          {/* Simplified content */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              Nestled in the heart of Antwerp, Velka Koffie is more than just a coffee shop – 
              it's a warm embrace in a cup.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From carefully selected beans to the perfect brewing techniques, every detail 
              is crafted with love. Whether you're starting your morning or taking an afternoon 
              break, our welcoming atmosphere is always ready to embrace you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;