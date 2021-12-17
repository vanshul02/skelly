import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      <div className='card-img' style={{ backgroundImage: `url("${props.img}")`, height: "60px", width: "60px", backgroundSize: "cover" }}></div>
      <div className='card-title' >{props.title}
        <div className='card-code'> {props.prodid}</div>
      </div>
      <div className='card-price' >{props.price}</div>
    </div>
  );
};

export default Card;
