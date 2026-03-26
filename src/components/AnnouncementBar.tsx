import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnnouncementBar = () => {
  const [mins, setMins] = useState(20);
  const [secs, setSecs] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecs((prev) => {
        if (prev > 0) return prev - 1;
        setMins((m) => (m > 0 ? m - 1 : 0));
        return prev > 0 ? prev - 1 : 59;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full border-b border-border py-3 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm tracking-widest font-bold"
    >
      <div>FREE SHIPPING</div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground font-normal">SALE ENDS IN :</span>
        <div className="flex gap-2">
          <span>00 <span className="text-[10px] text-muted-foreground font-normal">Days</span></span>:
          <span>00 <span className="text-[10px] text-muted-foreground font-normal">Hrs</span></span>:
          <span>{String(mins).padStart(2, "0")} <span className="text-[10px] text-muted-foreground font-normal">Mins</span></span>:
          <span>{String(secs).padStart(2, "0")} <span className="text-[10px] text-muted-foreground font-normal">Secs</span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
