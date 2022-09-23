import React from "react";

const Scroll = (props) => {
  return (
		<div 
			className="ma1 bg-light-blue" 
			style={{overflowY: 'scroll', border: '1px solid black', height: '70vh'}}
	  >
			{props.children}
		</div>
  )
};

export default Scroll;
