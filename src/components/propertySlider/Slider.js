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
              <div className='for-sale-card'>
                <img src={item.imageUrl} alt="" />
                <h5>{item.title}</h5>
                {/* <small>{item.description}</small><br/> */}
                <small>{item.address}</small>
                <p>{item.price}</p>
              </div>
              )}

            {item.type === 'recommended' && (<></>)}
            {item.type === 'rent' && (<></>)}
          </motion.div>
     )): (<>{message}</>)}
        
         
     </motion.div>
        
      </motion.div>
  </div>
        
  )
}


export default Slider
