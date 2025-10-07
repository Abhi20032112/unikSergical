import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from '@/components/Icons';
import { Button } from '@/ui/button';
import { toast } from '@/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', attachment: null });

  const handleInputChange = (e) => {
    if (e.target.name === 'attachment') {
      setFormData({ ...formData, attachment: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here if needed
  };

  const contactInfo = [
    { icon: MapPin, title: 'Corporate Office', details: ['2C/159, G. D. Mishra Path', 'New Patliputra Colony', 'Patna - 800013, Bihar, India'] },
    { icon: MapPin, title: 'Branch Office', details: ['H-230, BETA-II', 'Greater Noida, Uttar Pradesh, India'] },
    { icon: MapPin, title: 'Factory', details: ['Ahilya Knowledge Park', 'Near Pani Tanki, Tekniwas', 'NH-85, Chapra - 841213, Bihar, India'] },
    { icon: Phone, title: 'Phone Numbers', details: ['+91 612 123 4567', '+91 98765 43210', 'Emergency: +91 98765 43211'] },
    { icon: Mail, title: 'Email Addresses', details: ['info@uniksurgical.com', 'sales@uniksurgical.com', 'support@uniksurgical.com'] },
    { icon: Clock, title: 'Business Hours', details: ['Mon - Fri: 9:00am - 6:00pm', 'Saturday: 9:00am - 2:00pm', 'Sunday: Closed (Emergency support available)'] },
  ];

  const services = [
    'Medical Gas Pipeline Systems', 'Modular Operation Theatres', 'Laundry & Kitchen Equipment',
    'Medical Furniture', 'Hospital Curtains', 'Building Management Systems', 'Other',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Solutions | Patna, Bihar</title>
        <meta name="description" content="Contact Unik Surgical for healthcare infrastructure solutions. Offices in Patna, Bihar, Greater Noida, Uttar Pradesh, and factory in Chapra, Bihar. Serving Eastern India with Medical Gas Pipeline Systems, Modular Operation Theatres, and Medical Furniture. Get free consultation and quotes." />
        <meta name="keywords" content="contact unik surgical, healthcare infrastructure consultation, Patna Bihar, Greater Noida, Chapra, medical gas systems, operation theatres, hospital equipment, Eastern India" />
        <meta property="og:title" content="Contact Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Solutions" />
        <meta property="og:description" content="Get in touch with Unik Surgical for healthcare infrastructure solutions. Contact our experts for consultations, quotes, and project discussions." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Ready to transform your healthcare facility? Let's discuss your project
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue text-white rounded-full mb-4 shadow-md">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent" placeholder="Full Name *" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent" placeholder="Email Address *" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent" placeholder="Phone Number" />
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent" placeholder="Company/Organization" />
                </div>
                <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-gray-500">
                  <option value="">Select a service</option>
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent" placeholder="Tell us about your project requirements... *"></textarea>

                <div>
                  <label htmlFor="attachment" className="block mb-2 font-semibold text-gray-700">Attachment (optional)</label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleInputChange}
                    className="w-full"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary-blue hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-6">Find Us Here</h2>
              <p className="text-gray-600 mb-8">Visit our office in Patna, Bihar for in-person consultations.</p>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6 overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=85.1376,25.5941,85.1476,25.6041&layer=mapnik"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
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
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We provide healthcare infrastructure solutions across Eastern India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { state: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'], projects: '200+' },
              { state: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'], projects: '150+' },
              { state: 'West Bengal', cities: ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman'], projects: '100+' },
              { state: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur'], projects: '75+' },
              { state: 'Uttar Pradesh', cities: ['Varanasi', 'Allahabad', 'Gorakhpur', 'Lucknow', 'Kanpur'], projects: '50+' },
              { state: 'Other States', cities: ['Assam', 'Manipur', 'Tripura', 'Arunachal Pradesh'], projects: '25+' },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-poppins text-xl font-bold text-primary-blue mb-4">
                  {area.state}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Major Cities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span key={cityIndex} className="px-3 py-1 bg-soft-cyan text-primary-blue text-sm rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">{area.projects}</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;