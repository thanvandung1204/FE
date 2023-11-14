import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Iimagetintuc } from '@/interfaces/imagetintuc';
const imagetintucApi = createApi({
    reducerPath: "imagetintuc",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API
    }),
    endpoints: (builder) => ({
        getImagetintuc: builder.query<Iimagetintuc, void>({
            query: () => `/imagetintuc`
        }),
        getImagetintucById: builder.query<Iimagetintuc, number | string>({
            query: (id) => `/imagetintuc/${id}`
        }),
        addImagetintuc: builder.mutation<Iimagetintuc, Iimagetintuc>({
            query: (product) => ({
                url: `/imagetintuc`,
                method: "POST",
                body: product
            })
        }),
        updateImagetintuc: builder.mutation<any, any>({
            query: (imagetintuc) => ({
                url: `/imagetintuc/${imagetintuc.id}`,
                method: "PUT",
                body: imagetintuc
            })
        }),
        removeImagetintuc: builder.mutation<Iimagetintuc, number | string>({
            query: (id) => ({
                url: `/imagetintuc/${id}`,
                method: "DELETE"
            })
        }),
    })
});

export const {
    useGetImagetintucQuery,
    useGetImagetintucByIdQuery,
    useAddImagetintucMutation,
    useUpdateImagetintucMutation,
    useRemoveImagetintucMutation
} = imagetintucApi;

export const ImagetintucReducer = imagetintucApi.reducer;

export default imagetintucApi;