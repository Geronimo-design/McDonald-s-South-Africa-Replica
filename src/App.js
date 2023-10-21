/** @format */

/* The URL of the web page I have re-created is https://www.mcdonalds.co.za/. It is also specified within my application, in the last line of code */

// Importing all dependencies, files and images
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images_for_L2T13/logo.png';
import CarouselContainer from './components_folder/Carousel.js';
import MediumImageContainer from './components_folder/MediumImage.js';
import TextBlock from './components_folder/TextBlock.js';
import Navigation from './components_folder/Navigation.js';
import nazo from './images_for_L2T13/nazo.webp';
import delivery from './images_for_L2T13/delivery.webp';
import bigThree from './images_for_L2T13/bigThree.webp';
import pokemon from './images_for_L2T13/pokemon.jpg';
import chicken from './images_for_L2T13/chicken.webp';
import coffee from './images_for_L2T13/coffee.webp';
import wrap from './images_for_L2T13/wrap.webp';
import charity from './images_for_L2T13/charity.webp';
import ExtraInformation from './components_folder/ExtraInformation';
import Footer from './components_folder/Footer.js';
import SocialAndAction from './components_folder/SocialAndAction.js';

// The app to be rendered. Contains variants of all declared components that are re-used to create similar UI
function App() {
  return (
    <div className='App'>
      <Navigation imageUrl={logo} />
      <CarouselContainer
        url1={nazo}
        alt1='R39.90 for a meal'
        url2={delivery}
        alt2='Get free delivery on your first order'
        url3={bigThree}
        alt3='Three burgers that got juicier, tastier and hotter'
      />
      <div className='infoSlide'>
        <MediumImageContainer imageUrl={pokemon} alt='pokemon toys available' />
        <TextBlock
          heading='Pokemon'
          text='The classic Pokémon we all know and love is back, and our kids get to experience the timeless toys. The fun awaits in-store.'
          info='Learn More'
        />
      </div>
      <div className='infoSlide'>
        <TextBlock
          heading='Got a Tender Topic? Need some answers'
          text='Get whisked away into a world of crunchy when you indulge in our golden crispy and delicious 2 or 4-piece Chicken Tenders. Available in-store, on the App, and at Drive-Thru.'
          info='Chat Now!'
        />
        <MediumImageContainer
          imageUrl={chicken}
          alt='crispy chicken tenders for R19.90'
        />
      </div>
      <div className='infoSlide'>
        <MediumImageContainer imageUrl={coffee} alt='cappuccino for R19.90  ' />
        <TextBlock
          heading='We’ve brewed good again!'
          text='A good way to start the day is definitely with the McCafé Short Cappuccino at just R19.90. Brewed fresh everyday only at McCafé.'
          info='Order Now'
        />
      </div>
      <div className='infoSlide'>
        <TextBlock
          heading='McCafé Breakfast Wrap'
          text="Grab the McCafé Breakfast Wrap before you start your hectic day. Tasty breakfast wrap with cheese, egg, tomato and our lightly seasoned chicken roll made fresh for you, and of course, it's on the go."
          info='Order Now'
        />
        <MediumImageContainer
          imageUrl={wrap}
          alt='Breakfast wrap with coffee for R49,90'
        />
      </div>
      <div className='infoSlide'>
        <MediumImageContainer
          imageUrl={charity}
          alt='Father kissing a disabled child'
        />
        <TextBlock
          heading='Siyabonga, Mzansi.'
          text='Thank you, for your donations towards Ronald McDonald’s House Charities. you have helped keep families with seriously ill children together during difficult times.'
          info='Learn More'
        />
      </div>
      <aside>
        <ExtraInformation />
      </aside>

      <SocialAndAction />

      <Footer
        text1='Privacy (Updated)'
        text2='Accessibility'
        text3='Access to Information'
        text4='Terms & Conditions'
        text5="R10 Delights T's & C's"
        imageUrl={logo}
        alt="McDonald's logo"
        text6="2017 - 2023 McDonald's. All Rights Reserved."
      />

      <a href='https://www.mcdonalds.co.za/' rel='noreferrer' target='_blank'>
        The webpage I am re-creating
      </a>
    </div>
  );
}

export default App;
