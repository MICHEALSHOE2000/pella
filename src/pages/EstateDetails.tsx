import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import BookInspectionDialog from "@/components/BookInspectionDialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Helper for conditional classes
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, Calendar, Waves, FileCheck, DollarSign, Clock, Home, MessageCircle, Phone, ArrowLeft } from "lucide-react";

// Import estate images
import ituraImg from "@/assets/estates/itura.jpg";
import halleluyahImg from "@/assets/estates/halleluyah.jpg";
import irorunImg from "@/assets/estates/irorun.jpg";
import courtRoyale1Img from "@/assets/estates/court-royale-1.jpg";
import courtRoyale2Img from "@/assets/estates/court-royale-2.jpg";
import esperanzaImg from "@/assets/estates/esperanza.jpg";
import vermon2Img from "@/assets/estates/vermon-2.jpg";
import goldenCitadelImg from "@/assets/estates/golden-citadel.jpg";
import prideFarmImg from "@/assets/estates/pride-farm.jpg";
import kingsHavenImg from "@/assets/estates/kings-flaven.jpg";

// Pella Courts gallery images
import pellaCourts1 from "@/assets/estates/pella-courts-1.jpg";
import pellaCourts2 from "@/assets/estates/pella-courts-2.jpg";
import pellaCourts3 from "@/assets/estates/pella-courts-3.jpg";
import pellaCourts4 from "@/assets/estates/pella-courts-4.jpg";
import pellaCourts2Bed from "@/assets/estates/pella-courts-2bed.jpg";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface DetailedEstate {
  name: string;
  image: string;
  location: string;
  headline: string;
  priceText: string;
  subtitle: string;
  description: string;
  pricePerPlot: string;
  plotSize?: string;
  type: string;
  keyFeatures: Feature[];
  whyChoose: Feature[];
  gallery?: string[];
  features?: string[];
}

