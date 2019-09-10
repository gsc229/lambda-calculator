import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="operator_button">
        <span>{props.buttonV.char}</span>
      </button>
    </>
  );
};

export default OperatorButton;
