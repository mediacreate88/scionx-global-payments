import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, CreditCard, Zap } from "lucide-react";
import paymentGatewayImage from "@/assets/payment-gateway.jpg";
import crossBorderPaymentsImage from "@/assets/cross-border-payments.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Next-generation financial infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Global Payment
              <br />
              Solutions Reimagined
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Seamlessly process payments and enable cross-border transactions with our cutting-edge blockchain infrastructure. Built for the future of finance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Start Building
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <CreditCard className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Payment Gateway</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Accept payments globally with our secure, scalable payment processing infrastructure supporting crypto and fiat currencies.
              </p>
              <div className="mb-4">
                <img 
                  src={paymentGatewayImage} 
                  alt="Payment Gateway Interface" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Cross-Border Payments</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Enable instant, low-cost international transfers with our advanced cross-border payment solutions and global network.
              </p>
              <div className="mb-4">
                <img 
                  src={crossBorderPaymentsImage} 
                  alt="Cross-Border Payments Network" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;