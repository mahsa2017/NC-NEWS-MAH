import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'
import Comments from './Comments';
import {navigate} from '@reach/router'


class Article extends Component {
  state = {
    article:{},
    isLoading:true,
    msg:""
  }
  render() {
    return this.state.isLoading?<div className="loader" />:<div>
        {/* Single Article */}
        {this.state.article._id && <ArticleCard article={this.state.article} body={this.state.article.body} id={this.props.article_id} />}
        {this.props.user.username === this.state.article.created_by.username ?
        <button onClick={() => this.removeArticle(this.state.article._id)}>
          Delete
      </button> : ""}
        {this.state.article._id && <Comments user={this.props.user} id={this.props.article_id} />}
        {this.state.msg !== "" && <h1>{this.state.msg}</h1>}
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
  removeArticle = (id) => {
    api.deleteArticleByArticleId(id)
    .then(article=>{
      this.setState({
      msg:"Article successfully Deleted!"
    })
    })
    .then(article => {
        navigate(`/articles/yours`);
      });
  }
}

Article.propTypes = {
 user:PropTypes.object.isRequired
};

export default Article;