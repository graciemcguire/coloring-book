import React, { Component, Fragment } from 'react'
import Header from './Header'
import PortraitGallery from './PortraitGallery'
import PortraitMain from './PortraitMain'

export default class MainContainer extends Component {
  state = {
    images: [],
    current: {},
    searchTerm: ''
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/ap1/v1/images')
    .then(r => r.json())
    .then(images => this.setState({ images }))
  }

  clickHandler = current => { this.setState({ current }) }

  filterImages = () => {
    return this.state.images.filter(image => image.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  changeHandler = event => {
    this.setState({ searchTerm: event.target.value })
    this.filterImages()
  }

  toggle = () => this.setState({ current: {} })

  render(){
    const { current, images } = this.state
    return(
      <Fragment>
        <Header />
        { !current.id
        ? <PortraitGallery images={ this.filterImages() } clickHandler={ this.clickHandler } changeHandler={ this.changeHandler }/>
        : <PortraitMain key={ current.id } image={ current } toggle={ this.toggle }/> }
      </Fragment>
    )
  }
}
