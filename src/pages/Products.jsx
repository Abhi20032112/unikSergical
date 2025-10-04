import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Filter, Box } from 'lucide-react';
import { Button } from '@/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { toast } from '@/ui/use-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const images = [];

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('furniture');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (location.pathname.includes('surgical-instruments')) {
      setActiveTab('instruments');
      setSelectedCategory('all');
    } else {
      setActiveTab('furniture');
      setSelectedCategory('all');
    }
  }, [location.pathname]);

  const furnitureProducts = [
    { id: 1, name: 'ICU Bed (Manual & Motorized) - USM-001', category: 'beds', description: 'Advanced ICU bed with manual and motorized controls for patient comfort and safety.', specifications: ['Manual operation', 'Motorized positioning', 'Adjustable height', 'Side rails', 'Stainless steel construction'] },
    { id: 2, name: 'Semi-Fowler Bed - USM-005', category: 'beds', description: 'Semi-Fowler bed designed for patient recovery with adjustable backrest.', specifications: ['Adjustable backrest', 'Comfortable mattress', 'Side rails', 'Lockable wheels', 'Easy maintenance'] },
    { id: 3, name: 'Fowler Bed - USM-006', category: 'beds', description: 'Fowler bed with full backrest adjustment for optimal patient positioning.', specifications: ['Full backrest adjustment', 'Head and foot adjustment', 'Durable frame', 'Patient safety features', 'Ergonomic design'] },
    { id: 4, name: 'Examination Couch - USM-019', category: 'examination', description: 'Examination couch with adjustable height and comfortable padding.', specifications: ['Adjustable height', 'Comfortable padding', 'Easy cleaning', 'Stable base', 'Medical grade materials'] },
    { id: 5, name: 'Bedside Locker (Standard) - USM-025', category: 'storage', description: 'Standard bedside locker for patient belongings and medical supplies.', specifications: ['Multiple compartments', 'Lockable drawers', 'Durable construction', 'Easy mobility', 'Hygienic design'] },
    { id: 6, name: 'Bedside Locker (Deluxe) - USM-026', category: 'storage', description: 'Deluxe bedside locker with additional storage and features.', specifications: ['Extra compartments', 'Lockable drawers', 'Smooth finish', 'Enhanced durability', 'Patient convenience'] },
    { id: 7, name: 'Overbed Table - USM-030', category: 'storage', description: 'Overbed table for patient meals and activities.', specifications: ['Adjustable height', 'Tilting surface', 'Lockable wheels', 'Easy assembly', 'Sturdy construction'] },
    { id: 8, name: 'Attendant Bed - USM-012', category: 'beds', description: 'Attendant bed for accompanying patient care.', specifications: ['Foldable design', 'Comfortable mattress', 'Compact storage', 'Easy setup', 'Durable frame'] },
    { id: 9, name: 'Patient Trolley (Stretcher Type) - USM-028', category: 'trolleys', description: 'Patient trolley with stretcher functionality for transport.', specifications: ['Stretcher design', 'Adjustable height', 'Smooth wheels', 'Safety straps', 'Medical grade'] },
    { id: 10, name: 'Emergency Recovery Trolley - USM-047', category: 'trolleys', description: 'Emergency recovery trolley for critical care transport.', specifications: ['Emergency features', 'Monitoring attachments', 'Quick mobility', 'Sturdy construction', 'Easy cleaning'] },
    { id: 11, name: 'Wheelchair (Standard)', category: 'seating', description: 'Standard wheelchair for patient mobility.', specifications: ['Adjustable seat', 'Foldable frame', 'Comfortable padding', 'Lockable brakes', 'Lightweight design'] },
    { id: 12, name: 'Wheelchair (Foldable)', category: 'seating', description: 'Foldable wheelchair for easy storage and transport.', specifications: ['Foldable design', 'Compact storage', 'Adjustable features', 'Durable wheels', 'Patient comfort'] },
    { id: 13, name: 'Commode Chair', category: 'seating', description: 'Commode chair for patient hygiene needs.', specifications: ['Removable bucket', 'Comfortable seat', 'Stable frame', 'Easy cleaning', 'Privacy features'] },
    { id: 14, name: 'Revolving Stool (SS)', category: 'seating', description: 'Stainless steel revolving stool for medical professionals.', specifications: ['Stainless steel construction', 'Revolving seat', 'Adjustable height', 'Comfortable padding', 'Hygienic design'] },
    { id: 15, name: 'Revolving Stool (MS)', category: 'seating', description: 'Mild steel revolving stool with durable finish.', specifications: ['Mild steel construction', 'Revolving seat', 'Adjustable height', 'Ergonomic design', 'Easy maintenance'] },
    { id: 16, name: 'IV Stand (SS)', category: 'trolleys', description: 'Stainless steel IV stand for intravenous therapy.', specifications: ['Stainless steel frame', 'Adjustable height', 'Multiple hooks', 'Stable base', 'Easy mobility'] },
    { id: 17, name: 'IV Stand (MS)', category: 'trolleys', description: 'Mild steel IV stand with reliable performance.', specifications: ['Mild steel construction', 'Adjustable height', 'Durable hooks', 'Stable design', 'Cost-effective'] },
    { id: 18, name: 'Instrument Trolley (2 Shelves)', category: 'trolleys', description: 'Instrument trolley with 2 shelves for medical tools.', specifications: ['2 shelves', 'Stainless steel', 'Lockable design', 'Smooth wheels', 'Organized storage'] },
    { id: 19, name: 'Instrument Trolley (3 Shelves)', category: 'trolleys', description: 'Instrument trolley with 3 shelves for comprehensive storage.', specifications: ['3 shelves', 'Stainless steel', 'Lockable design', 'Easy maneuverability', 'Medical grade'] },
    { id: 20, name: 'Mayo\'s Trolley', category: 'trolleys', description: 'Mayo\'s trolley for surgical instrument access.', specifications: ['Surgical design', 'Adjustable height', 'Sterile surface', 'Lockable wheels', 'Durable construction'] },
    { id: 21, name: 'Dressing Trolley', category: 'trolleys', description: 'Dressing trolley for wound care supplies.', specifications: ['Multiple compartments', 'Sterile storage', 'Easy access', 'Mobile design', 'Hygienic'] },
    { id: 22, name: 'Medicine Trolley', category: 'trolleys', description: 'Medicine trolley for organized medication storage.', specifications: ['Lockable compartments', 'Temperature control', 'Smooth wheels', 'Secure design', 'Easy inventory'] },
    { id: 23, name: 'Crash Cart', category: 'trolleys', description: 'Crash cart for emergency medical equipment.', specifications: ['Emergency supplies', 'Defibrillator space', 'Lockable drawers', 'Quick access', 'Durable frame'] },
    { id: 24, name: 'Office Table (Various Sizes)', category: 'storage', description: 'Office table in various sizes for administrative use.', specifications: ['Various sizes', 'Durable surface', 'Storage drawers', 'Ergonomic design', 'Professional finish'] },
    { id: 25, name: 'Executive Chair', category: 'seating', description: 'Executive chair for office comfort and style.', specifications: ['Adjustable height', 'Lumbar support', 'Comfortable padding', 'Swivel design', 'Professional look'] },
    { id: 26, name: 'Visitor Chair', category: 'seating', description: 'Visitor chair for waiting areas.', specifications: ['Comfortable seating', 'Modern design', 'Stackable', 'Easy maintenance', 'Durable frame'] },
    { id: 27, name: 'File Cabinet', category: 'storage', description: 'File cabinet for document organization.', specifications: ['Multiple drawers', 'Lockable', 'Durable construction', 'Organized storage', 'Office essential'] },
    { id: 28, name: 'Storage Rack', category: 'storage', description: 'Storage rack for efficient space utilization.', specifications: ['Adjustable shelves', 'Heavy duty', 'Easy assembly', 'Versatile use', 'Industrial strength'] },
    { id: 29, name: 'Wardrobe (Single Door)', category: 'storage', description: 'Single door wardrobe for clothing storage.', specifications: ['Single door', 'Hanging space', 'Shelves', 'Compact design', 'Durable material'] },
    { id: 30, name: 'Wardrobe (Double Door)', category: 'storage', description: 'Double door wardrobe for ample storage.', specifications: ['Double door', 'Multiple shelves', 'Hanging rods', 'Spacious', 'Quality finish'] },
    { id: 31, name: 'Shoe Rack', category: 'storage', description: 'Shoe rack for organized footwear storage.', specifications: ['Multiple tiers', 'Ventilated design', 'Easy access', 'Compact', 'Durable'] },
    { id: 32, name: 'Dining Table Set', category: 'seating', description: 'Dining table set for cafeteria use.', specifications: ['Table and chairs', 'Comfortable seating', 'Durable surface', 'Easy cleaning', 'Group dining'] },
    { id: 33, name: 'Waiting Area Sofa (3-Seater)', category: 'seating', description: '3-seater sofa for waiting areas.', specifications: ['Comfortable cushions', 'Modern design', 'Durable upholstery', 'Spacious', 'Patient comfort'] },
    { id: 34, name: 'Waiting Area Sofa (5-Seater)', category: 'seating', description: '5-seater sofa for larger waiting areas.', specifications: ['Extra seating', 'Comfortable design', 'Quality materials', 'Spacious', 'Waiting comfort'] },
    { id: 35, name: 'Operation Theatre Table (Hi-Low) - USM-087', category: 'examination', description: 'Hi-Low operation theatre table with adjustable height for surgical procedures.', specifications: ['Adjustable height', 'Stainless steel construction', 'Lockable wheels', 'Patient safety', 'Surgical grade'] },
    { id: 36, name: 'Operation Theatre Table (C-Arm Compatible) - USM-089', category: 'examination', description: 'C-Arm compatible OT table for advanced imaging during surgery.', specifications: ['C-Arm compatibility', 'Motorized positioning', 'Radiotranslucent top', 'Durable frame', 'Easy cleaning'] },
    { id: 37, name: 'Operation Theatre Table (Remote Controlled) - USM-090', category: 'examination', description: 'Remote controlled OT table for precise positioning.', specifications: ['Remote control', 'Multiple adjustments', 'Stainless steel', 'Patient safety', 'Surgical precision'] },
    { id: 38, name: 'Orthopedic Surgery Table - USM-091', category: 'examination', description: 'Specialized table for orthopedic surgeries.', specifications: ['Orthopedic design', 'Adjustable sections', 'Sturdy construction', 'X-ray compatible', 'Medical grade'] },
    { id: 39, name: 'Universal Surgery Table - USM-092', category: 'examination', description: 'Universal surgery table for various procedures.', specifications: ['Versatile design', 'Adjustable height', 'Multiple positions', 'Durable', 'Easy maintenance'] },
    { id: 40, name: 'OT Examination Light (LED Ceiling) - USM-105', category: 'lights', description: 'LED ceiling light for operation theatres with variable focus.', specifications: ['LED technology', 'Ceiling mount', 'Variable focus', 'Shadow-free illumination', 'Energy efficient'] },
    { id: 41, name: 'OT Examination Light (Mobile) - USM-106', category: 'lights', description: 'Mobile LED light for flexible positioning in OT.', specifications: ['Mobile design', 'LED bulbs', 'Adjustable height', 'Battery backup', 'Portable'] },
    { id: 42, name: 'Autoclave (Vertical) - USM-098', category: 'sterilizers', description: 'Vertical autoclave for sterilization of medical instruments.', specifications: ['Vertical design', 'Steam sterilization', 'Multiple sizes', 'Automatic controls', 'Safety features'] },
    { id: 43, name: 'Autoclave (Horizontal) - USM-099', category: 'sterilizers', description: 'Horizontal autoclave for large-scale sterilization.', specifications: ['Horizontal design', 'High capacity', 'Steam sterilization', 'Digital controls', 'Efficient'] },
    { id: 44, name: 'Blood Donor Chair (Manual) - USM-093', category: 'seating', description: 'Manual blood donor chair for comfortable blood donation.', specifications: ['Adjustable backrest', 'Armrests', 'Comfortable padding', 'Stable base', 'Easy cleaning'] },
    { id: 45, name: 'Blood Donor Chair (Electric) - USM-094', category: 'seating', description: 'Electric blood donor chair with motorized adjustments.', specifications: ['Electric positioning', 'Comfortable design', 'Armrests', 'Durable', 'Medical grade'] },
  ];

  const instrumentProducts = [
    { id: 1, name: 'Minor Surgery Set', category: 'surgical', description: 'Complete set of instruments for minor surgical procedures.', specifications: ['Scalpels', 'Forceps', 'Scissors', 'Needle holders', 'Sterile packaging'] },
    { id: 2, name: 'Major Surgery Set', category: 'surgical', description: 'Comprehensive set for major surgical operations.', specifications: ['Advanced tools', 'Retractors', 'Clamps', 'Sutures', 'Complete kit'] },
    { id: 3, name: 'ENT Set', category: 'surgical', description: 'Specialized instruments for ENT procedures.', specifications: ['ENT specific tools', 'Precision instruments', 'Sterile', 'Durable', 'Professional grade'] },
    { id: 4, name: 'Gynecology Set', category: 'surgical', description: 'Instruments for gynecological examinations and procedures.', specifications: ['Gynecology tools', 'Speculums', 'Forceps', 'Comfortable design', 'Medical grade'] },
    { id: 5, name: 'Orthopedic Set', category: 'surgical', description: 'Orthopedic instruments for bone and joint surgeries.', specifications: ['Bone tools', 'Drills', 'Plates', 'Precision', 'Sterile'] },
    { id: 6, name: 'General Instrument Set', category: 'surgical', description: 'General purpose surgical instruments.', specifications: ['Versatile tools', 'Scalpels', 'Forceps', 'Scissors', 'Essential set'] },
    { id: 7, name: 'Dressing Set', category: 'surgical', description: 'Instruments for wound dressing and care.', specifications: ['Dressing tools', 'Scissors', 'Forceps', 'Sterile', 'Easy use'] },
    { id: 8, name: 'Suture Set', category: 'surgical', description: 'Suturing instruments for wound closure.', specifications: ['Needles', 'Holders', 'Thread', 'Precision', 'Sterile'] },
    { id: 9, name: 'Delivery Set', category: 'surgical', description: 'Instruments for childbirth and delivery.', specifications: ['Delivery tools', 'Forceps', 'Scissors', 'Safe design', 'Medical grade'] },
    { id: 10, name: 'Laparoscopy Instruments (Basic)', category: 'surgical', description: 'Basic laparoscopy instruments for minimally invasive procedures.', specifications: ['Laparoscopic tools', 'Cameras', 'Trocars', 'Precision', 'Advanced technology'] },
    { id: 11, name: 'Stethoscope', category: 'diagnostic', description: 'High-quality stethoscope for auscultation.', specifications: ['Dual head', 'Comfortable', 'Accurate sound', 'Durable', 'Professional'] },
    { id: 12, name: 'BP Apparatus (Mercury)', category: 'diagnostic', description: 'Mercury-based blood pressure apparatus.', specifications: ['Mercury column', 'Accurate readings', 'Manual', 'Traditional', 'Reliable'] },
    { id: 13, name: 'BP Apparatus (Digital)', category: 'diagnostic', description: 'Digital blood pressure monitor for easy use.', specifications: ['Digital display', 'Automatic', 'Memory function', 'Battery powered', 'Convenient'] },
    { id: 14, name: 'Thermometer (Digital)', category: 'diagnostic', description: 'Digital thermometer for temperature measurement.', specifications: ['Digital readout', 'Quick results', 'Fever alarm', 'Easy to use', 'Accurate'] },
    { id: 15, name: 'Thermometer (Infrared)', category: 'diagnostic', description: 'Infrared thermometer for non-contact measurement.', specifications: ['Non-contact', 'Infrared technology', 'Quick', 'Hygienic', 'Versatile'] },
    { id: 16, name: 'Otoscope', category: 'diagnostic', description: 'Otoscope for ear examinations.', specifications: ['Ear examination', 'Light source', 'Magnification', 'Portable', 'Diagnostic tool'] },
    { id: 17, name: 'Ophthalmoscope', category: 'diagnostic', description: 'Ophthalmoscope for eye examinations.', specifications: ['Eye examination', 'Light adjustment', 'Lenses', 'Portable', 'Professional'] },
    { id: 18, name: 'Reflex Hammer', category: 'diagnostic', description: 'Reflex hammer for neurological assessments.', specifications: ['Reflex testing', 'Various heads', 'Ergonomic', 'Durable', 'Medical tool'] },
    { id: 19, name: 'Tuning Fork', category: 'diagnostic', description: 'Tuning fork for hearing and vibration tests.', specifications: ['Hearing tests', 'Vibration', 'Different frequencies', 'Accurate', 'Diagnostic'] },
    { id: 20, name: 'Suction Machine (Manual)', category: 'diagnostic', description: 'Manual suction machine for fluid removal.', specifications: ['Manual operation', 'Portable', 'Effective suction', 'Easy to use', 'Reliable'] },
    { id: 21, name: 'Suction Machine (Electric)', category: 'diagnostic', description: 'Electric suction machine for efficient fluid removal.', specifications: ['Electric powered', 'High suction', 'Adjustable', 'Durable', 'Medical grade'] },
    { id: 22, name: 'Nebulizer', category: 'diagnostic', description: 'Nebulizer for respiratory treatments.', specifications: ['Respiratory therapy', 'Fine mist', 'Portable', 'Easy operation', 'Effective'] },
    { id: 23, name: 'Oxygen Flowmeter', category: 'diagnostic', description: 'Oxygen flowmeter for controlled oxygen delivery.', specifications: ['Flow control', 'Accurate measurement', 'Durable', 'Easy reading', 'Medical use'] },
    { id: 24, name: 'Humidifier Bottle', category: 'diagnostic', description: 'Humidifier bottle for oxygen therapy.', specifications: ['Humidification', 'Compatible', 'Sterile', 'Easy maintenance', 'Essential'] },
    { id: 25, name: 'Ambu Bag (Adult)', category: 'diagnostic', description: 'Ambu bag for adult manual ventilation.', specifications: ['Manual ventilation', 'Adult size', 'Effective', 'Portable', 'Emergency use'] },
    { id: 26, name: 'Ambu Bag (Pediatric)', category: 'diagnostic', description: 'Ambu bag for pediatric manual ventilation.', specifications: ['Manual ventilation', 'Pediatric size', 'Safe', 'Portable', 'Emergency'] },
    { id: 27, name: 'Laryngoscope Set', category: 'diagnostic', description: 'Laryngoscope set for airway management.', specifications: ['Airway visualization', 'Various blades', 'Light source', 'Sterile', 'Professional'] },
    { id: 28, name: 'Torch Light (Pen Type)', category: 'diagnostic', description: 'Pen-type torch light for examinations.', specifications: ['Pen size', 'Bright light', 'Portable', 'Battery powered', 'Examination tool'] },
  ];

  const furnitureCategories = [
    { id: 'all', name: 'All' }, { id: 'beds', name: 'Beds' }, { id: 'examination', name: 'Examination' },
    { id: 'storage', name: 'Storage' }, { id: 'trolleys', name: 'Trolleys' }, { id: 'seating', name: 'Seating' },
  ];

  const instrumentCategories = [
    { id: 'all', name: 'All' }, { id: 'surgical', name: 'Surgical' }, { id: 'diagnostic', name: 'Diagnostic' },
  ];

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

  const filterProducts = (products, category) => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  const ProductCard = ({ product, type }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative overflow-hidden h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
      <div className="p-6">
        <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

        {product.specifications && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {product.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-center">
                  <span className="w-1 h-1 bg-primary-blue rounded-full mr-2"></span>
                  {spec}
                </li>
              ))}
              {product.specifications.length > 3 && (
                <li className="text-xs text-primary-blue font-medium">
                  +{product.specifications.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}

        <Button className="w-full bg-primary-blue hover:bg-blue-700" onClick={() => navigate(`/products/${type}/${product.id}`, { state: { product } })}>
          Learn More
        </Button>
      </div>
    </motion.div>
  );

  const renderProductGrid = (products, category, type) => (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {filterProducts(products, category).map((product) => (
          <ProductCard key={product.id} product={product} type={type} />
        ))}
      </AnimatePresence>
    </motion.div>
  );

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
          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setSelectedCategory('all'); }} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="furniture" className="font-poppins">Medical Furniture</TabsTrigger>
              <TabsTrigger value="instruments" className="font-poppins">Surgical Instruments</TabsTrigger>
            </TabsList>

            <TabsContent value="furniture">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                  <Filter className="h-5 w-5 text-gray-600" />
                  {furnitureCategories.map((category) => (
                    <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category.id)} className={selectedCategory === category.id ? "bg-primary-blue" : ""}>
                      {category.name}
                    </Button>
                  ))}
                </div>
                {renderProductGrid(furnitureProducts, selectedCategory, 'furniture')}
              </motion.div>
            </TabsContent>

            <TabsContent value="instruments">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                  <Filter className="h-5 w-5 text-gray-600" />
                  {instrumentCategories.map((category) => (
                    <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category.id)} className={selectedCategory === category.id ? "bg-primary-blue" : ""}>
                      {category.name}
                    </Button>
                  ))}
                </div>
                {renderProductGrid(instrumentProducts, selectedCategory, 'instruments')}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
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