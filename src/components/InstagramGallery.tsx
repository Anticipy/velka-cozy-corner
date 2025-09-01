import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";
import coffeePour from "@/assets/coffee-pour.jpg";
import espressoShot from "@/assets/espresso-shot.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const InstagramGallery = () => {
  // Simulated Instagram posts - you can replace with actual Instagram API integration
  const instagramPosts = [
    { image: heroImage, likes: "127", caption: "Perfect latte art this morning ☕✨" },
    { image: coffeePour, likes: "89", caption: "Fresh pour over in progress 🌊" },
    { image: cafeInterior, likes: "203", caption: "Our cozy corner is ready for you 🐱" },
    { image: espressoShot, likes: "156", caption: "Rich espresso shot perfection ☕" },
    { image: heroImage, likes: "178", caption: "Sunday vibes at Velka Koffie 💛" },
    { image: coffeePour, likes: "94", caption: "Brewing happiness one cup at a time ☕🐱" }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on Instagram for daily coffee inspiration, 
            behind-the-scenes moments, and the latest from our cozy café.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer border-accent">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <div className="flex items-center space-x-2">
                      <span>❤️</span>
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mb-4"
            size="lg"
          >
            @velkakoffie
          </Button>
          <p className="text-muted-foreground">
            Follow us for daily coffee inspiration and cozy moments ☕🐱
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;