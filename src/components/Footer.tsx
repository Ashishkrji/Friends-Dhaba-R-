import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black font-serif tracking-tighter">
              Friends Dhaba <span className="text-saffron">®</span>
            </h2>
            <p className="text-cream/50 leading-relaxed">
              Ghar Jaisa Khana, Dil Se Banaya. Bringing the authentic taste of Punjab to your table since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-cream/5 hover:bg-saffron hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-cream/5 hover:bg-saffron hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-cream/5 hover:bg-saffron hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-saffron">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-cream/60 hover:text-cream transition-colors">Our Menu</a></li>
              <li><a href="#reserve" className="text-cream/60 hover:text-cream transition-colors">Reservations</a></li>
              <li><a href="#about" className="text-cream/60 hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#gallery" className="text-cream/60 hover:text-cream transition-colors">Gallery</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-saffron">Find Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-saffron shrink-0" size={20} />
                  <p className="text-cream/60">opposite naulakha trade Center, Railway Employees Colony, Old Ludhiana, Ludhiana, Punjab 141008</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-saffron shrink-0" size={20} />
                  <p className="text-cream/60">098153 69001</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="text-saffron shrink-0" size={20} />
                  <div>
                    <p className="text-cream/60 font-bold">Mon – Sun</p>
                    <p className="text-cream/60">11:00 AM – 4:00 PM</p>
                    <p className="text-cream/60">7:00 PM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-cream/30 font-medium">
          <p>© 2025 Friends Dhaba. All Rights Reserved.</p>
          <p>Designed with love in Punjab</p>
        </div>
      </div>
    </footer>
  );
}
