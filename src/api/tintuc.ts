
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Itintuc } from '../interfaces/tintuc';
const tintucApi = createApi({
    reducerPath: "tintuc",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API
    }),
    endpoints: (builder) => ({
       getTintuc: builder.query<Itintuc, void>({
            query: () => `/tintuc`
        }),
        getTintucById: builder.query<Itintuc, number | string>({
            query: (id) => `/tintuc/${id}`
        }),
        addTintuc: builder.mutation<Itintuc, Itintuc>({
            query: (tintuc) => ({
                url: `/tintuc`,
                method: "POST",
                body: tintuc
            })
        }),
        updateTintuc: builder.mutation<Itintuc, Itintuc>({
            query: (tintuc) => ({
                url: `/tintuc/${tintuc._id}`,
                method: "PUT",
                body: {tieude:tintuc.tieude,noidung:tintuc.noidung,trang_thai:tintuc.trang_thai}
            })
        }),
        removeTintuc: builder.mutation<Itintuc, number | string>({
            query: (id) => ({
                url: `/tintuc/${id}`,
                method: "DELETE"
            })
        }),

    })

});

export const {
  
    useGetTintucQuery,
    useGetTintucByIdQuery,
    useAddTintucMutation,
    useUpdateTintucMutation,
    useRemoveTintucMutation

} = tintucApi;

export const TintucReducer = tintucApi.reducer;

export default tintucApi;