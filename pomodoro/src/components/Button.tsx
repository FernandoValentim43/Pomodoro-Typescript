import { ArrowClockwise, Pause, FastForward, Play } from "phosphor-react";
import React from "react";

interface Props {
  type: "pause" | "unpause" | "skip" | "reset"; //enums!
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const Button = ({ type, onClick }: Props) => {
  switch (type) {
    case "reset":
      return (
        <button className={"button " + " reset"} onClick={onClick} >
          <ArrowClockwise size={42}  weight="fill"/>
        </button>
      );
    case "skip":
      return (
        <button className={"button " + " skip"}>
          <FastForward size={42} weight="fill"/>
        </button>
      );

    case "pause":
      return (
        <button className={"button " + " pause"} onClick={onClick}>
          <Pause size={50}  weight="fill"/>
        </button>
      );

    case "unpause":
      return (
        <button className={"button " + " unpause"} onClick={onClick}>
          <Play size={50} weight="fill"/>
        </button>
      );
  }
};
