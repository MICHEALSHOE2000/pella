import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Home, Building2, Wheat, Key, ArrowRight } from "lucide-react";
import ituraImg from "@/assets/estates/itura.jpg";
import halleluyahImg from "@/assets/estates/halleluyah.jpg";
import kingsFlavenImg from "@/assets/estates/kings-flaven.jpg";
import irorunImg from "@/assets/estates/irorun.jpg";
import pellaCourtImg from "@/assets/estates/pella-courts-1.jpg";
import courtRoyale2Img from "@/assets/estates/court-royale-2.jpg";
import esperanzaImg from "@/assets/estates/esperanza.jpg";
import vermon2Img from "@/assets/estates/vermon-2.jpg";
import goldenCitadelImg from "@/assets/estates/golden-citadel.jpg";
import prideFarmImg from "@/assets/estates/pride-farm.jpg";

const estates = [
  {
    id: "itura",
    name: "Itura Estate",
    image: ituraImg,
    location: "Odogunyan, Ikorodu, Lagos",
    description: "Experience city life and good proximity to industries. Own a plot of 100% dry land with instant physical allocation.",
    pricePerPlot: "₦700,000",
    category: "land"
  },
  {
    id: "halleluyah",
    name: "Halleluyah Estates",
    image: halleluyahImg,
    location: "Atan, Sango Ota, Ogun State",
    description: "Serene environment with excellent infrastructure and complete amenities",
    pricePerPlot: "₦2,800,000",
    category: "land"
  },
  {
    id: "kings-flaven",
    name: "Kings Flaven",
    image: kingsFlavenImg,
    location: "Premium Location, Lagos",
    description: "Exclusive estate with premium features designed for modern living",
    pricePerPlot: "₦4,000,000",
    category: "land"
  },
  {
    id: "irorun",
    name: "Irorun Estate",
    image: irorunImg,
    location: "Agbowa, Ikorodu, Lagos",
    description: "Affordable luxury residential plots in a developing area with great investment potential",
    pricePerPlot: "₦2,200,000",
    category: "land"
  },
  {
    id: "pella-court",
    name: "Pella's Court",
    image: pellaCourtImg,
    location: "Lekki Gardens, Abraham Adesanya, Ajah",
    description: "Pella's Court - Off-plan residential flats in a premium gated community with 24/7 power and modern facilities",
    pricePerPlot: "₦15,000,000",
    category: "off-plan"
  },
  {
    id: "court-royale-2",
    name: "Court Royale 2",
    image: courtRoyale2Img,
    location: "Owode, Ofada, Ogun State",
    description: "Premium estate offering the perfect blend of city convenience and suburban charm",
    pricePerPlot: "₦3,500,000",
    category: "land"
  },
  {
    id: "esperanza",
    name: "Esperanza Ville Estate",
    image: esperanzaImg,
    location: "Ilamija, Ibeju Lekki, Lagos",
    description: "Elegant estate designed for modern living in a peaceful environment",
    pricePerPlot: "₦2,900,000",
    category: "land"
  },
  {
    id: "vermon-2",
    name: "Vermon Estate 2",
    image: vermon2Img,
    location: "Ibeju Lekki, Lagos",
    description: "Modern estate with complete amenities and strategic location",
    pricePerPlot: "₦3,000,000",
    category: "land"
  },
  {
    id: "golden-citadel",
    name: "Golden Citadel",
    image: goldenCitadelImg,
    location: "Origanrigan, Ibeju Lekki, Lagos",
    description: "Ultra-luxury estate near Eleko Beach and Dangote Refinery. Embrace a lifestyle where luxury meets tranquility.",
    pricePerPlot: "₦4,500,000",
    category: "land"
  },
  {
    id: "pride-farm",
    name: "Pride Farm Estate",
    image: prideFarmImg,
    location: "Owode, Ofada, Ogun State",
    description: "Smart investment: Your land earns 18% every 13 months for 5 years while appreciating in value. You remain the legal owner.",
    pricePerPlot: "₦600,000",
    category: "farmlands"
  },
  {
    id: "adopt-a-farm",
    name: "Adopt a Farm",
    description: "Sponsor farmlands for 5 years with guaranteed returns. Earn 18% every 13 months while retaining land ownership.",
    category: "farmlands"
  }
];

