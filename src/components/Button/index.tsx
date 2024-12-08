import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

export type ButtonProps = {
  className?: string;
  onClick: () => void;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={clsx(
        className,
        "flex items-center p-1 bg-core-blue-100 text-core-blue-200 rounded-sm hover:bg-core-blue-200 hover:text-core-blue-100"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
