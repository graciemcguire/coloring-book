import React, { Component } from 'react'


const PortraitCard = props => {
  const { image, clickHandler } = props
  return (
    <div>
      <h1>{ image.name }</h1>
      <img alt={ image.name } src={ image.image } onClick={ () => clickHandler(image) }/>
    </div>
  )
}

export default PortraitCard;
