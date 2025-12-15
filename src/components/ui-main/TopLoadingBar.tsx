import React from "react";
import { motion } from "framer-motion";

const TopLoadingBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          className="h-1 bg-blue-500"
          initial={{ width: "0%" }}
          animate={{
            width: ["0%", "30%", "70%", "100%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.3, 0.8, 1],
          }}
        />
      </div>
      {children}
    </>
  );
};

export default TopLoadingBar;
