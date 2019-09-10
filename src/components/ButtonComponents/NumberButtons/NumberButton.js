import React from "react";

const NumberButton = props => {
  return (
    <>
      <button className="number_button">
        <span>
          {
            /* Display a button element rendering the data being passed down from the parent container on props */
            props.buttonV
          }
        </span>
      </button>
    </>
  );
};

export default NumberButton;
