import React from 'react'

const SelectOption = ({options}) => {
  return (
    <select type="select" >
      {options.map(item => (
          
          <option value={item.category}>{item.text}</option>
      
      ))}
    
    </select>
  )
}

export default SelectOption
