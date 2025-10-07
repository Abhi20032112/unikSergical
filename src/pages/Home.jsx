import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Clock, CheckCircle, Shield, FileText } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';

const Home = () => {
  const stats = [
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: 'ISO 9001:2015', label: 'Quality Certified', icon: Award },
  ];

  const services = [
    { title: 'Medical Gas Pipeline Systems', description: 'Complete medical gas infrastructure solutions', img: '/images/products/Gas papline.png' },
    { title: 'Modular Operation Theatres', description: 'State-of-the-art surgical environments', img: '/images/products/modular operation theatre.png' },
    { title: 'Medical Furniture', description: 'Ergonomic and durable medical furniture', img: '/images/products/medical furniture.png' },
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'ISO 13485:2016',
      description: 'Medical Devices Quality Management',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System',
      icon: CheckCircle,
      color: 'text-emerald-600'
    },
    {
      title: 'CE Mark',
      description: 'Medical Devices/Equipment',
      icon: Shield,
      color: 'text-purple-600'
    },
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
        <title>Unik Surgical Pvt. Ltd. - Premier Healthcare Infrastructure Solutions | Patna, Bihar</title>
        <meta name="description" content="Transform healthcare facilities with Unik Surgical's comprehensive infrastructure solutions. Offices in Patna, Bihar, Greater Noida, Uttar Pradesh, and factory in Chapra, Bihar. 25+ years experience in Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture & Surgical Instruments. ISO 9001:2015 certified with 500+ completed projects across Eastern India." />
        <meta name="keywords" content="healthcare infrastructure, medical gas pipeline, modular operation theatre, medical furniture, surgical instruments, hospital equipment, Patna Bihar, Greater Noida, Chapra, Eastern India, ISO certified" />
        <meta property="og:title" content="Unik Surgical Pvt. Ltd. - Premier Healthcare Infrastructure Solutions" />
        <meta property="og:description" content="Leading healthcare infrastructure company with 25+ years experience. Medical Gas Pipeline Systems, Modular OTs, Medical Furniture & Surgical Instruments." />
      </Helmet>

      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 premium-gradient text-white rounded-full mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="font-poppins text-3xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
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
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare infrastructure solutions designed to meet the highest standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="overflow-hidden h-48">
                  <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" alt={service.title} src={service.img} />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins text-xl font-semibold mb-3 text-primary-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular medical furniture and surgical instruments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'ICU Patient Bed', category: 'Medical Furniture', image: '/images/products/medical furniture.png', features: ['Electric positioning', 'Side rails', 'IV pole attachment'] },
              { name: 'Surgical Instruments Set', category: 'Surgical Tools', image: '/images/products/medical instrument.png', features: ['Complete set', 'Sterile packaging', 'Professional grade'] },
              { name: 'Medical Gas Pipeline', category: 'Infrastructure', image: '/images/products/Gas papline.png', features: ['Centralized supply', 'Alarm systems', 'Compliance certified'] },
              { name: 'Modular Operation Theatre', category: 'Infrastructure', image: '/images/products/modular operation theatre.png', features: ['Laminar airflow', 'LED lighting', 'Climate control'] },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden hover-tilt-3d"
                whileHover={{ scale: 1.05 }}
              >
                <div className="overflow-hidden h-48">
                  <motion.img
                    className="w-full h-full object-cover hover-pop-3d"
                    alt={product.name}
                    src={product.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-blue font-medium mb-2">{product.category}</div>
                  <h3 className="font-poppins text-xl font-semibold mb-3 text-gray-800">
                    {product.name}
                  </h3>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1 h-1 bg-primary-blue rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/product-images">
              <Button
                variant="outline"
                className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                View All Product Images
              </Button>
            </Link>
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
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Award className="mr-4 h-10 w-10 text-primary-blue" />
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to excellence through international standards and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 ${cert.color}`}>
                    <cert.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary-blue font-medium mb-4">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/certifications">
              <Button 
                variant="outline" 
                className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                View All Certifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
              Ready to Transform Your Healthcare Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts help you create a world-class healthcare infrastructure
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;