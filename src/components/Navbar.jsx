import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Tool, Box, Users, Mail, ChevronDown, Bed, Scissors, Phone, Menu, X } from '@/components/Icons';
import { useToast } from '@/ui/use-toast';
import HamburgerIcon from './HamburgerIcon';

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
    { name: 'Services', path: '/services', icon: Tool },
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
      y: -8,
      scale: 1.15,
      rotateY: 10,
      rotateX: 5,
      color: "var(--accent-green)",
      textShadow: "0 0 20px rgba(6, 182, 212, 1), 0 0 40px rgba(6, 182, 212, 0.5), 0 10px 20px rgba(0,0,0,0.4)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.3), 0 0 30px rgba(6, 182, 212, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
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
              <img src="/unikSergical logo.png" alt="Unik Surgical Logo" className="h-12 w-12 transition-all duration-300 rounded-full p-1 bg-white" />
              <div className="font-poppins">
                <div className="text-xl font-bold text-white">UNIK SURGICAL PVT LTD</div>
                <div className="text-xs text-white/80">Passionately powering healthcare excellence with precision & care</div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center space-x-6"
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
                whileHover={item.name === 'Products' ? null : (productDropdown ? null : "hover")}
                whileTap="tap"
                onMouseEnter={() => { if (item.dropdown && window.innerWidth >= 1024) setProductDropdown(item.name); }}
                onMouseLeave={() => { if (window.innerWidth >= 1024) setProductDropdown(null); }}
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
                        className="relative w-full bg-transparent p-0 rounded-none shadow-none text-white lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-2 lg:w-72 lg:bg-white lg:rounded-lg lg:shadow-xl lg:p-3 lg:origin-top lg:z-50 lg:text-gray-800"
                        onMouseLeave={() => { if (window.innerWidth >= 1024) { setProductDropdown(null); setOpenCategory(null); } }}
                      >
                        {productCategories.map(category => (
                          <div
                            key={category.name}
                            className="relative mb-2 last:mb-0"
                          >
                            <div
                              className="px-3 py-2 text-white font-semibold text-sm flex items-center space-x-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors lg:text-gray-800 lg:hover:bg-gray-50"
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
                                      className="w-full text-left flex items-center space-x-3 px-4 py-2 rounded-md text-white hover:bg-white/10 transition-colors lg:text-gray-700 lg:hover:bg-primary-blue lg:hover:text-white"
                                    >
                                      <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 lg:bg-primary-blue"></span>
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

          <motion.button
            className="lg:hidden p-2 text-white bg-white/20 rounded-md border border-white/40 shadow-lg"
            onClick={() => {
              setIsOpen(!isOpen);
              setProductDropdown(false);
              setOpenCategory(null);
            }}
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden animated-gradient backdrop-blur-md shadow-xl rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto border border-white/20 mt-2 mx-auto text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.nav className="p-6 space-y-4" initial="hidden" animate="visible" variants={navContainerVariants}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                    whileHover={item.name === 'Products' ? null : (productDropdown ? null : "hover")}
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
                          setIsOpen(false);
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
                            className="relative w-full bg-transparent p-0 rounded-none shadow-none text-white lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-2 lg:w-72 lg:bg-white lg:rounded-lg lg:shadow-xl lg:p-3 lg:origin-top lg:z-50 lg:text-gray-800"
                            onMouseLeave={() => { if (window.innerWidth >= 1024) { setProductDropdown(null); setOpenCategory(null); } }}
                          >
                            {productCategories.map(category => (
                              <div
                                key={category.name}
                                className="relative mb-2 last:mb-0"
                              >
                                <div
                                  className="px-3 py-2 text-white font-semibold text-sm flex items-center space-x-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors lg:text-gray-800 lg:hover:bg-gray-50"
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
                                            setIsOpen(false);
                                            setProductDropdown(null);
                                          }}
                                          className="w-full text-left flex items-center space-x-3 px-4 py-2 rounded-md text-white hover:bg-white/10 transition-colors lg:text-gray-700 lg:hover:bg-primary-blue lg:hover:text-white"
                                        >
                                          <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 lg:bg-primary-blue"></span>
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
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;