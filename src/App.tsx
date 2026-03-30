import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import PellaHomes from "./pages/PellaHomes";
import EstateDetails from "./pages/EstateDetails";
import WealthTitans from "./pages/WealthTitans";
import Cooperative from "./pages/Cooperative";
import TargetSavings from "./pages/TargetSavings";
import LandBanking from "./pages/LandBanking";
import PropertyLandingPage from "./pages/PropertyLandingPage";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/homes" element={<PageTransition><PellaHomes /></PageTransition>} />
        <Route path="/estates/:estateId" element={<PageTransition><EstateDetails /></PageTransition>} />
        <Route path="/properties/:propertyId" element={<PageTransition><PropertyLandingPage /></PageTransition>} />
        <Route path="/wealth-titans" element={<PageTransition><WealthTitans /></PageTransition>} />
        <Route path="/cooperative" element={<PageTransition><Cooperative /></PageTransition>} />
        <Route path="/cooperative/target-savings" element={<PageTransition><TargetSavings /></PageTransition>} />
        <Route path="/cooperative/land-banking" element={<PageTransition><LandBanking /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
