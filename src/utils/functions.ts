import { EmissionData } from "../interfaces/interfaces";
import { TimeRangeOptions } from "../interfaces/interfaces";


// here goes the time range

interface DateRange {
   to: number,
   from: number,
}

export const getDates = (rangeOption: TimeRangeOptions | null): DateRange | undefined => {

   if (rangeOption && rangeOption.amount) {

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
}

export const manageData = (data: EmissionData[]) => {

   const sortedData = data.slice().sort((a, b): number => {

      let first = a.start.match(/[0-9]+/g)?.join('');
      let second = b.start.match(/[0-9]+/g)?.join('');

      return Number(first) - Number(second)
   });

   const formattedData: EmissionData[] = sortedData.map((data) => {
      const unfixedAverage = data.average;
      const unformattedEnd = data.end;
      const unformattedStart = data.start;

      const average = Number(unfixedAverage.toFixed(4));
      const start = formatDate(unformattedStart);
      const end = formatDate(unformattedEnd);

      return { average, end, start }
   })

   return formattedData
}


const formatDate = (date: string): string => {
   const fullDate = new Date(date);
   const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()} `

   return dateFormatted
}
