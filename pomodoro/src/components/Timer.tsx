import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

interface Props {
  timeSec: number;
  timeMax: number;
  setStopped: React.Dispatch<React.SetStateAction<boolean>>;
  stopped: boolean;
}

export const Timer = ({ timeSec, setStopped, stopped }: Props) => {
  const minutes = Math.floor(timeSec / 60);
  const seconds = timeSec % 60;

  return (
    <div>
      <div
        className="timer"
        onClick={() => {
          setStopped(!stopped);
        }}
      >
        <CircularProgressbar
          value={timeSec}
          maxValue={130}
          text={
            (minutes < 10 ? `0${minutes}` : minutes) +
            ":" +
            (seconds < 10 ? `0${seconds}` : seconds)
          }
        />
      </div>
    </div>
  );
};
