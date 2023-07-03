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
      showProfileBar: false,
      category: 'All'
    }
    this.setShowProfileBar = this.setShowProfileBar.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  setShowProfileBar(bool) {
    this.setState({
      showProfileBar: bool
    })
  }

  setCategory(value) {
    this.setState({
      category: value
    })
  }

  render() {
    return (
      <div>
        <Navbar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar}></Navbar>
        <Profilebar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar}></Profilebar>
        <NavbarOptions setCategory={this.setCategory}></NavbarOptions>
        <NewsHomePage category={this.state.category} ></NewsHomePage>
      </div>
    )
  }
}