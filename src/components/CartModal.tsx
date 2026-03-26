import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  name: string;
  size: string;
  price: number;
}

interface CartModalProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (index: number) => void;
}

const CartModal = ({ isOpen, items, onClose, onRemove }: CartModalProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-background border-l border-border p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold uppercase tracking-widest">Cart</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground text-2xl leading-none"
              >
                ×
              </motion.button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center mt-10">Your cart is empty</p>
              ) : (
                items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center py-4 border-b border-border"
                  >
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">₹{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => onRemove(i)}
                        className="text-muted-foreground hover:text-foreground text-lg"
                      >
                        ×
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-border pt-6"
              >
                <div className="flex justify-between text-sm font-bold mb-4">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
                >
                  Checkout
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
