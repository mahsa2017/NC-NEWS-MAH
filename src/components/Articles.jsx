import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css'
import { Link } from '@reach/router'

class Articles extends Component {
  state = {
    articles: []
  }
  render() {
    const { articles } = this.state;
    return (
      <main>
        ARTICLES
        {articles.map(({ _id, title, body, created_by, created_at, belongs_to }) => {
          return (
            <li key={_id}>
              <Link to={`/articles/${_id}`}>
                <h3>{title}</h3>
                <h4>Posted By: {created_by.username} On {created_at.split('').slice(0, 10)}</h4>
                <Link to={`/topics/${belongs_to}`}><i>#{belongs_to} </i></Link>
                <p>{body.substr(0, 200) + ` ...`}</p>
                <p></p>
              </Link>
            </li>
          )
        }
        )}
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = () => {
    console.log("inside articles")
    api.getArticles()
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