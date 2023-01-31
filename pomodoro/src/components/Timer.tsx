import React, { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

interface Props {
  time: number;
  onReset: () => void;
}

export const Timer = ({ time, onReset }: Props) => {
  const [minutes, setMinutes] = useState(Math.floor(time / 60));
  const [seconds, setSeconds] = useState(time % 60);
  const [stopped, setStopped] = useState(true);
 

  let interval: NodeJS.Timeout;

  useEffect(() => {
    if (!stopped && !(minutes === 0 && seconds === 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds, stopped]);

  const handleReset = () => {
    clearInterval(interval);
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    setStopped(true);
    onReset();
  };

  const handleStop = () => {
    setStopped(!stopped);
  };

  return (
    <div>
      <h2 className="timer">
      {/* <CircularProgressbar value={seconds} maxValue={60} text={(minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds) } /> */}
      {minutes < 10 ? `0${minutes}` : minutes} :  {seconds < 10 ? `0${seconds}` : seconds} 

      </h2>
      <button className="stop-button" onClick={handleStop}>
        {stopped ? "Start" : "Stop"}
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
