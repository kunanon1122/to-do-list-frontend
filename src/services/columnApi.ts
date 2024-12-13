import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HOST_API } from "@/variables/API";

import type { BoardColumn } from "@/constant/board";
import { ReposeAPI } from "@/constant/common";

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
    postCreateBoardColumn: builder.mutation<ReposeAPI, string>({
      query: (title) => ({
        url: "/api/column/create-column",
        method: "POST",
        body: {
          title: title,
        },
      }),
    }),
  }),
});

export const { useGetBoardColumnsQuery, usePostCreateBoardColumnMutation } = boardColumnsApi;
