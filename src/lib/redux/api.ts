import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ['User', 'Posts', 'Settings'],
  endpoints: () => ({}),
});