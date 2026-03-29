import { motion } from "framer-motion";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onMenuClick: () => void;
}

const Navbar = ({ cartCount, onCartClick, onHomeClick, onMenuClick }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-full flex justify-between items-center px-6 py-4 sticky top-0 bg-black/95 text-white backdrop-blur-sm z-50 border-b border-white/10"
    >
      <button onClick={onMenuClick} className="w-8 h-8 flex flex-col justify-center gap-1.5">
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
      </button>
      <button onClick={onHomeClick} className="text-xl font-bold tracking-[0.2em] uppercase text-center cursor-pointer">
        crp.tm
      </button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="text-sm font-bold tracking-widest"
        onClick={onCartClick}
      >
        CART (<span>{cartCount}</span>)
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
