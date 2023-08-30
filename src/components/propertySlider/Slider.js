import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';

const Slider = () => {
    const carouselRef = useRef()
    const [width,setWidth] = useState(0);
    const totalSlides = [
        {text: 'Houses', number:'21,147',class:'house'},
        {text: 'Flats', number:'113,243',class:'flat'},
        {text: 'Cottages', number:'5,178',class:'cottage'},
        {text: 'Apartments', number:'67,934',class:'apartment'}


    ];
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

        {totalSlides.map((item, index) => (
          <motion.div key={index}>
            <div className={`card ${item.class}`}></div>
            <h3>{item.text}</h3>
            <small>{item.number} <span className='span'>{item.text}</span></small>
          </motion.div>
        ))}
        </motion.div>
      </motion.div>
  </div>
        
  )
}


export default Slider
