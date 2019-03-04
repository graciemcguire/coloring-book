import React, { Component } from 'react'


const PortraitCard = props => {
  const { image, clickHandler } = props
  return (
    <div>
      <h1 onClick={ () => clickHandler(image) }>{ image.name }</h1>
      <img alt='' src={ image.image } />
    </div>
  )
}

export default PortraitCard;
