import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HOST_API } from "@/variables/API";

import { ReposeAPI } from "@/constant/common";
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

    postCreateBoardColumn: builder.mutation<ReposeAPI, string>({
      query: (title) => ({
        url: "/api/column/create-column",
        method: "POST",
        body: {
          title: title,
        },
      }),
    }),

    deleteBoardColumn: builder.mutation<ReposeAPI, number>({
      query: (id) => ({
        url: `/api/column/delete-column/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBoardColumnsQuery,
  useLazyGetBoardColumnsQuery,
  usePostCreateBoardColumnMutation,
  useDeleteBoardColumnMutation,
} = boardColumnsApi;
