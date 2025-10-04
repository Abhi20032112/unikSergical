import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Wrench, Box, Users, Mail, ChevronDown, Bed, Scissors, Phone } from '@/components/Icons';
import { useToast } from '@/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'Products', path: '/products', icon: Box, dropdown: true },
    { name: 'Clients', path: '/clients', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const productSubItems = [
    { name: 'Medical Furniture', path: '/products/medical-furniture', icon: Bed },
    { name: 'Surgical Instruments', path: '/products/surgical-instruments', icon: Scissors },
  ];

  const handleProductClick = (path) => {
    navigate(path);
    setProductDropdown(false);
    setIsOpen(false);
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      y: -2,
      scale: 1.05,
      color: "var(--primary-blue)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      filter: "drop-shadow(0 0 10px rgba(30, 58, 138, 0.5))",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'py-2 animated-gradient backdrop-blur-md shadow-lg border-b border-white/20'
          : 'py-4 animated-gradient backdrop-blur-sm'
      } text-white`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover="hover" variants={logoVariants}>
            <Link to="/" className="flex items-center space-x-2">
              <img src="/unikSergical logo.png" alt="Unik Surgical Logo" className="h-12 w-12 transition-all duration-300 rounded-full bg-white p-1" />
              <div className="font-poppins">
                <div className="text-xl font-bold text-white">Unik Surgical</div>
                <div className="text-xs text-white/80">Healthcare Infrastructure</div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-6"
            initial="hidden"
            animate="visible"
            variants={navContainerVariants}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => item.dropdown && setProductDropdown(true)}
                onHoverEnd={() => item.dropdown && setProductDropdown(false)}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 font-medium transition-colors p-2 rounded-lg ${
                    location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                      ? 'text-white bg-white/20'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  <motion.div variants={iconVariants}><item.icon className="h-5 w-5" /></motion.div>
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className={`h-4 w-4 transition-transform ${productDropdown ? 'rotate-180' : ''}`} />}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
                    {productDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-lg shadow-xl p-2 origin-top"
                      >
                        {productSubItems.map(subItem => (
                          <button
                            key={subItem.name}
                            onClick={() => handleProductClick(subItem.path)}
                            className="w-full text-left flex items-center space-x-3 px-4 py-2 rounded-md text-gray-700 hover:bg-light-bg hover:text-primary-blue"
                          >
                            <subItem.icon className="h-5 w-5" />
                            <span>{subItem.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </motion.div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="fixed top-0 right-0 h-full w-full bg-white shadow-xl z-50 md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="font-poppins">
                      <div className="text-lg font-bold text-primary-blue">Unik Surgical</div>
                      <div className="text-xs text-gray-600">Menu</div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-primary-blue">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        <button
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                            location.pathname === item.path ? 'text-primary-blue bg-blue-50' : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            if (!item.dropdown) {
                              navigate(item.path);
                              setIsOpen(false);
                            } else {
                              setProductDropdown(!productDropdown);
                            }
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </div>
                          {item.dropdown && <ChevronDown className={`h-4 w-4 transition-transform ${productDropdown ? 'rotate-180' : ''}`} />}
                        </button>
                        {item.dropdown && productDropdown && (
                          <div className="ml-8 mt-2 space-y-1">
                            {productSubItems.map(subItem => (
                              <button
                                key={subItem.name}
                                onClick={() => handleProductClick(subItem.path)}
                                className="w-full text-left flex items-center space-x-3 py-2 px-4 text-gray-600 hover:text-primary-blue rounded-md"
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;