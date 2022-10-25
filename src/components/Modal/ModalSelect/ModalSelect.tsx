import React, { useState } from "react";
import Select from "react-select"
import { useDispatch } from "react-redux";
import { SkipToken } from "@reduxjs/toolkit/dist/query";
import { useGetEmissionCountriesQuery, } from "../../../app/services/api/api";
import { addCountryCode } from "../../../app/features/modalSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";


export default function ModalSelect() {

   const dispatch = useDispatch();

   const { data, isLoading } = useGetEmissionCountriesQuery();


   if (isLoading) {
      return <div>Ciao</div>
   }

   const managedData = data.map((item: { Name: string, Code: string }) => {
      return { label: `${item.Name}, ${item.Code} `, value: item.Code }
   })


   return (
      <Select
         classNamePrefix="select"
         className="country--select"
         placeholder="Select a country..."
         defaultValue={managedData[0]}
         onChange={(value: { label: string }) => dispatch(addCountryCode(value.label))}
         name="country"
         isSearchable={true}
         options={managedData}
      />
   )
}