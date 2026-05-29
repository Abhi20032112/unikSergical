import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from '@/components/Icons';
import CategoryItem from './CategoryItem';

const ProductDropdown = ({
  productCategories,
  openCategory,
  setOpenCategory,
  handleProductClick,
  isMobile = false,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = productCategories.map(category => ({
    ...category,
    subItems: category.subItems.filter(sub =>
      sub.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const dropdownClasses = isMobile
    ? "relative w-full bg-transparent p-4 rounded-lg shadow-none text-white space-y-2"
    : "lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-2 lg:w-80 lg:bg-white lg:rounded-lg lg:shadow-xl lg:p-4 lg:origin-top lg:z-50 lg:text-gray-800";

  return (
    <motion.div
      className={dropdownClasses}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      role="menu"
      aria-label="Product categories"
    >
      <div className={`mb-4 relative ${isMobile ? 'bg-white/10 rounded-lg' : ''}`}>
        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isMobile ? 'text-white/70' : 'text-gray-400'}`} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue ${
            isMobile 
              ? 'bg-transparent border border-white/30 text-white placeholder-white/70'
              : 'border border-gray-300 text-gray-800 placeholder-gray-400'
          }`}
          aria-label="Search products"
        />
      </div>
      {filteredCategories.map(category => (
        <CategoryItem
          key={category.name}
          category={category}
          openCategory={openCategory}
          setOpenCategory={setOpenCategory}
          handleProductClick={handleProductClick}
          isMobile={isMobile}
          onClose={onClose}
          searchTerm={searchTerm}
        />
      ))}
    </motion.div>
  );
};

export default ProductDropdown;
