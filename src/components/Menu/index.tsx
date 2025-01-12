import React, { FC } from "react";
import { Menu as MenuMui, MenuItem } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";

export interface MenuItemProps {
  key: string;
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface MenuListProps extends MenuItemProps {
  submenu?: MenuItemProps[];
}

export interface MenuProps {
  className?: string;
  classNameItem?: string;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  menuList: MenuListProps[];
}

const Menu: FC<MenuProps> = ({ anchorEl, onClose, menuList }) => {
  const renderMenuItems = (items: MenuListProps[]) => {
    return items.map((item) => {
      if (item.submenu) {
        return (
          <NestedMenuItem
            key={item.key}
            label={item.label}
            parentMenuOpen={Boolean(anchorEl)}
            onClick={item.onClick}
            leftIcon={item.icon}
          >
            {renderMenuItems(item.submenu)}
          </NestedMenuItem>
        );
      }

      return (
        <MenuItem key={item.key} onClick={item.onClick}>
          {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <MenuMui anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      {renderMenuItems(menuList)}
    </MenuMui>
  );
};

export default Menu;
