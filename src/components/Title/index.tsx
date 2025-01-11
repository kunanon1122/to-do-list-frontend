import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  ml?: boolean;
  mr?: boolean;
} & PropsWithChildren;

const Title: FC<TitleProps> = ({ children, level, className, ml, mr }) => {
  const customClass = clsx(
    className,
    "font-bold break-words",
    ml && "ml-2",
    mr && "mr-2"
  );

  switch (level) {
    case 1:
      return (
        <h1 className={clsx(customClass, "text-lg md:text-xl lg:text-2xl")}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={clsx(customClass, "text-base md:text-lg lg:text-xl")}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={clsx(customClass, "text-sm md:text-base lg:text-lg")}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={clsx(customClass, "text-xs md:text-sm lg:text-base")}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={clsx(customClass, "text-xs  lg:text-sm")}>{children}</h5>
      );
    case 6:
      return (
        <h6 className={clsx(customClass, "text-xs md:text-xs ")}>{children}</h6>
      );

    default:
      return <>{children}</>;
  }
};

export default Title;
