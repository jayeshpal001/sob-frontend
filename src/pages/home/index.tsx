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

        {/* Right Side: Product Presentation (FIXED ABSOLUTE POSITIONING) */}
        <div className="md:col-span-6 relative flex items-center justify-center w-full h-[500px] md:h-full mt-12 md:mt-0">
          
          {/* Plinth (The Base) - Centered and pushed slightly down */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: "-10%", x: "-50%" }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            src="/travertine-plinth.webp" 
            alt="Marble Base" 
            className="absolute top-1/2 left-1/2 w-[60%] md:w-[60%] max-w-[450px] object-contain drop-shadow-xl z-10"
            style={{ x: "-50%", y: "20%" }} // Base fallback
          />

          {/* Floating Bottle - Centered and pushed UP to sit on the plinth */}
          <motion.div
            animate={{ y: ["-65%", "-72%", "-65%"], x: "-50%" }} // Floating animation combined with exact placement
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 w-[55%] md:w-[45%] max-w-[280px] z-20"
            style={{ x: "-50%", y: "-65%" }} // Base fallback placement
          >
            <img 
              src="/sob-perfume-bottle.webp" 
              alt="SOB ECLAT Prestige" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              loading="eager" 
            />
          </motion.div>
          
           {/* Dynamic Shadow on top of plinth */}
          <motion.div 
            animate={{ scale: [1, 0.85, 1], opacity: [0.3, 0.1, 0.3], x: "-50%", y: "-20%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 w-32 h-4 bg-black rounded-[50%] blur-md z-[15]"
            style={{ x: "-50%", y: "-20%" }}
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
    </section> </>
  );
};