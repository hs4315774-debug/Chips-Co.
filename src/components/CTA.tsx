import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-brand-red rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-red/40"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-yellow rounded-full blur-2xl" />
        </div>

        <h2 className="text-white text-5xl md:text-7xl mb-8 relative z-10">
          GRAB YOUR FAVORITE <span className="text-brand-yellow">FLAVOR</span> TODAY
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10">
          Don't wait for the craving to hit. Stock up on CrunchyJoy and be ready for your next snack attack!
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-white text-brand-red rounded-2xl font-display font-black text-2xl shadow-xl hover:bg-brand-yellow transition-colors relative z-10"
        >
          ORDER NOW
        </motion.button>
      </motion.div>
    </section>
  );
}
