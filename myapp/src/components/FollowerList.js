import React from "react";
import axios from "axios";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    const followers = Array.from(this.props.followerNames);
    return (
      <div className="followers-container">
        {followers.map((follower, index) => {
          return <Follower follower={follower} key={index} />;
        })}
      </div>
    );
  }
}

export default FollowerList;
