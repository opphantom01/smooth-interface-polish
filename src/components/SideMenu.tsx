import { motion, AnimatePresence } from "framer-motion";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onShopAllClick: () => void;
}

const SideMenu = ({ isOpen, onClose, onShopAllClick }: SideMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-background/70"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute left-0 top-0 h-full w-full max-w-sm bg-background border-r border-border p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold uppercase tracking-widest">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground text-2xl leading-none"
              >
                ×
              </motion.button>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onShopAllClick();
                  onClose();
                }}
                className="text-left text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Shop All Products
              </motion.button>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-muted-foreground">
                  Store Policies
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed tracking-wide">
                  Shipping all over India. No returns, no cancellations, no COD.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
