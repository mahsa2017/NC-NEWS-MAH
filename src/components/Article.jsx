import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'
class Article extends Component {
  state = {
    article:{}
  }
  render() {
    return (
      <div>
        Single Article
      
        {this.state.article._id && <ArticleCard article={this.state.article} id={this.props.article_id} /> }
        {/* <Comments /> */}
      </div>
    );
  }
  componentDidMount(){
    this.fetchArticleById()
  }
  componentDidUpdate = prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticleById()
    }
  };
  
  fetchArticleById = () => {
    api.getArticleById(this.props.article_id)
    .then(article => {
      this.setState({ 
        article });
    });
  }
}

Article.propTypes = {
  article_id: PropTypes.objectOf(PropTypes.string.isRequired)
};

export default Article;