import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Box, ChevronDown, Bed, Scissors, Cog, PenTool, Building, FileText, Eye } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { toast } from '@/ui/use-toast';
import { useLocation } from 'react-router-dom';

const latestProductCatalogs = [
  {
    name: 'CSSD',
    file: '/product and details/latest files 10 july/CSSD.pdf',
    description: 'Central sterile supply department product catalog.'
  },
  {
    name: 'Kitchen Equipment',
    file: '/product and details/latest files 10 july/Kitchen Equipment.pdf',
    description: 'Commercial kitchen equipment catalog for healthcare facilities.'
  },
  {
    name: 'Laundry',
    file: '/product and details/latest files 10 july/LAUNDRY.pdf',
    description: 'Laundry equipment and facility support catalog.'
  },
  {
    name: 'Medical Gas Pipeline',
    file: '/product and details/latest files 10 july/MEDICAL GAS PIPELINE.pdf',
    description: 'Medical gas pipeline system catalog.'
  },
  {
    name: 'Modular Operation Theatre',
    file: '/product and details/latest files 10 july/MODULAR  OPERATION THEATRE.pdf',
    description: 'Modular operation theatre solutions catalog.'
  }
];

const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('furniture');
  const [selectedCatalog, setSelectedCatalog] = useState(latestProductCatalogs[0]);

  const [openMedical, setOpenMedical] = useState(true);
  const [openNonMedical, setOpenNonMedical] = useState(true);
  const [openSurgical, setOpenSurgical] = useState(true);
  const [openDiagnostic, setOpenDiagnostic] = useState(true);
  const [openSupport, setOpenSupport] = useState(true);

  useEffect(() => {
    if (location.hash === '#surgical-instruments-section') {
      setActiveTab('instruments');
      // Scroll to Surgical Instruments section
      const element = document.getElementById('surgical-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#diagnostic-instruments-section') {
      setActiveTab('instruments');
      const element = document.getElementById('diagnostic-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#support-instruments-section') {
      setActiveTab('instruments');
      const element = document.getElementById('support-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#non-medical-furniture') {
      setActiveTab('furniture');
      const element = document.getElementById('non-medical-furniture');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#medical-furniture') {
      setActiveTab('furniture');
      const element = document.getElementById('medical-furniture');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveTab('furniture');
    }
  }, [location.hash]);

  const furnitureCatalog = {
    medical: [
      { name: "ICU Bed (Manual & Motorized)", icon: Bed, description: "Advanced ICU beds with manual and motorized adjustments for optimal patient comfort and caregiver efficiency." },
      { name: "Semi-Fowler Bed", icon: Bed, description: "Semi-fowler beds designed for patient recovery with adjustable backrest for comfortable positioning." },
      { name: "Fowler Bed", icon: Bed, description: "Fowler beds with full backrest adjustment, ideal for patients requiring elevated positioning." },
      { name: "Examination Couch", icon: Bed, description: "Ergonomic examination couches with adjustable height and durable upholstery for medical examinations." },
      { name: "Bedside Locker (Standard & Deluxe)", icon: Box, description: "Bedside lockers in standard and deluxe variants with storage compartments and smooth finish." },
      { name: "Overbed Table", icon: Box, description: "Adjustable overbed tables for patient meals, reading, and medical procedures." },
      { name: "Attendant Bed", icon: Bed, description: "Comfortable attendant beds for caregivers, designed for hospital environments." },
      { name: "Patient Trolley (Stretcher Type)", icon: Box, description: "Stretcher-type patient trolleys with smooth wheels and safety features for patient transport." },
      { name: "Emergency Recovery Trolley", icon: Box, description: "Hydraulic emergency recovery trolleys for critical patient handling and procedures." },
      { name: "Wheelchair (Standard & Foldable)", icon: Box, description: "Standard and foldable wheelchairs with ergonomic design and easy maneuverability." },
      { name: "Commode Chair", icon: Box, description: "Commode chairs for patient hygiene and comfort in medical facilities." },
      { name: "Revolving Stool (SS & MS)", icon: Box, description: "Revolving stools in stainless steel and mild steel for medical professionals." },
      { name: "IV Stand (SS & MS)", icon: Box, description: "IV stands in stainless steel and mild steel with adjustable height and stability." },
      { name: "Instrument Trolley (2 & 3 Shelves)", icon: Box, description: "Instrument trolleys with 2 or 3 shelves for organized storage and transport of medical instruments." },
      { name: "Mayo's Trolley", icon: Box, description: "Mayo's trolleys designed for surgical instrument organization during operations." },
      { name: "Dressing Trolley", icon: Box, description: "Dressing trolleys with compartments for wound care supplies and medications." },
      { name: "Medicine Trolley", icon: Box, description: "Medicine trolleys with secure storage for pharmaceuticals and medical supplies." },
      { name: "Crash Cart", icon: Box, description: "Emergency crash carts equipped with life-saving equipment and medications." }
    ],
    nonMedical: [
      { name: "Office Table (Various Sizes)", icon: Building, description: "Professional office tables in various sizes for administrative and office workspaces." },
      { name: "Executive Chair", icon: Building, description: "Comfortable executive chairs with ergonomic design for long working hours." },
      { name: "Visitor Chair", icon: Building, description: "Elegant visitor chairs for waiting areas and meeting rooms." },
      { name: "File Cabinet", icon: Building, description: "Secure file cabinets for organized document storage in offices." },
      { name: "Storage Rack", icon: Building, description: "Industrial storage racks for efficient inventory management." },
      { name: "Wardrobe (Single & Double Door)", icon: Building, description: "Wardrobes with single and double doors for personal storage in facilities." },
      { name: "Shoe Rack", icon: Building, description: "Organized shoe racks for entry areas and changing rooms." },
      { name: "Dining Table Set", icon: Building, description: "Dining table sets for cafeteria and break areas in institutions." },
      { name: "Waiting Area Sofa (3-Seater & 5-Seater)", icon: Building, description: "Comfortable sofas for waiting areas in hospitals and offices." }
    ]
  };

  const instrumentCatalogue = {
    surgical: [
      { name: "Minor Surgery Set", icon: Scissors, description: "Comprehensive minor surgery instrument sets for basic surgical procedures." },
      { name: "Major Surgery Set", icon: Scissors, description: "Complete major surgery instrument sets for complex surgical operations." },
      { name: "ENT Set", icon: Scissors, description: "Specialized ENT instrument sets for ear, nose, and throat procedures." },
      { name: "Gynecology Set", icon: Scissors, description: "Gynecology instrument sets for obstetric and gynecological examinations." },
      { name: "Orthopedic Set", icon: Scissors, description: "Orthopedic instrument sets for bone and joint surgical procedures." },
      { name: "General Instrument Set", icon: Scissors, description: "General purpose surgical instrument sets for various medical procedures." },
      { name: "Dressing Set", icon: Scissors, description: "Dressing instrument sets for wound care and dressing changes." },
      { name: "Suture Set", icon: Scissors, description: "Suture instrument sets for wound closure and stitching." },
      { name: "Delivery Set", icon: Scissors, description: "Delivery instrument sets for obstetric procedures and childbirth." },
      { name: "Laparoscopy Instruments (Basic)", icon: Scissors, description: "Basic laparoscopy instrument sets for minimally invasive surgeries." }
    ],
    diagnostic: [
      { name: "Stethoscope", icon: PenTool, description: "High-quality stethoscopes for accurate heart and lung auscultation." },
      { name: "BP Apparatus (Mercury & Digital)", icon: PenTool, description: "Blood pressure apparatus in mercury and digital variants for hypertension monitoring." },
      { name: "Thermometer (Digital & Infrared)", icon: PenTool, description: "Digital and infrared thermometers for precise body temperature measurement." },
      { name: "Otoscope", icon: PenTool, description: "Otoscope for ear examination and diagnosis of ear conditions." },
      { name: "Ophthalmoscope", icon: PenTool, description: "Ophthalmoscope for eye examination and retinal assessment." },
      { name: "Reflex Hammer", icon: PenTool, description: "Reflex hammers for neurological examination and reflex testing." },
      { name: "Tuning Fork", icon: PenTool, description: "Tuning forks for hearing tests and vibration sense assessment." }
    ],
    support: [
      { name: "Suction Machine (Manual & Electric)", icon: Cog, description: "Manual and electric suction machines for airway clearance and secretion removal." },
      { name: "Nebulizer", icon: Cog, description: "Nebulizers for converting liquid medication into mist for respiratory treatment." },
      { name: "Oxygen Flowmeter", icon: Cog, description: "Oxygen flowmeters for regulating oxygen flow in medical gas systems." },
      { name: "Humidifier Bottle", icon: Cog, description: "Humidifier bottles for adding moisture to oxygen therapy systems." },
      { name: "Ambu Bag (Adult & Pediatric)", icon: Cog, description: "Ambu bags for manual ventilation in adult and pediatric patients." },
      { name: "Laryngoscope Set", icon: Cog, description: "Laryngoscope sets for airway management and intubation procedures." },
      { name: "Torch Light (Pen Type)", icon: Cog, description: "Pen-type torch lights for medical examinations and procedures." }
    ]
  };

  const documentCategories = {
    catalogs: [
      { name: 'Our Furniture Products', file: '/product and details/FURNITURE CATALOG AMENDED.pdf' },
      { name: 'Our Instrument Products', file: '/product and details/INSTRUMENT CATALOGUE AMENDED.pdf' },
      { name: 'Company Brochure', file: '/product and details/Unik-Surgical-Pioneering-Medical-Equipment-and-Furniture-Solutions (1).pdf' },
    ],
    certificates: [
      { name: 'ISO 13485 Certificate', file: '/product and details/IAF ISO 13485 2024.pdf' },
      { name: 'NSIC Certificate', file: '/product and details/nsic unik.pdf' },
      { name: 'Certificate CL 8251', file: '/product and details/CL_8251.pdf' },
      { name: 'Certificate 240716.USQD12', file: '/product and details/240716.USQD12.pdf' },
    ],
    licenses: [
      { name: 'Manufacturing License', file: '/product and details/IN54426A UNIK SURGICAL PRIVAT...pdf' },
      { name: 'Form MD42 8251', file: '/product and details/Form_MD42_ 8251.pdf' },
      { name: 'Cover Letter', file: '/product and details/uploadCoverLetter.pdf' },
      { name: 'Permission Document', file: '/product and details/uploadpermission.compressed.pdf' },
    ],
    profiles: [
      { name: 'CEO Profile', file: '/product and details/Prince CEO USPL.pdf' },
    ],
    others: [
      { name: 'Product List Document', file: '/product and details/New Microsoft Word Document (3) (1).docx' },
    ]
  };

  const handleDownloadDocument = (filePath, fileName) => {
    const link = document.createElement('a');
    link.href = filePath;
    const extension = filePath.endsWith('.docx') ? '.docx' : '.pdf';
    link.download = fileName.replace(/[^a-zA-Z0-9]/g, '_') + extension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Document Download",
      description: `Downloading ${fileName}...`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Surgical Instruments Manufacturer in India | Hospital Furniture Supplier | Unik Surgical</title>
        <meta name="description" content="Leading surgical instruments manufacturer in India. ISO 13485 certified stainless steel surgical instruments, hospital furniture, ICU beds & OT tables. Premium quality medical supplies with bulk order options. Trusted supplier to AIIMS & top hospitals." />
        <meta name="keywords" content="surgical instruments manufacturer India, stainless steel surgical instruments, OEM surgical instruments, hospital furniture manufacturer India, ICU bed supplier, OT table manufacturer, medical supplies in Patna" />
        <meta property="og:title" content="Premium Surgical Instruments Manufacturer & Hospital Furniture Supplier | Unik Surgical" />
        <meta property="og:description" content="ISO 13485 certified manufacturer of surgical instruments and hospital furniture in India. Stainless steel instruments, ICU beds, OT tables & medical equipment. Bulk orders welcome." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://uniksurgical.com/products" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Surgical Instruments and Hospital Furniture",
            "description": "Premium quality surgical instruments and hospital furniture manufactured to international standards. ISO 13485 certified medical equipment.",
            "brand": {
              "@type": "Brand",
              "name": "Unik Surgical"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Unik Surgical Pvt. Ltd.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "addressCountry": "IN"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Unik Surgical Pvt. Ltd."
              }
            },
            "category": "Medical Equipment",
            "keywords": "surgical instruments, hospital furniture, ICU beds, OT tables",
            "hasProductReturnPolicy": {
              "@type": "ProductReturnPolicy",
              "productReturnDays": "30",
              "merchantReturnDays": "30"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Certification",
                "value": "ISO 13485"
              },
              {
                "@type": "PropertyValue",
                "name": "Material",
                "value": "Stainless Steel"
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Premium Surgical Instruments & Hospital Furniture</h1>
            <p className="text-xl opacity-90 mb-4">
              Leading surgical instruments manufacturer in India and trusted hospital furniture supplier. ISO 13485 certified quality for healthcare excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mt-6">
              <span className="bg-white/20 px-4 py-2 rounded-full">Stainless Steel Surgical Instruments</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">OEM Surgical Equipment</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">ICU Beds & OT Tables</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Hospital Furniture</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                ISO 13485 Certified
              </span>
              <span className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Made in India
              </span>
              <span className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Bulk Orders Welcome
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="furniture" className="font-poppins">Hospital Furniture</TabsTrigger>
              <TabsTrigger value="instruments" className="font-poppins">Premium Surgical Instruments</TabsTrigger>
            </TabsList>

            <TabsContent value="furniture">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="space-y-12">
                  <div id="medical-furniture">
                    <div className="text-center mb-4">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        WE ARE MANUFACTURER
                      </span>
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 hover:text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenMedical(!openMedical); setOpenNonMedical(false); }}>
                      Medical Furniture <ChevronDown className={`ml-2 transition-transform ${openMedical ? 'rotate-180' : ''}`} />
                    </h3>
                    {openMedical && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {furnitureCatalog.medical.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-red-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-red-600 hover:bg-red-700"
                              onClick={() => window.open('/product and details/FURNITURE CATALOG AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div id="non-medical-furniture">
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 hover:text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenMedical(false); setOpenNonMedical(!openNonMedical); }}>
                      Non-Medical Furniture <ChevronDown className={`ml-2 transition-transform ${openNonMedical ? 'rotate-180' : ''}`} />
                    </h3>
                    {openNonMedical && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {furnitureCatalog.nonMedical.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-gray-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-gray-600 hover:bg-gray-700"
                              onClick={() => window.open('/product and details/FURNITURE CATALOG AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="instruments">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="space-y-12">
                  <div id="surgical-instruments-section">
                    <div className="text-center mb-4">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        WE ARE MANUFACTURER
                      </span>
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 hover:text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(!openSurgical); setOpenDiagnostic(false); setOpenSupport(false); }}>
                      Surgical Instruments <ChevronDown className={`ml-2 transition-transform ${openSurgical ? 'rotate-180' : ''}`} />
                    </h3>
                    {openSurgical && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instrumentCatalogue.surgical.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-red-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-red-600 hover:bg-red-700"
                              onClick={() => window.open('/product and details/INSTRUMENT CATALOGUE AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div id="diagnostic-instruments-section">
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 hover:text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(false); setOpenDiagnostic(!openDiagnostic); setOpenSupport(false); }}>
                      Diagnostic Equipment <ChevronDown className={`ml-2 transition-transform ${openDiagnostic ? 'rotate-180' : ''}`} />
                    </h3>
                    {openDiagnostic && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instrumentCatalogue.diagnostic.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-green-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-green-600 hover:bg-green-700"
                              onClick={() => window.open('/product and details/INSTRUMENT CATALOGUE AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div id="support-instruments-section">
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 hover:text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(false); setOpenDiagnostic(false); setOpenSupport(!openSupport); }}>
                      Support Equipment <ChevronDown className={`ml-2 transition-transform ${openSupport ? 'rotate-180' : ''}`} />
                    </h3>
                    {openSupport && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instrumentCatalogue.support.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-purple-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-purple-600 hover:bg-purple-700"
                              onClick={() => window.open('/product and details/INSTRUMENT CATALOGUE AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>



      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <FileText className="mr-4 h-10 w-10 text-primary-blue" />
              Product Catalogs
            </h2>
            <p className="text-lg text-gray-600">
              View our latest product catalogs directly on the page.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-3">
              {latestProductCatalogs.map((catalog) => (
                <button
                  key={catalog.file}
                  type="button"
                  onClick={() => setSelectedCatalog(catalog)}
                  className={`w-full text-left bg-white border rounded-lg p-4 shadow-sm transition-all ${
                    selectedCatalog.file === catalog.file
                      ? 'border-primary-blue ring-2 ring-primary-blue/20'
                      : 'border-gray-200 hover:border-primary-blue/40 hover:shadow-md'
                  }`}
                >
                  <span className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-primary-blue rounded-lg mr-3 shrink-0">
                      <Eye className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-gray-800">{catalog.name}</span>
                      <span className="block text-sm text-gray-600 mt-1">{catalog.description}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <div className="flex items-center justify-between bg-gray-800 px-5 py-4">
                  <h3 className="font-poppins text-lg font-semibold text-white">{selectedCatalog.name}</h3>
                  <span className="text-xs uppercase tracking-wide text-gray-300">View Only</span>
                </div>
                <div className="bg-gray-100" onContextMenu={(event) => event.preventDefault()}>
                  <iframe
                    title={`${selectedCatalog.name} catalog`}
                    src={`${selectedCatalog.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-[72vh] min-h-[520px] bg-white"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <Box className="mr-4 h-10 w-10 text-primary-blue" />
              Premium Surgical Instruments Manufacturer
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              India's trusted manufacturer of stainless steel surgical instruments and hospital furniture. 
              Get factory-direct prices and customized solutions for your healthcare facility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-blue mb-2">OEM Manufacturing</h3>
                <p className="text-sm text-gray-600">Custom surgical instruments to your specifications</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-blue mb-2">Bulk Orders</h3>
                <p className="text-sm text-gray-600">Special pricing for hospitals and distributors</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-blue mb-2">ISO 13485 Quality</h3>
                <p className="text-sm text-gray-600">International standard certified products</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



    </motion.div>
  );
};

export default Products;
