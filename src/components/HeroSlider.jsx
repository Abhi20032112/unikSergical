import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/ui/use-toast';

const sliderImages = [
  {
    id: 1,
    url: '/images/products/modular operation theatre.png',
    alt: 'Best OT Equipment and Surgical Instruments Supplier in Bihar',
    headline: 'Premium Surgical Instruments Manufacturer',
    subtext: 'Complete range of stainless steel surgical instruments, OT equipment, and sterilization solutions. Serving healthcare providers across India.'
  },
  {
    id: 3,
    url: '/images/products/medical furniture.png',
    alt: 'Hospital Furniture Manufacturer in Patna - ICU Beds & OT Tables',
    headline: 'Leading Hospital Furniture Manufacturer',
    subtext: 'Manufacturer of ICU beds, OT tables, and medical furniture. ISO certified quality with nationwide delivery. Bulk orders welcome.'
  },
  {
    id: 4,
    url: '/images/products/patient care.png',
    alt: 'Medical Equipment and Surgical Consumables Supplier in Bihar',
    headline: 'Complete Medical Equipment Solutions',
    subtext: 'Your one-stop solution for surgical instruments, hospital furniture, and medical consumables in Patna. Get expert consultation today.'
  }
];

const Particle = ({ className, style }) => {
  return <div className={`particle-multi ${className}`} style={style}></div>;
};

const HeroSlider = () => {
  // Generate random particles with different colors and positions
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const colors = ['particle-red', 'particle-blue', 'particle-green', 'particle-yellow', 'particle-purple'];
    const colorClass = colors[i % colors.length];
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const style = {
      width: size + 'px',
      height: size + 'px',
      left: `${left}%`,
      animationDelay: `${delay}s`,
      top: '100%',
      zIndex: -1,
    };
    return <Particle key={i} className={colorClass} style={style} />;
  });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Particle background */}
      <div className="particle-bg">
        {particles}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        className="h-full w-full"
      >
        {sliderImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="h-full w-full relative">
              <img src={image.url} alt={image.alt} className="h-full w-full object-cover animate-image-zoom-pan" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                <div className="container mx-auto">
                  <motion.h1
                    className="font-poppins text-5xl md:text-7xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                  >
                    {image.headline}
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
                  >
                    {image.subtext}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link to="/services">
                        <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 glow-effect shadow-lg hover:shadow-xl transition-all duration-300">
                          Discover Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
