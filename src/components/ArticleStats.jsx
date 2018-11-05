import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../components/ArticleCard';
import * as api from '../api';
class ArticleStats extends Component {
  state={
    articles:[],
    isLoading:true
  }
  render() {
    const { articles, isLoading } = this.state;
    return isLoading ? <div className="loader" /> : <main>
      {/* ARTICLES */}
      {articles.map(article => {
        return <ArticleCard key={article._id} article={article} id={article._id} />;
      })}
    </main>;
  }
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    const { stat } = this.props;
    if (prevProps.stat !== stat) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    if(this.props.stat === 'yours') {
      api.getArticles()
       .then(articles => {
        const yourarticles = articles.filter(article =>
          article.created_by.username === this.props.user.username)
        this.setState({ articles: yourarticles, isLoading: false });
      })
    }
    else if (this.props.stat === 'recent'){
      api.getArticles()
        .then(articles => {
          const thisyear = new Date().getFullYear();
          const Recent = articles.filter(article =>
            article.created_at
              .slice(0, 4) == thisyear);
          this.setState({ articles: Recent, isLoading: false });
        })
    }
    else if(this.props.stat === 'popular'){
      api.getArticles()
        .then(articles => {
          function compareArticleVotes(article1, article2) {
            const vote1 = article1.votes;
            const vote2 = article2.votes;
            let v
            vote1 > vote2 ? v = -1 :
              vote1 < vote2 ? v = 1 : v = 0
            return v;
          }
          const sortedArticles = [...articles].sort(compareArticleVotes);
          this.setState({ articles: sortedArticles.slice(0, 10), isLoading: false });
        })
    }
    else if(this.props.stat === "commented") {
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
    }   
  };
}

ArticleStats.propTypes = {
stat:PropTypes.string.isRequired
};

export default ArticleStats;