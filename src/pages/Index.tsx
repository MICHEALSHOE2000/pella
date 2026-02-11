import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DivisionCard from "@/components/DivisionCard";
import ScrollReveal from "@/components/ScrollReveal";
import AboutSection from "@/components/AboutSection";
import { Home, TrendingUp, Handshake, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-estate.jpg";
import estateImg from "@/assets/estates/itura.jpg";
import farmImg from "@/assets/estates/pride-farm.jpg";
import titanImg from "@/assets/estates/halleluyah.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury estate aerial view"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <ScrollReveal variant="fadeDown" duration={0.8}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
              <span className="text-gradient-blue">Empowering Wealth</span>
              <br />
              <span className="text-foreground">Through Real Estate &</span>
              <br />
              <span className="text-foreground">Investments</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
              Discover opportunities to grow your portfolio with our exclusive
              properties and investment programs
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-semibold text-lg px-8 py-6"
                onClick={() => navigate('/homes')}
              >
                Explore Estates
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                onClick={() => navigate('/wealth-titans')}
              >
                Join Wealth Titans
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-blue mb-4">
                Our Divisions
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Three pathways to building wealth through real estate
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal variant="fadeUp" delay={0}>
              <DivisionCard
                icon={Home}
                title="Pella Homes & Properties"
                description="High-end residential estates with modern amenities and choice locations"
                link="/homes"
                image={estateImg}
              />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <DivisionCard
                icon={TrendingUp}
                title="Wealth Titans"
                description="Lucrative referral program for experienced marketers to earn commissions"
                link="/wealth-titans"
                image={titanImg}
              />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <DivisionCard
                icon={Handshake}
                title="Cooperative"
                description="Collective investment opportunities with shared benefits and guaranteed returns"
                link="/cooperative"
                image={farmImg}
              />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <a href="https://pellaglobalservicesltd.ng/" target="_blank" rel="noopener noreferrer" className="h-full">
                <div className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-full transition-all duration-500 min-h-[320px] shadow-xl">
                  <img
                    src={heroImage}
                    alt="Pella Global"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pella-maroon via-black/40 to-transparent group-hover:opacity-80 transition-opacity" />

                  <div className="relative z-10 h-full flex flex-col p-8 justify-end text-white">
                    <div className="mb-6 flex justify-center w-fit">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-primary/20 backdrop-blur-md border border-white/20">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                      Pella Global
                    </h3>

                    <p className="text-white/80 leading-relaxed">
                      Global services and international partnerships for worldwide opportunities
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      <Footer />
    </div>
  );
};

export default Index;