const categories = [
  { id: "land", label: "Land", icon: MapPin, description: "Residential plots and estate lands" },
  { id: "off-plan", label: "Off Plan", icon: Building2, description: "Off-plan residential flats" },
  { id: "farmlands", label: "Farmlands", icon: Wheat, description: "Agricultural investment opportunities" }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "off-plan": return Building2;
    case "farmlands": return Wheat;
    default: return Home;
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "off-plan": return "Off Plan";
    case "farmlands": return "Farm Estate";
    default: return "Residential";
  }
};

interface Estate {
  id: string;
  name: string;
  image?: string;
  location?: string;
  description: string;
  pricePerPlot?: string;
  category: string;
}

const EstateCard = ({ estate, index }: { estate: Estate; index: number }) => {
  const Icon = getCategoryIcon(estate.category);

  return (
    <ScrollReveal variant="fadeUp" delay={index * 0.1}>
      <Link to={`/estates/${estate.id}`}>
        <Card className="glass-panel hover-lift cursor-pointer group h-full overflow-hidden flex flex-col">
          {estate.image && (
            <div className="relative h-56 w-full overflow-hidden shrink-0">
              <img
                src={estate.image}
                alt={estate.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <Badge
                className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider py-1.5 px-3 shadow-md"
                variant={estate.category === 'off-plan' ? "destructive" : "secondary"}
              >
                {getCategoryLabel(estate.category)}
              </Badge>
            </div>
          )}
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-2xl font-serif text-foreground">
                {estate.name}
              </CardTitle>
            </div>
            {estate.location && (
              <div className="flex items-center gap-2 text-foreground/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{estate.location}</span>
              </div>
            )}
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-foreground/70 mb-4 flex-grow">
              {estate.description}
            </p>
            {estate.pricePerPlot && (
              <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                <span className="text-sm text-foreground/60">
                  {estate.category === "off-plan" ? "Price" : "From"}
                </span>
                <span className="text-2xl font-bold text-primary">
                  {estate.pricePerPlot}
                </span>
              </div>
            )}
            {!estate.pricePerPlot && (
              <div className="pt-4 border-t border-border mt-auto text-primary font-semibold flex items-center gap-2">
                Learn More <Icon className="w-4 h-4 ml-1" />
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </ScrollReveal>
  );
};

const PellaHomes = () => {
  const [activeTab, setActiveTab] = useState("land");

  const bannerCategories = [
    {
      id: "land",
      title: "Estates",
      image: goldenCitadelImg,
      label: "Premium Lands",
      description: "Secure 100% dry land with instant allocation in choice locations."
    },
    {
      id: "farmlands",
      title: "Farmlands",
      image: prideFarmImg,
      label: "Agro Investment",
      description: "Earn 18% ROI while your land appreciates in value."
    },
    {
      id: "off-plan",
      title: "Houses",
      image: pellaCourtImg,
      label: "Modern Living",
      description: "Luxury off-plan apartments with 24/7 power and premium facilities."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-10 md:mb-16 px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gradient-blue mb-4">
                Pella Properties
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                Discover premium estates, agricultural investments, and modern homes across Nigeria.
              </p>
            </div>
          </ScrollReveal>

          {/* New Visual Banner Section */}
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4">
              {bannerCategories.map((cat, idx) => (
                <div
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative h-[300px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 ${activeTab === cat.id ? "ring-4 ring-primary ring-offset-4 ring-offset-background scale-[1.02]" : "hover:scale-[1.01]"
                    }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${activeTab === cat.id ? "opacity-90" : "opacity-70 group-hover:opacity-80"
                    }`} />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                    <Badge className="w-fit mb-3 sm:mb-4 bg-primary text-white border-none px-3 py-1 text-xs">
                      {cat.label}
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {cat.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/80 line-clamp-2 md:line-clamp-none mb-4 sm:mb-6 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-primary-foreground group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      Explore {cat.title} <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-pointer border border-transparent data-[state=active]:border-primary"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline font-semibold">{cat.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <ScrollReveal variant="fadeUp">
                  <p className="text-center text-foreground/60 mb-8">{cat.description}</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {estates
                    .filter((estate) => estate.category === cat.id)
                    .map((estate, index) => (
                      <EstateCard key={estate.id} estate={estate} index={index} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PellaHomes;