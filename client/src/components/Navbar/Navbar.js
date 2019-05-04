import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar justify-content-between">
        <span className="navbar-brand">
          <img className="App-logo" src={logo} width={85} height={85}/>
        </span>
        <h1>Ethereum Movie Rating D'App</h1>
      </nav>
    )
  }
}

export default Navbar;
