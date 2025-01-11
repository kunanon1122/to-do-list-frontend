import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import Title from "@/components/Title";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { Translations } from "@/variables/API";

import {
  useDeleteBoardColumnMutation,
  useLazyGetBoardColumnsQuery,
} from "@/services/columnApi";
import {
  useDeleteCardMutation,
  useLazyGetBoardCardsQuery,
} from "@/services/cardApi";

interface ModalDeleteProps {
  isOpen: boolean;
  handleClose: () => void;
  id: number;
  type: "column" | "card";
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  isOpen,
  handleClose,
  id,
  type,
}) => {
  const { t } = useTranslation(Translations.cardColumn);
  const { t: tCard } = useTranslation(Translations.cardItem);
  const { t: tCommon } = useTranslation(Translations.common);

  const [deleteBoardColumn, { isLoading }] = useDeleteBoardColumnMutation();
  const [deleteCard] = useDeleteCardMutation();
  const [fetchBoardColumns] = useLazyGetBoardColumnsQuery();
  const [fetchBoardCards] = useLazyGetBoardCardsQuery();

  const handleDelete = useCallback(async () => {
    if (type === "column") {
      try {
        await deleteBoardColumn(id).unwrap();
        fetchBoardColumns();
      } catch (error) {
        console.error(`Failed to delete column ${id}:`, error);
      } finally {
        handleClose();
      }
    } else {
      try {
        await deleteCard(id).unwrap();
        fetchBoardCards();
      } catch (error) {
        console.error(`Failed to delete card ${id}:`, error);
      } finally {
        handleClose();
      }
    }
  }, [
    type,
    deleteBoardColumn,
    id,
    fetchBoardColumns,
    handleClose,
    deleteCard,
    fetchBoardCards,
  ]);

  return (
    <Modal open={isOpen}>
      <div>
        <Title level={4} className="mb-4">
          {type === "column"
            ? t("modal.delete.title")
            : tCard("modal.delete.title")}
        </Title>
        <div className="flex justify-end">
          <Button
            className="w-20 h-8 mr-2"
            theme="primary"
            onClick={handleClose}
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
  );
};

export default ModalDelete;
