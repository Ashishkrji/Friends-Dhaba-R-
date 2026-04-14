import { motion } from 'motion/react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-cream mb-4">
            Inside Friends Dhaba
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            A glimpse into our kitchen, our people, and the flavors that bring us together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-[2rem] cursor-pointer ${img.span}`}
            >
              <motion.img 
                src={img.url} 
                alt={`Gallery ${idx}`}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-saffron/40 flex items-center justify-center pointer-events-none"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <span className="text-2xl font-black">+</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://instagram.com/friendsdhaba" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream px-8 py-3 rounded-full font-bold transition-all border border-cream/20"
          >
            Follow us @friendsdhaba
          </a>
        </div>
      </div>
    </section>
  );
}
