import { motion } from 'motion/react';
import { FLAVORS } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function FeaturedFlavors() {
  return (
    <section id="flavors" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl mb-4"
            >
              OUR <span className="text-brand-red">SIGNATURE</span> FLAVORS
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-xl">
              From the classics you love to the bold innovations you crave. Discover your next favorite crunch.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-brand-red font-bold text-lg group"
          >
            View All Flavors <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVORS.slice(0, 3).map((flavor, i) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-64 ${flavor.color} relative overflow-hidden`}>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {flavor.category}
                </span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl mb-3 group-hover:text-brand-red transition-colors">{flavor.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {flavor.description}
                </p>
                <button className="w-full py-4 rounded-xl border-2 border-gray-100 font-bold hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
