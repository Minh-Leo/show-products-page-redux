import React from 'react';

function Card(props) {
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={props.product.image} style={{ width: '200px' }} alt='' />
      </div>
      <div className='card-content'>
        <h2 className='title'>{props.product.name}</h2>
        <div className='text'>{props.product.category}</div>
      </div>
    </div>
  );
}

export default Card;
