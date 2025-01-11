import React, { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "@/components/Title";
import Button from "@/components/Button";
import Menu from "@/components/Menu";

import CardItem from "@/features/Board/CardItem";
import CreateCardButton from "@/features/CreateCardButton";
import ModalDelete from "@/features/Board/ModalDelete";

import { useGetBoardCardsQuery } from "@/services/cardApi";

import { Translations } from "@/variables/API";


interface CardColumnProps {
  id: number;
  title: string;
  step: string;
}

const CardColumn: FC<CardColumnProps> = ({ id, title, step }) => {
  const { t } = useTranslation(Translations.cardColumn);

  const { data, refetch } = useGetBoardCardsQuery();

  const boardCards = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCloseMenu = () => setAnchorEl(null);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenModalDelCol = () => {
    handleCloseMenu();
    setIsOpenModal(true);
  };

  return (
    <div className="w-64 py-3 px-2 bg-core-black-200 rounded-md h-full min-h-[calc(100vh-10rem)]">
      <div className="flex justify-between items-center mb-3">
        <Title level={5} ml>
          {title}
        </Title>
        <div>
          <Button
            className="w-8 h-8"
            theme="invisible"
            onClick={handleOpenMenu}
          >
            <span className="mb-2 text-lg font-bold">...</span>
          </Button>

          <Menu
            anchorEl={anchorEl}
            onClose={handleCloseMenu}
            menuList={[
              {
                key: "1",
                label: t("menu.delete"),
                onClick: handleOpenModalDelCol,
                icon: <span>🗑️</span>,
              },
            ]}
          />
        </div>
      </div>
      {boardCards.map((card, index) => {
        if (card.step !== step) return null;
        return (
          <div key={index}>
            <CardItem cardItem={card} refetchCards={refetch} />
          </div>
        );
      })}
      <CreateCardButton stepCard={step} refetchCards={refetch} />

      <ModalDelete
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        id={id}
        type="column"
      />
    </div>
  );
};

export default CardColumn;
