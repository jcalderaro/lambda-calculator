import React from "react";

const OperatorButton = props => {
  return (
    <button style={{ 
      background: "#3db5e5", 
      color: "white", 
      borderRadius: "50%", 
      height: "76px", 
      width: "76px", 
      marginRight: "31px", 
      marginTop: "30px", 
      fontSize: "2rem",
      display: "flex",
      flexDirection: "column", 
      alignItems: "center",
      justifyContent: "center",
      border: "none" 
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;