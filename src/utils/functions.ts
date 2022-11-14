import { EmissionData } from "../interfaces/interfaces";



export const sortData = (data: EmissionData[]) => {

   const sortedData = data.slice().sort((a, b): number => {

      let first = a.start.match(/[0-9]+/g)?.join('');
      let second = b.start.match(/[0-9]+/g)?.join('');

      return Number(first) - Number(second)
   });

   return sortedData
}