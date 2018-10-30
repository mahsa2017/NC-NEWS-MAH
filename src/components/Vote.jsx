import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";
import './Vote.css'

class Vote extends Component {
  state = {
    vote: 0
  };
  render() {
    const {votes,id} = this.props;
    const {vote} = this.state;
    return <div>
        <button className="updown" onClick={() => this.voteChanger(id, "up")} disabled={vote === 1}>
          ⇧
        </button>
         <span>Votes: {votes + vote}</span>
      <button className="updown" onClick={() => this.voteChanger(id, "down")} disabled={vote === -1}>
          ⇩
        </button>
      </div>;
  }
  voteChanger = (id, direction) => {
    api.updateArticleVote(id, direction)
    this.setState({
      vote: direction === "up" ? this.state.vote + 1 : this.state.vote - 1
    });
  };
}
Vote.propTypes = {
  vote: PropTypes.number
};
export default Vote;
