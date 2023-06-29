import React, { Component } from 'react'
import NewsItem from '../items/NewsItem.mjs'
import test_data from '../data/test-data.json'
import { v4 as uuidv4 } from 'uuid';
import random from 'random';


function generateRandomString(){
  
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomLetter = random.choice(alphabet.split(''));
  let randomString = uuidv4();
  let result = randomLetter + randomString;
  
  return result;
}

const NewsItemsList = ()=>{

  const articles = test_data.articles;

  return articles.map((e)=>{
    const id = generateRandomString();
    const dateString = new Date(e.publishedAt).toLocaleString();
    return <NewsItem key={id} newsId={id} author={e.author} description={e.description} publishedAt={dateString} source={e.source.name} imageURL={e.urlToImage} newsUrl={e.url} title={e.title}></NewsItem>
  })
}


export default class NewsHomePage extends Component {

  render() {

    return (
      <div>
        <div className='homepageContainer'>
          <div className='homepage dis-flex jc-center ai-center flex-wrap'>
            <NewsItemsList></NewsItemsList>
          </div>
        </div>
      </div>
    )
  }
}
