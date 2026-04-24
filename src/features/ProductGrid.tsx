// src/features/ProductGrid.tsx
import { ProductCard } from "../components/ui/ProductCard";
import { dummyProducts } from "../data/dummyProducts";
import { motion } from "framer-motion";
export const ProductGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">
          Curated <span className="font-black">Collection.</span>
        </h2>
        <span className="hidden md:inline-block text-sm font-bold uppercase border-b-2 border-black cursor-pointer hover:text-gray-500 transition-colors pb-1">
          View All Scents
        </span>
      </div>

      {/* Responsive CSS Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {dummyProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Trigger hone ka offset
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-12 flex justify-center md:hidden">
        <button className="text-sm font-bold uppercase border-b-2 border-black pb-1">
          View All Scents
        </button>
      </div>
    </section>
  );
};
