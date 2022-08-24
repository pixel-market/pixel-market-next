import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_Product, T_ProductId } from 'models/product'

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProduct: builder.query<I_Product, T_ProductId>({
      query: (id) => `products/${id}`,
    }),
  }),
})
