import React, { Component } from 'react'
import PortraitCard from '../components/PortraitCard'
import SearchBar from '../components/SearchBar'

const PortraitGallery = props => {
  console.log(props);

  const { images, clickHandler, changeHandler } = props
  return(
    <div>
      <SearchBar changeHandler={ changeHandler }/>

      <h1 className='search-container'>gallery</h1>
    <div className= 'container'>
      { images.map(image => <PortraitCard key={ image.id } image={ image } clickHandler={ clickHandler }/>) }
    </div>
    </div>
  )
}

export default PortraitGallery;
