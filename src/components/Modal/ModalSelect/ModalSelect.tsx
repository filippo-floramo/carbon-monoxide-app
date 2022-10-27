import React, { useState } from "react";
import Select from "react-select"
import { useDispatch } from "react-redux";
import { useGetEmissionCountriesQuery, } from "../../../store/services/api/api";
import { addCountryCode } from "../../../store/features/modalSlice";


export default function ModalSelect() {

   const dispatch = useDispatch();

   const { data, isLoading } = useGetEmissionCountriesQuery();


   if (isLoading) {
      return <div>Loading...</div>
   }

   const managedData = data.map((item: { Name: string, Code: string }) => {
      return { label: item.Name, value: item.Code }
   })


   return (
      <>
         <Select
            name="country"
            classNamePrefix="select"
            className="country--select"
            placeholder="Search"
            defaultValue={" "}
            onChange={(country: any) => dispatch(addCountryCode(country.value))}
            isSearchable={true}
            options={managedData}
         />
      </>
   )
}