import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-saffron text-white p-4 rounded-full shadow-2xl shadow-saffron/40 flex items-center justify-center border-2 border-white/20"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-charcoal text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Order on WhatsApp
      </span>
    </motion.a>
  );
}
