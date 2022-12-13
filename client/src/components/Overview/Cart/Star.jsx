import React from 'react';

const Star = (props) => {
  const handleClick = () => {
    props.product.styles = {};
    props.product.styles.results = props.styles;
    props.addToOutfit(props.product);
    console.log(props.product);
  };

  return (
    <div className="star-container">
      <button onClick={handleClick}>*</button>
    </div>
  );
};

export default Star;