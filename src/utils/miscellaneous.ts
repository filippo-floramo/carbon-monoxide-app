import { TimeRangeOptions } from "../interfaces/interfaces"


export const coordinatesRegExp: RegExp = /[a-z]+/ig;

export const timeRangeOptions: TimeRangeOptions[] = [
   {
      value: 'whole_period',
      label: 'Whole Period',
      type: 'max'
   },
   {
      value: 'last_one_year',
      label: 'Last one year',
      type: 'year',
      amount: 1
   },
   {
      value: 'last_six_months',
      label: 'Last 6 months',
      type: 'month',
      amount: 6
   },
   {
      value: 'last_three_months',
      label: 'Last 3 months',
      type: 'month',
      amount: 3
   },
   {
      value: 'last_one_month',
      label: 'Last month',
      type: 'month',
      amount: 1
   }
]

