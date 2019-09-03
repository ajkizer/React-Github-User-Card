import React from "react";

class User extends React.Component {
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className="user-card">
        <img src={userInfo.photo} />
        <h2>{userInfo.user}</h2>
        <p>{userInfo.bio}</p>
        <p>followers: {userInfo.followers}</p>
      </div>
    );
  }
}

export default User;
