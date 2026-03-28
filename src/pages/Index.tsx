import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import EmailSignup from "@/components/EmailSignup";
import ProductPage from "@/components/ProductPage";
import CartModal from "@/components/CartModal";
import { products } from "@/data/products";

interface CartItem {
  name: string;
  size: string;
  price: number;
}

const Index = () => {
  const [page, setPage] = useState<"home" | "product">("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const goToProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setPage("product");
    window.scrollTo(0, 0);
  }, []);

  const goHome = useCallback(() => {
    setPage("home");
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCallback((size: string) => {
    setCartItems((prev) => [...prev, { name: selectedProduct.name, size, price: selectedProduct.price }]);
  }, [selectedProduct]);

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
            <HeroSection onShopClick={() => goToProduct(products[0].id)} />
            <NewArrivals onProductClick={goToProduct} />
            <EmailSignup />
          </motion.div>
        ) : (
          <motion.div
            key={`product-${selectedProductId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ProductPage product={selectedProduct} onAddToCart={addToCart} />
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
