import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Box, ChevronDown } from '@/components/Icons';
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
      "ICU Bed (Manual & Motorized)",
      "Semi-Fowler Bed",
      "Fowler Bed",
      "Examination Couch",
      "Bedside Locker (Standard & Deluxe)",
      "Overbed Table",
      "Attendant Bed",
      "Patient Trolley (Stretcher Type)",
      "Emergency Recovery Trolley",
      "Wheelchair (Standard & Foldable)",
      "Commode Chair",
      "Revolving Stool (SS & MS)",
      "IV Stand (SS & MS)",
      "Instrument Trolley (2 & 3 Shelves)",
      "Mayo's Trolley",
      "Dressing Trolley",
      "Medicine Trolley",
      "Crash Cart"
    ],
    nonMedical: [
      "Office Table (Various Sizes)",
      "Executive Chair",
      "Visitor Chair",
      "File Cabinet",
      "Storage Rack",
      "Wardrobe (Single & Double Door)",
      "Shoe Rack",
      "Dining Table Set",
      "Waiting Area Sofa (3-Seater & 5-Seater)"
    ]
  };

  const instrumentCatalogue = {
    surgical: [
      "Minor Surgery Set",
      "Major Surgery Set",
      "ENT Set",
      "Gynecology Set",
      "Orthopedic Set",
      "General Instrument Set",
      "Dressing Set",
      "Suture Set",
      "Delivery Set",
      "Laparoscopy Instruments (Basic)"
    ],
    diagnostic: [
      "Stethoscope",
      "BP Apparatus (Mercury & Digital)",
      "Thermometer (Digital & Infrared)",
      "Otoscope",
      "Ophthalmoscope",
      "Reflex Hammer",
      "Tuning Fork"
    ],
    support: [
      "Suction Machine (Manual & Electric)",
      "Nebulizer",
      "Oxygen Flowmeter",
      "Humidifier Bottle",
      "Ambu Bag (Adult & Pediatric)",
      "Laryngoscope Set",
      "Torch Light (Pen Type)"
    ]
  };

  const handleDownloadCatalog = (type = 'furniture') => {
    const catalogFiles = {
      furniture: 'product and details/FURNITURE CATALOG AMENDED.pdf',
      instruments: 'product and details/INSTRUMENT CATALOGUE AMENDED.pdf'
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
    { name: 'Furniture Catalog', file: 'product and details/FURNITURE CATALOG AMENDED.pdf' },
    { name: 'Instrument Catalogue', file: 'product and details/INSTRUMENT CATALOGUE AMENDED.pdf' },
    { name: 'Company Brochure', file: 'product and details/Unik-Surgical-Pioneering-Medical-Equipment-and-Furniture-Solutions (1).pdf' },
    { name: 'ISO 13485 Certificate', file: 'product and details/IAF ISO 13485 2024.pdf' },
    { name: 'Manufacturing License', file: 'product and details/IN54426A UNIK SURGICAL PRIVAT...pdf' },
    { name: 'NSIC Certificate', file: 'product and details/nsic unik.pdf' },
    { name: 'CEO Profile', file: 'product and details/Prince CEO USPL.pdf' },
    { name: 'Certificate CL 8251', file: 'product and details/CL_8251.pdf' },
    { name: 'Form MD42 8251', file: 'product and details/Form_MD42_ 8251.pdf' },
    { name: 'Certificate 240716.USQD12', file: 'product and details/240716.USQD12.pdf' },
    { name: 'Cover Letter', file: 'product and details/uploadCoverLetter.pdf' },
    { name: 'Permission Document', file: 'product and details/uploadpermission.compressed.pdf' },
    { name: 'Product List Document', file: 'product and details/New Microsoft Word Document (3) (1).docx' },
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">High-quality medical furniture designed for healthcare facilities.</p>
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">Professional office and facility furniture solutions.</p>
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">Precision surgical instruments for medical procedures.</p>
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">Essential diagnostic tools for accurate medical assessment.</p>
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
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">Support equipment for patient care and medical procedures.</p>
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