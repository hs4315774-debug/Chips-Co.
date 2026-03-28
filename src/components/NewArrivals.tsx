import { motion } from 'motion/react';
import { FLAVORS } from '../constants';

export default function NewArrivals() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl">NEW <span className="text-brand-red">ARRIVALS</span></h2>
      </div>

      <div className="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
        {[...FLAVORS, ...FLAVORS].map((flavor, i) => (
          <motion.div
            key={`${flavor.id}-${i}`}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-80 group"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={flavor.image} 
                alt={flavor.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4">
                <span className="bg-brand-yellow text-brand-red text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Limited Time
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl mb-2">{flavor.name}</h3>
                <div className="w-12 h-1 bg-brand-yellow mb-4 group-hover:w-full transition-all duration-500" />
                <button className="text-brand-yellow font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
