import { Star, ShieldCheck, Truck, History } from 'lucide-react';

const trustBadges = [
  { icon: <History className="text-saffron" size={24} />, text: "Est. 2005 | Trusted Dhaba" },
  { icon: <Star className="text-saffron" size={24} />, text: "4.1★ on Google (3,967+ reviews)" },
  { icon: <ShieldCheck className="text-saffron" size={24} />, text: "100% Vegetarian Punjabi" },
  { icon: <Truck className="text-saffron" size={24} />, text: "Dine-in | Takeaway | Delivery" },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-8 px-6 border-y border-cream/10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
        {trustBadges.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-3 group">
            <div className="p-2 rounded-full bg-cream/5 group-hover:bg-cream/10 transition-colors">
              {badge.icon}
            </div>
            <span className="text-cream font-bold text-sm md:text-base tracking-tight">
              {badge.text}
            </span>
            {idx !== trustBadges.length - 1 && (
              <div className="hidden lg:block h-8 w-[1px] bg-cream/20 ml-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
