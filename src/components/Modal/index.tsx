import React, { FC, PropsWithChildren } from "react";
import { Modal as ModalMui } from "@mui/material";
import clsx from "clsx";

export type ModalProps = {
  className?: string;
  onClose?: () => void;
  open: boolean;
} & PropsWithChildren;

const Modal: FC<ModalProps> = ({ children, open, onClose, className }) => {
  return (
    <ModalMui
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <div
        className={clsx(
          className,
          "bg-core-black-200 px-3 py-5 rounded w-[70vw] md:w-[35vw]"
        )}
      >
        {children}
      </div>
    </ModalMui>
  );
};

export default Modal;
