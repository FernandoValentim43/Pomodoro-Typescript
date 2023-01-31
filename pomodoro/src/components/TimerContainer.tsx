import React, { useState } from "react";
import { Timer } from "./Timer";

const TimerControls = () => {
  const [time, setTime] = useState(2340);


  return (
    <div>
      <Timer time={time} onReset={() => setTime(2340)} />

      
    </div>
  );
};

export default TimerControls;
