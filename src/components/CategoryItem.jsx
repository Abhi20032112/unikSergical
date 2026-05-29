import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from '@/components/Icons';

const CategoryItem = ({
  category,
  openCategory,
  setOpenCategory,
  handleProductClick,
  isMobile = false,
  onClose,
  searchTerm
}) => {
  const isOpen = openCategory === category.name;
  const hasSubItems = category.subItems.length > 0;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenCategory(isOpen ? null : category.name);
    }
  };

  const subItemVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 1 }
  };

  const categoryClasses = isMobile
    ? "px-3 py-2.5 text-white font-semibold text-sm flex items-center justify-between hover:bg-white/10 rounded-md cursor-pointer transition-all duration-200 border border-white/20 backdrop-blur-sm"
    : "px-3 py-2.5 text-gray-800 font-semibold text-sm flex items-center justify-between hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200";

  return (
    <div className="relative mb-2.5 last:mb-0" role="menuitem">
      <div
        className={categoryClasses}
        onClick={() => setOpenCategory(isOpen ? null : category.name)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Toggle ${category.name} category`}
      >
        <category.icon className="h-4 w-4 text-primary-blue" />
        <span>{category.name}</span>
        {hasSubItems && (
          <ChevronDown
            className={`h-3 w-3 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && hasSubItems && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 space-y-1 overflow-hidden"
            role="menu"
            aria-label={`${category.name} sub-items`}
          >
            {category.subItems.map((subItem, index) => (
              <motion.button
                key={subItem.name}
                custom={index}
                variants={subItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => {
                  handleProductClick(subItem.path);
                  if (onClose) onClose();
                }}
                className={`w-full text-left flex items-center space-x-3 px-4 py-2.5 rounded-md transition-all duration-200 ${
                  isMobile
                    ? 'text-blue-200 hover:bg-white/20 hover:text-white border border-white/10'
                    : 'text-blue-500 hover:bg-blue-100 hover:text-blue-700'
                }`}
                role="menuitem"
                tabIndex={0}
                aria-label={`Navigate to ${subItem.name}`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isMobile ? 'bg-white' : 'bg-primary-blue'}`}></span>
                <span>{subItem.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryItem;
