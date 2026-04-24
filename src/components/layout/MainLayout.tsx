// src/components/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggleCart } from "../../features/cart/cartSlice";
import { CartDrawer } from "../../features/cart/CartDrawer"; // Naya import
import Lenis from "@studio-freight/lenis";
import { useEffect } from 'react';
export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth custom easing
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-brand-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter uppercase cursor-pointer">
            SOB
          </h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <span className="cursor-pointer hover:text-[var(--color-brand-accent)] transition-colors">
              Shop
            </span>
            <span className="cursor-pointer hover:text-[var(--color-brand-accent)] transition-colors">
              Essence
            </span>

            {/* Click karne par toggleCart dispatch hoga */}
            <span
              onClick={() => dispatch(toggleCart())}
              className="cursor-pointer hover:text-[var(--color-brand-accent)] transition-colors select-none"
            >
              Cart ({totalCartCount})
            </span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 text-center text-sm text-[var(--color-brand-accent)]">
        © 2026 SOB Fragrances. The Scent of the Unseen.
      </footer>

      <CartDrawer />
    </div>
  );
};
