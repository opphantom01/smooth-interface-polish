import { motion } from "framer-motion";
import productFront from "@/assets/product-front.jpg";
import productBack from "@/assets/product-back.jpg";
import productFlaredDenim from "@/assets/product-flared-denim.jpg";
import productHenleyBlack from "@/assets/product-henley-black.jpg";
import productHenleyGrey from "@/assets/product-henley-grey.jpg";
import productHenleyBlue from "@/assets/product-henley-blue.jpg";
import productHenleyBlue2 from "@/assets/product-henley-blue2.jpg";
import productWidePants from "@/assets/product-wide-pants.jpg";
import productFlaredBlack from "@/assets/product-flared-black.jpg";

interface NewArrivalsProps {
  onProductClick: () => void;
}

const NewArrivals = ({ onProductClick }: NewArrivalsProps) => {
  const products = [
    { name: "Vintage Flared Denim", sizes: "28, 30, 32, 34", price: "₹1299", image: productFront, imageAlt: productBack },
    { name: "Flared Denim Jeans", sizes: "28, 30, 32, 34", price: "₹1299", image: productFlaredDenim, imageAlt: productFlaredDenim },
    { name: "Henley Long Sleeve - Black", sizes: "28, 30, 32, 34", price: "₹1299", image: productHenleyBlack, imageAlt: productHenleyBlack },
    { name: "Henley Long Sleeve - Grey", sizes: "28, 30, 32, 34", price: "₹1299", image: productHenleyGrey, imageAlt: productHenleyGrey },
    { name: "Henley Long Sleeve - Blue", sizes: "28, 30, 32, 34", price: "₹1299", image: productHenleyBlue, imageAlt: productHenleyBlue2 },
    { name: "Wide Leg Pants", sizes: "28, 30, 32, 34", price: "₹1299", image: productWidePants, imageAlt: productWidePants },
    { name: "Flared Pants - Black", sizes: "28, 30, 32, 34", price: "₹1299", image: productFlaredBlack, imageAlt: productFlaredBlack },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="lazy"
              />
              <img
                src={product.imageAlt}
                alt={`${product.name} Back`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                loading="lazy"
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
