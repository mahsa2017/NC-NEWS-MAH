import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'

class MostPopular extends Component {
  state = { articles: [],isLoading:true };
  render() {
    const { articles } = this.state;
    return this.state.isLoading ? <div className="loader" /> : <main>
        {/* MostPopular ARTICLES */}
        <p>{this.state.articles.length} articles available </p>
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
        function compareArticleVotes(article1, article2) {
          const vote1 = article1.votes;
          const vote2 = article2.votes;
          let v 
          vote1 > vote2?v=-1:
          vote1 < vote2?v=1:v=0
          return v;
        }
        const sortedArticles = [...articles].sort(compareArticleVotes);
        this.setState({ articles: sortedArticles.slice(0,10),isLoading:false });
      })
  };
}

MostPopular.propTypes = {};

export default MostPopular;
