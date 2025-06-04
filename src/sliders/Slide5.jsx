import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/style.css";

function Slide5() {
  const [variables, setVariables] = useState([]);
  const [input, setInput] = useState("");

  const handleAddVariable = () => {
    if (input.trim()) {
      setVariables((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

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

      <motion.div className="pca-card" variants={cardVariants}>
        <h2 className="pca-question">📊 What variables were used in PCA?</h2>

        <div className="pca-input-group">
          <input
            className="pca-input"
            type="text"
            placeholder="Enter a variable name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddVariable()}
          />
          <button onClick={handleAddVariable} className="pca-button">
            Add
          </button>
        </div>

        <ul className="pca-variable-list">
          {variables.map((v, index) => (
            <motion.li
              key={index}
              className="pca-variable"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              ✅ {v}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Slide5;
