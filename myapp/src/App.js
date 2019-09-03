import React from "react";
import "./App.css";
import axios from "axios";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "ajkizer",
      photo: "",
      bio: "",
      followers: [],
      followerNames: ""
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(async res => {
        await this.setState({
          photo: res.data["avatar_url"],
          bio: res.data.bio,
          followers: res.data.followers
        });
      });

    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(async res => {
        await this.setState({ followerNames: res.data });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from app component</h1>
        <User userInfo={this.state} />
        <FollowerList followerNames={this.state.followerNames} />
      </div>
    );
  }
}

export default App;
