import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const emissionAPI = createApi({
   reducerPath: 'emissionAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://pkgstore.datahub.io/' }),
   endpoints: (build) => ({
      getEmissionCountries: build.query<any, void>({
         query: () => `/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json`
      }),
   }),
});

export const { useGetEmissionCountriesQuery } = emissionAPI;