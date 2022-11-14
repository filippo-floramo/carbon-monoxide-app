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
      getTotalDataByCountry: build.query<EmissionData[], string>({
         query: (countryCode) => `carbonmonoxide/average.json?country=${countryCode}&begin=2019-01-01&end=${currentDate}&offset=0`
      }),
      getEmissionDataByCoordinates: build.query<EmissionData[], { longitude: string | undefined, latitude: string | undefined }>({
         query: ({ latitude, longitude }) => `carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=2019-01-01&end=${currentDate}&offset=0`
      })
   }),
});

export const {
   useGetEmissionCountriesQuery,
   useGetTotalDataByCountryQuery,
   useGetEmissionDataByCoordinatesQuery
} = emissionAPI;