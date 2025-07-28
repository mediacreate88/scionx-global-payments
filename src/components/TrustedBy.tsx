const TrustedBy = () => {
  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalPay", logo: "GP" },
    { name: "FinanceFirst", logo: "FF" },
    { name: "CryptoBase", logo: "CB" },
    { name: "PayStream", logo: "PS" },
    { name: "BlockChain Inc", logo: "BC" },
  ];

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-muted-foreground">
            Trusted by innovative companies worldwide
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{partner.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;