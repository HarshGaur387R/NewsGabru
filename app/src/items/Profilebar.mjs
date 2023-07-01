import React, { Component } from 'react'

export default class Profilebar extends Component {

  render() {

    console.log(this.props.showProfileBar);
    if (!this.props.showProfileBar)
      return;

    return (
      <>
        <div className='profilebar-event-container'>

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
              <ul className='list-none'>
                <li><a href="/" className='text-decoration-none dis-flex jc-flex-start ai-center'>
                  <div className='list-image-container'>
                    <img src="assets\profilebarImages\language_FILL0_wght400_GRAD0_opsz48.svg" alt="Change language" />
                  </div>
                  <div className="list-text-container">
                    Language
                  </div>
                </a></li>

                <li><a href="/" className='text-decoration-none dis-flex jc-flex-start ai-center'>
                  <div className='list-image-container'>
                    <img src="assets\profilebarImages\settings_FILL1_wght400_GRAD0_opsz48.svg" alt="settings" />
                  </div>
                  <div className="list-text-container">
                    Settings
                  </div>
                </a></li>

                <li><a href="/" className='text-decoration-none dis-flex jc-flex-start ai-center'>
                  <div className="list-image-container">
                    <img src="assets\profilebarImages\mail_FILL1_wght400_GRAD0_opsz48.svg" alt="contact us" />
                  </div>
                  <div className="list-text-container">
                    Contact Us
                  </div>
                </a></li>

                <li><a href="/" className='text-decoration-none dis-flex jc-flex-start ai-center'>
                  <div className="list-image-container">
                    <img src="assets\profilebarImages\support_agent_FILL0_wght400_GRAD0_opsz48.svg" alt="support" />
                  </div>
                  <div className='list-text-container'>
                    Support
                  </div>
                </a></li>

              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
