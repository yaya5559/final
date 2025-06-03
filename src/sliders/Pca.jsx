import React from "react";
import { motion } from "framer-motion";
import "../style/style.css"; // assumes you have base styles loaded


/// introducing the problem, showing data.
/// an artile amd stats that showcase 
// the severity of the issue.


function Pca() {

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


  const variables = []

  return (
   <motion.div
     className="pca-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
   >
    <motion.div className="pca-card" variants={cardVariants}>
        <h2 className="pca-question">🤔 Why PCA (Principal Component Analysis)?</h2>
        <p className="pca-answer">
          ....
        </p>
      </motion.div>

      <motion.div className="pca-card" variants={cardVariants}>
        <h2 className="pca-question">📊 What variables were used in PCA?</h2>
        <ul className="pca-variable-list">
          {variables.map((v, index) => (
            <motion.li
              key={v}
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
  )
}

export default Pca
