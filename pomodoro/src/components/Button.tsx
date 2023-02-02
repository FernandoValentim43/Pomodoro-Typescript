import { ArrowClockwise, Pause, FastForward, Play } from "phosphor-react";
import React from "react";

interface Props {
  type: "pause" | "unpause" | "skip" | "reset"; //enums!
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

export const Button = ({ type, onClick }: Props) => {
  switch (type) {
    case "reset":
      return (
        <button className="button">
          <ArrowClockwise size={32} onClick={onClick} weight="fill"/>
        </button>
      );
    case "skip":
      return (
        <button className="button">
          <FastForward size={32} weight="fill"/>
        </button>
      );

    case "pause":
      return (
        <button className="button">
          <Pause size={32} onClick={onClick} weight="fill"/>
        </button>
      );

    case "unpause":
      return (
        <button className="button">
          <Play size={32} onClick={onClick} weight="fill"/>
        </button>
      );
  }
};
