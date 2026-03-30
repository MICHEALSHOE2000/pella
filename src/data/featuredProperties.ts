import { Home, Shield, MapPin, DollarSign, Calendar, Waves, FileCheck, type LucideIcon } from "lucide-react";
import pellaCourts1 from "@/assets/estates/pella-courts-1.jpg";
import pellaCourts2 from "@/assets/estates/pella-courts-2.jpg";
import pellaCourts3 from "@/assets/estates/pella-courts-3.jpg";
import pellaCourts4 from "@/assets/estates/pella-courts-4.jpg";
import pellaCourts2Bed from "@/assets/estates/pella-courts-2bed.jpg";
import prideFarmImg from "@/assets/estates/pride-farm.jpg";
import courtRoyale1Img from "@/assets/estates/court-royale-1.jpg";
import courtRoyale2Img from "@/assets/estates/court-royale-2.jpg";

export interface PropertyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturedProperty {
  id: string;
  name: string;
  image: string;
  gallery?: string[];
  location: string;
  category: "off-plan" | "farmlands" | "land";
  priceText: string;
  pricePerPlot: string;
  plotSize: string;
  headline: string;
  subtitle: string;
  description: string;
  keyFeatures: PropertyFeature[];
  whyChoose: PropertyFeature[];
}

export const featuredProperties: Record<string, FeaturedProperty> = {
  "pella-court": {
    id: "pella-court",
    name: "Pella's Court",
    image: pellaCourts1,
    gallery: [pellaCourts1, pellaCourts2, pellaCourts3, pellaCourts4, pellaCourts2Bed],
    location: "Lekki Gardens, Abraham Adesanya, Ajah",
    category: "off-plan",
    priceText: "From ₦15M - ₦25M (1-2 Bedroom)",
    pricePerPlot: "₦15,000,000 - ₦25,000,000",
    plotSize: "1-2 Bedroom",
    headline: "Premium Off-Plan Living at Pella's Court",
    subtitle: "Exclusive gated community with 24/7 power, free Wi-Fi, and modern facilities.",
    description: "Pella's Court offers tranquil off-plan homes in one of Lagos' most pristine neighborhoods with premium amenities and secure living.",
    keyFeatures: [
      { icon: Home, title: "Modern Off-Plan Flats", description: "Secure your preferred unit early" },
      { icon: DollarSign, title: "24/7 Power Supply", description: "Reliable electricity coverage" },
      { icon: Shield, title: "Gated Community", description: "Dedicated security and controlled access" },
      { icon: Home, title: "Family Facilities", description: "Playground, parking, and shared spaces" },
    ],
    whyChoose: [
      { icon: MapPin, title: "Prime Ajah Address", description: "Well-connected Lekki axis" },
      { icon: DollarSign, title: "Strong Rental Demand", description: "Attractive off-plan investment potential" },
      { icon: Shield, title: "Secure Estate", description: "Peace of mind for residents" },
      { icon: Home, title: "Modern Finishing", description: "Contemporary design language" },
    ],
  },
  "pride-farms": {
    id: "pride-farms",
    name: "Pride Farms Estate",
    image: prideFarmImg,
    location: "Owode, Ofada, Ogun State",
    category: "farmlands",
    priceText: "Starting at ₦600,000 (600sqm)",
    pricePerPlot: "₦600,000 (600sqm) | 1 Acre: ₦3,500,000",
    plotSize: "600sqm (1 Plot) | 1 Acre",
    headline: "Pride Farms: Your Land Works for You",
    subtitle: "Earn 18% every 13 months for 5 years while your land appreciates.",
    description: "A future residential estate with an agricultural income model where your land remains legally yours while generating returns.",
    keyFeatures: [
      { icon: DollarSign, title: "18% Returns", description: "Earn every 13 months for 5 years" },
      { icon: Calendar, title: "5-Year Income Window", description: "Structured passive-income timeline" },
      { icon: Shield, title: "Retained Ownership", description: "You keep legal ownership throughout" },
      { icon: Waves, title: "Dry Elevated Land", description: "Topography suited for future development" },
    ],
    whyChoose: [
      { icon: MapPin, title: "Strategic Corridor", description: "Owode/Ofada growth zone" },
      { icon: DollarSign, title: "Dual Upside", description: "Income + land appreciation" },
      { icon: Shield, title: "Verified Documentation", description: "Secure transaction process" },
      { icon: Home, title: "Future Residential Potential", description: "Positioned for long-term value" },
    ],
  },
  "court-royale-1": {
    id: "court-royale-1",
    name: "Court Royale I",
    image: courtRoyale1Img,
    location: "Mowe Axis, Ogun State",
    category: "land",
    priceText: "Starting at ₦3,000,000 (600sqm)",
    pricePerPlot: "₦3,000,000",
    plotSize: "600sqm",
    headline: "Court Royale I: Build in a Fast-Growing Axis",
    subtitle: "A smart land-banking location with easy access to major Ogun-Lagos connectors.",
    description: "Court Royale I combines affordability, road access, and strong appreciation potential for homeowners and investors.",
    keyFeatures: [
      { icon: Home, title: "Planned Estate Layout", description: "Residential-focused parceling" },
      { icon: Shield, title: "Secured Environment", description: "Perimeter and access control plan" },
      { icon: MapPin, title: "Strategic Location", description: "Close to major commuting routes" },
      { icon: Calendar, title: "Flexible Payment", description: "Structured payment options" },
    ],
    whyChoose: [
      { icon: DollarSign, title: "Growth Potential", description: "Emerging neighborhood upside" },
      { icon: Home, title: "Residential Appeal", description: "Suitable for home development" },
      { icon: Shield, title: "Documented Purchase", description: "Clear title processing" },
      { icon: MapPin, title: "Access to Amenities", description: "Near established communities" },
    ],
  },
  "court-royale-3": {
    id: "court-royale-3",
    name: "Court Royale III",
    image: courtRoyale2Img,
    location: "Owode, Ofada, Ogun State",
    category: "land",
    priceText: "Starting at ₦3,500,000 (600sqm)",
    pricePerPlot: "₦3,500,000",
    plotSize: "600sqm",
    headline: "Court Royale III: Premium Value in Ofada",
    subtitle: "Balanced for residential use and strategic investment in a developing corridor.",
    description: "Court Royale III delivers a well-positioned estate option for buyers looking for accessibility, pricing value, and appreciation prospects.",
    keyFeatures: [
      { icon: MapPin, title: "Ofada Growth Node", description: "Located in an expanding residential axis" },
      { icon: Home, title: "Estate Infrastructure Plan", description: "Road and utility provision roadmap" },
      { icon: Shield, title: "Security Focus", description: "Controlled entry and estate safety" },
      { icon: DollarSign, title: "Competitive Entry Price", description: "Accessible pricing for 600sqm" },
    ],
    whyChoose: [
      { icon: Calendar, title: "Flexible Payment Plans", description: "Buyer-friendly payment structure" },
      { icon: FileCheck, title: "Proper Documentation", description: "Clear legal process" },
      { icon: MapPin, title: "Connectivity", description: "Convenient access to Ogun-Lagos routes" },
      { icon: DollarSign, title: "Investment Confidence", description: "Aligned with long-term market trend" },
    ],
  },
};
