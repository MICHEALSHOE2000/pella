import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DivisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  image?: string;
}

const DivisionCard = ({ icon: Icon, title, description, link, image }: DivisionCardProps) => {
  return (
    <Link to={link}>
      <div className={`group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-full transition-all duration-500 ${!image ? 'glass-panel p-8' : 'min-h-[320px] shadow-xl'}`}>
        {image && (
          <>
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-80 transition-opacity" />
          </>
        )}

        <div className={`relative z-10 h-full flex flex-col ${image ? 'p-8 justify-end text-white' : 'items-center'}`}>
          <div className={`mb-6 flex justify-center ${image ? 'w-fit' : ''}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${image
              ? "bg-primary/20 backdrop-blur-md border border-white/20"
              : "bg-gradient-to-br from-primary to-pella-maroon blue-glow"
              }`}>
              <Icon className={`w-8 h-8 ${image ? 'text-white' : 'text-primary-foreground'}`} />
            </div>
          </div>

          <h3 className={`text-2xl font-serif font-bold mb-4 ${image ? 'text-white' : 'text-primary text-center'}`}>
            {title}
          </h3>

          <p className={`${image ? 'text-white/80' : 'text-foreground/70 text-center'} leading-relaxed`}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DivisionCard;
