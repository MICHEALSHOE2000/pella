import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Award, ExternalLink } from "lucide-react";

const WealthTitans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJoinClick = () => {
    window.open('https://pellaform.netlify.app/', '_blank');
  };

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
                <span className="text-gradient-blue">Wealth Titans</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-xl md:text-2xl text-foreground/70 mb-8">
                Join our elite network of marketers and earn unlimited commissions selling premium real estate properties with zero capital investment.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={0.4}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-semibold text-lg px-8 py-6"
                onClick={handleJoinClick}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Become a Wealth Titan
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-4xl font-serif font-bold text-center text-gradient-blue mb-12">
              Why Join Wealth Titans?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal variant="fadeUp" delay={0}>
              <div className="glass-panel p-8 rounded-2xl text-center hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Zero Capital</h3>
                <p className="text-foreground/70">Start earning with no upfront investment required</p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl text-center hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">High Commissions</h3>
                <p className="text-foreground/70">Earn competitive commissions on every sale</p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl text-center hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Training & Support</h3>
                <p className="text-foreground/70">Get professional training and mentorship</p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl text-center hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Recognition</h3>
                <p className="text-foreground/70">Awards and bonuses for top performers</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
                Click the button below to register and join our elite network of Wealth Titans.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-semibold text-lg px-8 py-6"
                onClick={handleJoinClick}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Register Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WealthTitans;
