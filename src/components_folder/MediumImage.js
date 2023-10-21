/** @format */
// Importing React
import React from 'react';
// Creating a component to display a medium-sized image
const MediumImageContainer = (props) => {
  return (
    <div>
      <img className='medium-image' src={props.imageUrl} alt={props.alt} />
    </div>
  );
};

export default MediumImageContainer;
