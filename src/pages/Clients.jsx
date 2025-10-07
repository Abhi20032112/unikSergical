import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Building, MapPin } from '@/components/Icons';
import { toast } from '@/ui/use-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Clients = () => {
  const clients = [
    {
      name: 'Maulana Mazharul Haque Arabic & Persian University',
      location: 'Patna, Bihar',
      type: 'Academic & Research Institution',
      projects: ['Educational Infrastructure', 'Research Facilities'],
      image: 'University campus with modern facilities',
      logo: '/logos/Maulana Mazharul.jpg',
      testimonial: 'Unik Surgical has supported our academic and research initiatives with quality infrastructure.'
    },
    {
      name: 'Sainik School',
      location: 'Gopalganj, Bihar',
      type: 'Academic & Research Institution',
      projects: ['Educational Facilities', 'Campus Infrastructure'],
      image: 'Educational institution with modern amenities',
      logo: '/logos/Sainik school Gopalganj.jpg',
      testimonial: 'Reliable partners for our institutional development needs.'
    },
    {
      name: 'Bihar Medical Service Infrastructure Corporation Limited (BMSICL)',
      location: 'Patna, Bihar',
      type: 'Healthcare Institution',
      projects: ['Medical Infrastructure', 'Healthcare Facilities'],
      image: 'Government healthcare corporation building',
      logo: '/logos/Bihar medical infrastructure development.jpg',
      testimonial: 'Outstanding service in healthcare infrastructure development.'
    },
    {
      name: 'All India Institute Of Medical Sciences (AIIMS)',
      location: 'Patna, Bihar',
      type: 'Super Specialty Hospital',
      projects: ['Medical Gas Pipeline Systems', 'Modular Operation Theatres', 'Medical Furniture'],
      image: 'Hospital building with modern architecture',
      logo: '/logos/AIIMS Patna.png',
      testimonial: 'Unik Surgical has transformed our healthcare infrastructure with their expertise and quality.'
    },
    {
      name: 'Indira Gandhi Institute of Medical Sciences (IGIMS)',
      location: 'Patna, Bihar',
      type: 'Super Specialty Hospital',
      projects: ['Medical Furniture', 'Surgical Instruments', 'Building Management Systems'],
      image: 'Modern hospital complex',
      logo: '/logos/Indira_Gandhi_Institute_of_Medical_Sciences_Logo.svg.png',
      testimonial: 'Outstanding service and reliable solutions for our critical healthcare needs.'
    },
    {
      name: 'Nalanda Medical College',
      location: 'Patna, Bihar',
      type: 'Medical College',
      projects: ['Medical Gas Pipeline System', 'Modular Operation Theatre', 'Surgical Equipment'],
      image: 'Educational medical institution',
      logo: '/logos/nmch-logo.png',
      testimonial: 'Excellent quality and timely delivery of healthcare solutions.'
    },
    {
      name: 'Nalanda Medical College & Hospital',
      location: 'Patna, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Medical Infrastructure', 'Hospital Equipment'],
      image: 'Medical college and hospital complex',
      logo: '/logos/nmch-logo.png',
      testimonial: 'Trusted for comprehensive healthcare and educational solutions.'
    },
    {
      name: 'Sri Krishna Medical College & Hospital',
      location: 'Muzaffarpur, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Medical Furniture', 'Surgical Equipment'],
      image: 'Medical institution with modern facilities',
      logo: '/logos/Sri krishna Medical college.jpeg',
      testimonial: 'Reliable partners in healthcare infrastructure.'
    },
    {
      name: 'Anugrah Narayan Magadh Medical College & Hospital',
      location: 'Gaya, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Hospital Infrastructure', 'Medical Equipment'],
      image: 'Comprehensive medical facility',
      logo: '/logos/Anugrah Medical College Gaya.png',
      testimonial: 'Quality solutions for our medical college and hospital.'
    },
    {
      name: 'Jawaharlal Nehru Medical College & Hospital',
      location: 'Bhagalpur, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Surgical Instruments', 'Medical Furniture'],
      image: 'Educational and healthcare complex',
      logo: '/logos/Jawahar Lal Neharu Medical college.png',
      testimonial: 'Excellent service and infrastructure support.'
    },
    {
      name: 'Jan Nayak Karpuri Thakur Medical College & Hospital',
      location: 'Madhepura, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Medical Gas Systems', 'Operation Theatres'],
      image: 'Modern medical college facility',
      logo: '/logos/Jannayak Karpurithakur medical college.png',
      testimonial: 'Partners in advancing healthcare education and services.'
    },
    {
      name: 'All District Hospitals in Bihar',
      location: 'Various Districts, Bihar',
      type: 'District Hospitals',
      projects: ['Medical Furniture', 'Hospital Equipment', 'Infrastructure Development'],
      image: 'District hospital network across Bihar',
      logo: '/logos/All District hospital GoB.png',
      testimonial: 'Comprehensive support for district-level healthcare infrastructure statewide.'
    },
    {
      name: 'Ford Hospital',
      location: 'Patna, Bihar',
      type: 'Hospital',
      projects: ['Medical Equipment'],
      image: 'Modern hospital facility',
      logo: '/logos/Ford Hospital.png',
      testimonial: 'Reliable partners in healthcare solutions.'
    },
    {
      name: 'Paras HMRI Hospital',
      location: 'Patna, Bihar',
      type: 'Hospital',
      projects: ['Healthcare Facilities'],
      image: 'Advanced medical center',
      logo: '/logos/Paras HMRI Hospital.png',
      testimonial: 'Quality healthcare solutions.'
    },
    {
      name: 'Patna Medical College & Hospital',
      location: 'Patna, Bihar',
      type: 'Medical College & Hospital',
      projects: ['Medical Infrastructure'],
      image: 'Educational and healthcare institution',
      logo: '/logos/patna_medical_college_logo.jfif',
      testimonial: 'Trusted for medical education and healthcare.'
    },
    {
      name: 'Ruban Memorial Hospital',
      location: 'Patna, Bihar',
      type: 'Hospital',
      projects: ['Hospital Equipment'],
      image: 'Specialized hospital services',
      logo: '/logos/Ruban Memorial Hospital.png',
      testimonial: 'Reliable partners in healthcare.'
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

          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="pb-12"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group text-center"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="h-24 flex items-center justify-center mb-4">
                        <img
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          alt={client.name}
                          src={client.logo || "https://images.unsplash.com/photo-1551190822-a9333d879b1f"}
                        />
                      </div>
                      <h3 className="font-poppins text-lg font-bold text-gray-800 mb-2">
                        {client.name}
                      </h3>
                      <div className="flex items-center justify-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{client.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary-blue text-white p-2 rounded-full hover:bg-primary-blue/80 transition-colors"></div>
            <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary-blue text-white p-2 rounded-full hover:bg-primary-blue/80 transition-colors"></div>
            <div className="swiper-pagination mt-4"></div>
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
