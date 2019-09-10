// import React from "react";

// //import any components needed

// //Import your array data to from the provided data file

// const Operators = () => {
//   // STEP 2 - add the imported data to state
//   return (
//     <div>
//       {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//        it any props needed by the child component*/}
//     </div>
//   );
// };

import React, { useState } from "react";
import { operatorData } from '../../../data';
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file

function Operators() {
  // STEP 2 - add the imported data to state
  const [operators, setOperator] = useState(operatorData);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map( operator => (
        <OperatorButton operator={operator} key={operator.index} />
      ))}
    </div>
  );
};

export default Operators;
