import React from "react";
import axios from "axios";

class FollowerList extends React.Component {
  render() {
    const followers = this.props.followerNames;
    return (
      <div className="followers-container">
        {followers.map(follower => console.log(follower))}
      </div>
    );
  }
}

export default FollowerList;
