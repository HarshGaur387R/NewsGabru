import './App.css';
import './util.css';
import NewsHomePage from './components/NewsHomePage.mjs';
import Navbar from './items/Navbar.mjs';
import NavbarOptions from './items/NavbarOptions.mjs';
import Profilebar from './items/Profilebar.mjs';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();

    this.state= {
       showProfileBar: false
    }
  }

  render() {
    return (
      <div>
        <Navbar showProfileBar={this.state.showProfileBar}></Navbar>
        <Profilebar showProfileBar={this.state.showProfileBar}></Profilebar>
        <NavbarOptions></NavbarOptions>
        <NewsHomePage></NewsHomePage>
      </div>
    )
  }
}
