/** @format */
// Importing all necessary files and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CallToAction from './CallToAction.js';
import { Button } from 'react-bootstrap';
// Creating a component to display text
const TextBlock = (props) => {
  return (
    <div className='box'>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <CallToAction info={props.info} />
    </div>
  );
};

export default TextBlock;
