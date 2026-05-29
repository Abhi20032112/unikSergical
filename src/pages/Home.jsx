import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Clock, CheckCircle, Shield, FileText } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const stats = [
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: 'ISO 9001:2015', label: 'Quality Certified', icon: Award },
  ];

  const services = [
    { 
      title: 'Surgical Instruments Supply',
      description: 'Premium quality surgical & diagnostic instruments. Sterile packaging, bulk orders welcome. Direct manufacturer prices.',
      img: '/images/products/medical instrument.png',
      link: '/products#surgical-instruments'
    },
    { 
      title: 'Hospital Furniture Manufacturing',
      description: 'Made in India hospital beds, OT tables, ward furniture & more. Custom sizes available. Quick delivery across Bihar.',
      img: '/images/products/medical furniture.png',
      link: '/products#medical-furniture'
    },
    { 
      title: 'Operation Theatre Setup',
      description: 'Complete OT solutions: modular theatres, lights, tables & equipment. ISO certified installation & maintenance.',
      img: '/images/products/modular operation theatre.png',
      link: '/services#operation-theatre'
    },
    {
      title: 'Medical Gas Pipeline Systems',
      description: 'End-to-end MGPS installation & maintenance. NFPA/HTM standards. 24x7 technical support available.',
      img: '/images/products/Gas papline.png',
      link: '/services#medical-gas'
    }
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
    {
      title: 'WHO-GMP',
      description: 'Good Manufacturing Practices',
      icon: Award,
      color: 'text-red-600'
    },
    {
      title: 'MSME Registration',
      description: 'Udyam Registration',
      icon: FileText,
      color: 'text-orange-600'
    },
    {
      title: 'NSIC Registration',
      description: 'Government Supplier',
      icon: CheckCircle,
      color: 'text-indigo-600'
    },
    {
      title: 'MD-42 Registration',
      description: 'Medical Devices Rules',
      icon: Shield,
      color: 'text-teal-600'
    },
    {
      title: 'CDSCO Registration',
      description: 'Drug and Medical Device Regulation',
      icon: Shield,
      color: 'text-cyan-600'
    },
  ];

  const clients = [
    { name: 'AIIMS Patna', logo: '/logos/AIIMS Patna.png' },
    { name: 'All District Hospital GoB', logo: '/logos/All District hospital GoB.png' },
    { name: 'Anugrah Medical College Gaya', logo: '/logos/Anugrah Medical College Gaya.png' },
    { name: 'Bihar Medical Infrastructure Development', logo: '/logos/Bihar medical infrastructure development.jpg' },
    { name: 'Ford Hospital', logo: '/logos/Ford Hospital.png' },
    { name: 'Indira Gandhi Institute of Medical Sciences', logo: '/logos/Indira_Gandhi_Institute_of_Medical_Sciences_Logo.svg.png' },
    { name: 'Jannayak Karpurithakur Medical College', logo: '/logos/Jannayak Karpurithakur medical college.png' },
    { name: 'Jawahar Lal Nehru Medical College', logo: '/logos/Jawahar Lal Neharu Medical college.png' },
    { name: 'Maulana Mazharul', logo: '/logos/Maulana Mazharul.jpg' },
    { name: 'NMCH', logo: '/logos/nmch-logo.png' },
    { name: 'Paras HMRI Hospital', logo: '/logos/Paras HMRI Hospital.png' },
    { name: 'Patna Medical College', logo: '/logos/patna_medical_college_logo.jfif' },
    { name: 'Ruban Memorial Hospital', logo: '/logos/Ruban Memorial Hospital.png' },
    { name: 'Sainik School Gopalganj', logo: '/logos/Sainik school Gopalganj.jpg' },
    { name: 'Sri Krishna Medical College', logo: '/logos/Sri krishna Medical college.jpeg' },
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
        <title>Medical Supplies & Surgical Instruments Manufacturer in Patna | Unik Surgical</title>
        <meta name="description" content="Leading medical supplies manufacturer in Patna. ISO 13485 certified surgical instruments, hospital furniture & OT equipment supplier. Trusted by AIIMS & top hospitals across Bihar. Best prices on sutures & surgical consumables." />
        <meta name="keywords" content="medical supplies in Patna, surgical instruments manufacturer India, hospital furniture supplier Bihar, sutures manufacturer India, ICU bed supplier Patna, OT table manufacturer India, medical disposables wholesale India" />
        <meta property="og:title" content="Top Medical Supplies Manufacturer in Patna - Hospital Equipment & Surgical Instruments | Unik Surgical" />
        <meta property="og:description" content="ISO 13485 certified manufacturer of surgical instruments, hospital furniture & medical supplies in Patna. Trusted supplier to AIIMS & leading hospitals. Get bulk pricing on sutures & surgical consumables." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://uniksurgical.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Unik Surgical Pvt. Ltd.",
            "url": "https://uniksurgical.com",
            "logo": "/unikSergical logo.png",
            "description": "ISO 13485 certified manufacturer of surgical instruments, hospital furniture, and medical supplies in Patna, Bihar. Leading supplier of sutures and surgical consumables to hospitals across India.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ground Floor, Angad Apartment, GD Mishra Path, New Patliputra Colony",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800013",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.6207",
              "longitude": "85.1416"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "sales",
              "areaServed": ["IN", "Bihar", "Patna"],
              "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
              "https://www.facebook.com/uniksurgical",
              "https://www.linkedin.com/company/unik-surgical"
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Surgical Instruments",
                  "description": "Premium stainless steel surgical instruments manufactured to international standards"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Hospital Furniture",
                  "description": "ICU beds, OT tables, and medical furniture with ISO certification"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Surgical Sutures",
                  "description": "Absorbable and non-absorbable sutures manufactured to USP standards"
                }
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "ISO 13485:2016"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "ISO 9001:2015"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "WHO-GMP"
              }
            ]
          })}
        </script>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Link to={service.link} className="group">
                  <div className="overflow-hidden h-48">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      alt={service.title + ' - Unik Surgical Patna'} 
                      src={service.img}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins text-xl font-semibold mb-3 text-primary-blue group-hover:text-blue-700">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                      >
                        View Details
                      </Button>
                      <Link 
                        to="/contact" 
                        className="ml-2 p-2 bg-accent-gold text-black rounded-lg hover:bg-yellow-400 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </Link>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Users className="mr-4 h-10 w-10 text-primary-blue" />
              Trusted by Leading Hospitals in Bihar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud supplier to AIIMS Patna, government medical colleges, and premier healthcare institutions across Eastern India
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                500+ Projects Completed
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Pan-India Delivery
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Bulk Order Specialist
              </span>
            </div>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex space-x-8 animate-scroll"
              style={{
                width: 'calc(250px * 30)', // 15 clients * 2 for duplication
              }}
            >
              {/* First set of clients */}
              {clients.concat(clients).map((client, index) => (
                <div
                  key={`client-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    onError={(e) => {
                      // hide the parent card when the image fails to load
                      const parent = e.target.closest('div');
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                </div>
              ))}
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
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Award className="mr-4 h-10 w-10 text-primary-blue" />
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to excellence through international standards and regulatory compliance
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="pb-12"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover bg-white rounded-xl shadow-lg overflow-hidden h-full"
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
              </SwiperSlide>
            ))}
          </Swiper>

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
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-poppins text-4xl font-bold mb-6">
              Looking for Medical Supplies in Patna?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get factory-direct prices on surgical instruments, hospital furniture, and OT equipment. Bulk orders welcome.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Quick Delivery</h3>
                <p className="text-sm opacity-90">Fast shipping across Bihar. Emergency orders prioritized.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bulk Pricing</h3>
                <p className="text-sm opacity-90">Special rates for hospitals & distributors. MOQ flexible.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm opacity-90">Technical consultation & after-sales service available.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
                >
                  Request Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-blue"
                >
                  Download Catalogue
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ISO 9001:2015 Certified | WHO-GMP Compliant | 25+ Years in Business
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;