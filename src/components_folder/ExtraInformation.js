/** @format */
// Importing React
import React from 'react';
// Creating arrays to contain list data
const firstColumn = [
  <p className='listHeader'>About Us</p>,
  'Our History',
  'Leadership Team',
  'Our Values',
  'News & Notifications',
  'Alerts',
  'Our People',
  'Competitions',
];

const secondColumn = [
  <p className='listHeader'>Services</p>,
  'Wi-Fi',
  'McDelivery®',
];

const thirdColumn = [
  <p className='listHeader'>Community</p>,
  'RMHC',
  'Rounda',
  'McDonald’s International',
  'Women in Conversation',
  'Together Mzansi',
];

const fourthColumn = [<p className='listHeader'>Contact</p>, 'Location'];
// Creating a component that pushes all array data into ul elements
const ExtraInformation = () => {
  let firstList = firstColumn.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  let secondList = secondColumn.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  let thirdList = thirdColumn.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  let fourthList = fourthColumn.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div id='ExtraInfoContainer'>
      <ul>{firstList}</ul>
      <ul>{secondList}</ul>
      <ul>{thirdList}</ul>
      <ul>{fourthList}</ul>
    </div>
  );
};

export default ExtraInformation;
