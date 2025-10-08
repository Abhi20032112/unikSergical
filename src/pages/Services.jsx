import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tool, Building, Utensils, Bed, Scissors, Settings, Check, MessageSquare, PenTool, Cog, Headphones, FaComments, FaPencilAlt, FaCog, FaHeadphones } from '@/components/Icons';
import { Button } from '@/ui/button';
import { toast } from '@/ui/use-toast';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Tool,
      title: 'Medical Gas Pipeline Systems',
      description: 'Complete medical gas infrastructure including oxygen, nitrous oxide, medical air, and vacuum systems with centralized monitoring and alarm systems.',
      features: ['Centralized gas supply manifold', 'Zone valve boxes with alarms', 'Pipeline testing & certification', 'Emergency shut-off systems', 'Pressure monitoring', 'Compliance with IS 13450'],
      applications: ['Hospitals', 'Clinics', 'Operation Theatres', 'ICUs', 'Emergency Departments'],
      benefits: ['Reliable gas supply', 'Safety compliance', 'Cost-effective operation', 'Easy maintenance']
    },
    {
      icon: Building,
      title: 'Modular Operation Theatres',
      description: 'State-of-the-art modular OT solutions with laminar air flow, integrated lighting, and advanced surgical equipment for optimal surgical environments.',
      features: ['Laminar air flow systems', 'Integrated LED lighting', 'Climate control systems', 'Modular wall systems', 'Surgical equipment integration', 'Fire safety systems'],
      applications: ['General Surgery', 'Cardiac Surgery', 'Orthopedic Surgery', 'Neurosurgery', 'Minimally Invasive Surgery'],
      benefits: ['Infection control', 'Optimal lighting', 'Flexible design', 'Easy maintenance']
    },
    {
      icon: Utensils,
      title: 'Laundry & Kitchen Equipment',
      description: 'Commercial-grade laundry and kitchen equipment designed for healthcare facilities with strict hygiene standards and energy efficiency.',
      features: ['Industrial washing machines', 'Steam sterilizers', 'Commercial dishwashers', 'Food service equipment', 'Hygiene monitoring systems', 'Energy-efficient design'],
      applications: ['Hospital Kitchens', 'Laundry Services', 'Food Service Areas', 'Sterilization Units'],
      benefits: ['Hygiene compliance', 'Energy efficiency', 'Durable construction', 'Easy operation']
    },
    {
      icon: Bed,
      title: 'Medical & Non-Medical Furniture',
      description: 'Ergonomic and durable furniture solutions including patient beds, examination tables, and administrative furniture designed for healthcare environments.',
      features: ['Patient beds & stretchers', 'Examination tables', 'Medical cabinets', 'Administrative furniture', 'Seating solutions', 'Storage systems'],
      applications: ['Patient Rooms', 'Examination Areas', 'Administrative Offices', 'Waiting Areas', 'Treatment Rooms'],
      benefits: ['Patient comfort', 'Staff efficiency', 'Durable design', 'Easy maintenance']
    },
    {
      icon: Scissors,
      title: 'Hospital Curtains & Track Systems',
      description: 'Privacy curtains and track systems designed for healthcare environments with antimicrobial properties and easy maintenance.',
      features: ['Antimicrobial fabric curtains', 'Smooth track systems', 'Privacy solutions', 'Easy maintenance', 'Fire retardant materials', 'Custom sizing'],
      applications: ['Patient Rooms', 'Examination Areas', 'Emergency Departments', 'Recovery Rooms'],
      benefits: ['Infection control', 'Patient privacy', 'Easy cleaning', 'Durable materials']
    },
    {
      icon: Settings,
      title: 'Building Management Systems',
      description: 'Integrated BMS solutions for monitoring and controlling HVAC, lighting, security, and other building systems for optimal facility management.',
      features: ['HVAC control systems', 'Lighting management', 'Security integration', 'Energy monitoring', 'Fire safety systems', 'Maintenance scheduling'],
      applications: ['Hospital Buildings', 'Medical Centers', 'Administrative Buildings', 'Support Facilities'],
      benefits: ['Energy efficiency', 'Centralized control', 'Cost savings', 'Improved safety']
    },
  ];

  const handleLearnMore = () => {
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
        <title>Healthcare Infrastructure Services - Medical Gas Systems, Modular OTs | Unik Surgical</title>
        <meta name="description" content="Comprehensive healthcare infrastructure services by Unik Surgical. Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture, Building Management Systems, Laundry & Kitchen Equipment. 25+ years experience, ISO 9001:2015 certified." />
        <meta name="keywords" content="medical gas pipeline systems, modular operation theatres, medical furniture, building management systems, healthcare infrastructure services, hospital equipment installation, Patna Bihar" />
        <meta property="og:title" content="Healthcare Infrastructure Services - Unik Surgical Pvt. Ltd." />
        <meta property="og:description" content="Comprehensive healthcare infrastructure services including Medical Gas Pipeline Systems, Modular Operation Theatres, and Building Management Systems." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive healthcare infrastructure solutions tailored to your needs
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
              <Tool className="mr-4 h-10 w-10 text-primary-blue" />
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From medical gas systems to building management, we provide end-to-end 
              infrastructure solutions for modern healthcare facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl shadow-lg"
              >
                <div className="p-8 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue text-white rounded-lg mr-4 shadow-md">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-poppins text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-highlight-green mr-2" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-primary-blue font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {service.applications && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.slice(0, 3).map((app, appIndex) => (
                            <span key={appIndex} className="px-3 py-1 bg-soft-cyan text-primary-blue text-xs rounded-full">
                              {app}
                            </span>
                          ))}
                          {service.applications.length > 3 && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                              +{service.applications.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-primary-blue hover:bg-blue-700 mt-auto"
                      onClick={handleLearnMore}
                    >
                      Learn More
                    </Button>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional healthcare infrastructure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FaComments, title: 'Consultation', description: 'Understanding your specific requirements' },
              { icon: FaPencilAlt, title: 'Design', description: 'Creating customized solutions with detailed planning' },
              { icon: FaCog, title: 'Implementation', description: 'Professional installation with quality assurance' },
              { icon: FaHeadphones, title: 'Support', description: 'Ongoing maintenance and technical support' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-light-bg rounded-full flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-lg">
                      <process.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
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
              Ready to Upgrade Your Healthcare Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts for a free consultation and customized solution proposal
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent-gold text-black hover:bg-yellow-400 glow-effect"
              >
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;