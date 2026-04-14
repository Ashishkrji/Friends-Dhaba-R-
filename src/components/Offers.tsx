import { motion } from 'motion/react';

const offers = [
  {
    title: "Happy Hours",
    desc: "Mon–Fri 3–6pm, 20% off all starters and beverages.",
    code: "HAPPY20"
  },
  {
    title: "Family Feast",
    desc: "Book for 6 or more guests, get a free round of Lassi on us!",
    code: "FAMILYFREE"
  },
  {
    title: "First Order Deal",
    desc: "First time ordering delivery? Use code for 10% off.",
    code: "FRIEND10"
  }
];

export default function Offers() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] border-2 border-dashed border-saffron/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-saffron text-white px-4 py-1 rounded-bl-2xl font-bold text-xs tracking-widest uppercase">
                Offer
              </div>
              <h3 className="text-2xl font-black text-charcoal mb-4">{offer.title}</h3>
              <p className="text-charcoal/60 mb-8 leading-relaxed">
                {offer.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-mono text-saffron font-bold text-sm bg-saffron/5 px-3 py-1 rounded-lg">
                  {offer.code}
                </span>
                <button className="text-charcoal font-black text-sm group-hover:text-saffron transition-colors">
                  Claim Offer →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
