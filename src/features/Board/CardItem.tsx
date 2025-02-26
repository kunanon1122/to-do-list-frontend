import React, { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { usePutUpdateStepCardMutation } from "@/services/cardApi";

import SubTitle from "@/components/SubTitle";
import Button from "@/components/Button";
import Menu from "@/components/Menu";

import ModalDelete from "@/features/Board/ModalDelete";
import ModalCardDetail from "@/features/Board/ModalCardDetail";

import { ItemsCardDetail } from "@/constant/board";

import { Translations } from "@/variables/API";

interface CardItemProps {
  cardItem: ItemsCardDetail;
  refetchCards: () => void;
}

const CardItem: FC<CardItemProps> = ({ cardItem, refetchCards }) => {
  const { t } = useTranslation(Translations.cardItem);

  const boardColumns = useSelector((state: RootState) => state.board.columns);
  const [putUpdateStepCard] = usePutUpdateStepCardMutation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenModal = () => {
    handleCloseMenu();
    setIsOpenModal(true);
  };
  const handleOpenModalDelete = () => {
    handleCloseMenu();
    setIsOpenModalDelete(true);
  };
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseModal = () => setIsOpenModal(false);
  const handleCloseModalDelete = () => setIsOpenModalDelete(false);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleMoveCard = useCallback(
    async (step: string) => {
      const cardID = cardItem.id;

      try {
        await putUpdateStepCard({ cardID, step }).unwrap();

        refetchCards();
      } catch (error) {
        console.error("Failed to move card:", error);
      } finally {
        handleCloseMenu();
      }
    },
    [cardItem.id, putUpdateStepCard, refetchCards]
  );

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
              submenu: boardColumns
                .filter((column) => column.step !== cardItem.step)
                .map((column) => ({
                  key: `${column.step}-${column.create_date.toString()}`,
                  label: column.title,
                  onClick: () => handleMoveCard(column.step),
                })),
              icon: <span className="ml-2">🚀</span>,
            },
            {
              key: "3",
              label: t("delete"),
              onClick: handleOpenModalDelete,
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

      <ModalCardDetail
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        id={cardItem.id}
      />

      <ModalDelete
        isOpen={isOpenModalDelete}
        handleClose={handleCloseModalDelete}
        id={cardItem.id}
        type="card"
      />
    </div>
  );
};

export default CardItem;
