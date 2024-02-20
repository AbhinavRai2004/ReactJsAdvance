import { useState } from "react";

const User = (props) => {
  const [CountBtn, setCountBtn] = useState(0);
  const { name, location } = props;

  return (
    <div className="fun-comp">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h1>{CountBtn}</h1>
      <button onClick={() => setCountBtn(CountBtn + 1)}>counter</button>
    </div>
  );
};

export default User;
