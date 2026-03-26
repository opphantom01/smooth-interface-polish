import { motion } from "framer-motion";
import heroImage from "@/assets/hero-campaign.jpg";

interface HeroSectionProps {
  onShopClick: () => void;
}

const HeroSection = ({ onShopClick }: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[80vh] bg-secondary overflow-hidden flex flex-col justify-end items-center pb-20">
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={heroImage}
        alt="Campaign"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-2 uppercase drop-shadow-lg"
        >
          Certified Drop Out Now
        </motion.h1>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="text-xl sm:text-3xl font-bold tracking-tight mb-8 uppercase drop-shadow-lg"
        >
          Premade &amp; Free Shipping
        </motion.h2>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onShopClick}
          className="bg-background text-foreground border border-transparent hover:border-foreground transition-all px-8 py-4 text-sm font-bold tracking-widest uppercase"
        >
          Shop Denim
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
