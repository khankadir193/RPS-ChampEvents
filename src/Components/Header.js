import React from 'react';
import '../Style/Header.css';
import HeaderImg from '../assets/images/battle/header.png';
import DatePicker from './DatePicker';
import LanguagePicker from './DatePicker';

const Header = () => {
  return (
    <div className='header'>
      <LanguagePicker />
    </div>
  )
}

export default Header;