
export interface EmissionData {
   average: number,
   end: string,
   start: string
}

export interface ChartsData {
   value: EmissionData[]
}


export interface TimeRangeOptions {
   value: string,
   label: string
   type: string,
   amount?: number
}