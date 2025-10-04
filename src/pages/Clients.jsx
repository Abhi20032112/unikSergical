import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Building, MapPin } from 'lucide-react';
import { toast } from '@/ui/use-toast';

const Clients = () => {
  const clients = [
    {
      name: 'All India Institute of Medical Sciences (AIIMS)',
      location: 'Patna, Bihar',
      type: 'Super Specialty Hospital',
      projects: ['Medical Gas Pipeline Systems', 'Modular Operation Theatres', 'Medical Furniture'],
      image: 'Hospital building with modern architecture',
      logo: '/images/clients/aiims.png',
      testimonial: 'Unik Surgical has transformed our healthcare infrastructure with their expertise and quality.'
    },
    {
      name: 'Indira Gandhi Institute of Medical Sciences (IGIMS)',
      location: 'Patna, Bihar',
      type: 'Super Specialty Hospital',
      projects: ['Medical Furniture', 'Surgical Instruments', 'Building Management Systems'],
      image: 'Modern hospital complex',
      logo: '/images/clients/igims.png',
      testimonial: 'Outstanding service and reliable solutions for our critical healthcare needs.'
    },
    {
      name: 'Nalanda Medical College',
      location: 'Patna, Bihar',
      type: 'Government Hospital',
      projects: ['Medical Gas Pipeline System', 'Modular Operation Theatre', 'Surgical Equipment'],
      image: 'Educational medical institution',
      logo: '/images/clients/nmch.png',
      testimonial: 'Excellent quality and timely delivery of healthcare solutions.'
    },
    {
      name: 'Patna Medical College Hospital',
      location: 'Patna, Bihar',
      type: 'Government Hospital',
      projects: ['Medical Gas Pipeline System', 'Modular Operation Theatre'],
      image: 'Hospital building with modern architecture',
      logo: '/images/clients/patna-medical-college.jfif',
      testimonial: 'Unik Surgical has transformed our healthcare infrastructure with their expertise and quality.'
    },
    {
      name: 'Ruban Memorial Hospital',
      location: 'Patna, Bihar',
      type: 'Private Hospital',
      projects: ['Surgical Instruments', 'Laundry Equipment'],
      image: 'Contemporary hospital facility',
      logo: '/images/clients/ruban-memorial.png',
      testimonial: 'Their commitment to excellence is evident in every project they undertake.'
    },
    {
      name: 'Paras HMRI Hospital',
      location: 'Patna, Bihar',
      type: 'Multi-Specialty Hospital',
      projects: ['Modular Operation Theatre', 'Medical Gas System'],
      image: 'State-of-the-art medical facility',
      logo: '/images/clients/paras-hmri.png',
      testimonial: 'Professional team with cutting-edge technology solutions.'
    },
    {
      name: 'Ford Hospital',
      location: 'Patna, Bihar',
      type: 'Private Hospital',
      projects: ['Medical Furniture', 'Hospital Curtains'],
      image: 'Modern healthcare center',
      logo: '/images/clients/ford-hospital.png',
      testimonial: 'Reliable partners for all our infrastructure requirements.'
    },
    {
      name: 'Magadh Medical College Hospital',
      location: 'Gaya, Bihar',
      type: 'Government Hospital',
      projects: ['Medical Gas Pipeline', 'Surgical Equipment'],
      image: 'Educational medical institution',
      testimonial: 'Excellent quality and timely delivery of healthcare solutions.'
    },
    {
      name: 'Rajendra Institute of Medical Sciences',
      location: 'Ranchi, Jharkhand',
      type: 'Government Hospital',
      projects: ['Modular OT', 'Medical Furniture'],
      image: 'Comprehensive medical institute',
      testimonial: 'Trusted for their expertise in healthcare infrastructure.'
    },
    {
      name: 'Medanta Hospital',
      location: 'Ranchi, Jharkhand',
      type: 'Private Hospital',
      projects: ['Building Management System', 'Medical Gas System'],
      image: 'Advanced medical center',
      testimonial: 'Innovative solutions that enhance patient care.'
    },
    {
      name: 'Apollo Hospitals',
      location: 'Kolkata, West Bengal',
      type: 'Multi-Specialty Hospital',
      projects: ['Complete Infrastructure Setup', 'Surgical Instruments'],
      image: 'Leading healthcare provider',
      testimonial: 'Comprehensive healthcare solutions delivered with precision.'
    },
    {
      name: 'AMRI Hospitals',
      location: 'Kolkata, West Bengal',
      type: 'Super Specialty Hospital',
      projects: ['Modular Operation Theatre', 'Medical Furniture'],
      image: 'Modern medical facility',
      testimonial: 'Partners in building world-class healthcare environments.'
    },
    {
      name: 'Tata Main Hospital',
      location: 'Jamshedpur, Jharkhand',
      type: 'Industrial Hospital',
      projects: ['Medical Gas Pipeline', 'Laundry Equipment'],
      image: 'Industrial healthcare facility',
      testimonial: 'Reliable and efficient healthcare infrastructure solutions.'
    },
    {
      name: 'Ispat General Hospital',
      location: 'Rourkela, Odisha',
      type: 'Industrial Hospital',
      projects: ['Medical Furniture', 'Surgical Equipment'],
      image: 'Steel industry medical center',
      testimonial: 'Quality healthcare solutions for industrial settings.'
    },
  ];

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Clients - Unik Surgical Pvt. Ltd. | Healthcare Infrastructure Partners</title>
        <meta name="description" content="Meet our valued clients across Eastern India. Unik Surgical has successfully completed 500+ projects for hospitals, medical centers, and healthcare facilities in Bihar, Jharkhand, West Bengal, Odisha, and beyond." />
        <meta name="keywords" content="unik surgical clients, healthcare partners, hospital projects, medical infrastructure clients, Patna Bihar, Eastern India hospitals" />
        <meta property="og:title" content="Our Clients - Unik Surgical Pvt. Ltd." />
        <meta property="og:description" content="Trusted healthcare infrastructure partners serving 150+ hospitals and medical facilities across Eastern India." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl opacity-90">
              Trusted partners in healthcare infrastructure across Eastern India
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
              <Users className="mr-4 h-10 w-10 text-primary-blue" />
              Healthcare Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have successfully partnered with leading hospitals and medical facilities
              across Eastern India, delivering exceptional healthcare infrastructure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-hover bg-white rounded-xl shadow-lg overflow-hidden text-center">
                  <div className="relative overflow-hidden h-48">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt={client.name} src={client.logo || "https://images.unsplash.com/photo-1551190822-a9333d879b1f"} />
                    <div className="absolute top-4 right-4 bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {client.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2">
                      {client.name}
                    </h3>
                    <div className="flex items-center justify-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{client.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 italic">"{client.testimonial}"</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Projects Completed:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {client.projects.map((project, projectIndex) => (
                          <span key={projectIndex} className="px-2 py-1 bg-soft-cyan text-primary-blue text-xs rounded-full">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
                Building Lasting Partnerships
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our clients are not just customers—they are partners in our mission to
                improve healthcare infrastructure across Eastern India. We take pride in
                the relationships we've built over 25 years.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, title: '500+ Projects', desc: 'Successfully completed' },
                  { icon: Building, title: '150+ Clients', desc: 'Across Eastern India' },
                  { icon: Users, title: '25+ Years', desc: 'Of trusted service' },
                  { icon: MapPin, title: '5 States', desc: 'Bihar, Jharkhand, West Bengal, Odisha, UP' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue text-white rounded-full mb-3">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-poppins font-semibold text-primary-blue mb-1">{stat.title}</h4>
                    <p className="text-gray-600 text-sm">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img className="w-full rounded-lg shadow-lg" alt="Unik Surgical team working with clients" src="https://images.unsplash.com/photo-1552664730-d307ca884978" />
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
              Join Our Growing Family of Partners
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your healthcare facility? Let's discuss how we can
              partner to create exceptional healthcare infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={handleContactClick} whileHover={{ scale: 1.05 }} className="bg-accent-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Project
              </motion.button>
              <motion.button onClick={handleContactClick} whileHover={{ scale: 1.05 }} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors">
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Clients;
