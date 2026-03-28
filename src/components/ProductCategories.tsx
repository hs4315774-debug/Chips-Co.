import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FLAVORS } from '../constants';

const CATEGORIES = ['Classic', 'Spicy', 'Limited Edition', 'Family Packs'] as const;

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('Classic');

  const filteredFlavors = FLAVORS.filter(f => f.category === activeCategory);

  return (
    <section className="py-24 bg-brand-yellow/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6">EXPLORE BY <span className="text-brand-red">CATEGORY</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredFlavors.map((flavor) => (
              <motion.div
                key={flavor.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-6 flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${flavor.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <img 
                    src={flavor.image} 
                    alt={flavor.name} 
                    className="w-48 h-48 object-cover rounded-2xl relative z-10 shadow-lg group-hover:rotate-6 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl mb-2">{flavor.name}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{flavor.description}</p>
                <button className="px-6 py-2 bg-brand-yellow text-brand-red font-bold rounded-xl hover:bg-brand-red hover:text-white transition-colors">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
