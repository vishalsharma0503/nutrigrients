import React, { Component } from 'react'

class PostCard extends Component {
  render() {
    return (
        <div className="card card-body mb-3">
              
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
                    <p className="text-center">{this.props.username}</p>
                  </div>
                  <div className="col-md-10">
                    <p className="lead">{this.props.post}</p>
                  </div>
                </div>
              </div>
    )
  }
}
export default PostCard;