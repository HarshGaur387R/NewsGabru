import React, { Component } from 'react'


export default class NewsItem extends Component {

  constructor(){
    super()
    this.state = {
      increasePreviewTextHeight: false
    }
  }

  render() {

    const id = this.props.newsId;
    const defaultImageURL = 'https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0';

    return (
      <>
        <div onMouseOver={()=> this.setState({increasePreviewTextHeight:true})} onMouseOut={()=> this.setState({increasePreviewTextHeight:false})} id={id} className='cardContainer dis-flex ai-flex-end' style={{ backgroundImage: `url("${this.props.imageURL && this.props.imageURL !== "" ? this.props.imageURL : defaultImageURL}")` }}>
          <div className='newsHeadlineAndFooterContainer'>
            <div className="newsHeadline">
              <div className='newsTitle'>
                {this.props.title}
              </div>

              <div className="newsPreview" style={{height: this.state.increasePreviewTextHeight? "94px" : "0px"}}>
                {this.props.description}
              </div>
            </div>

            <div className='cardFooter dis-flex ai-center jc-center jc-space-between'>
              <code>{this.props.publishedAt}</code>
              <code>{this.props.source}</code>
            </div>
          </div>

        </div>
      </>
    )
  }
}