import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Users } from 'lucide-react';
import { toast } from '@/ui/use-toast';

const Team = () => {
  const teamMembers = [
    { 
      name: 'Manoj Kumar Singh', 
      position: 'Managing Director', 
      image: 'Professional portrait of Manoj Kumar Singh in business attire', 
      bio: 'Visionary leader with 25+ years of experience in healthcare infrastructure. Founded Unik Surgical in 2000 and has led the company to become a trusted name in Eastern India.',
      experience: '25+ Years',
      education: 'B.Tech Mechanical Engineering',
      email: 'manoj@uniksurgical.com', 
      phone: '+91 98765 43210',
      expertise: ['Strategic Planning', 'Business Development', 'Healthcare Infrastructure']
    },
    { 
      name: 'Dr. Rajesh Kumar', 
      position: 'Chief Technical Officer', 
      image: 'Professional portrait of Dr. Rajesh Kumar in business attire', 
      bio: 'Expert in medical gas systems and modular operation theatre design with 20+ years of experience in healthcare engineering.',
      experience: '20+ Years',
      education: 'Ph.D. Biomedical Engineering',
      email: 'rajesh@uniksurgical.com', 
      phone: '+91 98765 43211',
      expertise: ['Medical Gas Systems', 'OT Design', 'Biomedical Engineering']
    },
    { 
      name: 'Priya Sharma', 
      position: 'Head of Operations', 
      image: 'Professional portrait of Priya Sharma in business attire', 
      bio: 'Operations specialist ensuring seamless project execution and quality delivery across all healthcare infrastructure projects.',
      experience: '15+ Years',
      education: 'MBA Operations Management',
      email: 'priya@uniksurgical.com', 
      phone: '+91 98765 43212',
      expertise: ['Project Management', 'Quality Control', 'Operations Excellence']
    },
    { 
      name: 'Amit Verma', 
      position: 'Senior Project Manager', 
      image: 'Professional portrait of Amit Verma in business attire', 
      bio: 'Experienced manager for large-scale healthcare infrastructure projects with expertise in modular operation theatres.',
      experience: '12+ Years',
      education: 'B.Tech Civil Engineering',
      email: 'amit@uniksurgical.com', 
      phone: '+91 98765 43213',
      expertise: ['Project Management', 'Construction', 'Modular Systems']
    },
    { 
      name: 'Sunita Devi', 
      position: 'Quality Assurance Manager', 
      image: 'Professional portrait of Sunita Devi in business attire', 
      bio: 'Quality expert ensuring all installations meet international standards and regulatory compliance requirements.',
      experience: '10+ Years',
      education: 'M.Sc. Quality Management',
      email: 'sunita@uniksurgical.com', 
      phone: '+91 98765 43214',
      expertise: ['Quality Assurance', 'Compliance', 'ISO Standards']
    },
    { 
      name: 'Ravi Gupta', 
      position: 'Business Development Head', 
      image: 'Professional portrait of Ravi Gupta in business attire', 
      bio: 'Strategic professional expanding our market reach and partnerships across Eastern India and beyond.',
      experience: '8+ Years',
      education: 'MBA Marketing',
      email: 'ravi@uniksurgical.com', 
      phone: '+91 98765 43215',
      expertise: ['Business Development', 'Marketing', 'Client Relations']
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
        <title>Leadership Team - Unik Surgical Pvt. Ltd. | Healthcare Infrastructure Experts</title>
        <meta name="description" content="Meet the experienced leadership team at Unik Surgical. Our experts bring decades of healthcare infrastructure experience to every project. Managing Director Manoj Kumar Singh leads our team of 100+ professionals." />
        <meta name="keywords" content="unik surgical team, healthcare infrastructure experts, medical gas systems experts, operation theatre specialists, Patna Bihar, leadership team" />
        <meta property="og:title" content="Leadership Team - Unik Surgical Pvt. Ltd." />
        <meta property="og:description" content="Meet the experienced leadership team at Unik Surgical. Our experts bring decades of healthcare infrastructure experience to every project." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl opacity-90">
              Meet the experts driving innovation in healthcare infrastructure
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
              Experience & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience with innovative thinking to deliver 
              exceptional healthcare infrastructure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-hover bg-white rounded-xl shadow-lg overflow-hidden text-center">
                  <div className="relative overflow-hidden h-64">
                    <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt={member.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-blue font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Experience: <span className="font-medium text-primary-blue">{member.experience}</span></span>
                        <span>Education: <span className="font-medium text-primary-blue">{member.education}</span></span>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-700 mb-1">Expertise:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-soft-cyan text-primary-blue text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                      <motion.a href={`mailto:${member.email}`} whileHover={{ scale: 1.2, y: -2 }} className="p-2 bg-primary-blue text-white rounded-full hover:bg-blue-700 transition-colors">
                        <Mail className="h-4 w-4" />
                      </motion.a>
                      <motion.a href={`tel:${member.phone}`} whileHover={{ scale: 1.2, y: -2 }} className="p-2 bg-highlight-green text-white rounded-full hover:bg-green-700 transition-colors">
                        <Phone className="h-4 w-4" />
                      </motion.a>
                      <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </motion.a>
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
                Our Company Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Unik Surgical, we believe that great healthcare infrastructure starts with 
                great people. Our team is united by a shared commitment to excellence, innovation, 
                and making a positive impact on healthcare delivery.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Innovation', 'Collaboration', 'Excellence', 'Growth'].map(val => (
                  <div key={val}>
                    <h4 className="font-poppins font-semibold text-primary-blue mb-2">{val}</h4>
                    <p className="text-gray-600 text-sm">Fostering a culture of continuous improvement.</p>
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
              <img class="w-full rounded-lg shadow-lg" alt="Unik Surgical team working together in office environment" src="https://images.unsplash.com/photo-1579684288452-b334934f845f" />
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
              Join Our Growing Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals who share our passion 
              for healthcare excellence. Explore career opportunities with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={handleContactClick} whileHover={{ scale: 1.05 }} className="bg-accent-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                View Open Positions
              </motion.button>
              <motion.button onClick={handleContactClick} whileHover={{ scale: 1.05 }} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors">
                Submit Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;