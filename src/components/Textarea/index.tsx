import React, { FC } from "react";
import clsx from "clsx";

export type TextareaProps = {
  className?: string;
  theme?: "primary" | "secondary";
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  autoFocus?: boolean;
  name?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
};

const Textarea: FC<TextareaProps> = ({
  className,
  onChange,
  theme = "primary",
  autoFocus,
  name,
  id,
  value,
  placeholder,
  defaultValue,
}) => {
  const themeClasses = {
    primary: "bg-core-black-200 text-core-gray-200",
    secondary: "bg-core-black-300 text-core-gray-200",
  };

  return (
    <textarea
      className={clsx(
        "w-full p-1 rounded outline outline-2 focus:outline-[3px]  outline-core-black-500",
        themeClasses[theme],
        className
      )}
      autoFocus={autoFocus}
      onChange={(e) => onChange(e)}
      name={name}
      id={id}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
