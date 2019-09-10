import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="special_button">
        <span>{props.buttonV}</span>
      </button>
    </>
  );
};

export default SpecialButton;
