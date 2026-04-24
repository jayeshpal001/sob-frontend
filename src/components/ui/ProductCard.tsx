// src/components/ui/ProductCard.tsx
import { motion } from "framer-motion";
import type { Product } from "../../data/dummyProducts";
import { Button } from "./Button";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../features/cart/cartSlice";
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="group cursor-pointer flex flex-col gap-4 w-full">
      {/* Image Container with Overflow Hidden for smooth zoom */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
        {product.tag && (
          <span className="absolute top-4 left-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            {product.tag}
          </span>
        )}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={product.image}
          alt={product.name}
          className="w-2/3 h-2/3 object-contain drop-shadow-xl"
        />

        {/* Quick Add Button - Visible on Desktop Hover, Always visible on mobile */}
        <div className="absolute bottom-4 left-0 right-0 px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation(); // Card click event ko rokne ke liye
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col space-y-1 text-center md:text-left">
        <h3 className="text-lg font-bold uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">
          {product.description}
        </p>
        <p className="font-medium text-black mt-1">${product.price}</p>
      </div>
    </div>
  );
};
