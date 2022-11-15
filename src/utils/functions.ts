import { EmissionData } from "../interfaces/interfaces";



export const sortData = (data: EmissionData[]) => {

   const sortedData = data.slice().sort((a, b): number => {

      let first = a.start.match(/[0-9]+/g)?.join('');
      let second = b.start.match(/[0-9]+/g)?.join('');

      return Number(first) - Number(second)
   });

   return sortedData
}

// here goes the time range

export const getDates = (rangeOption: any) => {

   switch (rangeOption.type) {
      case 'year':
         const nowYear = new Date()
         return {
            to: nowYear.getTime(),
            from: nowYear.setFullYear(nowYear.getFullYear() - rangeOption.amount)
         };
      case 'month':
         const nowMonth = new Date();
         return {
            to: nowMonth.getTime(),
            from: nowMonth.setMonth(nowMonth.getMonth() - rangeOption.amount)
         }
   }
}