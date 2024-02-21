import React, { useContext } from 'react';
import '../Style/Header.css';
import LanguageDropDown from './LanguageDropDown';
// import { AppContext } from '../AppContext';
import { AppContext } from "../AppContext"; // Import AppContext from the AppContext.js file

const Header = () => {
  const { selectedLng, changeLanguage } = useContext(AppContext); // Use useContext hook to consume the context

  return (
    <div className='header'>
      <LanguageDropDown
        selectedLanguage={selectedLng}
        changeLanguage={changeLanguage}
      />
    </div>
  )
}

export default Header;