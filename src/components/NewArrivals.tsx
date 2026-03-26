import { motion } from "framer-motion";
import productFront from "@/assets/product-front.jpg";
import productBack from "@/assets/product-back.jpg";

interface NewArrivalsProps {
  onProductClick: () => void;
}

const NewArrivals = ({ onProductClick }: NewArrivalsProps) => {
  const products = [
    { name: "Vintage Flared Denim", sizes: "28, 30, 32, 34", price: "₹1299" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold uppercase tracking-widest mb-10 text-center"
      >
        New Arrivals
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={onProductClick}
            className="group cursor-pointer flex flex-col text-left"
          >
            <div className="relative w-full aspect-[3/4] bg-secondary mb-4 overflow-hidden">
              <img
                src={productFront}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="lazy"
                width={800}
                height={1066}
              />
              <img
                src={productBack}
                alt={`${product.name} Back`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                loading="lazy"
                width={800}
                height={1066}
              />
              <div className="absolute top-2 right-2 bg-foreground text-background text-xs font-bold px-2 py-1">
                BRAND NEW
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-1">{product.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">Sizes: {product.sizes}</p>
              </div>
              <div className="text-sm font-bold">{product.price}</div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
