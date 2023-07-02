import React, { Component } from 'react';
import NewsItem from '../items/NewsItem.mjs';
import { v4 as uuidv4 } from 'uuid';
import random from 'random';
import { config } from '../secretes/config.mjs';

function generateRandomString() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomLetter = random.choice(alphabet.split(''));
  let randomString = uuidv4();
  let result = randomLetter + randomString;
  return result;
}

export default class NewsHomePage extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.NewsItemsList = this.NewsItemsList.bind(this); // Bind the function to the component instance
  }

  async componentDidMount() {
    let category = !this.props.category || this.props.category === "All" ? '' : this.props.category;
    let url = `${config.TOPHEADLINES_API}?country=in&apiKey=${config.API_KEY}`;

    // ========================== CREATE DYNAMIC FEATURING API ====================================

    const res = await fetch(url);
    const parsedRes = await res.json();

    this.setState({ articles: parsedRes.articles });
  }

  NewsItemsList() {
    const articles = this.state.articles || [];
    if (!articles) {
      return null;
    }

    return articles.map((e) => {
      const id = generateRandomString();
      const dateString = new Date(e.publishedAt).toLocaleString();
      return (
        <NewsItem
          key={id}
          newsId={id}
          author={e.author}
          description={e.description}
          publishedAt={dateString}
          source={e.source.name}
          imageURL={e.urlToImage}
          newsUrl={e.url}
          title={e.title}
        ></NewsItem>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='homepageContainer'>
          <div className='homepage dis-flex jc-center ai-center flex-wrap'>
            {this.NewsItemsList()} {/* Call the function as an expression */}
          </div>
        </div>
      </div>
    );
  }
}
