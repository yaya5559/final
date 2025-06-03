import React from "react";
import { motion } from "framer-motion";
import "../style/style.css";

export default function Linear() {
  return (
    <div className="map-container">
      {/* Map iframe */}
      <div className="map-wrapper">
        <iframe
          className="map-frame"
          src="map1.html"
          title="Regional Map"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Floating Description */}
      <motion.div
        className="map-description"
        initial={{ opacity: 0, y: -10, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3>🗺️  Map</h3>
        <p>
         
        </p>
      </motion.div>
    </div>
  );
}