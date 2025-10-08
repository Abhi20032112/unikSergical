import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, FileText } from '@/components/Icons';

const Certifications = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      details: 'International standard for quality management systems, ensuring consistent quality in products and services.',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'ISO 13485:2016',
      description: 'Medical Devices Quality Management',
      details: 'Specific standard for medical devices quality management systems, ensuring safety and effectiveness.',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System',
      details: 'International standard for environmental management systems, demonstrating commitment to environmental responsibility.',
      icon: CheckCircle,
      color: 'text-emerald-600'
    },
    {
      title: 'CE Mark',
      description: 'Medical Devices/Equipment',
      details: 'Conformity with European standards (EN 60601, IEC 60601, MDR 2017/745) for medical devices and equipment.',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      title: 'WHO-GMP',
      description: 'World Health Organization Good Manufacturing Practices',
      details: 'Certification ensuring compliance with international manufacturing standards for pharmaceuticals and medical devices.',
      icon: Award,
      color: 'text-red-600'
    },
    {
      title: 'MSME Registration',
      description: 'Udyam Registration: UDYAM-BR-26-0007801',
      details: 'Micro, Small and Medium Enterprises registration, qualifying for government benefits and schemes.',
      icon: FileText,
      color: 'text-orange-600'
    },
    {
      title: 'NSIC Registration',
      description: 'Single Point Registration (Valid Government Supplier)',
      details: 'National Small Industries Corporation registration for streamlined government procurement processes.',
      icon: CheckCircle,
      color: 'text-indigo-600'
    },
    {
      title: 'MD-42 Registration',
      description: 'Authorized Seller/Distributor under Indian Medical Devices Rules',
      details: 'Registration under Medical Devices Rules, 2017 for authorized distribution of medical devices in India.',
      icon: Shield,
      color: 'text-teal-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Certifications - Unik Surgical Pvt. Ltd. | ISO Certified Healthcare Solutions</title>
        <meta name="description" content="Unik Surgical holds ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, CE Mark, WHO-GMP, and government registrations. Committed to quality, safety, and regulatory compliance in healthcare infrastructure." />
        <meta name="keywords" content="ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, CE mark, WHO-GMP, medical device certifications, healthcare quality standards" />
        <meta property="og:title" content="Certifications - Unik Surgical Pvt. Ltd." />
        <meta property="og:description" content="Comprehensive certifications ensuring quality, safety, and compliance in healthcare infrastructure solutions." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Certifications & Compliance</h1>
            <p className="text-xl opacity-90">
              Committed to excellence through international standards and regulatory compliance
            </p>
          </motion.div>
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
              Quality Assurance Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications reflect our unwavering commitment to quality, safety, and regulatory compliance
              in all aspects of healthcare infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-4 ${cert.color}`}>
                      <cert.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-poppins text-xl font-bold text-gray-800">
                        {cert.title}
                      </h3>
                      <p className="text-primary-blue font-medium">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
                Regulatory Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive certifications ensure that every product and service we provide
                meets the highest international standards for quality, safety, and environmental responsibility.
                This commitment extends to our manufacturing processes, supply chain, and customer service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Standards Compliance</h4>
                    <p className="text-gray-600 text-sm">Adherence to ISO, CE, and WHO standards for international recognition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Government Approvals</h4>
                    <p className="text-gray-600 text-sm">Registered with MSME, NSIC, and authorized under Medical Devices Rules.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Continuous Improvement</h4>
                    <p className="text-gray-600 text-sm">Regular audits and updates to maintain certification standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                className="w-full rounded-lg shadow-lg"
                alt="Quality certifications and compliance documents"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
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
              Trust Through Transparency
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our certifications are not just badges—they represent our dedication to providing
              safe, reliable, and high-quality healthcare solutions that you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-accent-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
              >
                Request Certification Details
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors inline-block"
              >
                View Certified Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications;
