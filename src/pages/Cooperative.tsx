import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Landmark, TreePine, ArrowRight } from "lucide-react";
import targetImg from "@/assets/hero-estate.jpg";
import landBankingImg from "@/assets/estates/itura.jpg";
import agroImg from "@/assets/estates/pride-farm.jpg";

const Cooperative = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal variant="fadeDown">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient-blue">Pella Cooperative</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-lg md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto px-2">
                Invest collectively and grow your wealth through our secured savings and investment programs with guaranteed returns.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={0.4}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-bold text-lg px-8 py-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
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
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gradient-blue mb-12">
              Investment Products
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <ScrollReveal variant="fadeUp" delay={0}>
              <Link to="/cooperative/target-savings" className="block h-full group">
                <div className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <img src={targetImg} alt="Target Savings" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Target Savings</h3>
                      <p className="text-sm sm:text-base text-white/80 mb-6">
                        Set your savings goals and earn competitive interest on your deposits. Flexible terms from 3 to 12 months.
                      </p>
                      <ul className="text-white/70 space-y-2 text-xs sm:text-sm mb-6">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Up to 15% ROI annually</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Flexible withdrawal</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Goal-based savings</li>
                      </ul>
                    </div>
                    <Button variant="default" className="w-full rounded-full bg-primary hover:bg-primary/90 font-bold py-5">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <Link to="/cooperative/land-banking" className="block h-full group">
                <div className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <img src={landBankingImg} alt="Land Banking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Land Banking</h3>
                      <p className="text-sm sm:text-base text-white/80 mb-6">
                        Buy and hold strategic land assets with us. Benefit from land appreciation and secure your future.
                      </p>
                      <ul className="text-white/70 space-y-2 text-xs sm:text-sm mb-6">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Buy & Hold strategy</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>High appreciation potential</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Professional management</li>
                      </ul>
                    </div>
                    <Button variant="default" className="w-full rounded-full bg-primary hover:bg-primary/90 font-bold py-5">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <Link to="/cooperative/land-banking?tab=agro" className="block h-full group">
                <div className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <img src={agroImg} alt="Adopt a Farm" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <TreePine className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Adopt a Farm</h3>
                      <p className="text-sm sm:text-base text-white/80 mb-6">
                        Sponsor farmlands for 5 years with guaranteed returns, then convert to future estate ownership.
                      </p>
                      <ul className="text-white/70 space-y-2 text-xs sm:text-sm mb-6">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>5-year farming income</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Estate conversion</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Dual ROI opportunity</li>
                      </ul>
                    </div>
                    <Button variant="default" className="w-full rounded-full bg-primary hover:bg-primary/90 font-bold py-5">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Start Growing Your Wealth Today
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our cooperative investment products and start your journey to financial freedom.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
