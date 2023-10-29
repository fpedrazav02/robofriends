import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="textbox"
        placeholder="Search for a Robot"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default Searchbox;
