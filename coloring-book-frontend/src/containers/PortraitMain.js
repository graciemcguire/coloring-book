import React, { Component, Fragment } from 'react'
import ColorSelect from '../components/ColorSelect'

export default class PortraitMain extends Component {
  state = {
    current: '#ffffff'
  }

  clickHandler = current => { this.setState({ current }) }

  test = (obj, e) => {
    console.log(e.target);
  }

  componentDidMount() {
    console.log(this.refs.imgObj.contentDocument.children[0]);
  }

  render(){
    const { image, toggle } = this.props
    console.log(this.state);
    return(
      <Fragment>
        <div ref="lpo">
        <h1 ref='kok' onClick={ toggle }>{ image.name }</h1>
        <h1 onClick={() =>  Array.from(this.refs.imgObj.contentDocument.children[0].children).map(child => (
          child.addEventListener('click', () => child.style.fill=this.state.current))) }>clicker</h1>
        <div>
          <object ref="imgObj" data={ image.image } type="image/svg+xml" onClick={() => console.log('e.target')}/>
        </div>
        <ColorSelect image={ image } clickHandler={ this.clickHandler }/>
        </div>
      </Fragment>
    )
  }
}

/*() =>  Array.from(this.refs.imgObj.contentDocument.children[0].children).map(child => console.log(child))*/
// .addEventListener('click', () => console.log("poop"))
