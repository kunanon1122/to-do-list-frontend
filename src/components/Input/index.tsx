import React, { FC } from "react";
import clsx from "clsx";

export type InputProps = {
  className?: string;
  theme?: "primary" | "secondary";
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
};

const Input: FC<InputProps> = ({
  className,
  type,
  onChange,
  theme = "primary",
  autoFocus,
}) => {
  const themeClasses = {
    primary: "bg-core-black-200 text-core-gray-200",
    secondary: "",
  };

  return (
    <input
      className={clsx(
        "p-1 rounded focus:outline-none",
        themeClasses[theme],
        className
      )}
      type={type}
      autoFocus={autoFocus}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
