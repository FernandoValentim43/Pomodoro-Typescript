import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";

const TimerControls = () => {
  const [time, setTime] = useState(5);
  const [stopped, setStopped] = useState(true);
  
  let interval: NodeJS.Timeout;

  useEffect(() => {
    if(!stopped && (time !== 0)) {
      interval = setTimeout(() => setTime(time - 1) , 1000)
      console.log(time)
    } else {
      clearInterval(interval)
    }
  }, [time,stopped])

  
  const handleReset = () => {
    clearInterval(interval);
    setStopped(true);
    setTime(60);
  };

  const handleStop = () => {
    setStopped(!stopped);
  };


  return (
    <div>
      <Timer timeSec={time} stopped={stopped} />

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
