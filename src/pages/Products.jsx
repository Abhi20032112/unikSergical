import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Box, ChevronDown, Bed, Scissors, Cog, PenTool, Building } from '@/components/Icons';
import { Button } from '@/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { toast } from '@/ui/use-toast';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('furniture');

  const [openMedical, setOpenMedical] = useState(true);
  const [openNonMedical, setOpenNonMedical] = useState(true);
  const [openSurgical, setOpenSurgical] = useState(true);
  const [openDiagnostic, setOpenDiagnostic] = useState(true);
  const [openSupport, setOpenSupport] = useState(true);

  useEffect(() => {
    if (location.pathname.includes('surgical-instruments')) {
      setActiveTab('instruments');
      // Scroll to Surgical Instruments section
      const element = document.getElementById('surgical-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname.includes('diagnostic-instruments')) {
      setActiveTab('instruments');
      const element = document.getElementById('diagnostic-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname.includes('support-instruments')) {
      setActiveTab('instruments');
      const element = document.getElementById('support-instruments-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname.includes('non-medical-furniture')) {
      setActiveTab('furniture');
      const element = document.getElementById('non-medical-furniture-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname.includes('medical-furniture')) {
      setActiveTab('furniture');
      const element = document.getElementById('medical-furniture-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveTab('furniture');
    }
  }, [location.pathname]);

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

  const handleDownloadCatalog = (type = 'furniture') => {
    const catalogFiles = {
      furniture: '/product and details/FURNITURE CATALOG AMENDED.pdf',
      instruments: '/product and details/INSTRUMENT CATALOGUE AMENDED.pdf'
    };

    const fileName = catalogFiles[type] || catalogFiles.furniture;

    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = fileName;
    link.download = type === 'furniture' ? 'Furniture_Catalog.pdf' : 'Instrument_Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Catalog Download",
      description: `Downloading ${type === 'furniture' ? 'Furniture' : 'Instrument'} catalog...`,
    });
  };



  const documentList = [
    { name: 'Furniture Catalog', file: '/product and details/FURNITURE CATALOG AMENDED.pdf' },
    { name: 'Instrument Catalogue', file: '/product and details/INSTRUMENT CATALOGUE AMENDED.pdf' },
    { name: 'Company Brochure', file: '/product and details/Unik-Surgical-Pioneering-Medical-Equipment-and-Furniture-Solutions (1).pdf' },
    { name: 'ISO 13485 Certificate', file: '/product and details/IAF ISO 13485 2024.pdf' },
    { name: 'Manufacturing License', file: '/product and details/IN54426A UNIK SURGICAL PRIVAT...pdf' },
    { name: 'NSIC Certificate', file: '/product and details/nsic unik.pdf' },
    { name: 'CEO Profile', file: '/product and details/Prince CEO USPL.pdf' },
    { name: 'Certificate CL 8251', file: '/product and details/CL_8251.pdf' },
    { name: 'Form MD42 8251', file: '/product and details/Form_MD42_ 8251.pdf' },
    { name: 'Certificate 240716.USQD12', file: '/product and details/240716.USQD12.pdf' },
    { name: 'Cover Letter', file: '/product and details/uploadCoverLetter.pdf' },
    { name: 'Permission Document', file: '/product and details/uploadpermission.compressed.pdf' },
    { name: 'Product List Document', file: '/product and details/New Microsoft Word Document (3) (1).docx' },
  ];

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
        <title>Medical Furniture & Surgical Instruments Catalog - Unik Surgical Pvt. Ltd.</title>
        <meta name="description" content="Browse Unik Surgical's comprehensive catalog of medical furniture and surgical instruments. ICU beds, operation tables, surgical tools, diagnostic equipment. Download detailed product specifications and catalogs. ISO 9001:2015 certified products." />
        <meta name="keywords" content="medical furniture catalog, surgical instruments, ICU beds, operation tables, medical equipment, hospital furniture, surgical tools, diagnostic equipment, Patna Bihar" />
        <meta property="og:title" content="Medical Furniture & Surgical Instruments Catalog - Unik Surgical" />
        <meta property="og:description" content="Comprehensive catalog of medical furniture and surgical instruments. Download detailed specifications and catalogs." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Products Catalog</h1>
            <p className="text-xl opacity-90">
              Explore our comprehensive range of medical furniture and instruments
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="furniture" className="font-poppins">Medical Furniture</TabsTrigger>
              <TabsTrigger value="instruments" className="font-poppins">Surgical Instruments</TabsTrigger>
            </TabsList>

            <TabsContent value="furniture">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="space-y-12">
                  <div id="medical-furniture-section">
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenMedical(true); setOpenNonMedical(false); }}>
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all transform-gpu group border-t-4 border-blue-500"
                          >
                            <div className="flex items-center mb-4">
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-lg mr-3">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                            <Button
                              size="sm"
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              onClick={() => window.open('/product and details/FURNITURE CATALOG AMENDED.pdf', '_blank')}
                            >
                              View Details
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div id="non-medical-furniture-section">
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenMedical(false); setOpenNonMedical(true); }}>
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
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(true); setOpenDiagnostic(false); setOpenSupport(false); }}>
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
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(false); setOpenDiagnostic(true); setOpenSupport(false); }}>
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
                    <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-8 text-center cursor-pointer flex items-center justify-center" onClick={() => { setOpenSurgical(false); setOpenDiagnostic(false); setOpenSupport(true); }}>
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
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can customize our products to meet your specific requirements.
              Contact us for personalized solutions and bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-blue hover:bg-blue-700" onClick={() => handleDownloadCatalog('furniture')}>
                <Download className="mr-2 h-5 w-5" />
                Download Furniture Catalog
              </Button>
              <Button size="lg" className="bg-soft-cyan hover:bg-cyan-600" onClick={() => handleDownloadCatalog('instruments')}>
                <Download className="mr-2 h-5 w-5" />
                Download Instrument Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

          <section className="py-20 bg-light-bg">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <Download className="mr-4 h-10 w-10 text-primary-blue" />
                  Download All Documents
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Access our complete catalog of products, certificates, brochures, and company documents for detailed information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documentList.map((doc, index) => (
                    <Button key={index} size="lg" className="bg-primary-blue hover:bg-blue-700" onClick={() => handleDownloadDocument(doc.file, doc.name)}>
                      <Download className="mr-2 h-5 w-5" />
                      {doc.name}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

    </motion.div>
  );
};

export default Products;