const estateData: Record<string, DetailedEstate> = {
  "itura": {
    name: "Itura Estate",
    image: ituraImg,
    location: "Odogunyan, Ikorodu, Lagos",
    headline: "Own a Secure Plot at Itura Estate",
    priceText: "Starting at ₦2.0M (500sqm)",
    subtitle: "Flexible 3, 6 & 12-Month Payment Plans. Dry Table Land. Instant Allocation",
    description: "Experience city life and good proximity to industries at Itura. Own a plot of our 100% dry land. Itura has untapped potential, natural beauty, investment incentives, diverse opportunities, and a secured community.",
    pricePerPlot: "₦2,000,000",
    plotSize: "500sqm",
    type: "estate",
    keyFeatures: [
      { icon: Shield, title: "Secure Fenced Estate", description: "Perimeter fencing for security" },
      { icon: MapPin, title: "Instant Physical Allocation", description: "Get your plot immediately" },
      { icon: Calendar, title: "Flexible Payments", description: "Up to 12 Months" },
      { icon: Waves, title: "Dry Table Land", description: "No Water Issues" },
    ],
    whyChoose: [
      { icon: Shield, title: "Fenced & Secure", description: "Fully fenced estate" },
      { icon: MapPin, title: "Instant Physical Allocation", description: "Immediate allocation" },
      { icon: Waves, title: "Dry Land", description: "100% Table Land" },
      { icon: Home, title: "Good Road Accessibility", description: "Easy access" },
      { icon: DollarSign, title: "Dry Land", description: "100% Table Land" },
      { icon: Home, title: "Good Road Accessibility", description: "Modern interlocks" },
      { icon: Clock, title: "Flexible Payment Up", description: "Up to 12 months" },
      { icon: FileCheck, title: "Registered Survey & Deed", description: "Legal documentation" },
    ]
  },
  "halleluyah": {
    name: "Halleluyah Estates",
    image: halleluyahImg,
    location: "Atan, Sango Ota, Ogun State",
    headline: "Experience Serene Living at Halleluyah Estates",
    priceText: "Starting at ₦2.8M (500sqm)",
    subtitle: "Well-planned estate with excellent infrastructure in Ogun State's developing corridor",
    description: "Experience serene living in a well-planned estate with excellent infrastructure and peaceful environment in one of Ogun State's most developing areas.",
    pricePerPlot: "₦2,800,000",
    plotSize: "500sqm",
    type: "estate",
    keyFeatures: [
      { icon: Home, title: "Good Road Network", description: "Excellent accessibility" },
      { icon: Shield, title: "Gated Estate", description: "24/7 Security" },
      { icon: Waves, title: "Drainage System", description: "Proper water management" },
      { icon: MapPin, title: "Strategic Location", description: "Prime Sango Ota area" },
    ],
    whyChoose: [
      { icon: Shield, title: "Gated & Secured", description: "24/7 security" },
      { icon: Home, title: "Road Network", description: "Good accessibility" },
      { icon: Waves, title: "Drainage System", description: "Proper infrastructure" },
      { icon: MapPin, title: "Prime Location", description: "Sango Ota" },
      { icon: FileCheck, title: "Street Lights", description: "Well lit estate" },
      { icon: Shield, title: "Perimeter Fencing", description: "Fully secured" },
    ]
  },
  "kings-haven": {
    name: "King's Haven",
    image: kingsHavenImg,
    location: "Premium Location, Lagos",
    headline: "Exclusive Living at King's Haven",
    priceText: "Starting at ₦7.5M (700sqm)",
    subtitle: "Premium features designed for discerning property owners seeking luxury",
    description: "Exclusive estate with premium features designed for discerning property owners seeking luxury and comfort.",
    pricePerPlot: "₦7,500,000",
    plotSize: "700sqm",
    type: "estate",
    keyFeatures: [
      { icon: Home, title: "Premium Infrastructure", description: "World-class facilities" },
      { icon: Shield, title: "Gated & Secured", description: "Maximum security" },
      { icon: Home, title: "Recreation Center", description: "Leisure facilities" },
      { icon: DollarSign, title: "24/7 Power Supply", description: "Uninterrupted power" },
    ],
    whyChoose: [
      { icon: Shield, title: "Premium Security", description: "Top-tier safety" },
      { icon: Home, title: "Landscaped Gardens", description: "Beautiful scenery" },
      { icon: Home, title: "Recreation Center", description: "Modern amenities" },
      { icon: DollarSign, title: "24/7 Power", description: "Constant electricity" },
    ]
  },
  "irorun": {
    name: "Irorun Estate",
    image: irorunImg,
    location: "Agbowa, Ikorodu, Lagos",
    headline: "Affordable Luxury at Irorun Estate",
    priceText: "Starting at ₦2.2M (500sqm)",
    subtitle: "Investment opportunity in a rapidly developing area with high appreciation potential",
    description: "Affordable luxury residential plots in a rapidly developing area with great potential for appreciation. Strategic location with easy access to major roads.",
    pricePerPlot: "₦2,200,000",
    plotSize: "500sqm",
    type: "estate",
    keyFeatures: [
      { icon: Home, title: "Good Road Network", description: "Easy accessibility" },
      { icon: Shield, title: "24/7 Security", description: "Round-the-clock safety" },
      { icon: FileCheck, title: "Government Approved", description: "Legal documentation" },
      { icon: Waves, title: "Dry Land", description: "No flooding issues" },
    ],
    whyChoose: [
      { icon: Shield, title: "Secured Estate", description: "24/7 security" },
      { icon: Home, title: "Road Network", description: "Good access" },
      { icon: Waves, title: "Dry Land", description: "Table land" },
      { icon: FileCheck, title: "Legal Docs", description: "Government approved" },
    ]
  },
  "pella-court": {
    name: "Pella's Court",
    image: pellaCourts1,
    galleryImages: [pellaCourts1, pellaCourts2, pellaCourts3, pellaCourts4, pellaCourts2Bed],
    galleryLabels: ["Exterior View 1", "Parking Area", "Exterior View 2", "Exterior View 3", "2 Bedroom Interior"],
    location: "Lekki Gardens, Abraham Adesanya, Ajah",
    headline: "Premium Off-Plan Living at Pella's Court",
    priceText: "From ₦15M - ₦25M (1-2 Bedroom)",
    subtitle: "Exclusive gated community with 24/7 power, free Wi-Fi, and modern facilities",
    description: "Pella's Court offers tranquil off-plan homes in one of Lagos' most pristine neighborhoods. Exclusive gated community with outstanding facilities including playground, modern car parking, 24/7 power supply, and free Wi-Fi for residents.",
    pricePerPlot: "₦15,000,000 - ₦25,000,000",
    plotSize: "1-2 Bedroom",
    type: "flat",
    keyFeatures: [
      { icon: Home, title: "Modern Off-Plan Flats", description: "Secure your unit now" },
      { icon: DollarSign, title: "24/7 Power Supply", description: "Uninterrupted electricity" },
      { icon: Home, title: "Free Wi-Fi", description: "Internet included" },
      { icon: Shield, title: "Gated Community", description: "Premium security" },
    ],
    whyChoose: [
      { icon: Home, title: "Modern Design", description: "Contemporary finish" },
      { icon: DollarSign, title: "24/7 Power", description: "Constant electricity" },
      { icon: Home, title: "Free Wi-Fi", description: "Internet access" },
      { icon: Shield, title: "Playground", description: "Family facilities" },
      { icon: Home, title: "Car Parking", description: "Modern parking" },
      { icon: MapPin, title: "Prime Location", description: "Ajah, Lagos" },
    ]
  },
  "court-royale-2": {
    name: "Court Royale 2",
    image: courtRoyale2Img,
    location: "Owode, Ofada, Ogun State",
    headline: "Serene & Sophisticated Living",
    priceText: "Starting at ₦3.5M (600sqm)",
    subtitle: "Perfect blend of city convenience and suburban charm in Ogun State",
    description: "Imagine a serene and sophisticated lifestyle just a heartbeat away from the bustling city. Court Royale Estate offers the perfect blend of city convenience and suburban charm, making it ideal for both residential and investment purposes.",
    pricePerPlot: "₦3,500,000",
    plotSize: "600sqm",
    type: "estate",
    keyFeatures: [
      { icon: MapPin, title: "Strategic Location", description: "Near major hubs" },
      { icon: Home, title: "Complete Infrastructure", description: "Fully developed" },
      { icon: Home, title: "Road Network", description: "Good accessibility" },
      { icon: Shield, title: "24/7 Security", description: "Round-the-clock safety" },
    ],
    whyChoose: [
      { icon: Shield, title: "Perimeter Fencing", description: "Secured estate" },
      { icon: Home, title: "Road Network", description: "Easy access" },
      { icon: FileCheck, title: "Government Approved", description: "Legal backing" },
      { icon: MapPin, title: "Strategic Location", description: "Near industrial hubs" },
    ]
  },
  "esperanza": {
    name: "Esperanza Ville Estate",
    image: esperanzaImg,
    location: "Ilamija, Ibeju Lekki, Lagos",
    headline: "Elegant Modern Living at Esperanza",
    priceText: "Starting at ₦2.9M (500sqm)",
    subtitle: "Peaceful environment in Ibeju Lekki's development corridor",
    description: "An elegant estate designed for modern living in a peaceful and serene environment. Located in the rapidly developing Ibeju Lekki corridor with excellent growth potential.",
    pricePerPlot: "₦2,900,000",
    plotSize: "500sqm",
    type: "estate",
    keyFeatures: [
      { icon: Home, title: "Tarred Roads", description: "Quality road network" },
      { icon: Shield, title: "24/7 Security", description: "Constant protection" },
      { icon: DollarSign, title: "Electricity Supply", description: "Power infrastructure" },
      { icon: Waves, title: "Water Infrastructure", description: "Clean water supply" },
    ],
    whyChoose: [
      { icon: Home, title: "Tarred Roads", description: "Quality roads" },
      { icon: Shield, title: "Security", description: "24/7 protection" },
      { icon: Waves, title: "Water", description: "Reliable supply" },
      { icon: Home, title: "Modern Layout", description: "Contemporary design" },
    ]
  },
  "vermon-2": {
    name: "Vermon Estate 2",
    image: vermon2Img,
    location: "Ibeju Lekki, Lagos",
    headline: "Strategic Investment in Lekki",
    priceText: "Starting at ₦3.0M (650sqm)",
    subtitle: "Modern estate in Ibeju Lekki's prime development corridor",
    description: "Modern estate with complete amenities and strategic location in the heart of Ibeju Lekki's development corridor.",
    pricePerPlot: "₦3,000,000",
    plotSize: "650sqm",
    type: "estate",
    keyFeatures: [
      { icon: Home, title: "Excellent Road Access", description: "Easy connectivity" },
      { icon: Shield, title: "Security Infrastructure", description: "Protected estate" },
      { icon: DollarSign, title: "Power Supply", description: "Electricity available" },
      { icon: Home, title: "Recreational Facilities", description: "Leisure amenities" },
    ],
    whyChoose: [
      { icon: Home, title: "Road Access", description: "Excellent connectivity" },
      { icon: Shield, title: "Security", description: "Safe environment" },
      { icon: Home, title: "Green Spaces", description: "Natural environment" },
      { icon: MapPin, title: "Prime Lekki", description: "Strategic location" },
    ]
  },
  "golden-citadel": {
    name: "Golden Citadel",
    image: goldenCitadelImg,
    location: "Origanrigan, Ibeju Lekki, Lagos",
    headline: "Luxury Meets Tranquility",
    priceText: "Starting at ₦4.5M (800sqm)",
    subtitle: "Premium estate near Eleko Beach, Dangote Refinery, and major landmarks",
    description: "Welcome to Golden Citadel, where luxury meets tranquility. Located near Eleko Beach, Dangote Refinery, Dangote Fertilizer, La Campagne Tropicana, and Pan Atlantic University. Enjoy effortless connectivity via both land and waterways.",
    pricePerPlot: "₦4,500,000",
    plotSize: "800sqm",
    type: "estate",
    keyFeatures: [
      { icon: MapPin, title: "Prime Waterfront Access", description: "Near beach & waterways" },
      { icon: MapPin, title: "Near Major Landmarks", description: "Dangote Refinery, etc." },
      { icon: Shield, title: "Premium Security", description: "Top-tier safety" },
      { icon: Home, title: "Excellent Road Network", description: "Easy access" },
    ],
    whyChoose: [
      { icon: MapPin, title: "Waterfront Access", description: "Beach proximity" },
      { icon: Shield, title: "Premium Security", description: "Advanced systems" },
      { icon: DollarSign, title: "High ROI Potential", description: "Great investment" },
      { icon: FileCheck, title: "Government Excision", description: "Legal title" },
    ]
  },
  "pride-farm": {
    name: "Pride Farms Estate",
    image: prideFarmImg,
    location: "Owode, Ofada, Ogun State",
    headline: "Your Land Works for You",
    priceText: "Starting at ₦600,000 (600sqm)",
    subtitle: "Earn 18% every 13 months for 5 years. By Year 5, earn up to 100% of your land cost back!",
    description: "This is a future residential estate, but while the environment is developing, your land doesn't sit idle—it works for you. Pella Farms rents the land from you, you earn 18% every 13 months for 5 years. Your land continues to appreciate in value and you remain the legal owner. Located within the same neighbourhood as Redemption Camp, Shagamu Interchange, International Breweries, Nestlé Foods PLC, Olam Petroleum, and Ogun State House.",
    pricePerPlot: "₦600,000",
    plotSize: "600sqm (1 Plot) | 1 Acre: ₦3,500,000",
    type: "farm",
    keyFeatures: [
      { icon: DollarSign, title: "18% Returns Every 13 Months", description: "Earn while land appreciates" },
      { icon: Calendar, title: "5-Year Income Period", description: "Up to 100% ROI by Year 5" },
      { icon: Shield, title: "You Remain Legal Owner", description: "Full ownership retained" },
      { icon: Home, title: "Future Residential Estate", description: "Converts to built estate" },
    ],
    whyChoose: [
      { icon: Shield, title: "100% Secure Land", description: "Verified & secure" },
      { icon: DollarSign, title: "Renewable Energy", description: "Estate powered by green energy" },
      { icon: Waves, title: "Dry Elevated Land", description: "No flooding issues" },
      { icon: Home, title: "Major Road Access", description: "Easy accessibility" },
      { icon: MapPin, title: "Prime Location", description: "Near major Lagos-Ogun landmarks" },
      { icon: FileCheck, title: "Legal Documentation", description: "Proper paperwork" },
    ]
  },
  "adopt-a-farm": {
    name: "Adopt a Farm Program",
    headline: "Sponsor A Farm, Grow Your Wealth",
    subtitle: "Earn 18% every 13 months for 5 years with our agricultural investment program",
    description: "The Adopt a Farm program allows you to sponsor farmlands for 5 years. While the environment develops, your land works for you. Pella Farms rents the land from you, and you earn 18% every 13 months for 5 years. Your land continues to appreciate in value, and you remain the legal owner throughout the period.",
    type: "farm",
    keyFeatures: [
      { icon: DollarSign, title: "18% Returns Every 13 Months", description: "Guaranteed rental income" },
      { icon: Calendar, title: "5-Year Program", description: "Long-term passive income" },
      { icon: Shield, title: "retain Land Ownership", description: "Your asset appreciates" },
      { icon: Home, title: "Future Estate", description: "Converts to residential" },
    ],
    whyChoose: [
      { icon: DollarSign, title: "Passive Income", description: "Earn without working" },
      { icon: Shield, title: "Secured Asset", description: "Land is yours" },
      { icon: MapPin, title: "Strategic Location", description: "Ogun State hub" },
      { icon: FileCheck, title: "Legal Backing", description: "Contract & Deeds" },
      { icon: Waves, title: "Dry Land", description: "Good topography" },
      { icon: Home, title: "Double ROI", description: "Rent + Appreciation" },
    ]
  }
};

