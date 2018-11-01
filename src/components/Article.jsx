import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'
import Comments from './Comments'
import PostArticle from './PostArticle';
import PostComment from "./PostComment";

class Article extends Component {
  state = {
    article:{},
    isLoading:true
  }
  render() {
    return this.state.isLoading?<div className="loader" />:<div>
        {/* Single Article */}
        {this.state.article._id && <ArticleCard article={this.state.article} body={this.state.article.body} id={this.props.article_id} />}
      {this.state.article._id && <h3 style={{ textAlign: "left", marginLeft:"70px" }}>What do you think? </h3>}
        <PostComment user={this.props.user} id={this.props.article_id} />
        {this.state.article._id && <Comments user={this.props.user} id={this.props.article_id} />}
      </div>;
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
        article,isLoading:false });
    });
  }
}

Article.propTypes = {
  // article_id: PropTypes.objectOf(PropTypes.string.isRequired)
};

export default Article;