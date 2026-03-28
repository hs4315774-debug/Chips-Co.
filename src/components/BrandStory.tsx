import { motion } from 'motion/react';
import { STATS } from '../constants';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-red/10 rounded-full blur-3xl" />
            
            <img 
              src="https://picsum.photos/seed/potato-farm/800/1000" 
              alt="Our Potato Farm" 
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl z-20 hidden md:block"
            >
              <p className="text-brand-red font-display font-black text-4xl mb-1">100%</p>
              <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">Natural Potatoes</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl mb-8"
            >
              CRAFTING <span className="text-brand-red">JOY</span> SINCE 1974
            </motion.h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our journey started in a small family kitchen with a simple mission: to create the world's most satisfying crunch. Today, we partner with local farmers to ensure every potato is grown with care and seasoned with passion.
            </p>
            <p className="text-lg text-gray-500 mb-12 italic border-l-4 border-brand-yellow pl-6">
              "We don't just make chips; we create moments of happiness that bring people together, one crunch at a time."
            </p>

            <div className="grid grid-cols-3 gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-display font-black text-brand-red mb-2">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
