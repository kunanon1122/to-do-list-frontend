import React, { FC, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "@/components/Title";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Modal from "@/components/Modal";

import CardItem from "@/features/Board/CardItem";
import CreateCardButton from "@/features/CreateCardButton";

import {
  useDeleteBoardColumnMutation,
  useLazyGetBoardColumnsQuery,
} from "@/services/columnApi";
import { useGetBoardCardsQuery } from "@/services/cardApi";

import { Translations } from "@/variables/API";

interface CardColumnProps {
  id: number;
  title: string;
  step: string;
}

const CardColumn: FC<CardColumnProps> = ({ id, title, step }) => {
  const { t: tCommon } = useTranslation(Translations.common);
  const { t } = useTranslation(Translations.cardColumn);

  const { data, refetch } = useGetBoardCardsQuery();

  const boardCards = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [deleteBoardColumn, { isLoading }] = useDeleteBoardColumnMutation();
  const [fetchBoardColumns] = useLazyGetBoardColumnsQuery();

  const handleCloseMenu = () => setAnchorEl(null);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenModal = () => {
    handleCloseMenu();
    setIsOpenModal(true);
  };

  const handleDelete = useCallback(async () => {
    try {
      await deleteBoardColumn(id).unwrap();
      fetchBoardColumns();
    } catch (error) {
      console.error(`Failed to delete column ${id}:`, error);
    } finally {
      handleCloseModal();
    }
  }, [id, deleteBoardColumn, fetchBoardColumns]);

  return (
    <div className="w-64 py-3 px-2 bg-core-black-200 rounded-md min-h-[calc(100vh-10rem)]">
      <div className="flex justify-between items-center mb-3">
        <Title level={5} ml className="">
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
              { key: "1", label: t("menu.delete"), onClick: handleOpenModal },
            ]}
          />
        </div>
      </div>
      {boardCards.map((card, index) => {
        if (card.step !== step) return null;
        return (
          <div key={index}>
            <CardItem item={card} />
          </div>
        );
      })}
      <CreateCardButton stepCard={step} refetchCards={refetch} />

      <Modal open={isOpenModal}>
        <div>
          <Title level={4} className="mb-4">
            {t("modal.delete.title")}
          </Title>
          <div className="flex justify-end">
            <Button
              className="w-20 h-8 mr-2"
              theme="primary"
              onClick={handleCloseModal}
              disabled={isLoading}
            >
              {tCommon("cancel")}
            </Button>
            <Button
              className="w-20 h-8"
              theme="danger"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {tCommon("delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardColumn;
