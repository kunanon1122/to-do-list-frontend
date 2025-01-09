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

interface ModalDeleteColumnProps {
  isOpen: boolean;
  handleClose: () => void;
  columnID: number;
}

const ModalDeleteColumn: React.FC<ModalDeleteColumnProps> = ({
  isOpen,
  handleClose,
  columnID,
}) => {
  const { t } = useTranslation(Translations.cardColumn);
  const { t: tCommon } = useTranslation(Translations.common);

  const [deleteBoardColumn, { isLoading }] = useDeleteBoardColumnMutation();
  const [fetchBoardColumns] = useLazyGetBoardColumnsQuery();

  const handleDelete = useCallback(async () => {
    try {
      await deleteBoardColumn(columnID).unwrap();
      fetchBoardColumns();
    } catch (error) {
      console.error(`Failed to delete column ${columnID}:`, error);
    } finally {
      handleClose();
    }
  }, [deleteBoardColumn, columnID, fetchBoardColumns, handleClose]);

  return (
    <Modal open={isOpen}>
      <div>
        <Title level={4} className="mb-4">
          {t("modal.delete.title")}
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

export default ModalDeleteColumn;
