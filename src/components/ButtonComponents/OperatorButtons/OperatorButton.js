import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        onClick={() => props.getOperator(props.value)}
        className="operator_button"
      >
        <span>{props.character}</span>
      </button>
    </>
  );
};

export default OperatorButton;
