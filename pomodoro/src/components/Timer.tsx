import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface Props {
  timeSec: number;
  timeMax: number;
  setStopped: React.Dispatch<React.SetStateAction<boolean>>;
  stopped: boolean;
}

export const Timer = ({ timeSec, setStopped, stopped, timeMax }: Props) => {
  const minutes = Math.floor(timeSec / 60);
  const seconds = timeSec % 60;

  return (
    <div>
      <div id="outer">
        {/*  <CircularProgressbar
          value={timeSec}
          maxValue={timeMax}
          text={
            (minutes < 10 ? `0${minutes}` : minutes) +
            ":" +
            (seconds < 10 ? `0${seconds}` : seconds)
          }
          
        /> */}

        <CircularProgressbarWithChildren
          value={timeSec}
          maxValue={timeMax}
          text={
            (minutes < 10 ? `0${minutes}` : minutes) +
            ":" +
            (seconds < 10 ? `0${seconds}` : seconds)
          }
        >
          <div id={"inner"} style={{ width: "90%" }}>
            <CircularProgressbar  value={75} maxValue={100}  />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
