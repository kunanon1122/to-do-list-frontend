import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setBoardColumn } from "@/redux/reducers/boardColumnSlice";
import { RootState } from "@/redux/store";

import CardColumn from "@/features/Board/CardColumn";

import Button from "@/components/Button";
import Input from "@/components/Input";

import {
  useGetBoardColumnsQuery,
  usePostCreateBoardColumnMutation,
} from "@/services/columnApi";

const Board = () => {
  const dispatch = useDispatch();
  const boardColumns = useSelector((state: RootState) => state.board.columns);

  const { data, refetch } = useGetBoardColumnsQuery();
  const [postCreateBoardColumn] = usePostCreateBoardColumnMutation();

  const [openAddColumn, setOpenAddColumn] = useState(false);
  const [titleValue, setTitleValue] = useState("");

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

  useEffect(() => {
    if (data) {
      dispatch(setBoardColumn(data));
    }
  }, [data, dispatch]);

  return (
    <div className="flex gap-3 mt-3 overflow-x-auto">
      {boardColumns.map((boardColumn, index) => (
        <div key={index}>
          <CardColumn
            id={boardColumn.id}
            title={boardColumn.title}
            step={boardColumn.step}
          />
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
