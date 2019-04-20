import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {}

  componentDidMount() {}

  render() {
    return (
      <div class="post">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* post-item */}
              <div class="card card-body mb-3">
                <div class="row">
                  <div class="col-md-2">
                    <a href="profile.html">
                      <img
                        class="rounded-circle d-none d-md-block"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                      />
                    </a>
                    <br />
                    <p class="text-center">John Doe</p>
                  </div>
                  <div class="col-md-10">
                    <p class="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint possimus corporis sunt necessitatibus! Minus nesciunt
                      soluta suscipit nobis. Amet accusamus distinctio
                      cupiditate blanditiis dolor? Illo perferendis eveniet cum
                      cupiditate aliquam?
                    </p>
                  </div>
                </div>
              </div>

              <div class="post-form mb-3">
                <div class="card card-info">
                  <div class="card-header bg-info text-white">
                    Say Somthing...
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <textarea
                          class="form-control form-control-lg"
                          placeholder="Create a post"
                          name="post"
                          value={this.state.bio}
                          onChange={this.onChange}
                        />
                      </div>
                      <button type="submit" class="btn btn-dark">
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
