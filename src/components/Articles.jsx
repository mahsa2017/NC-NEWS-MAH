import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css'
import ArticleCard from './ArticleCard';
import { Link } from '@reach/router'

class Articles extends Component {
  state = {
    articles: []
  }
  render() {
    const { articles } = this.state;
    return <main>
        ARTICLES
        <p>Number of articles: {this.state.articles.length}</p>
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
            articles
          })
        }
      )
  }
}

Articles.propTypes = {

};

export default Articles;