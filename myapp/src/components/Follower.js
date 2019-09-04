import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Follower extends React.Component {
  render() {
    const follower = this.props.follower;
    return (
      <Card id="card-container">
        <Image src={follower["avatar_url"]} wrapped ui={false} />
        <h3>{follower.login}</h3>
        <a href={follower["html_url"]}>View GitHub</a>
      </Card>
    );
  }
}

export default Follower;
