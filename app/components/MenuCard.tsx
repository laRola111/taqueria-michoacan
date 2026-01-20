import { Beef, UtensilsCrossed, Flame } from "lucide-react";

interface MenuCardProps {
  category: "Carnitas" | "Tacos" | "Carne Asada";
  description: string;
}

export default function MenuCard({ category, description }: MenuCardProps) {
  const getIcon = () => {
    switch (category) {
      case "Carnitas":
        return <Flame className="w-12 h-12 text-brand-gold mb-4" />;
      case "Tacos":
        return <UtensilsCrossed className="w-12 h-12 text-brand-gold mb-4" />;
      case "Carne Asada":
        return <Beef className="w-12 h-12 text-brand-gold mb-4" />;
      default:
        return <UtensilsCrossed className="w-12 h-12 text-brand-gold mb-4" />;
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-red/50 transition-colors duration-300 group">
      <div className="bg-neutral-800/50 p-6 rounded-full mb-4 group-hover:bg-brand-red/10 transition-colors duration-300">
        {getIcon()}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide">
        {category}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="text-brand-gold font-bold text-lg">$0.00</div>
    </div>
  );
}
