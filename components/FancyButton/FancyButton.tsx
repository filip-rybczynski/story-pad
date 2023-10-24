// 'use client'

import { PropsWithChildren } from "react";
import { FancyButtonProps } from "./FancyButtonProps";

export const FancyButton = (props: PropsWithChildren<FancyButtonProps>) => {
  return (
    <button
      className={`text-xl ${
        props.disabled ? "bg-teal-200" : "bg-teal-600"
      } px-4 py-2 mx-2 rounded-lg text-white`}
      {...props}
    >
      {props.children}
    </button>
  );
};
