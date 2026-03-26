import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-border py-20 px-4 text-center"
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg font-bold uppercase tracking-widest mb-4"
      >
        Everybody can't have limited items..
      </motion.h4>
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs text-muted-foreground tracking-wider mb-8 max-w-md mx-auto"
      >
        JOIN OUR EMAIL LIST TO FIND OUT ABOUT THE NEW DROP AND NEVER MISS IT AGAIN
      </motion.p>
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="bg-transparent border border-muted-foreground/40 px-4 py-3 w-full text-sm focus:outline-none focus:border-foreground transition-colors"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubscribe}
          className="bg-foreground text-background px-6 py-3 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Subscribe
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {subscribed && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs mt-3"
            style={{ color: "hsl(var(--success))" }}
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EmailSignup;
