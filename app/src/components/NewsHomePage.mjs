import React, { Component } from 'react'
import NewsItem from '../items/NewsItem.mjs'
export default class NewsHomePage extends Component {
  render() {
    return (
      <div>
        {`Hello From News Homepage`}
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </div>
    )
  }
}
