import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'

class YourArticles extends Component {
  state = { articles: [],isLoading:true };
  render() {
    const { articles } = this.state;
    return this.state.isLoading ? <div className="loader" /> : <main>
        {/* YOUR ARTICLES */}
        
      <h1>Your Articles</h1><span style={{ fontWeight: "30px", lineHeight:0}}>You wrote {this.state.articles.length} articles 👏 </span>
        {articles.map(article => {
          return <ArticleCard key={article._id} article={article} id={article._id} />;
        })}
      </main>;
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles()
      .then(articles => {
        const yourarticles = articles.filter(article =>
          article.created_by.username === this.props.user.username)
        this.setState({ articles: yourarticles,isLoading:false });
      })
  };
}

YourArticles.propTypes = {};

export default YourArticles;
