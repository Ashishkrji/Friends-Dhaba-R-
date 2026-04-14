import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    request: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reserve" className="py-24 px-6 bg-saffron relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Book Your Table
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Walk-ins welcome, but reservations get priority seating.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-charcoal/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Time</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none appearance-none"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    {Array.from({ length: 23 }, (_, i) => {
                      const hour = Math.floor(i / 2) + 12;
                      const min = i % 2 === 0 ? '00' : '30';
                      if (hour > 23) return null;
                      return <option key={i} value={`${hour}:${min}`}>{hour}:{min} PM</option>;
                    })}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Guests</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none appearance-none"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Special Requests (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Any allergies or special occasions?"
                  className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none resize-none"
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-charcoal text-white py-5 rounded-2xl font-black text-xl hover:bg-charcoal/90 transition-all transform active:scale-[0.98] shadow-xl shadow-charcoal/20"
              >
                Confirm Reservation
              </button>

              <div className="flex items-center justify-center gap-2 text-charcoal/40 font-bold">
                <Phone size={18} />
                <span>Or call us directly: +91 98765 43210</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-charcoal text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-cream/10"
          >
            <CheckCircle2 className="text-saffron" />
            <span className="font-bold">Reservation request sent! We'll WhatsApp you shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
