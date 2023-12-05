import { ICart } from "@/interfaces/cart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "carts",
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints: (builder ) => ({
    getCart: builder.query<ICart[], void>({
      query: () => {
        const userString = localStorage.getItem("user");
        const userObject = JSON.parse(userString);
        const userId = userObject?._id;
        return `/cart/?userId=${userId}`;
      },
      providesTags: ["Cart"],
    }),
    createCart: builder.mutation({
      query: (cartData) => ({
        url: `/cart`,
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useGetCartQuery, useCreateCartMutation } = cartApi;
export const userReducer = cartApi.reducer;
export default cartApi;
