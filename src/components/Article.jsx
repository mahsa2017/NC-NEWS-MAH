import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import ArticleCard from './ArticleCard'
import Comments from './Comments';
import { navigate } from '@reach/router'

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    msg: ""
  }
  render() {
    const { isLoading, article, msg} = this.state;
    const { article_id, user } = this.props;
  
    return isLoading ? <div className="loader" /> : <div className="article-card-container2">
        {/* Single Article */}
        {article._id && <ArticleCard article={article} body={article.body} id={article_id} />}
        {user.username === article.created_by.username ? <button
            onClick={() => this.removeArticle(article._id)}
          >
            Delete
          </button> : ""}
        {article._id && <Comments user={user} id={article_id} />}
        {msg !== "" && <h1>{msg}</h1>}
      </div>;
  }
  componentDidMount() {
    this.fetchArticleById()
  }
  componentDidUpdate = prevProps => {
    const { article_id } = this.props;
    if (prevProps.article_id !== article_id) {
      this.fetchArticleById()
    }
  };

  fetchArticleById = () => {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        navigate("/error", { replace: true, state: { code: 404 } });
      });
  }
  removeArticle = (id) => {
    api.deleteArticleByArticleId(id)
      .then(article => {
        this.setState({
          msg: "Article successfully Deleted!"
        })
      })
      .then(article => {
        navigate(`/articles/yours`);
      });
  }
}

Article.propTypes = {
  user: PropTypes.object.isRequired
};

export default Article;