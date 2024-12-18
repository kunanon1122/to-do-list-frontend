import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HOST_API } from "@/variables/API";

import { ReposeAPI } from "@/constant/common";
import type { ItemsCardDetail } from "@/constant/board";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: HOST_API }),
  endpoints: (builder) => ({
    getBoardCards: builder.query<ItemsCardDetail[], void>({
      query: () => ({
        url: "/api/card/cards",
        method: "GET",
      }),
    }),
    postCreateBoardCard: builder.mutation<
      ReposeAPI,
      { title: string; step: string }
    >({
      query: ({ title, step }) => ({
        url: "/api/card/create-card",
        method: "POST",
        body: {
          title: title,
          step: step,
        },
      }),
    }),
  }),
});

export const {
  useGetBoardCardsQuery,
  useLazyGetBoardCardsQuery,
  usePostCreateBoardCardMutation,
} = cardApi;
