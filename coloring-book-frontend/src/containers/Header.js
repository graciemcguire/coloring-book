import React, { Component } from 'react'

const Header = props => {
  console.log(props.user);
  return(
    <div>
    <h3 className='log-in'>{ !props.user ?
      <button className='btn'>Log in?</button>
      : <button className='btn'>Logout {props.user.username}?</button> }</h3>
      <div>
        <h1><center>color me unimpressed</center></h1>
        <h1><center>¯\_(ツ)_/¯</center></h1>
      </div>
    </div>
  )
}

export default Header;
