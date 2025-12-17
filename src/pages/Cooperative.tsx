import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Target, Landmark, TreePine } from "lucide-react";

const Cooperative = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal variant="fadeDown">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient-blue">Pella Cooperative</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-xl md:text-2xl text-foreground/70 mb-8">
                Invest collectively and grow your wealth through our secured savings and investment programs with guaranteed returns.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={0.4}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-semibold text-lg px-8 py-6"
                onClick={() => window.open('https://wa.me/2349055777795?text=I want to learn about Pella Cooperative investments', '_blank')}
              >
                Start Investing Today
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-4xl font-serif font-bold text-center text-gradient-blue mb-12">
              Investment Products
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal variant="fadeUp" delay={0}>
              <div className="glass-panel p-8 rounded-2xl hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Target Savings</h3>
                <p className="text-foreground/70 text-center mb-4">
                  Set your savings goals and earn competitive interest on your deposits. Flexible terms from 3 to 12 months.
                </p>
                <ul className="text-foreground/70 space-y-2 mb-6">
                  <li>• Up to 15% ROI annually</li>
                  <li>• Flexible withdrawal</li>
                  <li>• Goal-based savings</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Land Banking</h3>
                <p className="text-foreground/70 text-center mb-4">
                  Buy and hold strategic land assets with us. Benefit from land appreciation and secure your future.
                </p>
                <ul className="text-foreground/70 space-y-2 mb-6">
                  <li>• Buy & Hold strategy</li>
                  <li>• High appreciation potential</li>
                  <li>• Professional management</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Adopt a Farm</h3>
                <p className="text-foreground/70 text-center mb-4">
                  Sponsor farmlands for 5 years with guaranteed returns, then convert to future estate ownership.
                </p>
                <ul className="text-foreground/70 space-y-2 mb-6">
                  <li>• 5-year farming income</li>
                  <li>• Estate conversion</li>
                  <li>• Dual ROI opportunity</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Start Growing Your Wealth Today
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our cooperative investment products and start your journey to financial freedom.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/2349055777795?text=I want to invest in Pella Cooperative', '_blank')}
            >
              Contact Us on WhatsApp
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cooperative;
