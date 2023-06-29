import React, { Component } from 'react'

export default class Profilebar extends Component {
  render() {
    return (
      <>
        <div className='profilebar-container psn-fixed'>
          <div >
            <div className='sec1-prof-container'>
              <div className='image-container dis-flex jc-center ai-center'>
                <img src="assets\person_FILL1_wght400_GRAD0_opsz48.svg" alt="profile-pic" />
              </div>
            </div>

            <div className='buttons-container'>
              <button type="button" title='button for signIn'>SignIn</button>
              <button type="button" title='button for signUp'>SignUp</button>
            </div>

            <hr />

            <div className='sec2-prof-container'>
              <ul>
                <li>Language</li>
                <li>Settings</li>
                <li>Contact Us</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
