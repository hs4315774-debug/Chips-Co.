import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white font-display font-black text-lg italic">
                C
              </div>
              <span className="text-xl font-display font-black tracking-tighter text-brand-red">
                CRUNCHY<span className="text-brand-yellow">JOY</span>
              </span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Crafting the world's most satisfying crunch since 1974. Join the snack revolution.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#E31837' }}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Flavors', 'Our Story', 'Shop Online', 'Store Locator'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Get the latest flavor drops and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-brand-red text-white rounded-xl hover:bg-red-600 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CrunchyJoy Snacks Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
