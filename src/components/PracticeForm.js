import React, { Component } from 'react'

export default class PracticeForm extends Component {
    constructor() {
        super()
        this.state={
            firstName: "",
            lastName:"",
            age: "",
            gender: "",
            location:"Paris",
            diet: false
        }
    }

    handleChange = (event) => {
        const { type, value, name, checked} = event.target
        type === "checkbox" 
        ? this.setState({ [name] : checked})
        : this.setState({ [name] : value})
    }
  render() {
    return (
      <form style={{backgroundColor: "black", color: "white", padding:"20px"}}>
          <h1>Practice form</h1>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /><br /><br />
        <input type="text" name="lastName" value={this.state.lastName}placeholder="Last Name" onChange={this.handleChange}/><br /><br />
        <input type="text" name="age" value={this.state.age}placeholder="Age" onChange={this.handleChange}/><br /><br />

        {/* create radio button for gender here */}
        <label>Male</label>
        <input type="radio" checked={this.state.gender === "male"} name="gender" value="male" onChange={this.handleChange} />
        <label>Female</label>
        <input type="radio" checked={this.state.gender === "female"} name="gender" value="female" onChange={this.handleChange} />
        <br />
        <br />
        {/* create select box for location here */}
        <label>Chose your location : </label>
        <select value={this.state.location} name="location" onChange={this.handleChange}>
            <option value="London">London</option>            
            <option value="Rome">Rome</option> 
            <option value="Dubai">Dubai</option> 
            <option value="Paris">Paris</option> 
        </select>
        <br />
        <br />
        <label>
        <input type="checkbox" name="diet" checked={this.state.diet} onChange={this.handleChange} />
        Dietary restrictions
        </label>
        <br />
        <br />
        <button>Submit</button>

        <br />
        <br />
        <br />
        <hr/>
        <br />
        <h1>Entered Informations</h1>
        <br />
        <br />
        <h1>My name is: {this.state.firstName} {this.state.lastName}</h1>
        <h1>I'm {this.state.age} years old</h1>
        <h1>My gender is {this.state.gender}</h1>
        <h1>I'm in {this.state.location}</h1>
      </form>
    )
  }
}
