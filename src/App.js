import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Constact";
import Render from "./components/Render";

function App() {
  const [enteredUSer, setEnteredUser] = useState([]);
  const addUserHandler = (uname, uage) => {
    setEnteredUser((prevUserList) => {
      return [...prevUserList, { name: uname, age: uage }];
    });
  };

  return (
    <div>
      <Contact onAddUser={addUserHandler} />
      <Render users={enteredUSer} />
    </div>
  );
}

export default App;
