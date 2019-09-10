import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data";

export default function Specials() {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);
  return (
    <div className="specials_container">
      {specialState.map((buttonV, index) => (
        <SpecialButton key={index} buttonV={buttonV} />
      ))}
    </div>
  );
}
