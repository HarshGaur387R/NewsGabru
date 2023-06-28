import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar1 flex jc-center ai-center jc-space-between psn-fixed'>
          <div className='websiteLogoContainer'>NEWS GABRU</div>
          <div className='searchAndProfilePicContainer jc-space-between flex jc-center ai-center'>
            <div className='searchInputContainer dis-flex'>
              <input id='searchInput' type="text" placeholder='SEARCH' />
                <img id='searchIcon' className='' src="assets\search_FILL1_wght400_GRAD0_opsz48.svg" alt="Search Icon" />
            </div>

            <div className='profilePictureContainer'>
              <img id='profilePictureInNavbar' src="assets\person_FILL1_wght400_GRAD0_opsz48.svg" alt="Profile_Picture_Of_User" />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}