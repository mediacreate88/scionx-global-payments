import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/961e116f-7024-4a82-9c77-dac592f17071.png" 
              alt="ScionX" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground max-w-sm">
              Simplifying global payments for the next generation of businesses with secure, scalable, and innovative financial infrastructure.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Payment Gateway</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cross-Border Payments</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Payouts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketplaces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SaaS Platforms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ScionX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;