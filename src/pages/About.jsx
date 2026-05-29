import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle, Shield, FileText, Target, Eye, Heart } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: 'ISO 9001:2015', label: 'Quality Certified', icon: Award },
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our products and services',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement and adoption of latest technologies',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Building lasting relationships through exceptional service',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      title: 'Compliance',
      description: 'Adhering to international standards and regulations',
      icon: FileText,
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
        <title>About Us - Unik Surgical Pvt. Ltd. | Leading Healthcare Infrastructure Company</title>
        <meta name="description" content="Learn about Unik Surgical Pvt. Ltd., a premier healthcare infrastructure company with 25+ years experience. Offices in Patna, Bihar, Greater Noida, Uttar Pradesh, and factory in Chapra, Bihar. ISO 9001:2015 certified with expertise in Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture & Surgical Instruments." />
        <meta name="keywords" content="about Unik Surgical, healthcare company, medical equipment manufacturer, Patna Bihar, Greater Noida, Chapra, ISO certified" />
        <meta property="og:title" content="About Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Leaders" />
        <meta property="og:description" content="25+ years of excellence in healthcare infrastructure solutions across Eastern India." />
      </Helmet>

      <section className="py-20 bg-gradient-to-r from-primary-blue to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6 text-black">
              About Unik Surgical Pvt. Ltd.
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-400">
              Pioneering healthcare infrastructure solutions with 25+ years of excellence and innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1999, Unik Surgical Pvt. Ltd. has been at the forefront of healthcare infrastructure development in Eastern India. What started as a small enterprise has grown into a leading supplier of medical furniture and manufacturer of surgical instruments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With our headquarters in Patna, Bihar, regional office in Greater Noida, Uttar Pradesh, and manufacturing facility in Chapra, Bihar, we serve clients across the region with unparalleled expertise and commitment to quality.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is marked by continuous innovation, adherence to international standards, and a steadfast dedication to improving healthcare facilities across India.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/our-journey.jpeg"
                alt="Our Story - Unik Surgical Journey"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
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
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that define our commitment to excellence
            </p>
          </motion.div>

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
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
                Manoj Kumar Singh 
              </h3>
              <h4 className="font-poppins text-xl font-semibold text-primary-blue mb-6">
                
              </h4>
              <p className="text-lg text-gray-600 mb-6 font-medium">
                Managing Director
              </p>
              <p className="text-lg text-gray-600">
                Manoj Kumar Singh is a healthcare industry leader known for his practical approach and deep commitment to improving patient care. With years of hands-on experience in medical equipment manufacturing, he founded Unik Surgical with a simple goal — to make reliable, high-quality surgical solutions accessible to healthcare facilities of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small workshop in Patna has now grown into a trusted name, serving hospitals and clinics across the country. Manoj's focus on precision engineering, transparent business ethics, and long-term client relationships has helped Unik Surgical earn the confidence of medical professionals.
              </p>
              <p className="text-lg text-gray-600">
                His leadership continues to guide the company toward innovation and responsible growth, while staying rooted in the belief that every piece of equipment should ultimately contribute to better patient outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/team/manoj.jpg"
                alt="Manoj Kumar Singh"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
              />
            </motion.div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your healthcare facility
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
