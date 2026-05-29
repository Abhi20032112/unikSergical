import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Building, Bed, Scissors, Activity, Settings, ShieldCheck } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Medical Gas Pipeline Systems',
      description: 'Complete medical gas infrastructure solutions including oxygen, nitrous oxide, medical air, and vacuum systems with centralized supply, alarm systems, and full compliance certification.',
      features: [
        'Centralized gas supply systems',
        'Automatic alarm and monitoring',
        'ISO 7396-1 compliance',
        'Emergency backup systems',
        'Installation and maintenance services'
      ],
      img: '/product images/Gas papline.jpeg',
      icon: Activity
    },
    {
      title: 'Modular Operation Theatres',
      description: 'State-of-the-art modular operation theatres with laminar airflow, LED lighting, climate control, and antimicrobial surfaces for optimal surgical environments.',
      features: [
        'Laminar airflow systems',
        'LED surgical lighting',
        'HVAC climate control',
        'Antimicrobial surfaces',
        'Modular wall panels'
      ],
      img: '/product images/modular operation theatre.png',
      icon: Building
    },
    {
      title: 'Medical Furniture',
      description: 'Ergonomic and durable medical furniture including hospital beds, examination tables, cabinets, and patient care equipment designed for comfort and functionality.',
      features: [
        'Hospital beds (ICU, general, pediatric)',
        'Examination and gynecological tables',
        'Medical cabinets and lockers',
        'Patient trolleys and stretchers',
        'Ergonomic design standards'
      ],
      img: '/product images/medical furniture.png',
      icon: Bed
    },
    {
      title: 'Surgical Instruments',
      description: 'High-quality surgical instruments including forceps, scissors, retractors, and specialized tools manufactured to international standards with sterilization compatibility.',
      features: [
        'General surgery instruments',
        'Orthopedic and cardiovascular tools',
        'Sterilization trays and containers',
        'Instrument maintenance services',
        'Custom instrument sets'
      ],
      img: '/product images/medical instrument.png',
      icon: Scissors
    },
    {
      title: 'Diagnostic Instruments',
      description: 'Advanced diagnostic equipment including autoclaves, sterilizers, suction units, and examination lights for accurate medical diagnostics and procedures.',
      features: [
        'Autoclaves and sterilizers',
        'Suction and aspiration units',
        'Examination and surgical lights',
        'Diagnostic trolleys',
        'Calibration and maintenance'
      ],
      img: '/product images/patient care.png',
      icon: Activity
    },
    {
      title: 'Support Infrastructure',
      description: 'Comprehensive support systems including laundry equipment, kitchen facilities, building management systems, and waste management solutions for complete hospital infrastructure.',
      features: [
        'Laundry and kitchen equipment',
        'Building management systems',
        'Medical waste management',
        'HVAC systems',
        'Emergency power solutions'
      ],
      img: '/product images/Laundry & Kitchen Equipment.jpg',
      icon: Settings
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={containerVariants}>
      <Helmet>
        <title>Our Services - Unik Surgical Pvt. Ltd. | Healthcare Infrastructure Solutions</title>
        <meta name="description" content="Explore Unik Surgical's comprehensive healthcare infrastructure services: Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture, Surgical Instruments, and more. 25+ years of expertise in Eastern India." />
        <meta name="keywords" content="medical gas pipeline, modular operation theatre, medical furniture, surgical instruments, diagnostic equipment, healthcare infrastructure, hospital equipment, Patna Bihar" />
        <meta property="og:title" content="Our Services - Unik Surgical Pvt. Ltd." />
        <meta property="og:description" content="Complete healthcare infrastructure solutions including medical gas systems, operation theatres, furniture, and surgical instruments." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 premium-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              End-to-end healthcare infrastructure solutions designed to meet the highest standards of quality, safety, and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-blue"
                >
                  View Our Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide integrated solutions for modern healthcare facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden hover-tilt-3d"
                whileHover={{ scale: 1.05 }}
              >
                <div className="overflow-hidden h-48 relative">
                  <img 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    alt={service.title} 
                    src={service.img} 
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2">
                    <service.icon className="h-6 w-6 text-primary-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins text-xl font-semibold mb-3 text-primary-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <ShieldCheck className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Unik Surgical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 25 years of experience, we deliver excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expertise', description: '25+ years in healthcare infrastructure', icon: Wrench },
              { title: 'Quality', description: 'ISO 9001:2015 and ISO 13485 certified', icon: ShieldCheck },
              { title: 'Innovation', description: 'Latest technology and best practices', icon: Activity },
              { title: 'Support', description: 'Complete installation and maintenance', icon: Settings }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 premium-gradient text-white rounded-full mb-4 shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 premium-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-poppins text-4xl font-bold mb-6">
              Ready to Elevate Your Healthcare Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts today to discuss your project requirements and discover how we can help transform your healthcare infrastructure
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
