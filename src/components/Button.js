import React from "react";


const Button = function (props) {
  return <button className="pa1 ma1 ba b--black" onClick={props.onClick}>{props.children}</button>
}

export default Button;
