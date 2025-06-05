import React from "react";
import { motion } from "framer-motion";
import "../style/style.css"; // Your custom styles

const insights = [
  "Funding seems to be distributed equitably across economic and demographic indicators assessed",
  "Models explain more variance in how funding is distributed than where the highest share of people are homeless",
  "Funding is not necessarily going to where the largest homeless populations are",
  "Could be because funding is going to other housing-related projects that don't help with homelessness",
  "Funding might be simpler to analyze than such a complex topic as homelessness",
];

const futureVariables = ["Mental illness", "Substance use", "Incarceration"];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 60,
    },
  }),
};

function InsightsSlide() {
  return (
    <div className="glass-container">
      {[insights, futureVariables].map((list, index) => (
        <motion.div
          key={index}
          className="glass-card"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="glass-title">
            {index === 0 ? "💡 Key Insights" : "🧠 Future Variables to Assess"}
          </h2>
          <ul className="glass-list">
            {list.map((item, idx) => (
              <li key={idx} className="glass-list-item">
                {index === 0 ? "🔹" : "✅"} {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default InsightsSlide;
