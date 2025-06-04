import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visualizations = [
  {
    key: 'scatter',
    label: 'Homeless Rate 📊',
    src: 'map1.html',
    description:
      'This scatter plot visualizes relationships between two numeric variables. It helps identify clusters, trends, and outliers across regions.',
  },
  {
    key: 'heatmap',
    label: 'funding per person map🗺️',
    src: 'funding_per_person_map.html',
    description:
      'The heat map displays the spatial distribution of values across different regions. It’s ideal for identifying geographic patterns.',
  },
  {
    key: 'bar',
    label: 'scatterplot of funding per person and homeless rate📉',
    src: 'scatterplot_of_funding_per_person_and_homeless_rate.html',
    description:
      'This bar chart compares categorical data, highlighting differences in magnitude or frequency. Great for quick comparisons.',
  },
];

export default function Slide3() {
  const [selectedVis, setSelectedVis] = useState(visualizations[0]);

  const handleChange = (e) => {
    const newVis = visualizations.find((v) => v.key === e.target.value);
    setSelectedVis(newVis);
  };

  return (
    <section
      className="slide3-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #000000, #808080)',
        fontFamily: "'Inter', sans-serif",
        color: '#333',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: 'center',
          marginBottom: '0.5rem',
          position: 'sticky',
          top: 0,
          
          paddingBottom: '1rem',
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#ffffff',
          }}
        >
          Explore Visualizations
        </h1>
        <p
          style={{
            color: '#ffffff',
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.4,
          }}
        >
          Select a chart type to view its corresponding visualization and description.
        </p>
      </header>

      {/* Dropdown */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <select
          aria-label="Select visualization type"
          value={selectedVis.key}
          onChange={handleChange}
          style={{
            padding: '0.85rem 1.5rem',
            borderRadius: '12px',
            border: '1.5px solid #bbb',
            backgroundColor: 'rgba(0,0,0,0.07)',
            fontSize: '1.125rem',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 6px 15px rgba(0,0,0,0.07)',
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
            width: '280px',
            maxWidth: '90%',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#0077ff';
            e.target.style.boxShadow = '0 0 8px #0077ff';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#bbb';
            e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.07)';
          }}
        >
          {visualizations.map((vis) => (
            <option key={vis.key} value={vis.key}>
              {vis.label}
            </option>
          ))}
        </select>
      </div>

      {/* Main Content Grid */}
      <div
        className="layout"
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Visualization Panel */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedVis.key}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12)',
              overflow: 'hidden',
              height: '100%',
              minHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <iframe
              title={selectedVis.label}
              src={selectedVis.src}
              style={{
                flexGrow: 1,
                border: 'none',
                borderRadius: '16px',
                width: '100%',
                minHeight: '500px',
                maxHeight: '80vh',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Description Panel */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`desc-${selectedVis.key}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            style={{
             
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12)',
              fontSize: '1rem',
              
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '600px',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              📌 Description
            </h3>
            <p color='ffffff'>{selectedVis.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 950px) {
          .layout {
            grid-template-columns: 1fr !important;
          }
          .slide3-container {
            padding: 1rem !important;
          }
          iframe {
            min-height: 400px !important;
            max-height: 60vh !important;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem !important;
          }
          select {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
