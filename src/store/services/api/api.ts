import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmissionData } from "../../../interfaces/interfaces";

interface CountryCodes {
   [index: string]: string
}

const currentDate = new Date().toJSON();

export const emissionAPI = createApi({
   reducerPath: 'emissionAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.v2.emissions-api.org/api/v2/' }),
   endpoints: (build) => ({
      getEmissionCountries: build.query<CountryCodes, void>({
         query: () => `countries.json`
      }),
   }),
});

export const {
   useGetEmissionCountriesQuery } = emissionAPI;