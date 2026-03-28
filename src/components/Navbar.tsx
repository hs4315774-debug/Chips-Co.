import { motion } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-display font-black text-xl italic shadow-lg">
            C
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-brand-red">
            CRUNCHY<span className="text-brand-yellow">JOY</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {['Home', 'Flavors', 'Story', 'Shop'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-brand-red transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-6 h-6 text-brand-red" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-yellow text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </motion.button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {['Home', 'Flavors', 'Story', 'Shop'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold hover:text-brand-red"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
