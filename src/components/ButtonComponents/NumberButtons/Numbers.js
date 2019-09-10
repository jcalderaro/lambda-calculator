import React, { useState } from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

function Numbers() {
  // STEP 2 - add the imported data to state
  const [numberState, setNumber] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map( number => (
        <NumberButton number={number} key={number.index} />
      ))}
    </div>
  );
};

export default Numbers;