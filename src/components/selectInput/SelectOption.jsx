import React from 'react'

const SelectOption = ({options}) => {
  return (
    <select type="select" >
      {options.map((item,index) => (
          
          <option value={item.category} key={index}>{item.text}</option>
      
      ))}
    
    </select>
  )
}

export default SelectOption
