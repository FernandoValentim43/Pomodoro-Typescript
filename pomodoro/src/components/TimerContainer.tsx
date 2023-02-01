import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";

const TIME = 130;

const TimerControls = () => {
  const [time, setTime] = useState(TIME);
  const [stopped, setStopped] = useState(true);
  
  let interval: NodeJS.Timeout;

  useEffect(() => {
    if(!stopped && (time !== 0)) {
      interval = setTimeout(() => setTime(time - 1) , 500)
      console.log(time)
    } else {
      clearInterval(interval)
    }
  }, [time,stopped])

  
  const handleReset = () => {
    {stopped? "" : setStopped(!stopped)}
    clearInterval(interval)
    setTime(TIME);    
  };

  const handleStop = () => {
    setStopped(!stopped);
  };


  return (
    <div>
      <Timer timeMax={TIME} timeSec={time} />
      <button className="stop-button" onClick={handleStop}>
        {stopped ? "Start" : "Stop"}
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      
    </div>
  );
};

export default TimerControls;
