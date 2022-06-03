import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gray-50 px-6 py-3 rounded tracking-wider font-semi">
      {props.children}
    </button>
  );
};

export default Button;
