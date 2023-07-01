import './App.css';
import './util.css';
import NewsHomePage from './components/NewsHomePage.mjs';
import Navbar from './items/Navbar.mjs';
import NavbarOptions from './items/NavbarOptions.mjs';
import Profilebar from './items/Profilebar.mjs';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showProfileBar: false
    }
    this.setShowProfileBar = this.setShowProfileBar.bind(this);
  }

  setShowProfileBar(bool) {
    this.setState({
      showProfileBar: bool
    })
  }

  render() {
    return (
      <div>
        <Navbar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar}></Navbar>
        <Profilebar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar}></Profilebar>
        <NavbarOptions></NavbarOptions>
        <NewsHomePage></NewsHomePage>
      </div>
    )
  }
}
