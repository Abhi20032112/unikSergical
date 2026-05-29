import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

const ProductImages = () => {
  const furnitureImages = [
    "ABS PANEL WITH BUFFER (DELUXE).png",
    "ABS TUCK AWAY in 4 PC.png",
    "ABS TUCK AWAY RAILING IN 2 Pcs.png",
    "ADJUSTABLE WALKER (WHEEL AND WITHOUT HEIGHT ADJUSTMENTS).png",
    "AEROSOL DISINFECTOR (FUMIGATOR).png",
    "ATTENDANT BED GENERAL.png",
    "ATTENDANT BED.png",
    "AUTOCLAVE (PORTABALE) WING NUT TYPE (S.S) ELECTRIC.png",
    "AUTOCLAVE (PORTABLE) WING NUT TYPE (ALUMINIUM) ELECTRIC.png",
    "BABY CRADLE.png",
    "BASIN(S.S).png",
    "BED PAN (S.S) MALE,FEMALE WITH COVER.png",
    "BED SIDE LOCKER (DELUXE).png",
    "BED SIDE LOCKER (STD.).png",
    "BED SIDE LOCKER WITH DRAWER AND RAILING.png",
    "BED SLIDE SCREEN (4 PANELS).png",
    "BIO MEDICAL WASTE BIN.png",
    "BLOOD DONAR CHAIR, 3 SECTIONS.png",
    "C-ARM COMPATIBLE HYDRAULIC OPERATING TABLE.png",
    "CATHETER TRAY (S.S).png",
    "CEILING 4-REF. COOL LIGHT C-4 DX,REG..png",
    "CEILING 7-REF. COOL LIGHT C-7 (DX,REG.).png",
    "CEILING COOL LIGHT (C-19 REG.).png",
    "CEILING COOL LIGHT C-20 DX.png",
    "CEILING TWIN COOL LIGHT CT-4+4 (DX,REG.).png",
    "CEILING TWIN COOL LIGHT CT-20 DX.png",
    "CIDEX TRAY (S.S).png",
    "COOKER TYPE AUTOCLAVE (PORTABLE) SINGLE,DOUBLE DRUM ALUMINIUM.png",
    "COOKER TYPE AUTOCLAVE (PORTABLE0 SINGLE,DOUBLE DRUM S.S ELECTRIC.png",
    "CRASH CART IN POWDER COATED FRAME.png",
    "CRASH CART IN S.S FRAME.png",
    "CRUTCHES.png",
    "DRESSING TROLLEY.png",
    "ECG,UTILITY TROLLEY (TWO SHELVES).png",
    "ELBOW STICK.png",
    "ELECTRIC BLOOD DONAR COUCH.png",
    "ELECTRIC SURGICAL C-ARM OPERATING TABLE.png",
    "EMERGENCY AND RECOVERY TROLLEY (HYDRAULIC).png",
    "ENEMA CAN (S.S).png",
    "EXAMINATION COUCH WITH GYNAE CUT.png",
    "EXAMINATION COUCH.png",
    "EXAMINATION CUM GYNAE TABLE.png",
    "EXAMINATION TABLE PLAIN.png",
    "EXAMINATION TABLE WITH 2 SECTION.png",
    "FOGGER ULV 304 SS.png",
    "FOLDING COMMODE ADJUSTABLE HEIGHT.png",
    "FOLDING STRETCHER (CANVAS).png",
    "FOLDING STRETCHER 2 FOLD.png",
    "FOLDING WHEELCHAIR CHROME PLATED.png",
    "FOOT SUCTION.png",
    "FOOTSTEP DOUBLE.png",
    "FOOTSTEP SINGLE POWDER COATED.png",
    "FORMALIN CHAMBER (WITH  3 TRAYS).png",
    "FORMALIN CHAMBER (WITH 2 TRAYS).png",
    "GYNAE EXAMINATION TABLE PLAIN.png",
    "HI VAC SUCTON HALF H.P. MOTOR.png",
    "HIGH PRESSURE SURGICAL AUTOCLAVE VERTICAL (TRIPLE WALLED).png",
    "HOSPITAL BED PLAIN (GENERAL).png",
    "HOSPITAL FOWLER BED (ABS PANELS).png",
    "HOSPITAL FOWLER BED (SS BOWS-DELUXE).png",
    "HOSPITAL SEMI FOWLER BED (ABS PANELS).png",
    "HOSPITAL SEMI FOWLER BED (GENERAL).png",
    "HOSPITAL SEMI FOWLER BED DELUXE (SS PANELS).png",
    "I.V. ROD FOR HOSPITAL BED.png",
    "ICU BED MECHANICAL (ABS PANELS AND RAILINGS).png",
    "ICU BED MECHANICALLY (abs panels).png",
    "ICU BED MECHANICALLY (S.S BOWS).png",
    "INSTRUMENT CABINET.png",
    "INSTRUMENT MAYO'S TROLLEY OVER THE O.T TABLE (MAUNAL).png",
    "INSTRUMENT MAYO'S TROLLEY OVER THE O.T TABLE(MECHANICALLY).png",
    "INSTRUMENT STERILIZER ELECTRIC (S.S).png",
    "INSTRUMENT TOLLEY TWO SHELVES.png",
    "INSTRUMENT TRAY (S.S).png",
    "INVALID WHEELCHAIR FOLDING.png",
    "INVIELD WALKER.png",
    "KICK BUCKET.png",
    "KIDNEY TRAY(S.S).png",
    "LAB TECHNICIAN STOOL.png",
    "LOTION BOWL (S.S).png",
    "MAYO'S TROLLEY FOR OT.png",
    "MEDICINE TROLLEY WITH 4 DRAWER.png",
    "MOBILE LIGHT M-14 REG..png",
    "MONITOR TROLLEY.png",
    "OBSTERIC LABOUR TABLE (MECHANICAL).png",
    "OBSTERIC LABOUR TABLE TELESCOPIC  (ADJUSTABLE HEIGHT).png",
    "OBSTERIC LABOUR TABLE TELESCOPIC (FIXED HEIGHT).png",
    "OBSTETRIC DELIVERY BED IN 2 PARTS (2 SECTION TOP).png",
    "ORTHOPAEDIC TRACTION ATTACHMENT WITH VARIOUS POSITIONS, FUCNTIONS AND ACCESSORIES.png",
    "OTL(LED)-3M(ADJUSTABLE COLOUR TEMPRETURE).png",
    "OTL(LED)-4(ADJUSTABLE COLOUR TEMPRETURE).png",
    "OTL(LED)-4+4 (ADJUSTABLE COLOUR TEMPRETURE).png",
    "OTL(LED)-4M(ADJUSTABLE COLOUR TEMPRETURE).png",
    "OVERBED TABLE (MANUALLY ADJUSTABLE).png",
    "OVERBED TABLE.png",
    "PATIENT TROLLEY (HI-LOW) MECHANICAL.png",
    "PATIENT'S RESOLVING STOOL (CUSHIONED TOP).png",
    "PATIENT'S RESOLVING STOOL (SS TOP).png",
    "PEDIATRIC BED.png",
    "PORTABLE AC,DC SUCTION UNIT EUROVAC-B.png",
    "PROACTIVE RAILING.png",
    "RECOVERY BED MECHANICAL FIXED HEIGHT (ABS PANELS).png",
    "SALINE STANDS.png",
    "Screenshot 2025-10-04 202838.png",
    "SEAMLESS DRESSING DRUMS (S.S).png",
    "SOLID LINEN TROLLEY WITH CANVAS BAG.png",
    "SOLID LINEN TROLLEY WITH PLASTIC BUCKET.png",
    "SPUTUM MUG (S.S).png",
    "STREATCHER ON TROLLEY.png",
    "STRETCHER ON TROLLEY MATRESS.png",
    "STRETCHER ON TROLLEY WITH MATRESS.png",
    "SUCTION MACHINE ONE QUARTER H.P. MOTOR.png",
    "SYRINGE AND NEEDLE DESTROYER.png",
    "TROLLEY FOR OXYGEN CYLINDER.png",
    "UNIVERSAL HYDRAULIC OPERATING TABLE.png",
    "UNIVERSAL REMOTE CONTROL OPERATING TABLE.png",
    "URINAL POT (S.S) MALE,FEMALE.png",
    "VERTICAL DOUBLE AUTOCLAVE WING NUT TYPE (S.S).png",
    "VERTICAL HIGH PRESSURE STEAM STERILIZER AUTOCLAVE (DOUBLE WALLED).png",
    "VISITOR'S STOOL.png",
    "WAITING AREA CHAIR.png",
    "WALKER (WITHOUT HEIGHT ADJUSTMENTS).png",
    "WARD CABINET.png",
    "WARD LOCKERS.png",
    "WASH BASIN STAND (SINGLE AND DOUBLE).png"
  ];

  const instrumentImages = [
    "BENDER, PLATE.png",
    "BIOPSY PUNCH, CERVICAL.png",
    "BIOPSY PUNCH, UTERINE.png",
    "BIOPSY PUNCH, VAN DOREN.png",
    "BIPOLAR FORCEPS, BAYONET WITH SUCTION.png",
    "BIPOLAR FORCEPS, BAYONET.png",
    "BIPOLAR FORCEPS, STRAIGHT.png",
    "BONE DRILL MACHINE.png",
    "BONE DRILL, UNIVERSAL.png",
    "BRACE, HUDSON.png",
    "CANNULA, HYSTO-GRAPHI WITH LOCK SET OF 3.png",
    "CLAMP, DEBAKEY, BULL-DOG.png",
    "CLAMP, SATINSKY.png",
    "COLD LIGHT SOURCE.png",
    "CORD, BIPOLAR CONNECTION.png",
    "COUPLING HANDLE, T-TYPE.png",
    "CURRETTE UTERINE DOUBLE ENDED, (SHARP OR BLUNT).png",
    "CURRETTE, UTERINE SINGLE ENDED 'SIMS' (SHARP OR BLUNT).png",
    "CUTLERY, WIRE.png",
    "DILATORS, HEGAR HALF MM SET OF 10.png",
    "DILATORS, HEGAR SET OF 8.png",
    "DISSECTING FORCEPS, ADSON 11.5CM.png",
    "DISSECTING FORCEPS, TISSUE.png",
    "DISSECTING FORECEPS, ADSONS 11CM.png",
    "DISSECTING FORECEPS, DENNIS BROWNE 18CM.png",
    "DISSECTING FORECEPS, GILLIES 15CM.png",
    "DISSECTING FORCEPS, JEWELER 12CM.png",
    "DISSECTING FORECEPS, RUSSIAN.png",
    "DISSECTING FORCEPS, SUTURE TYING 10CM.png",
    "DISSECTING FORCEPS, TISSUE.png",
    "DISSECTING FORCEPS, WAUGH 20CM.png",
    "DRIVER, HEXAGONAL SCREW.png",
    "ELEVATOR, PERIOSTEAL.png",
    "FEMALE CATHETER.png",
    "FIBRE OPTIC CABLE.png",
    "FIBRE OPTIC HEAD LIGHT BAND.png",
    "FINGER SWITCH HAND CONTROL ELECTROSURGERY PENCIL.png",
    "FLEXI TIP FIBER OPTIC LARYNGOSCOPE.png",
    "FORCEPS, BAYONET.png",
    "FORCEPS, BONE CUTTING.png",
    "FORCEPS, GREEN ARMYTAGE.png",
    "FORCEPS, SPONGE HOLDING.png",
    "FORMALIN CHAMBER.png",
    "GIGLE SAW, HANDLES (PAIR).png",
    "GIGLE SAW, WIRE.png",
    "GUIDE, DRILL.png",
    "HAMMER, BONE.png",
    "HERNORRHOID FORCEPS SET.png",
    "HERNOSTAT FORCEPS, 'KOCHER'S'.png",
    "HERNOSTAT FORCEPS, 'MOSQUITO'.png",
    "HERNOSTAT FORCEPS, 'MOYNIHAN'.png",
    "HERNOSTAT FORCEPS, 'SPENCERWELLS'.png",
    "HERNOSTAT FORCEPS, DANDY.png",
    "HERNOSTAT FORCEPS, LAYHEY'S 21CM.png",
    "HERNOSTAT FORCEPS, LIGATURE, 'MIXTURE'.png",
    "HOOK, YASARGIL SPRING FISH TYPE.png",
    "HYSTERECTOMY FORCEPS, 'MAINGOT'S'.png",
    "HYSTERECTOMY FORCEPS, HEANEY DOUBLE TOOTH.png",
    "HYSTERECTOMY FORCEPS, HEANEY SINGLE TOOTH.png",
    "HYSTERECTOMY FORCEPS, ROGERS.png",
    "INTESTINAL CLAMP, DOYEN.png",
    "INTESTINAL CLAMP, LANES TWIN.png",
    "INTESTINAL CLAMP, PAYER'S CRUSHING.png",
    "JAR, CHEATLE.png",
    "KIDNEY STONE FORCEPS, RENAL 'REDAILS' SET OF FOUR.png",
    "LAMP FOR LARYNGOSCOPE.png",
    "MACINTOSH CONVENTIONAL LARYNGOSCOPE.png",
    "MACINTOSH FIBER OPTIC LARYNGOSCOPE.png",
    "MIDWIFERY, FORCEPS, WRINGLEY.png",
    "MILLER LARYNGOSCOPE.png",
    "MOUTH GAG, DOYAN.png",
    "MOUTH GAG, HEISTER.png",
    "NEEDLE HOLDER, BOZEMANN.png",
    "NEEDLE HOLDER, GILLIES.png",
    "NEEDLE HOLDER, MAYO HEAGAR.png",
    "NEEDLE HOLDER, MAYO HEAGER.png",
    "NEEDLE HOLDER, MICRO SPRING WITHOUT LOCK.png",
    "NEEDLES, PILE.png",
    "OPERATION AND EXAMINATION TABLE (FIXED HEIGHT).png",
    "OPERATION AND EXAMINATION TABLE (HI-LOW).png",
    "PLASTER SAW CUTTER ELECTRIC.png",
    "PLASTER SAW, ENGEL.png",
    "PLASTER SAW, HEAVY HANDLE.png",
    "PROBE, FISTULA.png",
    "PUNCH FORCEPS, DICS.png",
    "PUNCH FORCEPS, KERRISON.png",
    "RECTAL SPECULURN, KELLY.png",
    "RECTAL SPECULURN.png",
    "RENY'S CLIP APPLICATOR.png",
    "RETRACTOR, ALLISON LUNG.png",
    "RETRACTOR, ANTERIOR VAGINAL WALL.png",
    "RETRACTOR, CLOWARD WITH 10 BLADES.png",
    "RETRACTOR, CZERNY.png",
    "RETRACTOR, DOUBLE HOOK.png",
    "RETRACTOR, DOYEN.png",
    "RETRACTOR, HOHMANN.png",
    "RETRACTOR, KELLY'S.png",
    "RETRACTOR, MORRIS.png",
    "RETRACTOR, ROUX SET OF 2.png",
    "RETRACTOR, ROUX SET OF 3.png",
    "RETRACTOR, SKIN 'KILNER'.png",
    "RETRACTOR, SKIN HOOK.png",
    "RETRACTOR, VOLKMAN.png",
    "RETRACTOR,, LANGENBECK.png",
    "ROUNDER, BONE.png",
    "SCALPEL HANDLE, B.P.png",
    "SCISSOR, EPISIOTOMY.png",
    "SCISSOR, METZENBAUM.png",
    "SCISSOR, UMBILICAL CORD (AMERICAN PATTERN).png",
    "SCISSORS , MAYO'S.png",
    "SCISSORS DRESSING (SHARP X BLUNT) (2).png",
    "SCISSORS DRESSING (SHARP X BLUNT).png",
    "SCISSORS, BANDAGE CUTTING 'LISTER'.png",
    "SCISSORS, GAUGE CUTTING.png",
    "SCISSORS, KILNER 11.5CM.png",
    "SCISSORS, METZENBAUM.png",
    "SCISSORS, POTT'S 17.5CM.png",
    "SCISSORS, SUTURE REMOVAL 'HEALTH' 15CM.png",
    "SCISSORS, WIRE CUTTING.png",
    "SCISSORS,FINE (POINTED) 10.5CM.png",
    "Screenshot 2025-10-05 153337.png",
    "SELF CENTERING BONE HOLDING FORCEPS.png",
    "SELF RETAINIG RETRACTOR,  ALAN-PARKS.png",
    "SELF RETAINIG RETRACTOR, MILIN BLADDER WITH 5 BLADES.png",
    "SELF RETAINIG RETRACTOR, POZZA WITH 3 BLADES.png",
    "SELF RETAINIG RETRACTOR, RIB'S SPREADER, 'FINOCHIETO'.png",
    "SELF RETAINING RETRACTOR, ABDOMINAL, 'BALFOUR'.png",
    "SELF RETAINING RETRACTOR, ADSON,'BECKMANN'.png",
    "SELF RETAINING RETRACTOR, GELPI.png",
    "SELF RETAINING RETRACTOR, JANSEN 10CM.png",
    "SELF RETAINING RETRACTOR, MOLLISON.png",
    "SKIN GRAFTING HANDLE, HUMBY.png",
    "SKIN GRAFTING HANDLE, SILVER SKIN.png",
    "SKIN GRAFTING HANDLE,WATSON.png",
    "SLEEVE, DRILL.png",
    "SOUND, UTERINE 'SIMS'.png",
    "SPECULURN, KOGAN ENDOCERVICAL.png",
    "STERILIZER FORCEPS, CHEATLE 25CM.png",
    "STERLIZER FORCEPS, BOWL LIFTING, 'HARRISON'.png",
    "STETHOSCOPE, FOETAL 'PINARD'.png",
    "TISSUE FORCEPS, ALLIS.png",
    "TISSUE FORCEPS, BABCOCK.png",
    "TOWEL FORCEPS, BACKHAUS.png",
    "TOWEL, CLIP CROSS ACTION 9CM.png",
    "UTERINE FORCEPS, DRESSING 'BOZEMANN'.png",
    "UTERINE FORCEPS, OVUM.png",
    "UTERINE FORCEPS, POLYPUS 'KELLY'.png",
    "UTERINE FORCEPS, VULSELLUN.png",
    "UTERINE MANIPULATOR.png",
    "VAGINAL SPECULURN, CUSCO.png",
    "VAGINAL SPECULURN, GRAVES.png",
    "VAGINAL SPECULURN, KRISTELLER.png",
    "VAGINAL SPECULURN, SIRNS.png"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Product Images Gallery - Unik Surgical Pvt. Ltd.</title>
        <meta name="description" content="Browse our comprehensive collection of medical furniture and surgical instrument images. View detailed product galleries for furniture and instruments." />
        <meta name="keywords" content="product images, medical furniture images, surgical instruments images, product gallery, Unik Surgical" />
        <meta property="og:title" content="Product Images Gallery - Unik Surgical" />
        <meta property="og:description" content="Comprehensive product image gallery showcasing medical furniture and surgical instruments." />
      </Helmet>

      <section className="pt-32 pb-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-poppins text-5xl font-bold mb-6">Product Images Gallery</h1>
            <p className="text-xl opacity-90">
              Explore our complete collection of medical furniture and surgical instrument images
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-6">Product Images</h2>
            <p className="text-xl text-gray-600">Browse through our complete collection of product images</p>
          </motion.div>

          <Tabs defaultValue="furniture-images" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="furniture-images" className="font-poppins">Furniture Images</TabsTrigger>
              <TabsTrigger value="instrument-images" className="font-poppins">Instrument Images</TabsTrigger>
            </TabsList>

            <TabsContent value="furniture-images">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {furnitureImages.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                    >
                      <img src={`/images/furniture/${item}`} alt={item.replace('.png', '')} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-800 text-sm">{item.replace('.png', '')}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="instrument-images">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {instrumentImages.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow transform-gpu"
                    >
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-800 text-sm">{item.replace('.png', '')}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductImages;
