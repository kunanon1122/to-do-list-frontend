import React, { FC, PropsWithChildren } from "react";
import { Modal } from "@mui/material";
import clsx from "clsx";

export type ButtonProps = {
  className?: string;
  handleClose: () => void;
  open: boolean;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({
  children,
  open,
  handleClose,
  className,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className={clsx("bg-core-gray-100 w-[80vw] md:w-[50vw] p-3 rounded-sm", className)}>
        {children}
      </div>
    </Modal>
  );
};

export default Button;
