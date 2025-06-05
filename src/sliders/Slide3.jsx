import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visualizations = [
  {
    key: 'scatter',
    label: 'Homeless Rate 📊',
    src: 'map1.html',
    description:
      'Homelessness rate are highest on the west coast in kansas, and a few large cities on the east coast.',
  },
  {
    key: 'heatmap',
    label: 'funding per person map🗺️',
    src: 'funding_per_person_map.html',
    description:
      'funding is concentrated mostly on east coast in the deep south, and in areas with a high population density.',
  },
  {
    key: 'bar',
    label: 'scatterplot of funding per person and homeless rate📉',
    src: 'scatterplot_of_funding_per_person_and_homeless_rate.html',
    description:
      'Even though there is no Strong realtionship between federal housing and homelessness, we suspect there is bigger factors in play.',
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
          Exploratory Data Analysis
        </h1>
        <p
          style={{
            color: 'rgba(0,0,0,0.07)',
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
            border: '1.5px solid rgba(0,0,0,0.07)',
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
            e.target.style.borderColor = 'rgb(246, 241, 241)';
            e.target.style.boxShadow = '0 0 8px #0077ff';
          }}
          onBlur={(e) => {
            e.target.style.borderColor ='rgb(255, 255, 255)';
            e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.07)';
          }}
        >
          {visualizations.map((vis) => (
            <option key={vis.key} value={vis.key} className='custom-option'>
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
              backgroundColor: '#rgba(0,0,0,0.07)',
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
                height: '100%',
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
            <p color='#ffffff'>{selectedVis.description}</p>
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
