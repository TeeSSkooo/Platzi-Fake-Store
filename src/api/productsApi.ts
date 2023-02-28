import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Product from 'types/Product';

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  endpoints: (builder) => ({
    getProductsPreview: builder.query<Product[], null>({
      query: () => 'products?offset=0&limit=8',
    }),
  }),
});

export default productsApi;
