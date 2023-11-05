import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateString } from "../redux/slices/string";

const StringChanger = () => {
  const string = useSelector((state) => state.string);
  const dispatch = useDispatch();

  const handleStringChange = () => {
    // Dispatch the action to update the string
    dispatch(updateString("New String Value"));
  };

  return (
    <div>
      <p>Current String: {string}</p>
      <button onClick={handleStringChange}>Change String</button>
    </div>
  );
};

export default StringChanger;
