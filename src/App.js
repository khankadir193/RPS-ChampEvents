import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.js';
import { useContext, useState } from 'react';
import CommonButton from './components/CommonButton.js';
import { AppContext } from './AppContext.js';
import LuckyPlayer from './layout/Tabs/LuckyPlayer.js';
import BattleTab from './layout/Tabs/BattleTab.js';
import TalentTour from './layout/Tabs/TalentTour.js';

function App() {
  const { disableAll } = useContext(AppContext);
  const [mainTabs, setMainTabs] = useState({
    battle: false,
    luckyPlayer: true,
    talentTour: false,
  });
  const [eventGifting, setEventGifting] = useState(false);
  const [guide, setGuide] = useState(false);

  const toggleEventGifitng = () => {
    setEventGifting((prevState) => !prevState);
  };

  const toggleGuide = () => {
    setGuide((prevState) => !prevState);
  };

  const toggleMainTabs = (name) => {
    if (name === 'lucky-player') {
      setMainTabs({
        battle: false,
        luckyPlayer: true,
        talentTour: false
      });
    } else if (name === 'battle') {
      setMainTabs({
        battle: true,
        luckyPlayer: false,
        talentTour: false
      });
    } else if (name === 'talent-tour') {
      setMainTabs({
        battle: false,
        luckyPlayer: false,
        talentTour: true
      });
    }
  }


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

      <div>
        <div className='main-tabs'>
          {/* first tab */}
          <button
            className={`main-tab-button ${!mainTabs.luckyPlayer && "hide"}`}
            onClick={
              disableAll ? () => { } : () => toggleMainTabs("lucky-player")
            }
            style={{ left: "2vw" }}
            disabled={disableAll}
          >
            LUCKY PLAYER
          </button>

          {/*second tab*/}

          <button
            className={`main-tab-button ${!mainTabs.battle && "hide"}`}
            onClick={disableAll ? () => { } : () => toggleMainTabs("battle")}
            style={{ left: "-0vw" }}
            disabled={disableAll}
          >
            RPS CHAMPS
          </button>

          {/*third tab*/}
          <button
            className={`main-tab-button ${!mainTabs.talentTour && "hide"}`}
            onClick={
              disableAll ? () => { } : () => toggleMainTabs("talent-tour")
            }
            style={{ left: "3vw" }}
            disabled={disableAll}
          >
            TALENT TOUR
          </button>
        </div>
      </div>

      {
        mainTabs.luckyPlayer ? <LuckyPlayer /> :
        mainTabs.battle ? <BattleTab /> : <TalentTour />
      }

    </div>
  );
}

export default App;
