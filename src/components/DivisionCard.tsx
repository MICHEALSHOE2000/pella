import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DivisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const DivisionCard = ({ icon: Icon, title, description, link }: DivisionCardProps) => {
  return (
    <Link to={link}>
      <div className="group glass-panel p-8 rounded-2xl hover-lift cursor-pointer">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-pella-maroon flex items-center justify-center blue-glow group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-center">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default DivisionCard;
