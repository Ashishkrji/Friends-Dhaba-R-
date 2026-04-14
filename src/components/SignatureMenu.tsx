import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const dishes = [
  {
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils with cream and butter. A mouth-watering legend.",
    price: "280",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dal Fry",
    desc: "Authentic Punjabi yellow dal tempered with aromatic spices.",
    price: "220",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Lachha Paratha",
    desc: "Multi-layered whole wheat bread, crispy and buttery.",
    price: "60",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Shahi Paneer",
    desc: "Cottage cheese in a rich, creamy tomato and butter gravy.",
    price: "320",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Kheer",
    desc: "Traditional Indian rice pudding with nuts and saffron.",
    price: "120",
    image: "https://images.unsplash.com/photo-1571006682881-9f2066228385?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Korma",
    desc: "Rich and creamy vegetable korma with authentic Punjabi spices.",
    price: "340",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  }
];

export default function SignatureMenu() {
  return (
    <section id="menu" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4 relative inline-block">
            Our Signatures
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-saffron rounded-full" />
          </h2>
          <p className="text-lg text-charcoal/70 mt-6 max-w-xl mx-auto">
            Dishes that have made Friends Dhaba a legend since day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-charcoal/5 border border-charcoal/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-2xl font-bold">{dish.name}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-charcoal">{dish.name}</h3>
                  <span className="text-saffron font-black text-xl">₹{dish.price}</span>
                </div>
                <p className="text-charcoal/60 text-sm mb-6 line-clamp-2">
                  {dish.desc}
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-cream border-2 border-charcoal/10 hover:border-saffron hover:bg-saffron hover:text-white py-3 rounded-xl font-bold transition-all">
                  <Plus size={20} /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-saffron text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-charcoal transition-all shadow-lg shadow-saffron/20">
            See Full Menu →
          </button>
        </div>
      </div>
    </section>
  );
}
