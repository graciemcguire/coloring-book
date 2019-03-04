import React, { Component, Fragment } from 'react'
import ColorSelect from '../components/ColorSelect'

export default class PortraitMain extends Component {
  render(){
    const { image, toggle } = this.props
    return(
      <Fragment>
        <h1 onClick={ toggle }>{ image.name }</h1>
        <ColorSelect image={ image }/>
      </Fragment>
    )
  }
}
