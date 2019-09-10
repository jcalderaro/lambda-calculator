// import React from "react";

// const SpecialButton = () => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };

import React from "react";

const SpecialButton = props => {
  return (
    <button style={{ 
      background: "#2160b0", 
      color: "white", 
      borderRadius: "50%", 
      height: "76px", 
      width: "76px", 
      marginLeft: "31px", 
      marginTop: "30px", 
      fontSize: "2rem", 
      border: "none" 
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton;