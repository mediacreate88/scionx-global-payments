import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
