import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BoardColumn } from "@/constant/board";

interface BoardColumnState {
  columns: BoardColumn[];
}

const initialState: BoardColumnState = {
  columns: [],
};

const boardColumnSlice = createSlice({
  name: "boardColumn",
  initialState,
  reducers: {
    setBoardColumn(state, action: PayloadAction<BoardColumn[]>) {
      state.columns = action.payload;
    },
  },
});

export const { setBoardColumn } = boardColumnSlice.actions;

export default boardColumnSlice.reducer;
