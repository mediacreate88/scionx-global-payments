import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/961e116f-7024-4a82-9c77-dac592f17071.png" 
              alt="ScionX" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#developers" className="text-foreground hover:text-primary transition-colors">
              Developers
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Get Started
            </Button>
            <Button variant="hero" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;