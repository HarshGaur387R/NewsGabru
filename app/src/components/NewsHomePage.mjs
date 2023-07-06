import React, { Component } from 'react';
import NewsItem from '../items/NewsItem.mjs';
import { v4 as uuidv4 } from 'uuid';
import random from 'random';
import { config } from '../secretes/config.mjs';
import LoadingCircle from '../items/LoadingCircle.mjs';


function generateRandomString() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomLetter = random.choice(alphabet.split(''));
  let randomString = uuidv4();
  let result = randomLetter + randomString;
  return result;
}

export default class NewsHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      showLoadingCircle: true,
      count: 0,
      loading: false
    };
    this.NewsItemsList = this.NewsItemsList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  async fetchArticles(category) {
    const { currentPage } = this.state;
    let url;

    // url = `${config.TOPHEADLINES_API}?category=${category}&country=in&apiKey=${config.API_KEY}&page=${currentPage}`;
    url = `${config.TESTING_AP}/category/${category}/in.json`

    try {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });

      this.setState({ showLoadingCircle: true });
      const res = await fetch(url);
      const parsedRes = await res.json();
      const newArticles = parsedRes.articles || [];

      if (newArticles.length > 0) {
        this.setState({ showLoadingCircle: false });
      }

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...newArticles],
        loading: false
      }));

    } catch (error) {
      console.error(error)
    }
  }

  async componentDidMount() {
    const { category } = this.props;
    await this.fetchArticles(category);
    window.addEventListener('scroll', this.handleScroll);
  }

  async componentDidUpdate(prevProps) {
    const { category } = this.props;

    if (category !== prevProps.category) {
      this.setState({ currentPage: 1, articles: [] }, async () => {
        await this.fetchArticles(category);
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.state.loading) return; // Ignore scroll events if already loading

    const { innerHeight } = window;
    const { scrollHeight, scrollTop } = document.documentElement;

    if (scrollHeight - scrollTop === innerHeight) {
      this.setState({ loading: true }, () => {
        setTimeout(() => {
          const { category } = this.props;
          const nextPage = this.state.currentPage + 1;
          this.setState({ currentPage: nextPage }, async () => {
            await this.fetchArticles(category);
          });
        }, 1000); // Set a delay of 1000 milliseconds (adjust as needed)
      });
    }
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
            {this.NewsItemsList()}
          </div>
          <LoadingCircle showLoadingCircle={this.state.showLoadingCircle}></LoadingCircle>
        </div>
      </div>
    );
  }
}
