import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css'
import ArticleCard from './ArticleCard';

class Articles extends Component {

  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles,isLoading } = this.state;
    return isLoading ? <div className="loader" /> : <main>
        {/* ARTICLES */}
        <p>{articles.length} articles available </p>
        {articles.map(article => {
          return <ArticleCard key={article._id} article={article} id={article._id} />;
        })}
      </main>;
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const{topic} = this.props;
    api.getArticles(topic)
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
  topic:PropTypes.string
};

export default Articles;