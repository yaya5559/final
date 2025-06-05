import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Slide1 from './sliders/Slide1'

import Slide3 from './sliders/Slide3'
import "./style/style.css"
import Slide4 from './sliders/Slide4';
import Slide5 from './sliders/Slide5';
import Slide6 from './sliders/Slide6';
import Slide7 from './sliders/Slide7';
import Conclusion from './sliders/Conclusion';
import Slide15 from './sliders/Slide15';
import Results from './sliders/results';



const slides = [<Slide1/>, <Slide15 csvPath={'coc_data.csv'}/>, <Slide3/>, <Slide4/>, <Slide5/>, <Slide7/>, <Results/>, <Conclusion/>]

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};


function App() {
  
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + slides.length) % slides.length);

  };



  useEffect(()=>{
    const handleKey = (e) => {
      if(e.key === "ArrowRight") paginate(1);
      if(e.key === "ArrowLeft") paginate(-1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);



  return (
   <>
    <div className='app'>
      <div className='slide-container'>
      <AnimatePresence initial = {false} custom = {direction}>
        <motion.div  
          key={index}
          custom = {direction}
          variants = {variants}
          initial = "enter"
          animate="center"
          exit = "exit"
          transition = {{duration: 0.5}}
          className = "motion-slide"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className='controls'>
      <button onClick={() => paginate(-1)}>Previous</button>
      <button onClick={() => paginate(1)}>Next</button>
    </div>
    <div className='progress-bar'>
      <motion.div 
        className='progress-fill'
        initial = {{ width: 0 }}
        animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  </div>

   </>
  )
}

export default App
