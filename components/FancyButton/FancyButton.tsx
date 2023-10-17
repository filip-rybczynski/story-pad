import { PropsWithChildren } from "react";
import { FancyButtonProps } from "./FancyButtonProps";

export const FancyButton = ({
  children,
  type = "button",
}: PropsWithChildren<FancyButtonProps>) => {
  return (
    <button
      type={type}
      className="text-xl bg-teal-600 px-4 py-2 rounded-lg text-white"
    >
      {children}
    </button>
  );
};
