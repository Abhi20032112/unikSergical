import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from '@/components/Icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Unik Surgical Pvt. Ltd.', 'Ground Floor, Angad Apartment,', 'GD Mishra Path, New Patliputra Colony,', 'Patna - 800013, Bihar, India'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['0612-4556038', '+91 7319772053'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@uniksurgical.com', 'uniksurgicalpvtltd@gmail.com'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon- Sat 9am to 6pm', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const offices = [
    {
      name: 'Head Office',
      address: 'Ground Floor, Angad Apartment, GD Mishra Path, New Patliputra Colony, Patna - 800013, Bihar, India'
    },
    {
      name: 'Branch Office',
      address: 'H-230, BETA-II, Greater Noida, Uttar Pradesh, India'
    },
    {
      name: 'Factory',
      address: 'Ahilya Knowledge Park, Near Pani Tanki, Tekniwas, NH-85, Chapra - 841213, Bihar, India'
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61583602772344', color: 'hover:text-blue-600', label: 'Facebook' },
    { icon: Twitter, url: '#', color: 'hover:text-blue-400 opacity-50 cursor-not-allowed', label: 'Twitter (Coming Soon)' },
    { icon: Instagram, url: 'https://www.instagram.com/uniksurgicalpvtltd/', color: 'hover:text-pink-600', label: 'Instagram' },
    { icon: Linkedin, url: '#', color: 'hover:text-blue-700 opacity-50 cursor-not-allowed', label: 'LinkedIn (Coming Soon)' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={containerVariants}>
      <Helmet>
        <title>Contact Us - Unik Surgical Pvt. Ltd. | Get Healthcare Solutions Quote</title>
        <meta name="description" content="Contact Unik Surgical Pvt. Ltd. for healthcare infrastructure solutions. Offices in Patna, Bihar, Greater Noida, Uttar Pradesh. Get quotes for Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture & Surgical Instruments." />
        <meta name="keywords" content="contact Unik Surgical, healthcare equipment quote, medical gas pipeline, modular OT, Patna Bihar, Greater Noida" />
        <meta property="og:title" content="Contact Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Solutions" />
        <meta property="og:description" content="Get in touch for comprehensive healthcare infrastructure solutions across Eastern India." />
      </Helmet>

      <section className="py-20 bg-light-bg text-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Ready to transform your healthcare facility? Get in touch with our experts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our products or services? Need a custom solution for your healthcare facility? We're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.url !== '#' ? '_blank' : undefined}
                      rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 ${social.color} ${social.url === '#' ? 'cursor-not-allowed' : ''}`}
                      title={social.label}
                      onClick={(e) => social.url === '#' && e.preventDefault()}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

              <iframe
                aria-label='Contact Us Form'
                frameBorder="0"
                style={{ height: '1000px', width: '99%', border: 'none' }}
                src='https://forms.zohopublic.in/infouniksu1/form/ContactUsForm/formperma/3BSD_mMpIqVu7K-WxZVpNevaKQqbKqkf91QSO48stEw'
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple locations to serve you better across Eastern India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden p-6"
              >
                <h3 className="font-poppins text-xl font-semibold text-primary-blue mb-4">
                  {office.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Fixed Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target={social.url !== '#' ? '_blank' : undefined}
            rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
            className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110 ${social.color} border border-gray-200 ${social.url === '#' ? 'cursor-not-allowed' : ''}`}
            title={social.label}
            onClick={(e) => social.url === '#' && e.preventDefault()}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </motion.div>
  );
};
export default Contact;