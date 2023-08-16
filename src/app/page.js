'use client'

import { useState, useEffect } from 'react';
// import lakitu from './../assets/lakitu.png'

import styles from "./page.module.css";

export default function Home() {

  const lakitu = require('../assets/lakitu.png');

  const initialCount = 3;
  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [raceStart, setRaceStart] = useState(false);

  const lightColor = {
    redLight: {
      backgroundColor: redActive ? "red" : "",
      
    },
    yellowLight: {
      backgroundColor: yellowActive ? "yellow" : "",
      
    },
    greenLight: {
      backgroundColor: greenActive ? "green" : "",
      
    },
  };

  const resetCount = () => {
    setCount(initialCount);
  };

  const activateRed = () => {
    setRedActive((prevState) => !prevState);
    setYellowActive(false);
    setGreenActive(false);
  };
  const activateYellow = () => {
    setYellowActive((prevState) => !prevState);
    setRedActive(false);
    setGreenActive(false);
  };
  const activateGreen = () => {
    setGreenActive((prevState) => !prevState);
    setYellowActive(false);
    setRedActive(false);
  };
  const starting = () => {
    console.log('Start!')
    setRaceStart((prevState) => !prevState);
  }
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0 && count === 3) {
        activateRed();
        setCount(count - 1);
      }
      if (count > 0 && count === 2) {
        activateYellow();
        setCount(count - 1);
      }
      if (count > 0 && count === 1) {
        activateGreen();
        setCount(count - 1);
      }
      if (count === 0) {
        starting();
        resetCount();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      {/* <img src={lakitu} alt="lakitu" /> */}
      <div className={styles.lights}>
        <div
          style={lightColor.redLight}

          className={styles.redlight}
        ></div>
        <div
          style={lightColor.yellowLight}

          className={styles.yellowlight}
        ></div>
        <div
          style={lightColor.greenLight}

          className={styles.greenlight}
        ></div>
      </div>
    </>
  );

}
