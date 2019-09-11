import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button
        onClick={() => props.getSpecialOp(props.specialOp)}
        className="special_button"
      >
        <span>{props.specialOp}</span>
      </button>
    </>
  );
};

export default SpecialButton;
