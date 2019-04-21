import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    var token = props.match.params.token;
    this.state = {
      token: "Bearer " + token,
      post: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
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
    console.log(userPost);

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
        console.log(resJson);
        if (resJson.error === undefined) {
          console.log("Jai Mata di");
          this.props.history.push("/allposts")
        } else {
          console.log(resJson.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* post-item */}
              {/* <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-2">
                    <a href="profile.html">
                      <img
                        className="rounded-circle d-none d-md-block"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                      />
                    </a>
                    <br />
                    <p className="text-center">John Doe</p>
                  </div>
                  <div className="col-md-10">
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint possimus corporis sunt necessitatibus! Minus nesciunt
                      soluta suscipit nobis. Amet accusamus distinctio
                      cupiditate blanditiis dolor? Illo perferendis eveniet cum
                      cupiditate aliquam?
                    </p>
                  </div>
                </div>
              </div> */}

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
