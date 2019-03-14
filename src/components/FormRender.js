import React from "react";

const DiscomponentChild = (props) => {
    const style = {textAlign: "center", margin: "0 auto", color:"lightblue"}
  return (
    <form style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1 style={style}>Discomponent form</h1>
      <input
        type="text"
        name="firstName"
        value={props.data.firstName}
        placeholder="First Name"
        onChange={props.handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="lastName"
        value={props.data.lastName}
        placeholder="Last Name"
        onChange={props.handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="age"
        value={props.data.age}
        placeholder="Age"
        onChange={props.handleChange}
      />
      <br />
      <br />

      {/* create radio button for gender here */}
      <label>Male</label>
      <input
        type="radio"
        checked={props.data.gender === "male"}
        name="gender"
        value="male"
        onChange={props.handleChange}
      />
      <label>Female</label>
      <input
        type="radio"
        checked={props.data.gender === "female"}
        name="gender"
        value="female"
        onChange={props.handleChange}
      />
      <br />
      <br />
      {/* create select box for destination here */}
      <label>Destination : </label>
      <select
        value={props.data.destination}
        name="destination"
        onChange={props.handleChange}
      >
        <option value="chose your destination">
            -- Please chose your destination --
        </option>
        <option value="London">London</option>
        <option value="Rome">Rome</option>
        <option value="Dubai">Dubai</option>
        <option value="Paris">Paris</option>
      </select>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          name="isVegan"
          checked={props.data.isVegan}
          //checked={props.data.diet.isVegan}
          onChange={props.handleChange}
        />
        Vegan?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isKosher"
          checked={props.data.isKosher}
          //checked={props.data.diet.isKosher}
          onChange={props.handleChange}
        />
        Kosher?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.data.isLactosefree}
          //checked={props.data.diet.isLactosefree}
          onChange={props.handleChange}
        />
        Lactose Free?
      </label>
      <br />
      <br />
      <button>Submit</button>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h1 style={style}>Entered Informations</h1>
      <br />
      <h1>
        Your name :{" "}
        <span style={style}>
          {props.data.firstName} {props.data.lastName}
        </span>
      </h1>
      <h1>
        Your age : <span style={style}>{props.data.age}</span>
      </h1>
      <h1>
        Your gender : <span style={style}>{props.data.gender}</span>
      </h1>
      <h1>
        Your destination : <span style={style}>{props.data.destination}</span>
      </h1>
      <h1 style={style}>Your dietary restrictions :</h1>
      <h1>
        Vegan: <span style={style}>{props.data.isVegan ? "yes" : "no"}</span>
      </h1>
      <h1>
        Kosher: <span style={style}>{props.data.isKosher ? "yes" : "no"}</span>
      </h1>
      <h1>
        Lactose Free:{" "}
        <span style={style}>{props.data.isLactoseFree ? "yes" : "no"}</span>
      </h1>
      <br />
      <br />
    </form>
  );
};

export default DiscomponentChild;
