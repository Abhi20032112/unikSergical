import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from '@/components/Icons';
import { toast } from '@/ui/use-toast';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210'; // Replace with actual WhatsApp number
    const message = 'Hello, I would like to inquire about your healthcare infrastructure services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg glow-effect"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  );
};

export default WhatsAppFloat;