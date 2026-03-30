import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import LeadFormSection from "@/components/LeadFormSection";
import { featuredProperties } from "@/data/featuredProperties";

const PropertyLandingPage = () => {
  const { propertyId } = useParams();
  const property = propertyId ? featuredProperties[propertyId] : undefined;

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/homes">
            <Button variant="outline">Back to Estates</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isPrideFarms = property.id === "pride-farms";
  const isCourtRoyale = property.id === "court-royale-1" || property.id === "court-royale-3";
  const typeLabel = property.category === "off-plan" ? "Off-Plan" : property.category === "farmlands" ? "Farm Estate" : "Residential Estate";

  const contactSales = (message = `I'm interested in ${property.name}`) => {
    window.open(`https://wa.me/2349055777795?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Link to="/homes">
        <Button
          variant="ghost"
          className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 bg-background/90 backdrop-blur-sm hover:bg-background text-foreground shadow-md px-3 sm:px-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="text-xs sm:text-sm">Back to Estates</span>
        </Button>
      </Link>

      <section
        className="relative pt-24 pb-28 min-h-[560px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${property.image})`,
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-background/90 text-foreground border-primary/30 mb-4">{typeLabel}</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {property.headline}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{property.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => contactSales(`Book inspection for ${property.name}`)}>
                <Phone className="w-4 h-4 mr-2" />
                Book Inspection
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => contactSales(`Get price details for ${property.name}`)}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Price Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{property.pageTitle || property.name}</h2>
            <p className="text-foreground/80 leading-relaxed">{property.coreDescription || property.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {property.keyFeatures.map((feature) => (
              <Card key={feature.title} className="glass-panel text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {property.roiPoints && (
            <div className="max-w-4xl mx-auto mb-10">
              <Card className="glass-panel">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Invest</h3>
                  <ul className="space-y-3">
                    {property.roiPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pricing & Location</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Pricing</p>
                    {property.pricingLines ? property.pricingLines.map((line) => (
                      <p key={line} className="text-xl font-bold text-primary">{line}</p>
                    )) : <p className="text-2xl font-bold text-primary">{property.pricePerPlot}</p>}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Size / Type</p>
                    <p className="text-xl font-semibold text-foreground">{property.plotSize}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-foreground/70 mb-6">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    {(property.locationLines || [property.location]).map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                {property.benefits && (
                  <>
                    <h4 className="text-xl font-bold mb-3">Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {property.benefits.map((benefit) => (
                        <p key={benefit} className="text-foreground/80 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {benefit}
                        </p>
                      ))}
                    </div>
                  </>
                )}

                {property.positioningStatement && (
                  <p className="text-foreground/80 italic border-l-2 border-primary pl-4">{property.positioningStatement}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {property.plotOptions && (
            <div className="max-w-4xl mx-auto mt-10">
              <Card className="glass-panel">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Plot Options</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {property.plotOptions.map((option) => (
                      <div key={option} className="rounded-lg border border-border p-4 text-center font-semibold">{option}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </section>

      <LeadFormSection
        estateName={property.name}
        title={property.leadFormTitle}
        description="Fill in your details and our investment team will guide you on the best entry plan."
        mode={isPrideFarms ? "investment" : isCourtRoyale ? "court-royale" : "default"}
      />

      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Secure Your Plot</h3>
            <p className="text-foreground/70 mb-6">Ready to move forward? Get clarity on pricing, returns, and allocation today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => contactSales(`Book inspection for ${property.name}`)}>Book Inspection</Button>
              <Button variant="outline" onClick={() => contactSales(`Chat on WhatsApp about ${property.name}`)}>Chat on WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyLandingPage;
