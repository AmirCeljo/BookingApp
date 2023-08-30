import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';


const Slider = ({item,message}) => {
    const carouselRef = useRef()
    const [width,setWidth] = useState(0);
    


    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[])
  return (
    <div className="carousel-slider">
    <motion.div
        className="slider"
        ref={carouselRef}
      >
        <motion.div
        drag='x'
        dragConstraints={{right: 0,left: -width}}
        className='inner-slider'
        >
        {item && item.length > 0 ? 
        item.map((item,index) => (
          <motion.div key={index}>
            {item.type === 'totalSlides' && (
               <>
               <div className={`card ${item.class}`}></div>
               <h3>{item.text}</h3>
               <small>{item.number} <span className='span'>{item.text}</span></small>
               </>
            )}

            {item.type === 'sale' && (
               <>
                
               </>
            )}
             
          
          
           
          
          
          </motion.div>
     )): (<>{message}</>)}
        
         
     </motion.div>
        
      </motion.div>
  </div>
        
  )
}


export default Slider
