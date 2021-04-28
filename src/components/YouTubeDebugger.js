// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleReso = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: "720p" },
      },
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>
          BitRate
        </button>
        <button className="resolution" onClick={this.handleReso}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
