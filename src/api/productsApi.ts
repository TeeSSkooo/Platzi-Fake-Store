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
    getAllProductsByCategory: builder.query<Product[], { id: string; offset: number; limit: number }>({
      query: ({ id, offset, limit }) => `categories/${id}/products?offset=${offset}&limit=${limit}`,
    }),
    getAllProductsLengthByCategory: builder.query<Product[], string>({
      query: (id) => `categories/${id}/products`,
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductByName: builder.query<Product[], string>({
      query: (name) => `products/?title=${name}`,
    }),
    getFilteredProducts: builder.query<Product[], { min: string; max: string; categoryId: string }>({
      query: ({ min, max, categoryId }) => `products/?price_min=${min}&price_max=${max}&categoryId=${categoryId}`,
    }),
  }),
});

export default productsApi;
