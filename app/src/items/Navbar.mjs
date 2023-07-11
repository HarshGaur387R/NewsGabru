import React, { Component } from 'react'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleOnProfilePictureClick = this.handleOnProfilePictureClick.bind(this);
  }

  handleOnProfilePictureClick() {
    this.props.setShowProfileBar(!this.props.showProfileBar)
  }

  render() {
    return (
      <div>
        <nav className='navbar1 flex jc-center ai-center jc-space-between psn-fixed'>
          <div className='navbar1-item-container flex jc-center ai-center jc-space-around'>

            <div className='websiteLogoContainer'>NEWS GABRU</div>
            <div onClick={()=> this.handleOnProfilePictureClick()} className="hamburger-menu ps-relative dis-none">
              <img src="assets\menuHamburger.svg" alt="Hamburger-Menu" />
            </div>
            <div className='searchAndProfilePicContainer jc-space-between flex jc-center ai-center'>
              <div className='searchInputContainer dis-flex'>
                <input id='searchInput' type="text" placeholder='SEARCH' />
                <img id='searchIcon' className='' src="assets\search_FILL1_wght400_GRAD0_opsz48.svg" alt="Search Icon" />
              </div>

              <div onClick={() => this.handleOnProfilePictureClick()} className='profilePictureContainer'>
                <img id='profilePictureInNavbar' src="assets\person_FILL1_wght400_GRAD0_opsz48.svg" alt="Profile_Picture_Of_User" />
              </div>
            </div>
          </div>

        </nav>
      </div>
    )
  }
}