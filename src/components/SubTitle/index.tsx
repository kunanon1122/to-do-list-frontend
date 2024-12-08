import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type SubTitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  ml?: boolean;
  mr?: boolean;
  bold?: boolean;
} & PropsWithChildren;

const SubTitle: FC<SubTitleProps> = ({
  children,
  level,
  className,
  ml,
  mr,
  bold,
}) => {
  const customClass = clsx(
    className,
    "break-words",
    ml && "ml-2",
    mr && "mr-2",
    bold && 'font-bold'
  );

  switch (level) {
    case 1:
      return <div className={clsx(customClass, "text-2xl")}>{children}</div>;
    case 2:
      return <div className={clsx(customClass, "text-xl")}>{children}</div>;
    case 3:
      return <div className={clsx(customClass, "text-lg")}>{children}</div>;
    case 4:
      return <div className={clsx(customClass, "text-base")}>{children}</div>;
    case 5:
      return <div className={clsx(customClass, "text-sm")}>{children}</div>;
    case 6:
      return <div className={clsx(customClass, "text-xs")}>{children}</div>;

    default:
      return <>{children}</>;
  }
};

export default SubTitle;
