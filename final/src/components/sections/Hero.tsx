import { Button } from '@/components/ui/button';
import heroCarImage from '@/assets/hero-car.jpg';

export const Hero = () => {
  const scrollToConfigurator = () => {
    document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCarImage}
          alt="Luxury sports car in showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Visualize Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Perfect Car
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of automotive customization with our 
              real-time 3D visualization platform. Design, customize, and 
              explore your dream vehicle like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={scrollToConfigurator}
                className="bg-gradient-primary hover:shadow-primary-glow transition-automotive text-lg px-8 py-4"
              >
                Start Customizing
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-morphism border-border/50 hover:bg-accent/20 transition-automotive text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </div>

            {/* Features Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-morphism p-4 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-foreground mb-1">Real-time Customization</h3>
                <p className="text-sm text-muted-foreground">
                  See changes instantly as you modify colors, materials, and finishes
                </p>
              </div>
              
              <div className="glass-morphism p-4 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-semibold text-foreground mb-1">Photorealistic Rendering</h3>
                <p className="text-sm text-muted-foreground">
                  Experience studio-quality visuals with advanced lighting and materials
                </p>
              </div>
              
              <div className="glass-morphism p-4 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-semibold text-foreground mb-1">Multiple Angles</h3>
                <p className="text-sm text-muted-foreground">
                  Explore every detail with 360° views and preset camera positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};