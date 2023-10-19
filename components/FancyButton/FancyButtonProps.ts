import { ButtonHTMLAttributes } from "react";

export type FancyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};
