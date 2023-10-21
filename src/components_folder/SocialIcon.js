/** @format */
// Importing React
import React from 'react';
// Creating a component to display a social icon
const SocialIcon = (props) => {
  return <img className='icon' src={props.imageUrl} alt={props.alt} />;
};

export default SocialIcon;
