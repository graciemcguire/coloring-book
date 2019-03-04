import React, { Component, Fragment } from 'react'

export default class SearchBar extends Component {
  render(){
    return(
      <form>
        <input
        className="form"
        type="text"
        value={ this.props.value }
        onChange={ this.props.changeHandler }
        placeholder= 'Search Images'
        />
      </form>
    )
  }
}
