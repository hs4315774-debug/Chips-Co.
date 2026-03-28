import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6">SNACK <span className="text-brand-red">MOMENTS</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of crunch-lovers and share your favorite snack moments with #CrunchyJoy.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Snack moment ${i + 1}`} 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">View Moment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
