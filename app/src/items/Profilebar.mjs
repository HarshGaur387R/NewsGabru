import React, { Component } from 'react'

export default class Profilebar extends Component {
  render() {
    return (
      <>
        <div className='profilebar-container psn-fixed'>
          <div className='sec1-prof-container dis-flex ai-center jc-center'>
            <div className='image-container dis-flex jc-center ai-center'>
              <img src="assets\person_FILL1_wght400_GRAD0_opsz48.svg" alt="profile-pic" />
            </div>
          </div>

          <div className='sec2-prof-container buttons-container dis-flex ai-center jc-center'>
            <button type="button" title='button for signIn'>Sign In</button>
            <button type="button" title='button for signUp'>Sign Up</button>
          </div>

          <hr />

          <div className='sec3-prof-container'>
            <ul>
              <li>Language</li>
              <li>Settings</li>
              <li>Contact Us</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}
