export interface BodyData {
  source?: string
  sourceColor?: string
  engagementCount?: number
  estimatedReach?: number
  date?: number
  numMentions?: number
  keyword?: string
  [key: string]: string | number | undefined
}

export interface GeneralData {
  startDate: number
  endDate: number
  data: BodyData[]
}

export interface AccumulatedData {
  [key: string]: {
    keyword: string
    [source: string]: number | string
  }
}

export interface DataColors {
  Facebook: string
  Twitter: string
  Instagram: string
  Youtube: string
  Tiktok: string
  [key: string]: string
}
