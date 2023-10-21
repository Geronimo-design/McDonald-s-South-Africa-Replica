/** @format */
// Importing all necessary dependencies
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// A component to render a large carousel of three images
const CarouselContainer = (props) => {
  return (
    <div id='Carousel'>
      <Carousel>
        <div>
          <img src={props.url1} alt={props.alt1} />
        </div>
        <div>
          <img src={props.url2} alt={props.alt2} />
        </div>
        <div>
          <img src={props.url3} alt={props.alt3} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
