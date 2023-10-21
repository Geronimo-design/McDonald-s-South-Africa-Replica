/** @format */
// importing all dependencies
import React from 'react';
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from 'react-mobile-app-button';
import SocialIcon from './SocialIcon';
import Facebook from './icons_folder/facebook.svg';
import Twitter from './icons_folder/twitter.svg';
import Instagram from './icons_folder/instagram.svg';
import YouTube from './icons_folder/youtube.svg';
// Linking to the source pages for the GooglePlay and AppStore buttons
const APKUrl =
  'https://play.google.com/store/apps/details?id=host.exp.exponent';
const iOSUrl = 'https://apps.apple.com/us/app/expo-go/id982107779';
// Creating a component to display social media icons along with the buttons
const SocialAndAction = () => {
  return (
    <div className='socialAndAction'>
      <div id='iconsContainer'>
        <SocialIcon imageUrl={Facebook} />
        <SocialIcon imageUrl={Twitter} />
        <SocialIcon imageUrl={Instagram} />
        <SocialIcon imageUrl={YouTube} />
      </div>

      <div className='buttonsContainer'>
        <ButtonsContainer>
          <div className={'store'}>
            <AppStoreButton url={iOSUrl} theme={'dark'} />
          </div>
          <div className={'store'}>
            <GooglePlayButton url={APKUrl} theme={'dark'} />
          </div>
        </ButtonsContainer>
      </div>
    </div>
  );
};

export default SocialAndAction;
