import React, { Component } from 'react'
import ColorButton from './ColorButton'

export default class ColorSelect extends Component {

  colors = ['#FFFFFF', '#8E53A1', '#6ABD46', '#71CCDC',
    '#F7ED45', '#F7DAAF', '#EC2527', '#F16824', '#CECCCC',
    '#5A499E', '#06753D', '#024259', '#FDD209', '#7D4829',
    '#931B1E', '#B44426', '#979797', '#C296C5', '#54B948',
    '#3C75BB', '#E89D5E', '#F26F68', '#F37123',
    '#676868', '#9060A8', '#169E49', '#3CBEB7', '#FFCD37',
    '#E5B07D', '#EF3C46', '#FDBE17', '#4E4D4E', '#6B449B',
    '#BACD3F', '#1890CA', '#FCD55A', '#D8C077', '#A62E32',
    '#F16A2D', '#343433', '#583E98', '#BA539F', '#9D2482',
    '#DD64A5', '#DB778D', '#EC4394', '#E0398C', '#68AF46',
    '#4455A4', '#FBEE34', '#AD732A', '#D91E36', '#F99B2A']

  createColorButtons = () => {
    return this.colors.map(color =>
      <ColorButton key={ color } color={ color } clickHandler={ this.props.clickHandler }/>
    )
  }

  render(){
    return(
      <div className= 'color-button-div'>
        <h2>color town</h2>
        { this.createColorButtons() }
      </div>
    )
  }
}
