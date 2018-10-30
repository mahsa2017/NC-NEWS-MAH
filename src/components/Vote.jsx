import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";
import "./Vote.css";

class Vote extends Component {
  state = {
    voteVariable: 0
  };
  render() {
    const { votes, id } = this.props;
    const { voteVariable } = this.state;
    return (
      <div>
        <button
          className="updown"
          onClick={() => this.voteChanger(id, "up")}
          disabled={voteVariable === 1}
        >
          ⇧
        </button>
        <span> Votes: {votes + voteVariable} </span>
        <button
          className="updown"
          onClick={() => this.voteChanger(id, "down")}
          disabled={voteVariable === -1}
        >
          ⇩
        </button>
      </div>
    );
  }
  voteChanger = (id, direction) => {
    api.updateArticleVote(id, direction).then(console.log);
    this.setState({
      voteVariable:
        direction === "up"
          ? this.state.voteVariable + 1
          : this.state.voteVariable - 1
    });
  };
}
Vote.propTypes = {
  voteVariable: PropTypes.number
};
export default Vote;
