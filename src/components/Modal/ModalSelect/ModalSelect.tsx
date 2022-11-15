import React from "react";
import Select from "react-select"
import { useAppDispatch } from "../../../store/hooks";
import { useGetEmissionCountriesQuery, } from "../../../store/services/api/api";
import { addCountryCode } from "../../../store/features/modalSlice";

interface DataTypes {
   label: string
   value: string
}

type SelectTypes = DataTypes | null

export default function ModalSelect(): JSX.Element {

   const dispatch = useAppDispatch();

   const { data, isLoading } = useGetEmissionCountriesQuery();

   if (isLoading) {
      return <div>Loading...</div>
   }
   if (!data) {
      return <div>Data not found</div>
   }

   const filteredCountryCodes: string[] = Object.keys(data || []).filter((key) => {
      return key.length <= 2
   });

   const countryOptions: DataTypes[] = filteredCountryCodes.map((key) => {
      return { label: (data || [])[key], value: key }
   });

   return (
      <Select
         name="country"
         classNamePrefix="select"
         className="country--select"
         placeholder="Select a country..."
         onChange={(country: SelectTypes) => {
            if (country) {
               dispatch(addCountryCode(country.value));
            }
         }}
         isSearchable={true}
         options={countryOptions}
      />
   )
}