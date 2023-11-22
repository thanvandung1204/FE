import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISize } from "../interfaces/size";
const colorApi = createApi({
  reducerPath: "color",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    // actions
    // GET
    getSizes: builder.query<any, void>({
      query: () => `/color`,
    }),
    getSizeById: builder.query<ISize, number | string>({
      query: (id) => `/color/${id}`,
    }),
    addSize: builder.mutation<ISize, ISize>({
      query: (size) => ({
        url: `/color`,
        method: "POST",
        body: size,
      }),
      
    }),
    updateSize: builder.mutation<ISize, ISize>({
      query: (size) => ({
        url: `/color/${size.id}`,
        method: "PUT",
        body: { name: size.name, quantity: size.quantity },
      }),
    }),
    removeSize: builder.mutation<ISize, number | string>({
      query: (id) => ({
        url: `/color/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSizesQuery,
  useGetSizeByIdQuery,
  useAddSizeMutation,
  useUpdateSizeMutation,
  useRemoveSizeMutation,
} = colorApi;

export const colorReducer = colorApi.reducer;

export default colorApi;
