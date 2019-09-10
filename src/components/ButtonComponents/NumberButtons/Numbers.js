import React, { useState } from "react";
//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers } from "../../../data";

export default function Numbers() {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);

  console.log(numberState);
  return (
    <div>
      <div className="numbers_container">
        {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        numberState.map((buttonV, index) => (
          <NumberButton key={index} buttonV={buttonV} />
        ))}
      </div>
    </div>
  );
}
