
import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import "../style/style.css"
// src/slides/Slide1.jsx
export default function Slide3() {
    const [activeVisualization, setActiveVisualization] = useState(null);
    const [activeDescription, setActiveDescription] = useState(null);


    const descriptions = {
        chart: "This scatter plot shows the relationship between variables A and B across regions. Use it to spot patterns and outliers.",
        map: "This heat map displays regional distribution data, allowing you to compare geographic trends at a glance."
    };



    const plotSources = [
        {
            title: "",
            src:"scatterPlot.html"
        },
        {
            title: "",
            src: "map9.html"
        }

    ]


    const handleVisualizationClick = (visType) => {
        setActiveVisualization(visType)
    }

    const toggleDescription = (type) => {
    setActiveDescription(prev => (prev === type ? null : type));
  };
    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300 },
        },
    };

    const visualizationVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', damping: 12, stiffness: 120},
        },
        exit:{opacity: 0, scale: 0.9}
    };

    const renderVisualization = () =>{
        switch(activeVisualization){
            case 'chart':
                return(
                    <motion.div
                        key="chart"
                        variants={visualizationVariants}
                        initial="hidden"
                        animate="visible"
                        className='visualization'
                    >
                        <div className="plot-switch-container">
                            <iframe
                                className="plot-frame"
                                src="scatterPlot.html"
                                width="100%"
                                height="600px"
                                style={{ border: "none", borderRadius: "8px" }}
                            />
                            <div className="observation">

                            </div>
                        </div>
                    </motion.div>
                )
            case 'map':
                return(
                    <motion.div
                        key="map"
                        variants={visualizationVariants}
                        initial="hidden"
                        animate="visible"
                        className='visualization'
                    >
                        <div className="plot-switch-container">
                            <iframe
                                className="plot-frame"
                                src="map2.html"
                                width="100%"
                                height="600px"
                                style={{ border: "none", borderRadius: "8px" }}
                            />
                            <div className="observation">

                            </div>
                        </div>
                    </motion.div>
                )
            default:
                return null;
        }
    }

  return (
    
    <div className="slide3 map-slide">
        <AnimatePresence>
        <motion.div
        className="visual-option-bar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {['chart', 'map'].map((type)=>(
            <motion.div key={type} className="option-button-wrapper">
            <motion.button
                key={type}
                className={`option-button ${activeVisualization === type ? 'active' : ''}`}
                onClick={() => handleVisualizationClick(type)}
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                
            >
                {type === 'chart' && '📊'}
                {type === 'map' && '📈'}
            </motion.button>
            <motion.button
                className="desc-button"
                onClick={() => toggleDescription(type)}
                whileHover={{ scale: 1.1 }}
              >
                ?
            </motion.button>
            <AnimatePresence>
                {activeDescription === type && (
                  <motion.div
                    className="desc-popup"
                    key={`desc-${type}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {descriptions[type]}
                  </motion.div>
                )}
            </AnimatePresence>        
            </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>

        <AnimatePresence mode="wait">
            {activeVisualization &&(
                <motion.div
                    key={activeVisualization}
                    className="visualization-card"
                    variants={visualizationVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {renderVisualization()}
                </motion.div>
            )}

        </AnimatePresence>


    </div>
  );
}
