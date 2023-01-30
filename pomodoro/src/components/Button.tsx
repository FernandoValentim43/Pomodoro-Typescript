import React from "react";

interface Props {
  text: string;
  id?: string;
}

export const Button = ({ text, id }: Props) => {
  return <button id={id} className="button">{text}</button>;
};
