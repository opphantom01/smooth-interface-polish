import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productFront from "@/assets/product-front.jpg";
import productBack from "@/assets/product-back.jpg";
import carouselModel1 from "@/assets/carousel-model1.jpg";
import carouselModel2 from "@/assets/carousel-model2.jpg";
import carouselLook from "@/assets/carousel-look.jpg";

interface ProductPageProps {
  onAddToCart: (size: string) => void;
}

const images = [
  { src: productFront, alt: "Front" },
  { src: productBack, alt: "Back" },
  { src: carouselModel1, alt: "Model 1" },
  { src: carouselModel2, alt: "Model 2" },
  { src: carouselLook, alt: "Look" },
];

const sizes = ["28", "30", "32", "34"];

const ProductPage = ({ onAddToCart }: ProductPageProps) => {
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
          {images.map((img, i) => (
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/60 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full pointer-events-none">
          Swipe ➔
        </div>
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
            <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">Vintage Flared Denim</h1>
            <p className="text-sm text-muted-foreground">Brand New Condition</p>
          </div>
          <p className="text-xl font-bold">₹1299</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold uppercase tracking-widest">Select Size</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {sizes.map((size) => (
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
          className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-sm mb-4 hover:opacity-90 transition-opacity"
        >
          Add To Cart
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

        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Measurements</h3>
          <div className="text-xs text-muted-foreground space-y-2 tracking-wide leading-relaxed">
            <p><span className="text-foreground">Length:</span> 43 across all sizes</p>
            <p><span className="text-foreground">Size 28:</span> Thigh 10.5 | Leg Opening 18</p>
            <p><span className="text-foreground">Size 30:</span> Thigh 11.0 | Leg Opening 18.5 (Model wears 30)</p>
            <p><span className="text-foreground">Size 32:</span> Thigh 11.5 | Leg Opening 19</p>
            <p><span className="text-foreground">Size 34:</span> Thigh 12.5 | Leg Opening 20</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;
