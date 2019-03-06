import React from 'react'

const ColorButton = props => {
  return (
      <div className='color-cards'
      style={{background: props.color}}
      onClick={ () => props.clickHandler(props.color) }/>
  )
}

export default ColorButton;
