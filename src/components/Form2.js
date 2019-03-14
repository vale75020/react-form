import React, { Component } from "react";

export default class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textarea: "",
      isFriendly: false,
      gender: "",
      favColor:"blue"
    };
    //  this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  handleChange = event => {
    // const { name, value } = event.target
    // this.setState({
    //   [name]: value
    // })
    const { name, value, type, checked } = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  };

  handleSubmit = () => {
    
  }

  render() {
    return (
      <form style={{backgroundColor: "black", color: "white", padding:"20px"}} onSubmit={this.handleSubmit}>
        <h1>Advanced Form</h1>
        <input
          value={this.state.firstName}
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          value={this.state.lastName}
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={this.handleChange}
        />
        <br />
       
        <br />
        <textarea
          value={this.state.textarea}
          name="textarea"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          is Friendly?
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        {/* formik */}
        <br />
        <br />
        <label>Favorite Color : </label>
        <select 
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
        <br />
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <h1>{this.state.textarea}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is :  {this.state.favColor}</h2>
        <button>Submit</button>
        {/* <input type="submit" /> */}
      </form>
    );
  }
}
