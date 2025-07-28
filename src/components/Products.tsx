import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, Globe, Shield, Zap, Users, BarChart3 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Accept payments in crypto and fiat with our secure, scalable infrastructure",
      features: ["Multi-currency support", "Real-time processing", "Advanced security", "Easy integration"],
      cta: "Explore Gateway"
    },
    {
      icon: Globe,
      title: "Cross-Border Payments",
      description: "Send money globally with instant settlement and competitive rates",
      features: ["Instant transfers", "Low fees", "Global coverage", "Regulatory compliance"],
      cta: "Explore Transfers"
    },
    {
      icon: Users,
      title: "Business Payouts",
      description: "Pay employees, vendors, and contractors worldwide with just an email",
      features: ["Bulk payments", "Automated scheduling", "Tax compliance", "Multi-format support"],
      cta: "Explore Payouts"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Complete Payment Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial tools designed for the modern economy. Process payments, enable transfers, and manage payouts with enterprise-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-card/50 border-border hover:bg-card transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-2xl w-fit shadow-glow">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {product.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold">99.9%</span>
              </div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold">&lt;1s</span>
              </div>
              <p className="text-sm text-muted-foreground">Processing Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold">150+</span>
              </div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold">$1B+</span>
              </div>
              <p className="text-sm text-muted-foreground">Processed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;