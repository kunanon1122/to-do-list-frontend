import React, { useCallback, useMemo, useState } from "react";

import CardColumn from "@/features/Board/CardColumn";

import Button from "@/components/Button";
import Input from "@/components/Input";

import {
  useGetBoardColumnsQuery,
  usePostCreateBoardColumnMutation,
} from "@/services/columnApi";

const Board = () => {
  const { data, refetch } = useGetBoardColumnsQuery();
  const [
    postCreateBoardColumn,
    // { isLoading, isSuccess, isError }
  ] = usePostCreateBoardColumnMutation();

  const [openAddColumn, setOpenAddColumn] = useState(false);
  const [titleValue, setTitleValue] = useState("");

  const boardColumns = useMemo(() => {
    if (!data) return [];

    const dataColumns = data?.map((column) => ({
      title: column.title,
      step: column.step,
    }));

    return dataColumns;
  }, [data]);

  const handleOpenAddColumn = () => setOpenAddColumn(true);
  const handleCloseAddColumn = () => setOpenAddColumn(false);

  const handleCreateColumn = useCallback(async () => {
    try {
      await postCreateBoardColumn(titleValue).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to create column:", error);
    } finally {
      handleCloseAddColumn();
    }
  }, [postCreateBoardColumn, titleValue, refetch]);

  return (
    <div className="flex gap-3 mt-3 overflow-x-auto">
      {boardColumns.map((boardColumn, index) => (
        <div key={index}>
          <CardColumn title={boardColumn.title} step={boardColumn.step} />
        </div>
      ))}
      {openAddColumn ? (
        <div className="justify-items-end">
          <Input
            className=" border"
            type="text"
            autoFocus
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <div className="flex gap-1">
            <Button
              className="w-8 h-8 mt-1"
              theme="secondary"
              onClick={handleCreateColumn}
            >
              ✓
            </Button>
            <Button
              className="w-8 h-8 mt-1"
              theme="secondary"
              onClick={handleCloseAddColumn}
            >
              ✕
            </Button>
          </div>
        </div>
      ) : (
        <Button className="w-8 h-8 shrink-0" onClick={handleOpenAddColumn}>
          +
        </Button>
      )}
    </div>
  );
};

export default Board;
