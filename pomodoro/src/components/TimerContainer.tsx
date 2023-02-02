import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";
import { Button } from "./Button";

const TIME = 130;

const TimerControls = () => {
  const [time, setTime] = useState(TIME);
  const [stopped, setStopped] = useState(true);

  let interval: NodeJS.Timeout;

  useEffect(() => {
    if (!stopped && time !== 0) {
      interval = setTimeout(() => setTime(time - 1), 1000);
    } else {
      clearTimeout(interval);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [time, stopped]);

  const handleReset = () => {
    {
      stopped ? "" : setStopped(!stopped);
    }
    clearInterval(interval);
    setTime(TIME);
  };

  const handleStop = () => {
    clearTimeout(interval);
    setStopped(!stopped);
  };

  return (
    <div className="timeContainer">
      <section className="timerContainer">
        <Timer
          timeMax={TIME}
          timeSec={time}
          setStopped={setStopped}
          stopped={stopped}
        />
      </section>

      <section className="buttonContainer">
        <Button type={"reset"} onClick={handleReset} />

        {stopped ? (
          <Button type={"pause"} onClick={handleStop} />
        ) : (
          <Button type={"unpause"} onClick={handleStop} />
        )}

        <Button type={"skip"} onClick={handleStop} />
      </section>
    </div>
  );
};

export default TimerControls;
