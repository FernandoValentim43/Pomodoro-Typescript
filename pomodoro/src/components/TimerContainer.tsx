import React, { useState } from "react";
import { Timer } from "./Timer";

const TimerControls = () => {
  const [time, setTime] = useState(60);

  const handleReset = () => setTime(60);

  return (
    <div>
      <Timer time={time} onReset={handleReset} />
    </div>
  );
};

export default TimerControls;
