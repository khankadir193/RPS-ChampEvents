import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.js';
import { useState } from 'react';
import CommonButton from './components/CommonButton.js';

function App() {
  const [eventGifting, setEventGifting] = useState(false);
  const [guide, setGuide] = useState(false);

  const toggleEventGifitng = () => {
    setEventGifting((prevState) => !prevState);
  };
  const toggleGuide = () => {
    setGuide((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header />

      <div className="guide-btn-wrap">
        <CommonButton
          btnImg={"guide"}
          width={"21vw"}
          handleClick={toggleGuide}
        />
      </div>

      <div className="event-gifting-wrap">
        <CommonButton
          btnImg={"event-gifting-btn"}
          width={"27vw"}
          handleClick={toggleEventGifitng}
        />
      </div>

    </div>
  );
}

export default App;