const EstateDetails = () => {
  const { estateId } = useParams();
  const estate = estateData[estateId || ""];

  if (!estate) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Estate Not Found</h1>
          <Link to="/homes">
            <Button variant="outline">Back to Estates</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleChatWithSales = () => {
    window.open(`https://wa.me/2349055777795?text=I'm interested in ${estate.name}`, '_blank');
  };

  const scrollToPaymentPlans = () => {
    const paymentSection = document.getElementById('payment-plans');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <Link to="/homes">
        <Button
          variant="ghost"
          className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 bg-background/90 backdrop-blur-sm hover:bg-background text-foreground shadow-md px-3 sm:px-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="text-xs sm:text-sm">Back to Estates</span>
        </Button>
      </Link>

      {/* Hero Section with Background Image */}
      <section
        className={cn(
          "relative pt-24 pb-32 min-h-[600px] flex items-center bg-primary/95",
          estate.image && "bg-cover bg-center"
        )}
        style={estate.image ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${estate.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-background/90 text-foreground border-primary/30 mb-4">
              {estate.type === "flat" ? "Off-Plan Flat" : estate.type === "farm" ? "Farm Estate" : "Residential Estate"}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {estate.headline} {estate.priceText ? `– ${estate.priceText}` : ''}
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {estate.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <BookInspectionDialog
                defaultEstate={estate.name}
                trigger={
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8"
                  >
                    Book Free Inspection
                  </Button>
                }
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={scrollToPaymentPlans}
              >
                <Phone className="w-4 h-4 mr-2" />
                View Payment Plan
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <Button
          onClick={handleChatWithSales}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg px-4 py-4 sm:px-6 sm:py-6 h-auto"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 sm:mr-2" />
          <span className="hidden sm:inline">Chat with Sales</span>
        </Button>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {estate.keyFeatures.map((feature: Feature, index: number) => (
              <Card key={index} className="glass-panel text-center">
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
        </div>
      </section>

      {/* Gallery Section - Only for estates with gallery images */}
      {estate.galleryImages && estate.galleryImages.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {estate.galleryImages.map((img: string, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={img}
                    alt={estate.galleryLabels?.[index] || `${estate.name} Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-medium p-4">
                      {estate.galleryLabels?.[index] || `View ${index + 1}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      <section id="payment-plans" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            WHY CHOOSE {estate.name.toUpperCase()}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {estate.whyChoose.map((item: Feature, index: number) => (
              <Card key={index} className="glass-panel text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">About {estate.name}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">{estate.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {estate.pricePerPlot && (
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">
                        {estate.type === "flat" ? "Price Range" : "Price per Plot"}
                      </p>
                      <p className="text-2xl font-bold text-primary">{estate.pricePerPlot}</p>
                    </div>
                  )}
                  {estate.plotSize && (
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">
                        {estate.type === "flat" ? "Unit Type" : "Plot Size"}
                      </p>
                      <p className="text-xl font-semibold text-foreground">{estate.plotSize}</p>
                    </div>
                  )}
                </div>

                {estate.location && (
                  <div className="flex items-center gap-2 text-foreground/60 mb-6">
                    <MapPin className="w-5 h-5" />
                    <span>{estate.location}</span>
                  </div>
                )}

                <div className="flex gap-4">
                  <BookInspectionDialog
                    defaultEstate={estate.name}
                    trigger={
                      <Button
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Book Inspection Now
                      </Button>
                    }
                  />
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleChatWithSales}
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EstateDetails;
