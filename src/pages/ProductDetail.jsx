import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/ui/button';
import { ArrowLeft } from '@/components/Icons';

const images = [
  'Screenshot_3-10-2025_155410_.jpeg',
  'Screenshot_3-10-2025_155417_.jpeg',
  'Screenshot_3-10-2025_155424_.jpeg',
  'Screenshot_3-10-2025_155431_.jpeg',
  'Screenshot_3-10-2025_155440_.jpeg',
  'Screenshot_3-10-2025_155448_.jpeg',
  'Screenshot_3-10-2025_155458_.jpeg',
  'Screenshot_3-10-2025_155522_.jpeg',
  'Screenshot_3-10-2025_155530_.jpeg',
  'Screenshot_3-10-2025_155536_.jpeg',
  'Screenshot_3-10-2025_155558_.jpeg',
  'Screenshot_3-10-2025_155646_.jpeg',
  'Screenshot_3-10-2025_155652_.jpeg',
  'Screenshot_3-10-2025_155659_.jpeg',
  'Screenshot_3-10-2025_155714_.jpeg',
  'Screenshot_3-10-2025_155724_.jpeg',
  'Screenshot_3-10-2025_155729_.jpeg',
  'Screenshot_3-10-2025_155738_.jpeg',
  'Screenshot_3-10-2025_155745_.jpeg',
  'Screenshot_3-10-2025_155754_.jpeg',
  'Screenshot_3-10-2025_15577_.jpeg',
  'Screenshot_3-10-2025_15580_.jpeg',
  'Screenshot_3-10-2025_155920_.jpeg',
  'Screenshot_3-10-2025_155930_.jpeg',
  'Screenshot_3-10-2025_155941_.jpeg',
  'Screenshot_3-10-2025_155948_.jpeg',
  'Screenshot_3-10-2025_16021_.jpeg',
  'Screenshot_3-10-2025_16039_.jpeg',
  'Screenshot_3-10-2025_16044_.jpeg',
  'Screenshot_3-10-2025_16049_.jpeg',
  'Screenshot_3-10-2025_16111_.jpeg',
  'Screenshot_3-10-2025_16122_.jpeg',
  'Screenshot_3-10-2025_16128_.jpeg',
  'Screenshot_3-10-2025_16139_.jpeg',
  'Screenshot_3-10-2025_1614_.jpeg'
];

const ProductDetail = () => {
  const { category, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Product data passed via state or fallback to location state
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="outline"
        className="mb-8"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2" /> Back to Products
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="overflow-hidden rounded-lg shadow-lg hover-tilt-3d">
          <motion.img
            src={''}
            alt={product.name}
            className="w-full h-full object-cover hover-pop-3d"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 font-poppins text-primary-blue">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          {product.specifications && product.specifications.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
