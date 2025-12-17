import ScrollReveal from "@/components/ScrollReveal";
import { Award, Target, Eye, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-blue mb-4">
              About Pella Homes
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Multi Award Winning Affordable Real Estate Company in Nigeria
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ScrollReveal variant="fadeUp" delay={0}>
            <div className="glass-panel p-8 rounded-2xl hover-lift h-full text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Company Overview</h3>
              <p className="text-foreground/70 leading-relaxed">
                Multi Award Winning Affordable real estate company in Nigeria, dedicated to providing quality homes and investment opportunities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="glass-panel p-8 rounded-2xl hover-lift h-full text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To consistently provide quality services to our valued clients while embracing professional standards & ethics.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="glass-panel p-8 rounded-2xl hover-lift h-full text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the market leader and the preferred provider of Real estate, construction, building finishing, financing, and property management globally.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Why Choose Us</h3>
            </div>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Pella Homes Properties is focused on solving Lagos's housing deficit problem, which is at an alarming 17 million.
              </p>
              <p>
                At the moment, we have over 9 estates that are open to the public for both real estate investment and home ownership.
              </p>
              <p>
                Due to Nigeria's economy, our products are very affordable, and we also provide a flexible payment plan in our quest to make the vast majority homeowners.
              </p>
              <p>
                From the beginning to the end, we strive to ensure you enjoy value for your money by buying a home from us or investing in real estate assets.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
