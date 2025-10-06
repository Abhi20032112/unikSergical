import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from '@/components/Icons';

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <motion.button
      className="p-2 text-white bg-white/20 rounded-md border border-white/40 shadow-lg"
      onClick={onClick}
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
  );
};

export default HamburgerIcon;
