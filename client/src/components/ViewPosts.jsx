import React, { Component } from "react";
import Header from "./Header";
import PostCard from "./PostCard";
import BackButton from "./BackButton";

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.match.params.id,
      posts: []
    };
  }
  pushIntoPosts = (posts, responseJson, count) => {
    for (var i = 0; i < count; i++) {
      posts.push(
        <PostCard
          username={responseJson[i].username}
          post={responseJson[i].post}
        />
      );
    }
  };
  componentDidMount() {
    fetch("/api/posts/" + this.state.userid)
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log("View Posts:\n", responseJson);
        var posts = [];
        this.pushIntoPosts(posts, responseJson, responseJson.length);
        this.setState({ posts: posts });
      })
      .catch(err => {
        console.log("error: " + err);
      });
  }
  render() {
    return (
      <div>
        <Header isAuthenticated={"I fooled my Header"} />
        <BackButton
          history={this.props.history}
          token={this.props.match.params.token}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">{this.state.posts}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPost;
