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

    getCardDetail: builder.query<ItemsCardDetail, number>({
      query: (id) => ({
        url: `/api/card/${id}`,
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

    putUpdateDescriptionCard: builder.mutation<
      ReposeAPI,
      { cardID: number; description: string }
    >({
      query: ({ cardID, description }) => ({
        url: "/api/card/update-card-description",
        method: "PUT",
        body: {
          id: cardID,
          description: description,
        },
      }),
    }),

    putUpdateStepCard: builder.mutation<
      ReposeAPI,
      { cardID: number; step: string }
    >({
      query: ({ cardID, step }) => ({
        url: "/api/card/update-step-card",
        method: "PUT",
        body: {
          id: cardID,
          step: step,
        },
      }),
    }),

    deleteCard: builder.mutation<ReposeAPI, number>({
      query: (id) => ({
        url: "/api/card/delete-card",
        method: "DELETE",
        body: {
          id,
        },
      }),
    }),
  }),
});

export const {
  useGetBoardCardsQuery,
  useLazyGetBoardCardsQuery,
  useGetCardDetailQuery,
  usePostCreateBoardCardMutation,
  usePutUpdateDescriptionCardMutation,
  usePutUpdateStepCardMutation,
  useDeleteCardMutation,
} = cardApi;
