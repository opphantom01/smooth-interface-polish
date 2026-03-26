import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import EmailSignup from "@/components/EmailSignup";
import ProductPage from "@/components/ProductPage";
import CartModal from "@/components/CartModal";

interface CartItem {
  name: string;
  size: string;
  price: number;
}

const Index = () => {
  const [page, setPage] = useState<"home" | "product">("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const goToProduct = useCallback(() => {
    setPage("product");
    window.scrollTo(0, 0);
  }, []);

  const goHome = useCallback(() => {
    setPage("home");
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCallback((size: string) => {
    setCartItems((prev) => [...prev, { name: "Vintage Flared Denim", size, price: 1299 }]);
  }, []);

  const removeFromCart = useCallback((index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        onHomeClick={goHome}
      />

      <AnimatePresence mode="wait">
        {page === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <HeroSection onShopClick={goToProduct} />
            <NewArrivals onProductClick={goToProduct} />
            <EmailSignup />
          </motion.div>
        ) : (
          <motion.div
            key="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ProductPage onAddToCart={addToCart} />
          </motion.div>
        )}
      </AnimatePresence>

      <CartModal
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default Index;
