import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback images if Instagram API is not available
  const fallbackImages = [
    { image: "/src/assets/hero-coffee.jpg", likes: "127" },
    { image: "/src/assets/coffee-pour.jpg", likes: "89" },
    { image: "/src/assets/cafe-interior.jpg", likes: "203" },
    { image: "/src/assets/espresso-shot.jpg", likes: "156" },
    { image: "/src/assets/hero-coffee.jpg", likes: "178" },
    { image: "/src/assets/coffee-pour.jpg", likes: "94" }
  ];

  useEffect(() => {
    // For now, we'll use fallback images
    // In production, you would implement Instagram Basic Display API here
    setPosts(fallbackImages.map((img, index) => ({
      id: `fallback-${index}`,
      media_type: 'IMAGE' as const,
      media_url: img.image,
      permalink: 'https://www.instagram.com/velkakoffie/',
      caption: `Coffee moment ${index + 1}`,
      timestamp: new Date().toISOString()
    })));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-muted rounded w-48 mx-auto mb-12"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-24 bg-muted/10 relative overflow-hidden border-t border-muted/40">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-light text-foreground mb-6">
            Follow Our Journey
          </h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Daily coffee inspiration and cozy moments.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto mb-16">
          {posts.slice(0, 6).map((post, index) => (
            <div key={post.id} className="group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-xl aspect-square border-2 border-transparent group-hover:border-foreground/20 transition-all duration-300">
                <img 
                  src={post.media_url} 
                  alt={post.caption || `Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">♥</span>
                      <span className="font-medium">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-foreground/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-3"
            onClick={() => window.open('https://www.instagram.com/velkakoffie/', '_blank')}
          >
            @velkakoffie
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
