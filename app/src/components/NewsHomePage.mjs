import React, { Component } from 'react'
import NewsItem from '../items/NewsItem.mjs'
export default class NewsHomePage extends Component {
  render() {
    return (
      <div>
        <div className='homepageContainer'>
          <div className='homepage dis-flex jc-center ai-center flex-wrap'>
            <NewsItem newsId={"first"}></NewsItem>
            <NewsItem newsId={"second"}></NewsItem>
            <NewsItem newsId={"third"}></NewsItem>
            <NewsItem newsId={"fourth"}></NewsItem>
          </div>
        </div>
      </div>
    )
  }
}
