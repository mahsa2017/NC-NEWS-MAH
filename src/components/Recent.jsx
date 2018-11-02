import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'


class Recent extends Component {
  state = { articles: [],isLoading:true };
  render() {
    const { articles } = this.state;
    return (this.state.isLoading?<div className="loader"/>:
      <main>
        {/* Recent ARTICLES */}
         <h1>Recent Articles</h1>
        <p>{this.state.articles.length} articles available </p>
        {articles.map(article => {
          return (
            <ArticleCard key={article._id} article={article} id={article._id} />
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles()
      .then(articles => {
        const thisyear = new Date().getFullYear();
        // console.log(this.year,"thisyear!!!")
        const Recent = articles.filter(article =>
        article.created_at
          .slice(0, 4) == thisyear).sort((a,b)=>a-b);
        this.setState({ articles: Recent, isLoading:false });
      })
  };
}

Recent.propTypes = {
  user: PropTypes.object
};

export default Recent;
