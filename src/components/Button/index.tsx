import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type ButtonProps = {
  className?: string;
  onClick: () => void;
  theme?: "primary" | "secondary" | "invisible" | "blue";
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  theme = "primary",
}) => {
  const themeClasses = {
    primary:
      "bg-core-black-200 text-core-gray-200 hover:bg-core-gray-100 hover:text-core-black-200",
    secondary:
      "bg-core-black-400 text-core-white-200 hover:bg-core-white-200 hover:text-core-black-400",
    invisible: "bg-core-black-200 text-core-gray-200 hover:bg-core-black-400",
    blue: "bg-core-blue-100 text-core-blue-200 hover:bg-core-blue-200 hover:text-core-blue-100",
  };

  return (
    <button
      className={clsx(
        className,
        themeClasses[theme],
        "flex items-center p-1 rounded-sm justify-center transition-colors"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
