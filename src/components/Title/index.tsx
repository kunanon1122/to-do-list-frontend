import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  ml?: boolean;
  mr?: boolean;
} & PropsWithChildren;

const Title: FC<TitleProps> = ({ children, level, className, ml, mr }) => {
  const customClass = clsx(className, "font-bold", ml && "ml-2", mr && "mr-2");

  switch (level) {
    case 1:
      return <span className={clsx(customClass, "text-xs")}>{children}</span>;
    case 2:
      return <span className={clsx(customClass, "text-sm")}>{children}</span>;
    case 3:
      return <span className={clsx(customClass, "text-base")}>{children}</span>;
    case 4:
      return <span className={clsx(customClass, "text-lg")}>{children}</span>;
    case 5:
      return <span className={clsx(customClass, "text-xl")}>{children}</span>;
    case 6:
      return <span className={clsx(customClass, "text-2xl")}>{children}</span>;
    default:
      return <>{children}</>;
  }
};

export default Title;
