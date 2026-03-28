import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-yellow/20 via-white to-brand-red/10" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-sm font-bold mb-6"
          >
            ✨ NEW FLAVORS ARRIVED
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
            TASTE THE <span className="text-brand-red">JOY</span> IN EVERY <span className="text-brand-yellow drop-shadow-sm">CRUNCH</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Experience the ultimate snack revolution with our premium, hand-picked potatoes and bold, innovative seasonings.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-red text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/30 hover:bg-red-600 transition-colors"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-2xl font-bold text-lg hover:bg-white/90 transition-colors"
            >
              Explore Flavors
            </motion.button>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ y: y2, rotate }}
            className="relative z-10"
          >
            <img 
              src="https://picsum.photos/seed/chips-bag/800/1000" 
              alt="CrunchyJoy Chips Bag" 
              className="w-full max-w-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Floating Chips */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className={`absolute z-20 w-24 h-24 bg-brand-yellow rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-white
                ${i === 1 ? 'top-0 -left-10' : ''}
                ${i === 2 ? 'bottom-20 -right-10' : ''}
                ${i === 3 ? 'top-40 right-0' : ''}
                ${i === 4 ? 'bottom-0 left-10' : ''}
              `}
            >
              <img 
                src={`https://picsum.photos/seed/chip-${i}/200/200`} 
                alt="Chip" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Scroll</span>
        <ChevronDown className="w-5 h-5 text-brand-red" />
      </motion.div>
    </section>
  );
}
