import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { RootState } from "@/redux/store";

import SubTitle from "@/components/SubTitle";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Menu from "@/components/Menu";

import { ItemsCardDetail } from "@/constant/board";

import { Translations } from "@/variables/API";
import { useSelector } from "react-redux";

interface CardItemProps {
  cardItem: ItemsCardDetail;
}

const CardItem: FC<CardItemProps> = ({ cardItem }) => {
  const { t } = useTranslation(Translations.cardItem);

  const boardColumns = useSelector((state: RootState) => state.board.columns);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleMoveCard = (columnID: number) => {
    const cardID = cardItem.id;

    handleCloseMenu();

    console.log(`move ${cardID} to ${columnID}`);
  };

  return (
    <div className="w-full flex flex-col min-h-24 px-2 py-3 justify-between bg-core-black-400 rounded-sm mb-1">
      <div className="flex justify-between">
        <SubTitle level={5}>{cardItem.title}</SubTitle>
        <Button className="w-6 h-6" onClick={handleOpenMenu}>
          <span className="mb-2 text-lg font-bold">...</span>
        </Button>
        <Menu
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          menuList={[
            {
              key: "1",
              label: t("more_detail"),
              onClick: handleOpenModal,
              icon: <span>🔍</span>,
            },
            {
              key: "2",
              label: t("move_to"),
              onClick: () => console.log("move_to"),
              submenu: boardColumns.map((column) => ({
                key: `${column.step}-${column.create_date.toString()}`,
                label: column.title,
                onClick: () => handleMoveCard(column.id),
              })),
              icon: <span className="ml-2">🚀</span>,
            },
            {
              key: "3",
              label: t("delete"),
              onClick: () => console.log("delete"),
              icon: <span>🗑️</span>,
            },
          ]}
        ></Menu>
      </div>

      {cardItem.tag && (
        <div className="w-fit p-0.5 bg-core-blue-100 text-core-blue-200 rounded-sm mb-1">
          <SubTitle level={6} bold>
            {cardItem.tag}
          </SubTitle>
        </div>
      )}
      <div className="flex justify-between">
        <SubTitle level={6}>{cardItem.id}</SubTitle>
        <SubTitle level={6}>{cardItem.priority}</SubTitle>
      </div>

      <Modal open={isOpenModal}>
        <div>
          <div>More Card Detail...</div>{" "}
          <button className="border" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CardItem;
