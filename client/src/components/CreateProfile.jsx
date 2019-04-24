import React, { Component } from "react";
import Header from "./Header";
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    var token = props.match.params.token;
    this.state = {
      token: token,
      jwttoken: "Bearer " + token,
      username: "",
      user: { _id: "" },
      age: "",
      height: "",
      weight: "",
      gender: "",
      allergies: "",
      conditions: "",
      foodType: "",
      bodyShape: "",
      bio: "",
      facebook: "",
      twitter: "",
      instagram: "",
      date: "",
      idealPlate: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    if (
      e.target.name === "age" ||
      e.target.name === "height" ||
      e.target.name === "weight"
    ) {
      this.setState({ [e.target.name]: Number(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const newProfile = {
      token: this.state.token,
      username: this.state.username,
      user: { _id: this.state._id },
      age: Number(this.state.age),
      height: Number(this.state.height),
      weight: Number(this.state.weight),
      gender: this.state.gender,
      allergies: this.state.allergies,
      conditions: this.state.conditions,
      foodType: this.state.foodType,
      bodyShape: this.state.bodyShape,
      idealPlate: this.state.idealPlate,
      bio: this.state.bio,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram,
      date: this.state.date
    };
    fetch("http://localhost:5000/api/profiles/", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.state.jwttoken
      },
      body: JSON.stringify(newProfile)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.error === undefined) {
          //console.log("Jai mahesmati");
          this.props.history.push("/dashboard/" + this.state.token);
        } else {
          console.log(responseJson.error);
        }
        //this.setState({ jwttoken: this.state.jwttoken, ...newState });
      })
      .catch(err => {
        console.log(err);
      });

    // axios
    //   .post("/api/profiles/",{
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': this.state.jwttoken
    //     },
    //     newProfile
    // })
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.response.data));
  }
  render() {
    return (
      <div className="create-profile">
        <Header
          isAuthenticated={
            this.state.token !== undefined ? this.state.token : ""
          }
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="username - Must be unique"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    A unique name that identifies you and your account
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Age (Years)"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Mention your Age here
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Height (Meters)"
                    name="height"
                    value={this.state.height}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Mention your Height here
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Weight (KG)"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Mention your Weight here
                  </small>
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="condition"
                    value={this.state.condition}
                    onChange={this.onChange}
                  >
                    <option value="0">* Select your Health condition</option>
                    <option value="BP">BP</option>
                    <option value="Cholestrol">
                      Cholestrol or any Heart-issue
                    </option>
                    <option value="Arthritis">Arthritis</option>
                    <option value="Cancer">Cancer</option>
                    <option value="">None</option>
                  </select>
                  <small className="form-text text-muted">
                    Tell us about your Health Condition
                  </small>
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="foodType"
                    value={this.state.foodType}
                    onChange={this.onChange}
                  >
                    <option value="0">* Select your Food Type</option>
                    <option value="Veg">VEG</option>
                    <option value="Non-Veg">NON-VEG</option>
                    <option value="Vegan">VEGAN</option>
                  </select>
                  <small className="form-text text-muted">
                    Give us an idea of what food type do you prefer
                  </small>
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                  >
                    <option value="0">* Select your Gender</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="LGBTQ">LGBTQ</option>
                  </select>
                  <small className="form-text text-muted">
                    Mention your Gender here
                  </small>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Allergies if any?"
                    name="allergies"
                    value={this.state.allergies}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Mention your Allergies here
                  </small>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="A short bio of yourself"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Tell us a little about yourself
                  </small>
                </div>

                <div className="mb-3">
                  <button type="button" className="btn btn-light">
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-facebook" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Facebook Page URL"
                    name="facebook"
                    value={this.state.facebook}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-instagram" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Instagram Page URL"
                    name="instagram"
                    value={this.state.instagram}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Twitter Profile URL"
                    name="twitter"
                    value={this.state.twitter}
                    onChange={this.onChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-youtube" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="YouTube Channel URL"
                    name="youtube"
                    value={this.state.youtube}
                    onChange={this.onChange}
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
