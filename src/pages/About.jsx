import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Building } from '@/components/Icons';

const About = () => {
  const timeline = [
    { year: '2000', event: 'Company established in Patna, Bihar with focus on medical furniture', achievement: 'Started with 5 employees and local hospital projects' },
    { year: '2005', event: 'First major hospital project completed - 100-bed facility', achievement: 'Expanded team to 25 employees and established quality standards' },
    { year: '2010', event: 'Expanded to medical gas pipeline systems', achievement: 'Became certified installer for medical gas systems and added 50+ projects' },
    { year: '2015', event: 'Introduced modular operation theatres and BMS solutions', achievement: 'Completed 200+ projects across Bihar and neighboring states' },
    { year: '2020', event: 'Achieved ISO 9001:2015 certification and digital transformation', achievement: 'Implemented modern project management systems and expanded to 100+ employees' },
    { year: '2024', event: 'Leading healthcare infrastructure provider with 500+ completed projects', achievement: 'Serving 150+ hospitals and medical facilities across Eastern India' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every solution designed with patient care in mind',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and methods',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and honest business practices',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Unik Surgical Pvt. Ltd. - 25+ Years Healthcare Infrastructure Excellence</title>
        <meta name="description" content="Learn about Unik Surgical's 25+ year journey in healthcare infrastructure. Offices in Patna, Bihar, Greater Noida, Uttar Pradesh, and factory in Chapra, Bihar. Founded in 2000. ISO 9001:2015 certified with 500+ completed projects. Meet our leadership team and discover our mission, vision, and values." />
        <meta name="keywords" content="about unik surgical, healthcare infrastructure company, Patna Bihar, Greater Noida, Chapra, 25 years experience, ISO certified, medical gas systems, operation theatres, company history" />
        <meta property="og:title" content="About Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Excellence" />
        <meta property="og:description" content="25+ years of excellence in healthcare infrastructure development. Meet our leadership team and discover our mission, vision, and values." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">About Unik Surgical</h1>
            <p className="text-xl opacity-90">
              25+ years of excellence in healthcare infrastructure development
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
              <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-6 flex items-center">
                <Building className="mr-4 h-10 w-10 text-primary-blue" />
                Our Journey Since 2000
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2000 in Patna, Bihar, Unik Surgical Pvt. Ltd. has been at the 
                forefront of healthcare infrastructure development. What started as a vision to 
                improve healthcare facilities has grown into a comprehensive solution provider 
                serving hospitals across the region.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to set new standards in healthcare infrastructure, combining 
                traditional values with modern technology to create healing environments that 
                truly make a difference.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img class="w-full rounded-lg shadow-lg" alt="Our journey since 2000" src="/images/our-journey.jpeg" />
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
              Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionary behind our success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img class="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" alt="Manoj Kumar Singh - Managing Director" src="/images/team/MD.jpg" />
                <h3 className="font-poppins text-2xl font-bold text-primary-blue mb-2">
                  Manoj Kumar Singh
                </h3>
                <p className="text-gray-600 font-medium">Managing Director</p>
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-lg text-gray-700 italic mb-4 border-l-4 border-soft-cyan pl-4">
                  "Our mission has always been to create healthcare environments that not only 
                  meet the highest technical standards but also provide comfort and hope to 
                  patients and their families."
                </blockquote>
                <p className="text-gray-600">
                  With over two decades of experience, Manoj Kumar Singh has led Unik Surgical to become a trusted name. His vision of combining innovation with compassion continues to drive our company forward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue text-white rounded-full mb-6 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive healthcare infrastructure solutions that enhance patient 
                care and support medical professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-cyan text-white rounded-full mb-6 shadow-lg">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare infrastructure company in India, known for innovation, 
                quality, and commitment to improving healthcare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold text-black rounded-full mb-6 shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, excellence, innovation, and compassion guide everything we do. We believe 
                in building lasting relationships based on trust.
              </p>
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our every decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue text-white rounded-full mb-4 shadow-lg">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our 25-year history
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center w-full mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 card-hover ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="font-poppins text-2xl font-bold text-primary-blue mb-2">
                      {item.year}
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{item.event}</p>
                    {item.achievement && (
                      <p className="text-sm text-gray-600 italic">{item.achievement}</p>
                    )}
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary-blue rounded-full border-4 border-white shadow-lg"></div>
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
              Our Achievements & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Recognized excellence in healthcare infrastructure development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'ISO 9001:2015', description: 'Quality Management System Certification', icon: '🏆' },
              { title: '500+ Projects', description: 'Successfully completed healthcare infrastructure projects', icon: '🏥' },
              { title: '150+ Clients', description: 'Hospitals and medical facilities served', icon: '👥' },
              { title: '25+ Years', description: 'Experience in healthcare infrastructure', icon: '⏰' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-light-bg rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-poppins text-xl font-bold text-primary-blue mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;