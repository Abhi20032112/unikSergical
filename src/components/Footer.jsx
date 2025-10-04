import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Stethoscope, HeartPulse, PlusSquare } from '@/components/Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const medicalIcons = [
    { icon: Stethoscope, delay: 0, size: 'h-16 w-16', duration: 15, x: [0, 50, -50, 0], y: ['-50vh', '50vh', '-50vh'] },
    { icon: HeartPulse, delay: 2, size: 'h-20 w-20', duration: 20, x: [0, -60, 60, 0], y: ['-50vh', '50vh', '-50vh'] },
    { icon: PlusSquare, delay: 4, size: 'h-14 w-14', duration: 25, x: [0, 40, -40, 0], y: ['-50vh', '50vh', '-50vh'] },
    { icon: Stethoscope, delay: 8, size: 'h-16 w-16', duration: 18, x: [0, -70, 70, 0], y: ['-50vh', '50vh', '-50vh'] },
    { icon: HeartPulse, delay: 10, size: 'h-12 w-12', duration: 22, x: [0, 60, -60, 0], y: ['-50vh', '50vh', '-50vh'] },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative animated-gradient text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {medicalIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              left: `${10 + index * 18}%`,
              top: '50%',
            }}
            animate={{
              y: item.y,
              x: item.x,
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <item.icon className={item.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/unikSergical logo.png" alt="Unik Surgical Logo" className="h-10 w-10 bg-white p-1 rounded-full" />
              <div className="font-poppins">
                <div className="text-xl font-bold">Unik Surgical</div>
                <div className="text-sm opacity-80">Healthcare Infrastructure</div>
              </div>
            </Link>
            <p className="text-sm opacity-90">
              Leading healthcare infrastructure solutions provider since 2000, 
              committed to excellence in medical facility development.
            </p>
          </div>

          <div>
            <p className="font-poppins font-semibold text-lg mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5, color: '#00F2A9' }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Link to={link.path} className="text-sm opacity-90 hover:opacity-100 transition-colors">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-poppins font-semibold text-lg mb-4">Our Services</p>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Medical Gas Pipeline Systems</li>
              <li>Modular Operation Theatres</li>
              <li>Laundry & Kitchen Equipment</li>
              <li>Medical Furniture</li>
              <li>Hospital Curtains</li>
              <li>Building Management Systems</li>
            </ul>
          </div>

          <div>
            <p className="font-poppins font-semibold text-lg mb-4">Contact Info</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Patna, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@uniksurgical.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2, color: '#00F2A9' }}
                  className="p-2 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center space-y-1">
          <p className="text-sm opacity-80">
            © 2025 Unik Surgical Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs opacity-70">
            Managed by <a href="https://ards.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00F2A9]">Alpenrose digital solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;