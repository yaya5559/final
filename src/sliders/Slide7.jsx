import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../style/style.css";

const visualizations = [
  {
    label: "Pca1",
    key: "1",
    src: "pca1.html",
    description: "High = urban and large percent PoC. Low = rural, white, high housing availability",

  },
  {
    label: "Pca2",
    key: "2",
    src: "pca2.html",
    description: "High = wealthy, lots of kids. Low = impoverished, few children.",
  },
  {
    label: "Pca3",
    key: "3",
    src: "pca3.html",
    description: "High = rural, poor job access. Low = urban, good job access",
  },
  {
    label: "Pca4",
    key: "4",
    src: "pca4.html",
    description: "High = older, wealthy. Low = higher density, higher housing cost burden, high povery",
  },
  {
    label: "Pca5",
    key: "5",
    src: "pca5.html",
    description: "High score = suburban. Lower score = rural or large city.",
  },
  {
    label: "pca6",
    key: "6",
    src: "pca6.html",
    description: "High = not Latina/o, middle aged, overcrowded. Low = Latina/o communities, younger.",
  },
 
];

const allImages = [
  "funding_per_person_model.png", "homelessness_model.png", "loadings.png"
];

export default function Slide7() {
  const [selectedVis, setSelectedVis] = useState(visualizations[0]);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <section className="slide3-container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #000000, #808080)',
      color: '#fff',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700 }}>Principal Component Analysis and Linear Model</h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          {selectedVis.description}
        </p>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        {/* Visualization Selector */}
        <select
          value={selectedVis.key}
          onChange={(e) => {
            const newVis = visualizations.find(v => v.key === e.target.value);
            setSelectedVis(newVis);
          }}
          style={{
            padding: '0.85rem 1.5rem',
            borderRadius: '12px',
            backgroundColor: '#333',
            color: '#fff',
            border: '1px solid #888',
            minWidth: '250px'
          }}
        >
          {visualizations.map(vis => (
            <option key={vis.key} value={vis.key}>{vis.label}</option>
          ))}
        </select>

        {/* Independent Image Selector */}
        <select
          value={selectedImage}
          onChange={(e) => setSelectedImage(e.target.value)}
          style={{
            padding: '0.85rem 1.5rem',
            borderRadius: '12px',
            backgroundColor: '#333',
            color: '#fff',
            border: '1px solid #888',
            minWidth: '250px'
          }}
        >
          {allImages.map((img, index) => (
            <option key={index} value={img}>{img}</option>
          ))}
        </select>
      </div>

      {/* Visualization Panel */}
      <div style={{
        display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
  marginTop: '2rem'
      }}>
        <AnimatePresence exitBeforeEnter>
          <motion.iframe
            key={selectedVis.key}
            src={selectedVis.src}
            title={selectedVis.label}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            style={{
              border: 'none',
              borderRadius: '16px',
              width: '90vw',
              maxWidth: '600px',
              minHeight: '450px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#fff'
            }}
          />
        </AnimatePresence>

        {/* Image Panel */}
        <motion.img
          key={selectedImage}
          src={selectedImage}
          alt="Selected"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: '45vw',
            borderRadius: '30px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
            maxHeight: '70vh',
            objectFit: 'contain'
          }}
        />
      </div>
    </section>
  );
}
