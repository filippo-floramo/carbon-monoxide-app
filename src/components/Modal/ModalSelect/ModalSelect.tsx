import React, { useMemo } from "react";
import Select from "react-select"
import { useAppDispatch } from "../../../store/hooks";
import { useGetEmissionCountriesQuery, } from "../../../store/services/api/api";
import { addCountryCode } from "../../../store/features/modalSlice";

interface DataTypes {
   label: string
   value: string
}

type SelectTypes = DataTypes | undefined

export default function ModalSelect(): JSX.Element {

   const dispatch = useAppDispatch();

   const { data } = useGetEmissionCountriesQuery();

   const countryOptions: SelectTypes[] = useMemo(() => {

      const filteredCountryCodes: string[] = Object.keys(data || []).filter((key) => {
         return key.length <= 2
      });

      const options: SelectTypes[] = filteredCountryCodes.map((key) => {
         if (data) {
            return { label: (data)[key], value: key }
         } else {
            return undefined
         }
      });
      console.log("rerendered")

      return options

   }, [data]);


   if (countryOptions === undefined) {
      return <div>Data not found</div>
   }

   return (
      <div className="select">
         <p>Country</p>

         <Select
            name="country"
            classNamePrefix="select"
            className="country--select"
            placeholder="Select a country..."
            onChange={(country) => {
               dispatch(addCountryCode(country?.value));
            }}
            isSearchable={true}
            options={countryOptions}
         />
      </div>
   )
}