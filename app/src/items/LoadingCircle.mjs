import React, { Component } from 'react'

export default class LoadingCircle extends Component {
  render() {

    if(!this.props.showLoadingCircle)
        return;

   return (
      <div>
        <div className='loading-circle-container ta-center'>
            <img src="assets\loadingIcon\loadingCIrcle.gif" alt="loading is happening" />
        </div>
      </div>
    )
  }
}
