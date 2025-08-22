import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="relative z-10 glass-morphism border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
              <span className="text-xl font-bold text-primary-foreground">3D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AutoVision</h1>
              <p className="text-sm text-muted-foreground">3D Car Customization Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-automotive">
              Features
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-automotive">
              Gallery
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-automotive">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-primary-glow transition-automotive">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};