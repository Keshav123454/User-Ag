import React, { useState } from "react";

const Contact = (props) => {
  const [userEnteredValue, setUserEnteredValue] = useState("");
  const [ageEnteredValue, setAgeEnteredValue] = useState("");

  const userChangeHandler = (event) => {
    setUserEnteredValue(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeEnteredValue(event.target.value);
  };

  const ClickHandler = (event) => {
    if (
      userEnteredValue.trim().length === 0 ||
      ageEnteredValue.trim().length === 0
    ) {
      return;
    }
    if (ageEnteredValue < 0) {
      return;
    }
    props.onAddUser(userEnteredValue, ageEnteredValue);
    setAgeEnteredValue("");
    setUserEnteredValue("");
  };

  return (
    <div>
      <div>
        <label>
          User Name
          <input
            type="text"
            onChange={userChangeHandler}
            value={userEnteredValue}
          />
        </label>
      </div>
      <div>
        <label>
          Age
          <input
            type="Number"
            onChange={ageChangeHandler}
            value={ageEnteredValue}
          />
        </label>
      </div>
      <button onClick={ClickHandler}>Click me</button>
    </div>
  );
};
export default Contact;
