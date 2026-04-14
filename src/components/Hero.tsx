import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop')` 
        }}
      />
      
      {/* Fallback Gradient if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] to-[#3d1f00] -z-10" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black text-cream leading-[0.9] mb-6"
        >
          Where Every Meal <br />
          <span className="text-turmeric italic">Feels Like Home</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#FFD89B] font-medium mb-10 max-w-2xl mx-auto"
        >
          Authentic North Indian flavors, cooked fresh — dine in or order now.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#reserve" 
            className="w-full sm:w-auto bg-saffron hover:bg-turmeric text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-saffron/20 transform hover:-translate-y-1"
          >
            Reserve a Table
          </a>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-cream text-cream hover:bg-cream hover:text-charcoal px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Animated Chevron */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream opacity-60"
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
}
