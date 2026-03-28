/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedFlavors from './components/FeaturedFlavors';
import BrandStory from './components/BrandStory';
import ProductCategories from './components/ProductCategories';
import NewArrivals from './components/NewArrivals';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-red z-[60] origin-left" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        <FeaturedFlavors />
        <BrandStory />
        <ProductCategories />
        <NewArrivals />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
