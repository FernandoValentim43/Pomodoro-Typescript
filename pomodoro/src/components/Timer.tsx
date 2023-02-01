import React, { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

interface Props {
  timeSec: number;
  stopped: boolean;
}

export const Timer = ({ timeSec, stopped }: Props) => {

  const [minutes, setMinutes] = useState(Math.floor(timeSec / 60));
  const [seconds, setSeconds] = useState(timeSec % 60); 

  useEffect(() => {
    if (!stopped && !(minutes === 0 && seconds === 0)) {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }

  }, [timeSec])
  
  return (
    <div>
      <h2 className="timer">
      {/* <CircularProgressbar value={seconds} maxValue={60} text={(minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds) } /> */}
      {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}    
      </h2>      
    </div>
  );
};
