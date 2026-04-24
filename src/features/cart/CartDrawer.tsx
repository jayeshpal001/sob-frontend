// src/features/cart/CartDrawer.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleCart, removeFromCart } from "./cartSlice";
import { Button } from "../../components/ui/Button";

export const CartDrawer = () => {
  const dispatch = useAppDispatch();
  const { items, isOpen } = useAppSelector((state) => state.cart);

  // Total price calculation
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleCart())}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Slide-in Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold uppercase tracking-widest">Your Essence</h2>
              <button 
                onClick={() => dispatch(toggleCart())}
                className="text-gray-400 hover:text-black transition-colors"
              >
                ✕ {/* Close icon */}
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                  <p>Your collection is empty.</p>
                  <Button variant="outline" onClick={() => dispatch(toggleCart())}>
                    Discover Scents
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-50 flex items-center justify-center p-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                          <button 
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-xs text-gray-400 hover:text-red-500 underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-sm">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6 font-medium">
                  <span className="uppercase text-sm tracking-wide">Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <Button className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};