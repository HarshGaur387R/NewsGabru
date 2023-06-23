import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar flex jc-center ai-center jc-space-between psn-fixed'>
          <div className='websiteLogoContainer'>NEWS GABRU</div>
          <div className='searchAndProfilePicContainer jc-space-between flex jc-center ai-center'>
            <div className='searchInputContainer'>
              <input type="text" placeholder='SEARCH'/>
            </div>

            <div className='profilePictureContainer'>
              <img id='profilePictureInNavbar' src="logo512.png" alt="Profile_Picture_Of_User" />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}