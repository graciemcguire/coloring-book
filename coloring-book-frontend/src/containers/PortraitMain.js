import React, { Component, Fragment } from 'react'
import ColorSelect from '../components/ColorSelect'


const PortraitMain = props => {
  console.log(props);
  const { image, toggle } = props
  return(
    <Fragment>
      <h1>{ image.name }</h1>
      <img alt={ image.name } src={ image.image } onClick={ toggle }/> 
      <ColorSelect image={ image }/>
    </Fragment>
  )
}

export default PortraitMain;
