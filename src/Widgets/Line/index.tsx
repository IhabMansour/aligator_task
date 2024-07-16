import { useCallback, useEffect, useState } from 'react'
import LineGraph from '../../Components/LineGraph'
import { POSTS_OVER_TIME } from '../../MockData/PostsOverTime'
import { LineSeriesType } from '@mui/x-charts'
import { BodyData } from '../../Interfaces'
import { getXAxis } from '../../Utilities'
import { Card, Container } from '@mui/material'

const LineWidget = () => {
  const [lineDataState, setLineDataState] = useState<LineSeriesType[]>([])

  const getData = useCallback((lineData: BodyData[], minDate: Date, maxDate: Date) => {
    return lineData
      .filter((item) => {
        const itemDate = new Date(item.date!)
        return itemDate >= minDate && itemDate <= maxDate
      })
      .reduce((acc: any, item) => {
        if (item.source) {
          // Ensure item.source is defined
          if (!acc[item.source]) {
            acc[item.source] = []
          }
          acc[item.source].push(item.numMentions || 0) // Use a default value for numMentions if needed
        }
        return acc
      }, {})
  }, [])

  useEffect(() => {
    const lineData = getData(POSTS_OVER_TIME.data, new Date(POSTS_OVER_TIME.startDate), new Date(POSTS_OVER_TIME.endDate))
    const formatData: LineSeriesType[] = []

    for (const [key, value] of Object.entries(lineData)) {
      formatData.push({
        data: value,
        label: key,
        showMark: false,
        curve: 'linear'
      } as LineSeriesType)
    }

    setLineDataState(formatData)
  }, [])

  return (
    <Container sx={{ padding: 5, bgcolor: 'lightcyan' }}>
      <Card>
        <LineGraph
          data={lineDataState}
          xAxisData={getXAxis(POSTS_OVER_TIME.data)}
          min={POSTS_OVER_TIME.startDate}
          max={POSTS_OVER_TIME.endDate}
        />
      </Card>
    </Container>
  )
}

export default LineWidget
