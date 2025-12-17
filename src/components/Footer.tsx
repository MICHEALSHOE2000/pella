import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-matte-black border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-6">
              Contact
            </h3>
            <div className="space-y-4 text-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground/90">Head Office</p>
                  <p>Suite 4, Scapular Plaza,<br />Igbo Efon, Lekki, Lagos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground/90">Branches</p>
                  <p>Mushin, Ikorodu, Lagos Island</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p>+234 905 577 7795</p>
                  <p>+234 817 540 1814</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p>info@pellagroup.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/homes" className="hover:text-primary transition-colors">
                  Pella Homes & Properties
                </Link>
              </li>
              <li>
                <Link to="/wealth-titans" className="hover:text-primary transition-colors">
                  Wealth Titans
                </Link>
              </li>
              <li>
                <Link to="/cooperative" className="hover:text-primary transition-colors">
                  Cooperative
                </Link>
              </li>
              <li>
                <a 
                  href="https://pellaglobalservicesltd.ng/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Pella Global
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-6">
              Social Media
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pella__group?igsh=aWV1dmxpNXZpOTgw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 blue-glow"
                aria-label="Instagram"
              >
                <span className="text-foreground text-lg">📷</span>
              </a>
              <a
                href="https://x.com/pella_group?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 blue-glow"
                aria-label="X (Twitter)"
              >
                <span className="text-foreground">𝕏</span>
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-6">
              Get in Touch
            </h3>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              onClick={() => window.open('https://wa.me/2349055777795', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-foreground/60">
          <p>© 2025 Pella Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
