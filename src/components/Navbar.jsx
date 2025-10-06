import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Wrench, Box, Users, Mail, ChevronDown, Bed, Scissors, Phone } from '@/components/Icons';
import { useToast } from '@/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdown, setProductDropdown] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
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

  const productCategories = [
    {
      name: 'Furniture Catalog',
      icon: Bed,
      subItems: [
        { name: 'Medical Furniture', path: '/products/medical-furniture' },
        { name: 'Non-Medical Furniture', path: '/products/non-medical-furniture' }
      ]
    },
    {
      name: 'Instrument Catalogue',
      icon: Scissors,
      subItems: [
        { name: 'Surgical Instruments', path: '/products/surgical-instruments' },
        { name: 'Diagnostic Instruments', path: '/products/diagnostic-instruments' },
        { name: 'Support Instruments', path: '/products/support-instruments' }
      ]
    }
  ];

  const handleProductClick = (path) => {
    navigate(path);
    setProductDropdown(false);
    setIsOpen(false);
    setOpenCategory(null);
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
      y: -5,
      scale: [1, 1.1, 1],
      rotateY: 15,
      color: "var(--accent-green)",
      textShadow: "0 0 15px rgba(6, 182, 212, 0.8), 0 5px 10px rgba(0,0,0,0.3)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
      }
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
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div
                  className={`flex items-center space-x-2 font-medium transition-colors p-2 rounded-lg cursor-pointer ${
                    location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                      ? 'text-white bg-white/20'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    if (item.dropdown) {
                      if (productDropdown === item.name) {
                        setProductDropdown(null);
                        setOpenCategory(null);
                      } else {
                        setProductDropdown(item.name);
                        setOpenCategory(null);
                      }
                    } else {
                      navigate(item.path);
                      setProductDropdown(null);
                      setOpenCategory(null);
                    }
                  }}
                >
                  <motion.div variants={iconVariants}><item.icon className="h-5 w-5" /></motion.div>
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className={`h-4 w-4 transition-transform ${productDropdown === item.name ? 'rotate-180' : ''}`} />}
                </div>
                {item.dropdown && (
                  <AnimatePresence>
                    {productDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-xl p-3 origin-top"
                        onMouseLeave={() => {
                          setProductDropdown(null);
                          setOpenCategory(null);
                        }}
                      >
                        {productCategories.map(category => (
                          <div
                            key={category.name}
                            className="relative mb-2 last:mb-0"
                          >
                            <div
                              className="px-3 py-2 text-gray-800 font-semibold text-sm flex items-center space-x-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                              onClick={() => {
                                setOpenCategory(openCategory === category.name ? null : category.name);
                              }}
                            >
                              <category.icon className="h-4 w-4 text-primary-blue" />
                              <span>{category.name}</span>
                              <ChevronDown className={`h-3 w-3 ml-auto transition-transform ${openCategory === category.name ? 'rotate-180' : ''}`} />
                            </div>
                            <AnimatePresence>
                              {openCategory === category.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-1 space-y-1 overflow-hidden"
                                >
                                  {category.subItems.map(subItem => (
                                    <button
                                      key={subItem.name}
                                      onClick={() => {
                                        handleProductClick(subItem.path);
                                        setOpenCategory(null);
                                      }}
                                      className="w-full text-left flex items-center space-x-3 px-4 py-2 rounded-md text-gray-700 hover:bg-light-bg hover:text-primary-blue transition-colors"
                                    >
                                      <span className="w-2 h-2 bg-primary-blue rounded-full flex-shrink-0"></span>
                                      <span>{subItem.name}</span>
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </motion.div>

          <button className="md:hidden p-2 text-white" onClick={() => {
            setIsOpen(!isOpen);
            setProductDropdown(false);
            setOpenCategory(null);
          }}>
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
                              setOpenCategory(null);
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
                          <div className="ml-8 mt-2 space-y-2">
                            {productCategories.map(category => (
                              <div key={category.name} className="mb-3 last:mb-0">
                                <div
                                  className="px-4 py-2 text-gray-800 font-semibold text-sm flex items-center space-x-2 cursor-pointer"
                                  onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                                >
                                  <category.icon className="h-4 w-4 text-primary-blue" />
                                  <span>{category.name}</span>
                                  <ChevronDown className={`h-3 w-3 ml-auto transition-transform ${openCategory === category.name ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                  {openCategory === category.name && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="ml-6 space-y-1 overflow-hidden"
                                    >
                                      {category.subItems.map(subItem => (
                                        <button
                                          key={subItem.name}
                                          onClick={() => handleProductClick(subItem.path)}
                                          className="w-full text-left flex items-center space-x-3 py-2 px-4 text-gray-600 hover:text-primary-blue rounded-md transition-colors"
                                        >
                                          <span className="w-2 h-2 bg-primary-blue rounded-full flex-shrink-0"></span>
                                          <span>{subItem.name}</span>
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
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