import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Product from 'types/Product';
import Category from 'types/Category';

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  endpoints: (builder) => ({
    getProductsPreview: builder.query<Product[], null>({
      query: () => 'products?offset=0&limit=8',
    }),
    getAllCategories: builder.query<Category[], null>({
      query: () => 'categories?limit=5',
    }),
    getAllProductsByCategory: builder.query<Product[], string>({
      query: (id) => `categories/${id}/products`,
    }),
  }),
});

export default productsApi;
