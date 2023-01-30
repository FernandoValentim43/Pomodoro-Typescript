import React, { useState, useEffect } from "react";

interface Props {
  startTime: number;
}

export const Timer = ({ startTime }: Props) => {
 

  return (
    <div>
      <h3 className="timer-number"> {isNaN(startTime) ? 0 : startTime }</h3>
    </div>
  );
};

