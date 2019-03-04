import React, { Component, Fragment } from 'react'
import ColorSelect from '../components/ColorSelect'


const PortraitMain = props => {
  console.log(props);
  const { image, toggle } = props
  return(
    <Fragment>
      <h1 onClick={ toggle }>{ image.name }</h1>
      <ColorSelect image={ image }/>
    </Fragment>
  )
}

export default PortraitMain;
