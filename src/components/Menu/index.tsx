import React, { FC } from "react";
import { Menu as MenuMui, MenuItem } from "@mui/material";

export type MenuProps = {
  className?: string;
  classNameItem?: string;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  menuList: { key: string; label: string; onClick: () => void }[];
};

const Menu: FC<MenuProps> = ({ anchorEl, onClose, menuList }) => {
  return (
    <MenuMui anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      {menuList.map((menu) => (
        <MenuItem key={menu.key} onClick={menu.onClick}>
          {menu.label}
        </MenuItem>
      ))}
    </MenuMui>
  );
};

export default Menu;
