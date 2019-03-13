import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  // firstName: event.target.value
  //     [event.target.name]: event.target.value
  //   });
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     // firstName: event.target.value
  //     [event.target.name]: event.target.value // il faut associer la value de chaque name à une clé du state
  //   });
  // };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName} // pour forcer value a etre egal au state
          name="firstName"
          placeholder="firstname"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="lastname"
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
      </form>
    );
  }
}
