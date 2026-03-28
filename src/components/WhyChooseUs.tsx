import { motion } from 'motion/react';
import { Leaf, Zap, Package, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    desc: 'Only the finest non-GMO potatoes and natural seasonings make the cut.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Zap,
    title: 'Bold Flavors',
    desc: 'Seasonings crafted by culinary experts to deliver an explosion of taste.',
    color: 'bg-brand-yellow/20 text-brand-red'
  },
  {
    icon: Package,
    title: 'Fresh Packaging',
    desc: 'Our nitrogen-flushed bags ensure every chip is as fresh as the day it was made.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Globe,
    title: 'Loved Worldwide',
    desc: 'Bringing smiles and crunches to snack lovers in over 120 countries.',
    color: 'bg-purple-100 text-purple-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl mb-6"
          >
            WHY SNACKERS <span className="text-brand-yellow">LOVE</span> US
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We've spent decades perfecting the art of the chip. Here's what sets CrunchyJoy apart from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
