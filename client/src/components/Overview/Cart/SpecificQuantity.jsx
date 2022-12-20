import React, { useState, useEffect } from 'react';

const SpecificQuantity = (props) => {

  const handleClick = () => {
    props.setQuantity(props.num);
    props.setQuantChosen(props.num);
    props.setQuantClicked(false);
  };

  return (
    <div className="quant-container">
      <li
        value={props.num}
        className="single-quantity"
        data-testid="quantity"
        onClick={handleClick}>
        {props.num}
      </li>
    </div>
  );
};

export default SpecificQuantity;