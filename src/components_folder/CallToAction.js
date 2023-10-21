/** @format */
// Importing all necessary files and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// Creating a reusable button component
const CallToAction = (props) => {
  return (
    <div>
      <Button className='Button' variant='warning'>
        {props.info}
      </Button>
    </div>
  );
};

export default CallToAction;
