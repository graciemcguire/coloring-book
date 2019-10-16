import React, { Component } from 'react'


const PortraitCard = props => {
  const { image, clickHandler } = props
  return (
    <div className='portrait-cards'>
      <h1>{ image.name }</h1>
      <img
      alt={ image.name } src={ image.image }
      onClick={ () => clickHandler(image) }
      className='portrait-card-images'/>
    </div>
  )
}

export default PortraitCard;
