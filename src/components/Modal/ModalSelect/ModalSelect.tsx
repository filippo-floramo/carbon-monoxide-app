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
      return { label: `${item.Name}, ${item.Code} `, value: item.Code }
   })


   return (
      <>
         <Select
            name="country"
            classNamePrefix="select"
            className="country--select"
            placeholder="Select a country..."
            defaultValue={managedData[0]}
            onChange={(value: { label: string }) => dispatch(addCountryCode(value.label))}
            isSearchable={true}
            options={managedData}
         />
      </>
   )
}