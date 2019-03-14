import React, { Component } from "react";
import DiscomponentChild from './FormRender'

export default class PracticeForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      //diet: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      //}
    };
  }

  // handleChange = event => {
  //   const { type, value, name, checked } = event.target;
  //   type === "checkbox"
  //     ? this.setState( prevState => {
  //       return{
  //          diet : {
  //            ...prevState.diet,  
  //            [name]: checked
  //           } 
  //         }
  //       })
  //     : this.setState({ [name]: value });
  // };

  handleChange = event => {
    const { type, value, name, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked})  // on cible objet diet
      //? this.setState({ diet : {[name]: checked} })  
      : this.setState({ [name]: value });
  };
  render() {
    // const style = {textAlign: "center", margin: "0 auto", color:"lightblue"}
    return (
        <div>
            <DiscomponentChild 
            handleChange={this.handleChange}
            data = {this.state}
            />

    {/* //   <form
    //     style={{ backgroundColor: "black", color: "white", padding: "20px" }}
    //   >
    //     <h1 style={style}>Practice form</h1>
    //     <input
    //       type="text"
    //       name="firstName"
    //       value={this.state.firstName}
    //       placeholder="First Name"
    //       onChange={this.handleChange}
    //     />
    //     <br />
    //     <br />
    //     <input
    //       type="text"
    //       name="lastName"
    //       value={this.state.lastName}
    //       placeholder="Last Name"
    //       onChange={this.handleChange}
    //     />
    //     <br />
    //     <br />
    //     <input
    //       type="text"
    //       name="age"
    //       value={this.state.age}
    //       placeholder="Age"
    //       onChange={this.handleChange}
    //     />
    //     <br />
    //     <br /> */}

         {/* create radio button for gender here */}
      {/*   <label>Male</label>
    //     <input
    //       type="radio"
    //       checked={this.state.gender === "male"}
    //       name="gender"
    //       value="male"
    //       onChange={this.handleChange}
    //     />
    //     <label>Female</label>
    //     <input
    //       type="radio"
    //       checked={this.state.gender === "female"}
    //       name="gender"
    //       value="female"
    //       onChange={this.handleChange}
    //     />
    //     <br />
      //     <br /> */}
        {/* create select box for destination here */}
    {/*
    //     <label>Destination : </label>
    //     <select
    //       value={this.state.destination}
    //       name="destination"
    //       onChange={this.handleChange}
    //     >
    //       <option value="chose your destination">
    //         -- Please chose your destination --
    //       </option>
    //       <option value="London">London</option>
    //       <option value="Rome">Rome</option>
    //       <option value="Dubai">Dubai</option>
    //       <option value="Paris">Paris</option>
    //     </select>
    //     <br />
    //     <br />
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="isVegan"
    //         checked={this.state.isVegan}
    //         //checked={this.state.diet.isVegan}
    //         onChange={this.handleChange}
    //       />
    //       Vegan?
    //     </label>
    //     <br />
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="isKosher"
    //         checked={this.state.isKosher}
    //         //checked={this.state.diet.isKosher}
    //         onChange={this.handleChange}
    //       />
    //       Kosher?
    //     </label>
    //     <br />
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="isLactoseFree"
    //         checked={this.state.isLactosefree}
    //         //checked={this.state.diet.isLactosefree}
    //         onChange={this.handleChange}
    //       />
    //       Lactose Free?
    //     </label>
    //     <br />
    //     <br />
    //     <button>Submit</button>
    //     <br />
    //     <br />
    //     <br />
    //     <hr />
    //     <br />
    //     <h1 style={style}>Entered Informations</h1>
    //     <br />
    //     <h1>Your name : <span style={style}>{this.state.firstName} {this.state.lastName}</span></h1>
    //     <h1>Your age : <span style={style}>{this.state.age}</span></h1>
    //     <h1>Your gender : <span style={style}>{this.state.gender}</span></h1>
    //     <h1>Your destination : <span style={style}>{this.state.destination}</span></h1>
    //     <h1 style={style}>Your dietary restrictions :</h1>
    //     <h1>Vegan: <span style={style}>{this.state.isVegan ? "yes" : "no"}</span></h1>
    //     <h1>Kosher: <span style={style}>{this.state.isKosher ? "yes" : "no"}</span></h1>
    //     <h1>Lactose Free: <span style={style}>{this.state.isLactoseFree ? "yes" : "no"}</span></h1>
    //     <br />
    //     <br />
    //   </form> */}
    </div>
    );
  }
}
