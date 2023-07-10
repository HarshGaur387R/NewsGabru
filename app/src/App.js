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
      showProfileBar: false, // Should be false
      category: 'general',
      country: 'in',
    }
    this.setShowProfileBar = this.setShowProfileBar.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setCountry = this.setCountry.bind(this);
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

  setCountry(value){
    this.setState({
      country: value
    })
  }

  setTitle(title){
    document.title = `News Gabru - ${title}`;
  }

  render() {
    return (
      <div>
        <Navbar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar}></Navbar>
        <Profilebar showProfileBar={this.state.showProfileBar} setShowProfileBar={this.setShowProfileBar} setCountry={this.setCountry}></Profilebar>
        <NavbarOptions setCategory={this.setCategory} setTitle={this.setTitle}></NavbarOptions>
        <NewsHomePage category={this.state.category} country={this.state.country} ></NewsHomePage>
      </div>
    )
  }
}