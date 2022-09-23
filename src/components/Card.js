import React from 'react';

const Card = function (props) {
  const joke = props.joke;
  return(
    <a 
      href={props.url} 
      rel='noreferrer' 
      target='_blank' 
      className='center br3 pa3 ma2 bg-yellow tc black grow shadow-5' 
      style={{display:'block', textDecoration:'none', width:'95%'}}
    >
      {joke}
    </a>
  )
}

export default Card;
