import React, { Component } from "react";

export default class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textarea: "",
      isFriendly: false
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

  render() {
    return (
      <div>
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
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <h1>{this.state.textarea}</h1>
      </div>
    );
  }
}
