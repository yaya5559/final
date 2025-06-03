import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../style/style.css";

const visualizations = [
  {
    label: "share of homeless black",
    value: "map",
    src: "Black.html",
    description: "dsec",
  },
  {
    label: "share of homeless american indian/alaska native",
    value: "Scatter",
    src: "Indian.html",
    description: "desc",
  },
  {
    label: "share of homeless asian",
    value: "bar",
    src: "asian.html",
    description: "desc",
  },
  {
    label: "share of homeless multi-racial",
    value: "bar",
    src: "multir.html",
    description: "desc",
  },
  {
    label: "share of homeless white",
    value: "bar",
    src: "white.html",
    description: "desc",
  },
  {
    label: " share of homeless native hawaiian/pacific islander",
    value: "bar",
    src: "Hispanic_map.html",
    description: "desc.",
  }
  

];

export default function VisualizationSelector() {
  const [selected, setSelected] = useState(visualizations[0]);

  const handleChange = (e) => {
    const vis = visualizations.find(v => v.value === e.target.value);
    if (vis) setSelected(vis);
  };

  return (
    <div className="viz-selector-container">
      <motion.div
        className="viz-dropdown-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <label htmlFor="viz-select" className="viz-label">Choose Visualization:</label>
        <div className="tooltip-wrapper">
          <select id="viz-select" onChange={handleChange} className="viz-dropdown">
            {visualizations.map(vis => (
              <option key={vis.value} value={vis.value}>
                {vis.label}
              </option>
            ))}
          </select>
          <motion.div
            className="tooltip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {selected.description}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.value}
          className="viz-content-card centered"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            className="viz-iframe"
            src={selected.src}
            title={selected.label}
            width="100%"
            height="600px"
          ></iframe>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
