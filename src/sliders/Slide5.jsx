import React from "react";
import { motion } from "framer-motion";
import "../style/style.css";

function Slide5() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const processSteps = [
    "Choose which variables we want",
    "Check for / remove NAs",
    "Make sure each variable is numeric",
    "Standardize each variable",
    "Run through PCA",
  ];

  return (
    <motion.div
      className="pca-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Process Steps Card */}
      <motion.div className="pca-card" variants={cardVariants}>
        <h2 className="pca-question">⚙️ PCA Process</h2>
        <ul className="pca-process-list">
          {processSteps.map((step, index) => (
            <motion.li
              key={index}
              className="pca-process-step"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              🔹 {step}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Image only, no title or variables */}
      <motion.div
        className="pca-card"
        variants={cardVariants}
        style={{ textAlign: "center" }}
      >
        <img
          src="/loadings.png" // Replace with your image path or URL
          alt="PCA variables visualization"
          style={{ maxWidth: "100%", borderRadius: 8 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Slide5;
