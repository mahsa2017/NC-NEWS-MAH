import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";
import "./Vote.css";

class Vote extends Component {
  state = {
    voteVariable: 0
  }
  render() {
    const { votes, id } = this.props;
    const { voteVariable } = this.state;
    return <div>
        <button className="updown" onClick={() => this.voteChanger(id, "up")} disabled={voteVariable === 1}>
        <span role="img" aria-label="sheep">👍</span>
        </button>
        <span> Votes: {votes + voteVariable} </span>
        <button className="updown" onClick={() => this.voteChanger(id, "down")} disabled={voteVariable === -1}>
        <span role="img" aria-label="sheep">👎</span>
        </button>
      </div>;
  }
  voteChanger = (id, direction) => {
    if(!this.props.comment_count) //if its voting on comment, in commentCard <vote
     {api.updateCommentVote(id,direction)
      this.setState({
        voteVariable:
          direction === "up"
            ? this.state.voteVariable + 1
            : this.state.voteVariable - 1
      })
    }
    else{
    api.updateArticleVote(id, direction)
    this.setState({
      voteVariable:
        direction === "up"
          ? this.state.voteVariable + 1
          : this.state.voteVariable - 1
    })
    }
  }
}
Vote.propTypes = {
  // voteVariable: PropTypes.number
  votes:PropTypes.number,
  id:PropTypes.string.isRequired,
  comment_count:PropTypes.number
};
export default Vote;
