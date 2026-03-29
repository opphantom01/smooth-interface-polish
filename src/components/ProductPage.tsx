import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Product } from "@/data/products";

interface ProductPageProps {
  product: Product;
  onAddToCart: (size: string) => void;
}

const ProductPage = ({ product, onAddToCart }: ProductPageProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cartMsg, setCartMsg] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    onAddToCart(selectedSize);
    setCartMsg(true);
    setTimeout(() => setCartMsg(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Carousel */}
      <div className="w-full bg-secondary relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory w-full"
          style={{ scrollbarWidth: "none" }}
        >
          {product.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full flex-shrink-0 snap-center"
            >
              <img src={img.src} alt={img.alt} className="w-full h-[65vh] object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/60 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full pointer-events-none">
            Swipe ➔
          </div>
        )}
      </div>

      {/* Product Details */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 py-8 max-w-xl mx-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">{product.name}</h1>
            <p className="text-sm text-muted-foreground">Brand New Condition</p>
          </div>
          <p className="text-xl font-bold">{product.priceLabel}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold uppercase tracking-widest">Select Size</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.sizes.map((size) => (
              <motion.button
                key={size}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSize(size)}
                className={`border py-3 text-sm font-bold transition-all ${
                  selectedSize === size
                    ? "bg-foreground text-background border-foreground"
                    : "border-muted-foreground/40 hover:border-foreground"
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAdd}
          className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-sm mb-3 hover:opacity-90 transition-opacity"
        >
          Add To Cart
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAdd}
          className="w-full border-2 border-foreground text-foreground py-4 font-bold uppercase tracking-widest text-sm mb-4 hover:bg-foreground hover:text-background transition-all"
        >
          Buy Now
        </motion.button>

        <AnimatePresence>
          {cartMsg && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-center mb-6"
              style={{ color: "hsl(var(--success))" }}
            >
              Added to cart!
            </motion.p>
          )}
        </AnimatePresence>

        <div className="border-t border-border pt-4 mb-6">
          <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
            Shipping all over India. No returns, no cancellations, no COD.
          </p>
          <a
            href="mailto:contact@crp.tm"
            className="text-xs font-bold uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity mt-2 inline-block"
          >
            Contact Information
          </a>
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Measurements</h3>
          <div className="text-xs text-muted-foreground space-y-2 tracking-wide leading-relaxed">
            <p><span className="text-foreground">Length:</span> {product.measurements.length}</p>
            {product.measurements.sizes.map((m, i) => (
              <p key={i}><span className="text-foreground">{m.label}:</span> {m.details}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;
