// 'use client'

import { PropsWithChildren } from "react";
import { FancyButtonProps } from "./FancyButtonProps";

export const FancyButton = (props: PropsWithChildren<FancyButtonProps>) => {
  return (
    <button
      type={props.type}
      name={props.name}
      className={`text-xl ${
        props.disabled ? "bg-teal-200" : "bg-teal-600"
      } px-4 py-2 mx-2 rounded-lg text-white`}
    >
      {props.children}
    </button>
  );
};
