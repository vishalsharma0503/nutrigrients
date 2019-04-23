import React, { Component } from "react";
import PostCard from "./PostCard";
import Header from "./Header";
import BackButton from "./BackButton";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    var token = props.match.params.token;
    this.state = {
      username: "",
      token: "Bearer " + token,
      post: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/posts/myposts", {
      crossDomain: true,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.state.token
      }
    })
      .then(res => {
        return res.json();
      })
      .then(receivedPosts => {
        //console.log(receivedPosts);
        var posts = [];
        this.pushPosts(posts, receivedPosts, receivedPosts.length);
        this.setState({
          username: receivedPosts.username,
          posts: posts,
          post: receivedPosts.post
        });
      });
  }

  pushPosts = (posts, receivedPosts, count) => {
    for (var i = 0; i < count; i++) {
      posts.push(
        <PostCard
          username={receivedPosts[i].username}
          post={receivedPosts[i].post}
        />
      );
    }
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userPost = {
      // token: this.state.token,
      // user: { _id: this.state._id },
      post: this.state.post
    };
    //console.log(userPost);

    fetch("http://localhost:5000/api/posts/", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.state.token
      },
      body: JSON.stringify(userPost)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        // console.log(resJson);
        if (resJson.error === undefined) {
          //console.log("Jai Mata di");
          // this.props.history.push("/allposts")
        } else {
          console.log(resJson.error);
        }
      })
      .catch(err => {
        console.log(err);
      });

    window.location.reload();
  }

  render() {
    return (
      <div className="post">
        <Header
          isAuthenticated={
            this.state.token !== undefined ? this.state.token : ""
          }
        />
        <BackButton
          history={this.props.history}
          token={this.props.match.params.token}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* post-item */}
              {this.state.posts}

              <div className="post-form mb-3">
                <div className="card card-info">
                  <div className="card-header bg-info text-white">
                    Say Somthing...
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Create a post"
                          name="post"
                          value={this.state.post}
                          onChange={this.onChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatePost;
