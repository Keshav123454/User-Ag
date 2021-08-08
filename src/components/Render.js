import React from "react";

const Render = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default Render;
