import React from 'react'

const GalleryItem = ({items}) => {
  return (
    <div className='item'>
      {items.map((item,index) => (
      <div className={item.text} key={index}>
        <h1>{item.city}</h1>
      </div>))}
    </div>
  )
}

export default GalleryItem
