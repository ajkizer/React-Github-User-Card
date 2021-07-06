import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class User extends React.Component {
  render() {
    const userInfo = this.props.userInfo;
    return (
      <Card id="user-card">
        <Image src={userInfo.photo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userInfo.user}</Card.Header>
          <Card.Description>{userInfo.bio}</Card.Description>
          <Card.Content extra>
            <Icon name="user" />
            followers: {userInfo.followers}
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default User;
