import React from 'react'

const GalleryItem = ({items}) => {
  return (
    <div className='item'>
      {items.map(item => (
      <div className={item.text}>
        <h1>{item.city}</h1>
      </div>))}
    </div>
  )
}

export default GalleryItem
