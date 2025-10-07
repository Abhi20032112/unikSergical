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
import { toast } from '@/ui/use-toast';

const sliderImages = [
  {
    id: 1,
    url: '/images/products/modular operation theatre.png',
    alt: 'Modular operation theatre',
    headline: 'State-of-the-Art Surgical Environments',
    subtext: 'Building the future of healthcare with advanced modular operation theatres.'
  },
  {
    id: 2,
    url: '/images/products/patient care.png',
    alt: 'Patient care',
    headline: 'Excellence in Patient Care Infrastructure',
    subtext: 'Providing comprehensive solutions for medical gas pipelines and hospital furniture.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670',
    alt: 'Doctor using a tablet in a hospital hallway',
    headline: 'Integrated Building Management Systems',
    subtext: 'Smart, efficient, and reliable systems for modern healthcare facilities.'
  },
  {
    id: 4,
    url: '/images/products/medical furniture.png',
    alt: 'Medical furniture',
    headline: 'Designing Spaces for Healing & Recovery',
    subtext: 'From hospital curtains to complete room outfitting, we cover every detail.'
  }
];

const Particle = ({ className, style }) => {
  return <div className={`particle-multi ${className}`} style={style}></div>;
};

const HeroSlider = () => {
  const handleCTAClick = () => {
    window.location.href = '/services';
  };

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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect" onClick={handleCTAClick}>
                        Discover Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
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
