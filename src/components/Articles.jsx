import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css'
import ArticleCard from './ArticleCard';
import { Link } from '@reach/router'

class Articles extends Component {

  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles } = this.state;
    return this.state.isLoading ? <div className="loader" /> : <main>
        {/* ARTICLES */}
        <p>{this.state.articles.length} articles available </p>
        {articles.map(article => {
          return <ArticleCard key={article._id} article={article} id={article._id} />;
        })}
      </main>;
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api.getArticles(this.props.topic)
      .then(
        articles => {
          this.setState({
            isLoading:false,
            articles
          })
        }
      )
  }
}

Articles.propTypes = {
  // topic:PropTypes.string
};

export default Articles;