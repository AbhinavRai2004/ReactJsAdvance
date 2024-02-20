import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a food ordering app</h2>
        {/* <User name={"Abhinav Rai (function)"} location={"Varanasi"} /> */}
        <UserClass name={"Abhinav Rai (Class)"} location={"Varanasi"} />
      </div>
    );
  }
}

export default About;
