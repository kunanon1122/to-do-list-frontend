import React, { FC, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

export interface BreadcrumbItem {
  text: ReactNode | string;
  isCurrent?: boolean;
  href?: string;
}

export interface BreadcrumbProps {
  menus: BreadcrumbItem[];
  className?: string;
  itemClassName?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  menus,
  className,
  itemClassName,
}) => {
  return (
    <div className={clsx("flex", className)}>
      {menus.map((m, i) => {
        const { text, href, isCurrent } = m;
        const isLastMenu = i === menus.length - 1;

        return (
          <div key={i} className={itemClassName}>
            <Link
              href={href ?? ""}
              className={clsx(
                itemClassName,
                !isCurrent && "hover:underline",
                isCurrent && "pointer-events-none"
              )}
            >
              {text}
            </Link>
            {!isLastMenu && <span className="mx-2">/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
