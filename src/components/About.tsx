import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-saffron to-turmeric shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
              alt="Dhaba Interior"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-charcoal p-8 rounded-3xl shadow-2xl text-cream hidden md:block">
            <p className="text-4xl font-black text-saffron mb-1">20+</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Years of Legacy</p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-saffron font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-8 leading-tight">
            The Best <span className="text-saffron italic">Vegetarian</span> <br />
            Punjabi Legend
          </h2>
          
          <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed mb-10">
            <p>
              Located in the heart of Ludhiana, Friends Dhaba (R) has been a destination for authentic Punjabi vegetarian cuisine since 2005. We specialize in simple, high-quality food that feels like home.
            </p>
            <p>
              Our small but curated menu ensures that every dish—from our mouth-watering Dal Makhani to our crispy Lachha Paratha—is prepared with the choicest masalas and the freshest ingredients.
            </p>
          </div>

          <blockquote className="border-l-4 border-saffron pl-6 py-2 mb-10 italic text-xl text-charcoal font-medium">
            "We never compromise on the masala. Ever. If it's not how Dadi made it, it doesn't leave the kitchen."
            <footer className="mt-2 text-sm font-bold uppercase tracking-widest text-charcoal/40">— Founder, Friends Dhaba</footer>
          </blockquote>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal/10">
            <div>
              <p className="text-2xl font-black text-charcoal">20+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Years</p>
            </div>
            <div>
              <p className="text-2xl font-black text-charcoal">50k+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Meals Served</p>
            </div>
            <div>
              <p className="text-2xl font-black text-charcoal">3</p>
              <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Locations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
