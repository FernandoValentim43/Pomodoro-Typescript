import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

interface Props {
  timeSec: number;
  timeMax: number;
}

export const Timer = ({ timeSec }: Props) => {
 /*  const [minutes, setMinutes] = useState(Math.floor(timeSec / 60));
  const [seconds, setSeconds] = useState(timeSec % 60); */

  const minutes = Math.floor(timeSec / 60)
  const seconds = timeSec % 60


  return (
    <div>
      <h2 className="timer">
        <CircularProgressbar value={timeSec} maxValue={130} text={(minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds) } />
       {/*  {minutes < 10 ? `0${minutes}` : minutes} :
        {seconds < 10 ? `0${seconds}` : seconds}
        <p> {timeSec}</p> */}
      </h2>
    </div>
  );
};
