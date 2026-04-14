import { Star } from 'lucide-react';

const reviews = [
  { name: "Samrat Chattopadhyay", city: "Local Guide", text: "BEST Punjabi Restaurant (Vegetarian) in Ludhiana. Delighted with their food and service. Tried authentic punjabi foods like Dal Makhani, Shahi Paneer Butter Masala and Laccha Paratha." },
  { name: "Ashok Sharma", city: "Local Guide", text: "They have very SMALL Menu but you don't need anything other than Dal (Mouth Watering) is very Very tasty 😋 Dal is prepared with choicest masalas." },
  { name: "Ritesh Saraf", city: "Local Guide", text: "A short menu but Prompt Service of Quality food affordable price. Nice place good food home feeling staff and services." },
  { name: "Google User", city: "Ludhiana", text: "Seating arrangement & ambience may need a makeover considering the crowd, but the food quality is top-notch." },
  { name: "Foodie Explorer", city: "Punjab", text: "Authentic Punjabi flavors. The Dal Fry and Lachha Paratha are must-haves for anyone visiting Ludhiana." },
  { name: "Vegetarian Delight", city: "Ludhiana", text: "The best place for pure vegetarian Punjabi food. Simple, clean, and delicious." },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4">
          What Our Guests Say
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="marquee-track py-10">
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx}
              className="w-[350px] mx-4 bg-cream/30 p-8 rounded-3xl border border-charcoal/5 flex flex-col gap-4 shrink-0 shadow-sm"
            >
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="fill-saffron text-saffron" />
                ))}
              </div>
              <p className="text-charcoal/80 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-charcoal/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest">{review.city}</p>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                  alt="Google" 
                  className="h-4 opacity-30"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center px-6">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 bg-white border-2 border-charcoal/10 hover:border-saffron px-10 py-4 rounded-full font-bold text-charcoal transition-all shadow-lg shadow-charcoal/5"
        >
          Read All 500+ Reviews on Google →
        </a>
      </div>
    </section>
  );
}
