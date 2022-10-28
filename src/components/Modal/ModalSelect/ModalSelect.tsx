import React from "react";
import Select, { GroupBase, Options, OptionsOrGroups, } from "react-select"
import { useDispatch } from "react-redux";
import { useGetEmissionCountriesQuery, } from "../../../store/services/api/api";
import { addCountryCode } from "../../../store/features/modalSlice";


interface DataTypes {
   label: string
   value: string
}

type SelectTypes = DataTypes | string | null

export default function ModalSelect() {



   const dispatch = useDispatch();

   const { data, isLoading } = useGetEmissionCountriesQuery();


   if (isLoading) {
      return <div>Loading...</div>
   }

   const filteredCountryCodes = Object.keys(data).filter((key) => {
      return key.length <= 2
   });

   const countryOptions: any = filteredCountryCodes.map((key: string) => {
      return { label: data[key], value: key }
   })


   return (
      <>
         <Select
            name="country"
            classNamePrefix="select"
            className="country--select"
            placeholder="Search"
            defaultValue={" "}
            onChange={(country: SelectTypes) => {
               if (typeof (country) !== "string") {
                  dispatch(addCountryCode(country?.value));
               }
            }}
            isSearchable={true}
            isClearable={true}
            options={countryOptions}
         />
      </>
   )
}