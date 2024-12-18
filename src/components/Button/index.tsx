import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type ButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme?: "primary" | "secondary" | "invisible" | "blue" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  theme = "primary",
  type = "button",
}) => {
  const themeClasses = {
    primary:
      "bg-core-black-200 text-core-gray-200 hover:bg-core-gray-100 hover:text-core-black-200",
    secondary:
      "bg-core-black-400 text-core-white-200 hover:bg-core-white-200 hover:text-core-black-400",
    invisible: "bg-core-black-200 text-core-gray-200 hover:bg-core-black-400",
    blue: "bg-core-blue-100 text-core-blue-200 hover:bg-core-blue-200 hover:text-core-blue-100",
    danger: "text-core-black-200 bg-core-red-300 hover:bg-core-red-200",
  };

  return (
    <button
      className={clsx(
        className,
        themeClasses[theme],
        "flex items-center p-1 rounded-sm justify-center transition-colors"
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
