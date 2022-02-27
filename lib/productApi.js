// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'constants/keys';
import { products } from 'constants/pathname';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: ({ page = 1, limit }) => `${products}?page=${page}&limit=${limit}`,
      providesTags: (result, error, page) =>
        result
          ? [
              // Provides a tag for each product in the current page,
              // as well as the 'PARTIAL-LIST' tag.
              ...result.data.map(({ id }) => ({ type: 'Products', id })),
              { type: 'Products', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Products', id: 'PARTIAL-LIST' }],
    }),
    getProductById: builder.query({
      query: (id) => `${products}/${id}`,
    }),
    // Invalidates the tag for this Product `id`, as well as the `PARTIAL-LIST` tag,
    // causing the `getProductList` query to re-fetch if a component is subscribed to the query.
    invalidatesTags: (result, error, id) => [
      { type: 'Products', id },
      { type: 'Products', id: 'PARTIAL-LIST' },
    ],
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductListQuery, useGetProductByIdQuery } = productApi;
