import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-red/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6">WHAT OUR <span className="text-brand-red">FANS</span> SAY</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-red/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-red/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Snacker</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
