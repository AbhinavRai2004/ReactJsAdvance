import React from "react";


// order of life cycle = constructor -> render -> componentDidMount.
 
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      count: 0,
      count2: 0
    };
  }

  componentDidMount() {
    console.log("child componentDidMount");

    //Api logic are implemented here
  }
  render() {
    // destructuring.

    console.log("child rendering");

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="class-comp">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // Never update the state variable directly.
            this.setState({
              count: count + 1
            });
          }}
        >
          IncBtn
        </button>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
