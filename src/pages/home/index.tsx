// src/pages/home/index.tsx
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { ProductGrid } from "../../features/ProductGrid";

export const HomePage = () => {
  return (
    <>
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center bg-[#fafafa]">
      
      {/* Background Text */}
       <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.02, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute text-[20vw] font-black tracking-tighter select-none z-0 text-gray-400"
      >
        ESSENCE
      </motion.div>

      {/* Main Layout Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center w-full max-w-[1500px] mx-auto px-8 gap-12 py-16 min-h-[80vh]">
        
        {/* Left Side: Editorial Typography & CTA (6 columns) */}
        <div className="md:col-span-6 flex flex-col space-y-8 text-center md:text-left z-30">
          
          <div className="flex flex-col leading-none">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-[11vw] font-light text-gray-800 tracking-tighter italic font-display"
              style={{ fontFamily: "'Playfair Display', serif" }} 
            >
              Unveil the
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
              className="text-6xl md:text-[11vw] font-black text-black tracking-[-0.05em] font-sans -mt-3 md:-mt-6"
              style={{ fontFamily: "'Inter', sans-serif" }} 
            >
              Unseen.
            </motion.span>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-600 max-w-sm mx-auto md:mx-0 text-base leading-relaxed"
          >
            Experience SOB ECLAT Prestige. A masterpiece of fragrance. Designed for the modern minimalist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button size="lg" className="mt-4 px-12 py-5 rounded-none border-2 border-black group transition-all duration-300 relative overflow-hidden bg-transparent">
               <span className="group-hover:text-white transition-colors duration-300 relative z-10 text-black">Explore Collection</span>
               <span className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0" />
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Product Presentation (LARGE BOTTLE + 3D HOVER) */}
        <div className="md:col-span-6 relative flex items-center justify-center w-full h-[500px] md:h-full mt-12 md:mt-0" style={{ perspective: "1000px" }}>
          
          {/* Floating Wrapper - Handles the continuous up/down movement */}
          <motion.div
            animate={{ y: ["-45%", "-55%", "-45%"], x: "-50%" }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 w-[70%] md:w-[70%] max-w-[400px] z-20"
            style={{ x: "-50%", y: "-50%" }} 
          >
            {/* Image Element - Handles the 3D rotation on hover */}
            <motion.img 
              whileHover={{ rotateY: 360, scale: 1.1 }} 
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src="/sob-perfume-bottle.webp" 
              alt="SOB ECLAT Prestige" 
              className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] cursor-pointer"
              loading="eager" 
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
          
           {/* Dynamic Shadow - Re-centered and widened for the larger bottle */}
          <motion.div 
            animate={{ scale: [1, 0.85, 1], opacity: [0.35, 0.15, 0.35], x: "-50%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-[85%] left-1/2 w-48 h-6 bg-black rounded-[50%] blur-xl z-[15]"
            style={{ x: "-50%" }}
          />
        </div>

      </div>

       {/* Corner Marker */}
        <div className="absolute left-8 bottom-16 select-none opacity-40">
           <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-sans">01 // The Scent of SOB</span>
        </div>
        
    </section>
    <section>
      <ProductGrid />
    </section> 
    </>
  );
};