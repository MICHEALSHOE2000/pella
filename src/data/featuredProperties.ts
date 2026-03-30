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
  pageTitle?: string;
  coreDescription?: string;
  roiPoints?: string[];
  pricingLines?: string[];
  locationLines?: string[];
  positioningStatement?: string;
  benefits?: string[];
  leadFormTitle?: string;
  plotOptions?: string[];
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
    name: "Pride Farms",
    pageTitle: "Pride Farms",
    image: prideFarmImg,
    location: "Owode, Ofada – Ogun State",
    category: "farmlands",
    priceText: "₦700,000 per plot | ₦4,100,000 per acre",
    pricePerPlot: "₦700,000 per plot | ₦4,100,000 per acre",
    plotSize: "Per plot and acre options available",
    headline: "Own a Farm. Earn While You Sleep.",
    subtitle: "Invest in managed farmland at Pride Farms and earn 15% annual ROI while Pella Farms cultivates and manages your land for you.",
    description: "Pride Farm Estate gives investors the unique opportunity to own farmland while earning steady yearly returns through professionally managed agricultural operations.",
    coreDescription: "Pride Farm Estate gives investors the unique opportunity to own farmland while earning steady yearly returns through professionally managed agricultural operations. When an investor purchases a plot, Pella Farms manages and cultivates the land on their behalf, creating a productive, income-generating investment from the start.",
    roiPoints: [
      "Earn 15% Return on Investment annually",
      "Investment period: 5 years",
      "Receive yearly returns during the investment term",
      "At the end of 5 years, you retain full ownership and access to your farmland",
      "You may continue farming, develop the land, or hold it for long-term appreciation",
    ],
    pricingLines: ["₦700,000 per plot", "₦4,100,000 per acre"],
    locationLines: [
      "Owode, Ofada – Ogun State",
      "Along Mowe–Ofada Road",
      "Near Ofada Rice Market",
      "A short drive from Redemption Camp (RCCG)",
    ],
    positioningStatement: "With Pride Farms, you are not just buying land — you are building a sustainable income stream, a future asset, and a legacy investment.",
    benefits: [
      "Passive agricultural income",
      "Professionally managed farmland",
      "Strategic Ogun location",
      "Annual returns without daily farm stress",
      "Long-term asset appreciation",
      "Full ownership retained",
    ],
    leadFormTitle: "Start Your Pride Farms Investment Journey",
    keyFeatures: [
      { icon: DollarSign, title: "15% Annual ROI", description: "Earn yearly returns through managed operations" },
      { icon: Calendar, title: "5-Year Investment Term", description: "Structured timeline with annual payouts" },
      { icon: Shield, title: "Ownership Retained", description: "Keep full ownership at every stage" },
      { icon: Waves, title: "Managed Cultivation", description: "Pella Farms handles active farm operations" },
    ],
    whyChoose: [
      { icon: MapPin, title: "Strategic Location", description: "Owode/Ofada growth corridor" },
      { icon: DollarSign, title: "Passive Income", description: "Returns without daily farm stress" },
      { icon: Shield, title: "Professionally Managed", description: "Dedicated agricultural operations team" },
      { icon: Home, title: "Legacy Asset", description: "Long-term ownership and appreciation" },
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
    headline: "Own Land Near Lagos – Secure Your Future Today",
    subtitle: "Court Royale Estates offer affordable plots in fast-growing locations close to Lagos, making them ideal for home building, land banking, or future resale.",
    description: "Court Royale I gives you a strategic and affordable entry into land ownership close to Lagos with strong potential for future value growth.",
    keyFeatures: [
      { icon: MapPin, title: "Strategic location near Lagos", description: "Close to key commuting routes" },
      { icon: DollarSign, title: "Affordable entry", description: "Accessible pricing for new buyers" },
      { icon: Home, title: "Builder & investor friendly", description: "Great for homes and land banking" },
      { icon: Calendar, title: "Flexible ownership", description: "Options for different buyer goals" },
    ],
    whyChoose: [
      { icon: DollarSign, title: "Future appreciation", description: "High long-term upside" },
      { icon: Home, title: "Home builder ready", description: "Ideal for residential use" },
      { icon: Shield, title: "Verified documentation", description: "Secure buying process" },
      { icon: MapPin, title: "Close to Lagos", description: "Strategic growth corridor" },
    ],
    benefits: [
      "Strategic location near Lagos",
      "Affordable entry into real estate ownership",
      "Suitable for home builders and investors",
      "Strong future appreciation potential",
      "Flexible ownership opportunities",
    ],
    plotOptions: ["250sqm", "500sqm", "Multiple plots"],
    leadFormTitle: "Tell Us What You're Looking For",
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
    headline: "Own Land Near Lagos – Secure Your Future Today",
    subtitle: "Court Royale Estates offer affordable plots in fast-growing locations close to Lagos, making them ideal for home building, land banking, or future resale.",
    description: "Court Royale III offers a strategic path to land ownership with affordable pricing and strong long-term resale or development potential.",
    keyFeatures: [
      { icon: MapPin, title: "Strategic location near Lagos", description: "In a fast-growing corridor" },
      { icon: DollarSign, title: "Affordable entry", description: "Own land with budget-friendly options" },
      { icon: Home, title: "Builder & investor friendly", description: "Ideal for personal and investment goals" },
      { icon: Calendar, title: "Flexible ownership", description: "Buy based on your timeline and needs" },
    ],
    whyChoose: [
      { icon: DollarSign, title: "Future appreciation", description: "Strong long-term value growth" },
      { icon: FileCheck, title: "Clear documentation", description: "Secure and verified process" },
      { icon: MapPin, title: "Close to Lagos", description: "Ideal growth position" },
      { icon: Home, title: "Flexible ownership goals", description: "Build, bank, or resell" },
    ],
    benefits: [
      "Strategic location near Lagos",
      "Affordable entry into real estate ownership",
      "Suitable for home builders and investors",
      "Strong future appreciation potential",
      "Flexible ownership opportunities",
    ],
    plotOptions: ["250sqm", "500sqm", "Multiple plots"],
    leadFormTitle: "Tell Us What You're Looking For",
  },
};
