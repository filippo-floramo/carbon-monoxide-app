import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const emissionAPI = createApi({
   reducerPath: 'emissionAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.v2.emissions-api.org/api/v2/' }),
   endpoints: (build) => ({
      getEmissionProducts: build.query<any, void>({
         query: () => `products.json`
      }),
   }),
});

export const { useGetEmissionProductsQuery } = emissionAPI;