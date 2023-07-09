import React, { Component } from 'react'
import countries from './../data/country-code.json'
import languages from './../data/language-codes.json'

export default class Profilebar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      displayCountryList: false,
      displayLanguageList: false
    }
  }


  CountriesList() {
    return countries.map((countryCode, index) => {
      return <button type='button' className='country-buttons' value={countryCode.value} key={index}>{countryCode.country}</button>
    })
  }

  LanguagesList() {
    return languages.map((languageCode, index) => {
      return <button type='button' className='country-buttons' value={languageCode.code} key={index}>{languageCode.language}</button>
    })
  }


  handleOnEventContainerClick(event) {
    if (event.target.className === "profilebar-event-container")
      this.props.setShowProfileBar(false);
    return;
  }

  render() {

    if (!this.props.showProfileBar)
      return;

    return (
      <>
        <div className='profilebar-event-container' onClick={(event) => this.handleOnEventContainerClick(event)}>
          <div id='profilebar-container-id' className='profilebar-container psn-fixed'>
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

                <li>
                  <button type='button' onClick={() => this.setState({ displayLanguageList: !this.state.displayLanguageList })} className='text-decoration-none dis-flex jc-flex-start ai-center'>
                    <div className='list-image-container'>
                      <img src="assets\profilebarImages\language_FILL0_wght400_GRAD0_opsz48.svg" alt="Change language" />
                    </div>
                    <div className="list-text-container">
                      Language
                    </div>
                  </button>
                </li>

                <div className='languages-button-container'
                  style={
                    {
                      height: this.state.displayLanguageList ? "200px" : "0px",
                      marginTop: this.state.displayLanguageList ? "10px" : "0px"
                    }}>
                  {this.LanguagesList()}
                </div>

                <li>
                  <button type='button' onClick={() => this.setState({ displayCountryList: !this.state.displayCountryList })} className='text-decoration-none dis-flex jc-flex-start ai-center'>
                    <div className='list-image-container'>
                      <img src="assets\profilebarImages\add_location_FILL0_wght400_GRAD0_opsz48.svg" alt="settings" />
                    </div>
                    <div className="list-text-container">
                      Country
                    </div>
                  </button>
                </li>
                
                <div className='countries-button-container'
                  style={
                    {
                      height: this.state.displayCountryList ? "200px" : "0px",
                      marginTop: this.state.displayCountryList ? "10px" : "0px"
                    }}>
                  {this.CountriesList()}
                </div>

                <li>
                  <button type='button' className='text-decoration-none dis-flex jc-flex-start ai-center'>
                    <div className="list-image-container">
                      <img src="assets\profilebarImages\mail_FILL1_wght400_GRAD0_opsz48.svg" alt="contact us" />
                    </div>
                    <div className="list-text-container">
                      Contact Us
                    </div>
                  </button>
                </li>

                <li>
                  <button type='button' className='text-decoration-none dis-flex jc-flex-start ai-center'>
                    <div className="list-image-container">
                      <img src="assets\profilebarImages\support_agent_FILL0_wght400_GRAD0_opsz48.svg" alt="support" />
                    </div>
                    <div className='list-text-container'>
                      Support
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
