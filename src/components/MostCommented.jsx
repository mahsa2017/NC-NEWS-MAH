import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'

class MostCommented extends Component {
  state = { articles: [], isLoading: true };
  render() {
    const { articles } = this.state;
    return this.state.isLoading ? (
      <div className="loader" />
    ) : (
      <main>
        {/* MostCommented ARTICLES */}
          <h1>Most Commented Articles</h1>
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
    api.getArticles().then(articles => {
      function compareArticleComments(article1, article2) {
        const c1 = article1.comment_count;
        const c2 = article2.comment_count;
        let c;
        c1 > c2 ? (c = -1) : c1 < c2 ? (c = 1) : (c = 0);
        return c;
      }
      const sortedArticles = [...articles].sort(compareArticleComments);
      this.setState({
        articles: sortedArticles.slice(0, 10),
        isLoading: false
      });
    });
  };
}

MostCommented.propTypes = {
  user: PropTypes.object
};

export default MostCommented;
