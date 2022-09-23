import React from "react";
import Card from './Card.js';

function CardList(props) {  
  return (
      <div className='pa1 ma1'>
        {props.jokes.map( joke => <Card key={joke.id} joke={joke.value} url={joke.url}/> )}
      </div>
    )
}

export default CardList;
