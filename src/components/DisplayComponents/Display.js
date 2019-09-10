// import React from "react";

// const Display = () => {
//   return <div className="display">{/* Display any props data here */}</div>;
// };

import React from "react";

const Display = () => {
  return (
    <div style={{ 
      color: "white", 
      textAlign: "right", 
      background: "#2d2829", 
      height: "100px", 
      width: "400px", 
      border: "none", 
      borderRadius: "50px", 
      marginLeft: "30px", 
      marginTop: "-40px"
    }}>
      {/* Display any props data here */}<h1 style={{ marginRight: "20px", fontWeight: "lighter", fontSize: "3rem", paddingTop: "10px" }}>0</h1>
    </div>
  )
};

export default Display;