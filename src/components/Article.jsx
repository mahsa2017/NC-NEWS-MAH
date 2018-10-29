import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  state = {
    article:{}
  }
  render() {
    return (
      <div>
        Single Article
        {/* {this.props.article_id} */}
      </div>
    );
  }
}

Article.propTypes = {

};

export default Article;