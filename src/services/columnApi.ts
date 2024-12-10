import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HOST_API } from "@/variables/API";

import type { BoardColumn } from "@/constant/board";

export const boardColumnsApi = createApi({
  reducerPath: "boardColumnsApi",
  baseQuery: fetchBaseQuery({ baseUrl: HOST_API }),
  endpoints: (builder) => ({
    getBoardColumns: builder.query<BoardColumn[], void>({
        query: () => ({
            url: "/api/column/columns",
            method: "GET",
        }),
    }),
  }),
});

export const { useGetBoardColumnsQuery } = boardColumnsApi;
